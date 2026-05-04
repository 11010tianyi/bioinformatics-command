---
name: SeqKit
category: Sequence toolkit
formats: [FASTA, FASTQ]
aliases: [seqkit stats, seqkit grep, seqkit seq]
tags: [FASTA, FASTQ, sequence processing]
summary_zh: 高性能 FASTA/FASTQ 命令行工具箱，适合统计、筛选、抽样、格式转换和序列操作。
summary_en: Fast FASTA/FASTQ toolkit for statistics, filtering, sampling, conversion, and sequence operations.
install: mamba install -c bioconda seqkit
official: https://bioinf.shenwei.me/seqkit/
---

SeqKit
===

高性能 FASTA/FASTQ 命令行工具箱，适合统计、筛选、抽样、格式转换和序列操作。Fast FASTA/FASTQ toolkit for statistics, filtering, sampling, conversion, and sequence operations.

## 速览 | Quick Look

- 常见输入：FASTA, FASTQ, gzip-compressed FASTA/FASTQ
- 常见输出：FASTA/FASTQ, TSV stats
- 典型场景：序列长度统计、ID 筛选、反向互补、抽样、拆分文件

## 安装 | Install

```bash
mamba install -c bioconda seqkit
```

## 常用命令 | Common Commands

统计 FASTA/FASTQ：

```bash
seqkit stats *.fq.gz
```

按 ID 列表提取：

```bash
seqkit grep -f ids.txt sequences.fa.gz > selected.fa
```

FASTQ 转 FASTA：

```bash
seqkit fq2fa reads.fq.gz > reads.fa
```

随机抽样：

```bash
seqkit sample -p 0.1 -s 42 reads.fq.gz > reads.10pct.fq
```

反向互补：

```bash
seqkit seq -r -p primers.fa > primers.revcomp.fa
```

## 关键参数 | Key Options

- `stats`：序列数量、长度、N50 等统计。
- `grep`：按 ID、name、序列模式筛选。
- `seq`：格式转换、大小写、反向互补。
- `sample`：随机抽样。
- `split` / `split2`：拆分大文件。
- `-j`：线程数。

## 常见坑 | Pitfalls

- `grep -f` 默认匹配序列 ID/name，不是序列内容；按序列匹配需看 `-s`。
- 抽样要固定 seed，便于复现。
- 大文件建议保持 gzip 流式处理，减少中间文件。

## 参考 | References

- Official documentation: https://bioinf.shenwei.me/seqkit/
- GitHub repository: https://github.com/shenwei356/seqkit
