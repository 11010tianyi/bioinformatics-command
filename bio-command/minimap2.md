---
name: minimap2
category: Alignment
formats: [FASTA, FASTQ, PAF, SAM]
aliases: [long reads, ONT, PacBio, splice]
tags: [long-read, assembly, RNA-seq, alignment]
summary_zh: 长读长、组装序列和 spliced RNA/cDNA 比对的高性能工具。
summary_en: High-performance aligner for long reads, assemblies, and spliced RNA/cDNA alignments.
install: mamba install -c bioconda minimap2
official: https://lh3.github.io/minimap2/minimap2.html
---

minimap2
===

长读长、组装序列和 spliced RNA/cDNA 比对的高性能工具。High-performance aligner for long reads, assemblies, and spliced RNA/cDNA alignments.

## 速览 | Quick Look

- 常见输入：FASTA/FASTQ, reference FASTA
- 常见输出：PAF or SAM
- 典型场景：ONT/PacBio reads 比对、assembly-to-reference、isoform mapping

## 安装 | Install

```bash
mamba install -c bioconda minimap2
```

## 常用命令 | Common Commands

ONT reads 到参考基因组：

```bash
minimap2 -ax map-ont -t 16 reference.fa reads.fq.gz | samtools sort -o ont.sorted.bam
```

PacBio HiFi reads：

```bash
minimap2 -ax map-hifi -t 16 reference.fa hifi_reads.fq.gz > hifi.sam
```

assembly 对参考：

```bash
minimap2 -x asm5 -t 16 reference.fa assembly.fa > assembly_vs_ref.paf
```

cDNA 或 direct RNA spliced alignment：

```bash
minimap2 -ax splice -uf -k14 -t 16 genome.fa cdna_reads.fq.gz > splice.sam
```

## 关键参数 | Key Options

- `-x`：预设模式，如 `map-ont`, `map-hifi`, `asm5`, `splice`。
- `-a`：输出 SAM，否则默认 PAF。
- `-t`：线程数。
- `--secondary=no`：去掉 secondary alignments，部分下游需要。
- `-uf -k14`：direct RNA/cDNA spliced 场景常见组合。

## 常见坑 | Pitfalls

- 预设非常重要，ONT、HiFi、assembly、spliced reads 不应混用。
- PAF 不含完整 CIGAR/SAM 字段；需要 BAM 下游时要加 `-a`。
- 对 transcript/cDNA 的方向性要按实验类型调整参数。

## 参考 | References

- Official manual: https://lh3.github.io/minimap2/minimap2.html
- GitHub repository: https://github.com/lh3/minimap2
