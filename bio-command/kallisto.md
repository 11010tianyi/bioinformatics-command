---
name: kallisto
category: RNA-seq
formats: [FASTQ, FASTA, TSV]
aliases: [pseudoalignment, transcript quantification]
tags: [RNA-seq, quantification, transcriptome]
summary_zh: 基于 pseudoalignment 的快速 RNA-seq 转录本定量工具。
summary_en: Fast transcript-level RNA-seq quantification tool based on pseudoalignment.
install: mamba install -c bioconda kallisto
official: https://pachterlab.github.io/kallisto/
---

kallisto
===

基于 pseudoalignment 的快速 RNA-seq 转录本定量工具。Fast transcript-level quantification based on pseudoalignment.

## 速览 | Quick Look

- 常见输入：transcriptome FASTA, FASTQ
- 常见输出：abundance.tsv
- 典型场景：bulk RNA-seq transcript quantification, bootstrap uncertainty estimation

## 安装 | Install

```bash
mamba install -c bioconda kallisto
```

## 常用命令 | Common Commands

构建索引：

```bash
kallisto index -i transcripts.idx transcripts.fa
```

双端定量：

```bash
kallisto quant -i transcripts.idx -o sample_kallisto \
  -b 100 -t 8 sample_R1.fq.gz sample_R2.fq.gz
```

单端定量：

```bash
kallisto quant -i transcripts.idx -o sample_kallisto \
  --single -l 200 -s 30 -t 8 sample.fq.gz
```

## 关键参数 | Key Options

- `index`：构建转录本索引。
- `quant`：执行定量。
- `-b`：bootstrap 次数。
- `-t`：线程数。
- `--single`：单端 reads 模式。
- `-l` / `-s`：单端片段长度均值和标准差。

## 常见坑 | Pitfalls

- 单端模式必须提供 fragment length 参数。
- index 的 transcript FASTA 要和注释版本一致。
- gene-level 汇总常用 `tximport` 或类似工具完成。

## 参考 | References

- Official documentation: https://pachterlab.github.io/kallisto/
