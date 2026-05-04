---
name: featureCounts
category: RNA-seq
formats: [BAM, GTF, SAF, TSV]
aliases: [Subread, read counting, gene counts]
tags: [RNA-seq, quantification, counts]
summary_zh: 基于注释文件把 RNA-seq 比对 reads 计数到 gene/exon/feature。
summary_en: Assigns aligned RNA-seq reads to genes, exons, or other genomic features.
install: mamba install -c bioconda subread
official: https://subread.sourceforge.net/featureCounts.html
---

featureCounts
===

基于注释文件把 RNA-seq 比对 reads 计数到 gene/exon/feature。Assigns aligned RNA-seq reads to genes, exons, or other genomic features.

## 速览 | Quick Look

- 常见输入：sorted BAM, GTF/GFF/SAF annotation
- 常见输出：counts matrix
- 典型场景：bulk RNA-seq gene-level count matrix

## 安装 | Install

```bash
mamba install -c bioconda subread
```

## 常用命令 | Common Commands

单样本 gene count：

```bash
featureCounts -T 8 -a genes.gtf -o counts.txt sample.sorted.bam
```

多样本批量计数：

```bash
featureCounts -T 12 -p -B -C -a genes.gtf -o gene_counts.txt *.sorted.bam
```

指定 strandedness：

```bash
featureCounts -T 8 -s 2 -a genes.gtf -o stranded_counts.txt *.bam
```

## 关键参数 | Key Options

- `-a`：注释文件。
- `-o`：输出 counts 文件。
- `-T`：线程数。
- `-p`：paired-end fragments 计数。
- `-s`：链特异性，`0` unstranded，`1` stranded，`2` reversely stranded。
- `-t` / `-g`：feature 类型和分组字段，默认常用于 exon 到 gene_id。

## 常见坑 | Pitfalls

- `-s` 错误会显著降低 assigned reads，需按建库类型确认。
- paired-end 数据是否加 `-p` 要和分析目标一致。
- GTF 的染色体命名必须和 BAM 一致。

## 参考 | References

- Official documentation: https://subread.sourceforge.net/featureCounts.html
- AutoBA featureCounts config: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_config/featureCounts_2.0.3.config
