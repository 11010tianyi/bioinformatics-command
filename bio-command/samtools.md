---
name: samtools
category: Alignment
formats: [SAM, BAM, CRAM]
aliases: [bam, cram, alignment, htslib]
tags: [alignment, indexing, sorting, coverage]
summary_zh: 处理 SAM/BAM/CRAM 比对文件的核心工具箱。
summary_en: Core toolkit for manipulating SAM/BAM/CRAM alignment files.
install: mamba install -c bioconda samtools
official: https://www.htslib.org/doc/samtools.html
---

samtools
===

处理 SAM/BAM/CRAM 比对文件的核心工具箱。Core toolkit for manipulating SAM/BAM/CRAM alignment files.

## 速览 | Quick Look

- 常见输入：SAM, BAM, CRAM
- 常见输出：sorted BAM/CRAM, index, stats
- 典型场景：格式转换、排序、索引、按区域抽取、比对统计、深度统计

## 安装 | Install

```bash
mamba install -c bioconda samtools
```

## 常用命令 | Common Commands

SAM 转排序 BAM：

```bash
samtools sort -@ 8 -o sample.sorted.bam sample.sam
```

建立索引：

```bash
samtools index sample.sorted.bam
```

按区域查看：

```bash
samtools view -h sample.sorted.bam chr1:100000-200000
```

基础统计：

```bash
samtools flagstat sample.sorted.bam > sample.flagstat.txt
samtools idxstats sample.sorted.bam > sample.idxstats.txt
```

计算深度：

```bash
samtools depth -a sample.sorted.bam > sample.depth.tsv
```

## 关键参数 | Key Options

- `view`：查看、过滤、格式转换。
- `sort`：排序 BAM/CRAM。
- `index`：建立随机访问索引。
- `flagstat` / `stats` / `idxstats`：比对统计。
- `depth`：按位点深度。
- `-@`：线程数。

## 常见坑 | Pitfalls

- 建索引前通常需要坐标排序。
- CRAM 读取常需要能访问同版本参考基因组。
- region 查询依赖索引，未 index 的 BAM 不能高效随机访问。

## 参考 | References

- Official manual: https://www.htslib.org/doc/samtools.html
- AutoBA samtools template: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_database/samtools.txt
- tldr samtools page: https://github.com/tldr-pages/tldr/blob/main/pages/common/samtools.md
