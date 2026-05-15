---
name: MMseqs2
category: Sequence search
formats: [FASTA, TSV]
aliases: [mmseqs, clustering, search]
tags: [homology, clustering, protein, nucleotide]
summary_zh: 高性能序列搜索和聚类工具，适合大规模蛋白或核酸数据集。
summary_en: High-performance sequence search and clustering suite for large protein or nucleotide datasets.
install: mamba install -c bioconda mmseqs2
official: https://github.com/soedinglab/MMseqs2
---

MMseqs2
===

高性能序列搜索和聚类工具，适合大规模蛋白或核酸数据集。High-performance toolkit for sequence search, clustering, and taxonomy workflows.

## 速览 | Quick Look

- 常见输入：FASTA, MMseqs database
- 常见输出：TSV, clustered FASTA, internal database files
- 典型场景：蛋白聚类、同源搜索、去冗余、构建代表序列

## 安装 | Install

```bash
mamba install -c bioconda mmseqs2
```

## 常用命令 | Common Commands

快速搜索：

```bash
mmseqs easy-search query.fa target.fa result.tsv tmp --threads 8
```

序列聚类：

```bash
mmseqs easy-cluster proteins.fa cluster_result tmp \
  --min-seq-id 0.9 -c 0.8 --threads 8
```

创建数据库并搜索：

```bash
mmseqs createdb query.fa queryDB
mmseqs createdb target.fa targetDB
mmseqs search queryDB targetDB resultDB tmp --threads 8
mmseqs convertalis queryDB targetDB resultDB result.tsv
```

## 关键参数 | Key Options

- `easy-search`：一站式搜索并导出表格。
- `easy-cluster`：一站式聚类。
- `createdb`：创建内部数据库。
- `search`：执行搜索。
- `convertalis`：导出 alignment 表格。
- `--min-seq-id` / `-c`：聚类 identity 和覆盖度阈值。

## 常见坑 | Pitfalls

- MMseqs2 会生成多个内部数据库目录，清理时要保留最终结果。
- tmp 目录需要足够空间，并尽量放在高速磁盘。
- 聚类阈值要结合序列长度、功能家族和后续用途决定。

## 参考 | References

- Official repository: https://github.com/soedinglab/MMseqs2
- MMseqs2 wiki: https://github.com/soedinglab/MMseqs2/wiki

