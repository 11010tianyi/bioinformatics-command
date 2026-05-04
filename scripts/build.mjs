import FS from 'fs-extra';
import path from 'path';
import stylus from 'stylus';
import * as ejs from 'ejs';
import UglifyJS from 'uglify-js';
import { create } from 'markdown-to-html-cli';
import _ from 'colors-cli/toxic';

const deployDir = path.resolve(process.cwd(), '.deploy');
const commandDir = path.resolve(process.cwd(), 'bio-command');
const templateImgDir = path.resolve(process.cwd(), 'template', 'img');
const rootIndexJSPath = path.resolve(process.cwd(), 'template', 'js', 'index.js');
const dataJsonPath = path.resolve(process.cwd(), 'dist', 'data.json');
const dataJsonMinPath = path.resolve(process.cwd(), 'dist', 'data.min.json');
const cssPath = path.resolve(deployDir, 'css', 'index.css');
const contributorsPath = path.resolve(process.cwd(), 'CONTRIBUTORS.svg');
const site = {
  title: 'Bioinformatics Commands',
  titleZh: '生信命令大全',
  description: '中英双语生物信息命令速查，覆盖 FASTQ、BAM、VCF、BED、RNA-seq、ChIP-seq 和工作流工具。',
  repository: 'https://github.com/11010tianyi/bioinformatics-command',
};

;(async () => {
  try {
    await FS.ensureDir(deployDir);
    await FS.emptyDir(deployDir);
    await FS.ensureDir(path.resolve(deployDir, 'js'));
    await FS.ensureDir(path.resolve(deployDir, 'css'));
    await FS.ensureDir(path.resolve(deployDir, 'c'));
    await FS.copySync(templateImgDir, path.resolve(deployDir, 'img'));
    
    await FS.copyFile(path.resolve(process.cwd(), 'template', 'js', 'copy-to-clipboard.js'), path.resolve(deployDir, 'js', 'copy-to-clipboard.js'));
    await FS.copyFile(path.resolve(process.cwd(), 'node_modules/@wcj/dark-mode/main.js'), path.resolve(deployDir, 'js', 'dark-mode.min.js'));
    await FS.copyFile(path.resolve(process.cwd(), 'node_modules/@uiw/github-corners/lib/index.js'), path.resolve(deployDir, 'js', 'github-corners.js'));

    const jsData = await FS.readFileSync(rootIndexJSPath);
    await FS.outputFile(path.resolve(deployDir, 'js', 'index.js'), UglifyJS.minify(jsData.toString()).code)
    const files = await readMarkdownPaths(commandDir);
    const jsonData = await createDataJSON(files);
    await FS.outputFile(dataJsonPath, JSON.stringify(jsonData.json, null, 2));
    await FS.outputFile(dataJsonMinPath, JSON.stringify(jsonData.json));
    await FS.outputFile(path.resolve(deployDir, 'js', 'dt.js'), `var bio_commands=${JSON.stringify(jsonData.data)}`);

    const cssStr = await createStylToCss(
      path.resolve(process.cwd(), 'template', 'styl', 'index.styl'),
      path.resolve(deployDir, 'css', 'index.css'),
    );

    await FS.outputFileSync(cssPath, cssStr)
    console.log(`  ${'→'.green} ${jsonData.data.length}`)

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'index.ejs'),
      path.resolve(deployDir, 'index.html'),
      {
        p: '/index.html',
        n: site.titleZh,
        d: site.description,
        command_length: jsonData.data.length,
        site,
      }
    );

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'list.ejs'),
      path.resolve(deployDir, 'list.html'),
      {
        p: '/list.html',
        n: '搜索',
        d: site.description,
        command_length: jsonData.data.length,
        site,
      }
    );

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'hot.ejs'),
      path.resolve(deployDir, 'hot.html'),
      {
        p: '/hot.html',
        n: '命令列表',
        d: site.description,
        arr: jsonData.data,
        command_length: jsonData.data.length,
        site,
      }
    );

    let svgStr = '';
    if (FS.existsSync(contributorsPath)) {
      svgStr = (await FS.readFile(contributorsPath)).toString();
    }

    await createTmpToHTML(
      path.resolve(process.cwd(), 'template', 'contributors.ejs'),
      path.resolve(deployDir, 'contributors.html'),
      {
        p: '/contributors.html',
        n: '贡献者',
        d: site.description,
        arr: jsonData.data,
        command_length: jsonData.data.length,
        contributors: svgStr,
        site,
      }
    );
    
    await Promise.all(jsonData.data.map(async (item, idx) => {
      item.command_length = jsonData.data.length;
      item.site = site;
      await createTmpToHTML(
        path.resolve(process.cwd(), 'template', 'details.ejs'),
        path.resolve(deployDir, 'c', `${item.slug}.html`),
        item,
        commandDir,
      );
    }));

  } catch (err) {
    console.log(`\n ERROR :> ${err}\n`)
    if (err && err.message) {
      console.log(`\n ERROR :> ${err.message.red_bt}\n`)
    }
    process.exit(1);
  }
})();

/**
 * 返回 MD 所有路径的 Array
 * @param {String} filepath 
 */
 function readMarkdownPaths(filepath) {
  return new Promise((resolve, reject) => {
    try {
      let pathAll = [];
      const files = FS.readdirSync(filepath).sort((a, b) => a.localeCompare(b));
      for (let i = 0; i < files.length; i++) {
        if (/\.md$/.test(files[i])) {
          pathAll.push(path.join(filepath, files[i]));
        }
      }
      resolve(pathAll);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Ensures that the directory exists.
 * @param {String} pathArr
 */
 function createDataJSON(pathArr) {
  return new Promise((resolve, reject) => {
    try {
      const commandData = {};
      const indexes = [];
      pathArr.forEach((mdPath, i) => {
        const json = {}
        const con = FS.readFileSync(mdPath);
        const raw = con.toString();
        const { meta, body } = parseFrontmatter(raw);
        const str = body;
        let title = meta.name || '';
        if (!title) {
          const setextTitle = str.match(/^(.+?)\r?\n={3,}\r?\n/);
          const atxTitle = str.match(/^#\s+(.+)$/m);
          title = setextTitle ? setextTitle[1] : (atxTitle ? atxTitle[1] : '');
        }
        title = title.replace(/\r/g, '').trim();
        if (!title) {
          throw `格式错误: ${mdPath}`;
        }
        const slug = path.basename(mdPath, '.md').replace(/\\/g, '/');
        // 命令名称
        json["n"] = title;
        json["slug"] = slug;
        json["f"] = path.basename(mdPath);
        // 命令路径
        json["p"] = `/${slug}`;
        // 命令描述
        let des = meta.summary_zh || meta.summary || '';
        if (meta.summary_en) {
          des = des ? `${des} / ${meta.summary_en}` : meta.summary_en;
        }
        if (!des) {
          let match = str.match(/\n==={1,}([\s\S]*?)##/i);
          if (!match) {
            throw `格式错误: ${mdPath}`;
          }
          des = match[1] ? match[1].replace(/\n/g, '') : match[1];
        }
        des = des.replace(/\r/g, '')
        json["d"] = des;
        json["category"] = meta.category || '';
        json["aliases"] = normalizeList(meta.aliases);
        json["formats"] = normalizeList(meta.formats);
        json["tags"] = normalizeList(meta.tags);
        json["install"] = meta.install || '';
        json["official"] = meta.official || '';
        json["k"] = [
          json.n,
          json.d,
          json.category,
          ...json.aliases,
          ...json.formats,
          ...json.tags,
        ].filter(Boolean).join(' ');
        indexes.push(json);
        commandData[title] = json;
      })
      indexes.sort((a, b) => {
        const category = a.category.localeCompare(b.category);
        return category || a.n.localeCompare(b.n);
      });
      resolve({
        json: commandData,
        data: indexes
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * @param {String} fromPath ejs path
 * @param {String} toPath html path
 */
 function createTmpToHTML(fromPath, toPath, desJson, mdPath) {
  return new Promise(async (resolve, reject) => {
    try {
      const current_path = toPath.replace(new RegExp(`${deployDir}`), '');
      const tmpStr = await FS.readFile(fromPath);
      let mdPathName = '';
      let mdhtml = '';
      let relative_path = '';
      if (mdPath) {
        // CSS/JS 引用相对地址
        relative_path = '../';
        mdPathName = `/bio-command/${desJson.f}`;
        const READMESTR = await FS.readFile(path.resolve(mdPath, desJson.f));
        mdhtml = await markdownToHTML(stripFrontmatter(READMESTR.toString()));
      }
      // 生成 HTML
      let html = ejs.render(tmpStr.toString(), {
        filename: fromPath,
        relative_path, // 当前文件相对于根目录的相对路径
        md_path: mdPathName || '',  // markdown 路径
        mdhtml: mdhtml || '',
        current_path,   // 当前 html 路径
        describe: desJson ? desJson : {},   // 当前 md 的描述
      }, {
        filename: fromPath
      });

      await FS.outputFile(toPath, html);
      console.log(`  ${'♻️  →'.green} ${path.relative(process.cwd(), toPath)}`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

function parseFrontmatter(str) {
  const match = str.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { meta: {}, body: str };

  const meta = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) return;
    meta[pair[1]] = parseMetaValue(pair[2]);
  });

  return {
    meta,
    body: str.slice(match[0].length),
  };
}

function stripFrontmatter(str) {
  return parseFrontmatter(str).body;
}

function parseMetaValue(value) {
  const trimmed = value.trim();
  if (/^\[.*\]$/.test(trimmed)) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map((item) => item.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return trimmed.replace(/^["']|["']$/g, '');
}

function normalizeList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function markdownToHTML(str) {
  return create({
    rewrite: (node) => {
      if (node.type === 'element' && node.properties?.href && /.md/.test(node.properties.href) && !/^(https?:\/\/)/.test(node.properties.href)) {
        let href = node.properties.href;
        node.properties.href = href.replace(/([^\.\/\\]+)\.(md|markdown)/gi, '$1.html');
      }
    },
    markdown: str, document: undefined, 'dark-mode': false
  });
}

/**
 * [createStylToCss 生成CSS]
 * @param {[type]} stylPath stylus path
 * @param {[type]} cssPath css path
 */
 function createStylToCss(stylPath) {
  return new Promise((resolve, reject) => {
    try {
      const stylStr = FS.readFileSync(stylPath, 'utf8');
      stylus(stylStr.toString())
        .set('filename', stylPath)
        .set('compress', true)
        .render((err, css) => {
          if (err) throw err;
          resolve(`${css}`);
        });
    } catch (err) {
      reject(err);
    }
  });
}
