---
name: SPAdes
category: Assembly
formats: [FASTQ, FASTA]
aliases: [genome assembly, metaspades, rnaspades]
tags: [assembly, metagenomics, bacterial genome]
summary_zh: 常用 de novo 组装器，覆盖细菌基因组、单细胞和宏基因组等场景。
summary_en: Popular de novo assembler for bacterial genomes, single-cell data, metagenomes, and related datasets.
install: mamba install -c bioconda spades
official: https://ablab.github.io/spades/
---

SPAdes
===

常用 de novo 组装器，覆盖细菌基因组、单细胞和宏基因组等场景。Popular de novo assembler for short-read and hybrid assembly workflows.

## 速览 | Quick Look

- 常见输入：paired-end FASTQ, single-end FASTQ, long reads optional
- 常见输出：contigs.fasta, scaffolds.fasta, assembly graph
- 典型场景：细菌基因组组装、宏基因组组装、混合组装

## 安装 | Install

```bash
mamba install -c bioconda spades
```

## 常用命令 | Common Commands

双端短读长组装：

```bash
spades.py -1 sample_R1.fq.gz -2 sample_R2.fq.gz \
  -o spades_out -t 16 -m 64
```

宏基因组模式：

```bash
metaspades.py -1 meta_R1.fq.gz -2 meta_R2.fq.gz \
  -o metaspades_out -t 16 -m 128
```

混合组装：

```bash
spades.py -1 R1.fq.gz -2 R2.fq.gz --nanopore long_reads.fq.gz \
  -o hybrid_out -t 16 -m 128
```

## 关键参数 | Key Options

- `spades.py`：标准组装入口。
- `metaspades.py`：宏基因组模式。
- `-1` / `-2`：双端 reads。
- `--nanopore` / `--pacbio`：加入长读长。
- `-t`：线程数。
- `-m`：内存上限，单位 GB。

## 常见坑 | Pitfalls

- SPAdes 对内存和磁盘比较敏感，失败时先看 `spades.log`。
- 真核大基因组不适合直接套用细菌组装参数。
- 组装前 reads 质量、污染和覆盖度会显著影响结果。

## 参考 | References

- Official site: https://ablab.github.io/spades/
- SPAdes manual: https://ablab.github.io/spades/running.html
