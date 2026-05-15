---
name: seqtk
category: Sequence toolkit
formats: [FASTA, FASTQ]
aliases: [subseq, sample, fq2fa]
tags: [sequence, FASTQ, FASTA, subsampling]
summary_zh: 轻量 FASTA/FASTQ 命令行工具，适合抽样、截取、格式转换和基础处理。
summary_en: Lightweight FASTA/FASTQ toolkit for subsampling, extraction, format conversion, and basic sequence operations.
install: mamba install -c bioconda seqtk
official: https://github.com/lh3/seqtk
---

seqtk
===

轻量 FASTA/FASTQ 命令行工具，适合抽样、截取、格式转换和基础处理。Lightweight toolkit for common FASTA/FASTQ operations.

## 速览 | Quick Look

- 常见输入：FASTA, FASTQ
- 常见输出：FASTA, FASTQ
- 典型场景：随机抽 reads、按列表提取序列、FASTQ 转 FASTA、反向互补

## 安装 | Install

```bash
mamba install -c bioconda seqtk
```

## 常用命令 | Common Commands

FASTQ 转 FASTA：

```bash
seqtk seq -a reads.fq.gz > reads.fa
```

随机抽样 100000 条 reads：

```bash
seqtk sample -s 42 reads.fq.gz 100000 > reads.subsample.fq
```

按 ID 列表提取序列：

```bash
seqtk subseq reference.fa ids.txt > subset.fa
```

反向互补：

```bash
seqtk seq -r input.fa > reverse_complement.fa
```

## 关键参数 | Key Options

- `seq`：格式转换、过滤、反向互补。
- `sample`：随机抽样。
- `subseq`：按名称或区域列表提取。
- `-a`：输出 FASTA。
- `-q`：按质量过滤 FASTQ。
- `-s`：随机种子。

## 常见坑 | Pitfalls

- `sample` 对压缩输入可用，但输出通常需要自行压缩。
- 抽样双端 reads 时要用同一个随机种子分别处理 R1/R2。
- `subseq` 的 ID 需要和 FASTA header 中的主 ID 对齐。

## 参考 | References

- Official repository: https://github.com/lh3/seqtk

