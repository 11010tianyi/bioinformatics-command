# Bioinformatics Commands / 生信命令大全

一个中英双语的生物信息命令速查静态站，改造自 `linux-command` 的 Markdown + EJS 静态构建思路。

## 目标

- 收录高频生信 CLI：FASTQ QC、比对、BAM/VCF/BED 处理、RNA-seq、ChIP-seq、工作流。
- 每个命令一份 Markdown，既能直接读，也能生成搜索站。
- 内容优先参考官方文档、Bioconda、AutoBA 工具模板、tldr-pages 和常见社区实践。

## 本地开发

```bash
npm install
npm run build
```

构建结果在 `.deploy/`。本地预览：

```bash
npx http-server .deploy -p 9665
```

## 内容结构

新内容放在 `bio-command/`，旧的 `command/` 目录保留为上游资料，不参与当前站点索引。

每个条目建议使用 frontmatter：

```md
---
name: samtools
category: Alignment
formats: [SAM, BAM, CRAM]
aliases: [bam, cram]
summary_zh: 处理高通量测序比对文件的基础工具。
summary_en: Core toolkit for SAM/BAM/CRAM alignment files.
install: mamba install -c bioconda samtools
official: https://www.htslib.org/doc/samtools.html
---
```

## 首批条目

已收录 `fastp`、`FastQC`、`MultiQC`、`Cutadapt`、`SeqKit`、`BWA`、`Bowtie2`、`minimap2`、`STAR`、`samtools`、`bcftools`、`bedtools`、`featureCounts`、`MACS3`、`Salmon`、`Nextflow`。

## License

代码沿用 MIT。命令示例与说明请优先保持原创表述，并在条目末尾附官方文档或可复用资料链接。
