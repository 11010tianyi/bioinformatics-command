---
name: BLAST+
category: Sequence search
formats: [FASTA, TSV]
aliases: [blastn, blastp, makeblastdb, NCBI BLAST]
tags: [homology, sequence search, alignment]
summary_zh: NCBI BLAST+ 命令行工具，用于核酸或蛋白序列相似性搜索。
summary_en: NCBI BLAST+ command-line tools for nucleotide and protein sequence similarity search.
install: mamba install -c bioconda blast
official: https://www.ncbi.nlm.nih.gov/books/NBK279690/
---

BLAST+
===

NCBI BLAST+ 命令行工具，用于核酸或蛋白序列相似性搜索。Command-line suite for nucleotide and protein similarity search.

## 速览 | Quick Look

- 常见输入：query FASTA, BLAST database
- 常见输出：pairwise report, TSV, XML
- 典型场景：序列同源搜索、污染检查、目标基因初筛、数据库构建

## 安装 | Install

```bash
mamba install -c bioconda blast
```

## 常用命令 | Common Commands

构建核酸数据库：

```bash
makeblastdb -in reference.fa -dbtype nucl -out db/reference
```

运行 blastn：

```bash
blastn -query query.fa -db db/reference \
  -outfmt "6 qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore" \
  -evalue 1e-5 -num_threads 8 -out blastn.tsv
```

运行 blastp：

```bash
blastp -query proteins.fa -db uniprot_sprot \
  -outfmt 6 -max_target_seqs 10 -num_threads 8 -out blastp.tsv
```

只取最佳 hits：

```bash
blastn -query query.fa -db db/reference -outfmt 6 \
  -max_target_seqs 1 -max_hsps 1 -out best_hits.tsv
```

## 关键参数 | Key Options

- `makeblastdb`：构建本地数据库。
- `blastn` / `blastp` / `blastx`：不同 query/subject 类型的搜索。
- `-outfmt 6`：输出 TSV。
- `-evalue`：E-value 阈值。
- `-max_target_seqs`：限制每条 query 的目标数量。
- `-num_threads`：线程数。

## 常见坑 | Pitfalls

- `-max_target_seqs` 的解释与版本和搜索策略有关，严格筛选建议结合排序和后处理。
- 数据库类型 `nucl`/`prot` 必须和命令匹配。
- 大数据库搜索前要确认磁盘、索引和线程资源。

## 参考 | References

- NCBI BLAST+ user manual: https://www.ncbi.nlm.nih.gov/books/NBK279690/
- BLAST downloads: https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastDocs&DOC_TYPE=Download

