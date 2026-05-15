---
name: DIAMOND
category: Sequence search
formats: [FASTA, TSV, SAM]
aliases: [blastx, blastp, protein search]
tags: [homology, protein, metagenomics, annotation]
summary_zh: 高速蛋白序列比对工具，常作为 BLASTP/BLASTX 的快速替代。
summary_en: Fast protein aligner commonly used as a high-speed alternative to BLASTP/BLASTX.
install: mamba install -c bioconda diamond
official: https://github.com/bbuchfink/diamond
---

DIAMOND
===

高速蛋白序列比对工具，常作为 BLASTP/BLASTX 的快速替代。Fast protein sequence aligner for large-scale homology search.

## 速览 | Quick Look

- 常见输入：protein FASTA, nucleotide FASTA/FASTQ, DIAMOND database
- 常见输出：TSV, SAM, DAA
- 典型场景：宏基因组功能注释、蛋白同源搜索、转录本翻译搜索

## 安装 | Install

```bash
mamba install -c bioconda diamond
```

## 常用命令 | Common Commands

构建数据库：

```bash
diamond makedb --in proteins.fa -d proteins.dmnd
```

蛋白对蛋白搜索：

```bash
diamond blastp -d proteins.dmnd -q query_proteins.fa \
  -o matches.tsv -f 6 qseqid sseqid pident length evalue bitscore \
  --threads 8
```

核酸翻译搜索：

```bash
diamond blastx -d proteins.dmnd -q contigs.fa \
  -o blastx.tsv -f 6 --threads 8 --evalue 1e-5
```

更敏感模式：

```bash
diamond blastp -d proteins.dmnd -q query.fa -o sensitive.tsv \
  --sensitive --threads 8
```

## 关键参数 | Key Options

- `makedb`：构建 DIAMOND 数据库。
- `blastp`：蛋白 query 搜蛋白库。
- `blastx`：核酸 query 翻译后搜蛋白库。
- `-f 6`：BLAST tabular 输出。
- `--sensitive` / `--very-sensitive`：提高敏感性。
- `--threads`：线程数。

## 常见坑 | Pitfalls

- 速度、敏感性和内存占用之间需要按项目调整。
- 蛋白库版本会强烈影响注释结果，务必记录来源。
- 大规模 blastx 结果可能很大，建议提前限制字段和阈值。

## 参考 | References

- Official repository: https://github.com/bbuchfink/diamond

