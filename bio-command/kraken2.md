---
name: Kraken2
category: Metagenomics
formats: [FASTQ, FASTA, TSV]
aliases: [taxonomic classification, metagenomics, kraken]
tags: [metagenomics, taxonomy, classification]
summary_zh: 基于 k-mer 的宏基因组 reads 分类工具，常用于微生物群落物种组成分析。
summary_en: k-mer based metagenomic read classifier commonly used for microbial taxonomic profiling.
install: mamba install -c bioconda kraken2
official: https://github.com/DerrickWood/kraken2/wiki
---

Kraken2
===

基于 k-mer 的宏基因组 reads 分类工具，常用于微生物群落物种组成分析。K-mer based taxonomic classifier for metagenomic reads.

## 速览 | Quick Look

- 常见输入：FASTQ, FASTA, Kraken2 database
- 常见输出：classification output, report TSV
- 典型场景：shotgun metagenomics 物种分类、污染初筛、Bracken 丰度估计前处理

## 安装 | Install

```bash
mamba install -c bioconda kraken2
```

## 常用命令 | Common Commands

双端分类：

```bash
kraken2 --db kraken_db --paired R1.fq.gz R2.fq.gz \
  --threads 16 --report sample.kraken2.report \
  --output sample.kraken2.out
```

压缩输出：

```bash
kraken2 --db kraken_db --paired R1.fq.gz R2.fq.gz \
  --threads 16 --gzip-compressed \
  --report sample.report > sample.kraken2.out
```

构建标准数据库：

```bash
kraken2-build --standard --db kraken_db --threads 16
```

## 关键参数 | Key Options

- `--db`：数据库目录。
- `--paired`：双端 reads。
- `--report`：分类报告。
- `--output`：逐 read 分类结果。
- `--confidence`：分类置信阈值。
- `--threads`：线程数。

## 常见坑 | Pitfalls

- 数据库版本、构建日期和包含的 taxonomy 会显著影响结果。
- 标准库体积大，构建和运行都需要较多磁盘和内存。
- Kraken2 report 通常还会接 Bracken 或 krona 等工具继续处理。

## 参考 | References

- Kraken2 wiki: https://github.com/DerrickWood/kraken2/wiki

