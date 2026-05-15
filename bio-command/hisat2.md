---
name: HISAT2
category: RNA-seq alignment
formats: [FASTQ, FASTA, SAM]
aliases: [spliced alignment, hisat]
tags: [RNA-seq, alignment, splice-aware]
summary_zh: 面向 RNA-seq 的快速剪接感知比对工具，也可用于部分 DNA reads 比对场景。
summary_en: Fast splice-aware aligner for RNA-seq reads, also usable for some DNA read alignment scenarios.
install: mamba install -c bioconda hisat2
official: https://daehwankimlab.github.io/hisat2/
---

HISAT2
===

面向 RNA-seq 的快速剪接感知比对工具，也可用于部分 DNA reads 比对场景。Fast splice-aware aligner for RNA-seq reads.

## 速览 | Quick Look

- 常见输入：reference FASTA index, FASTQ
- 常见输出：SAM
- 典型场景：bulk RNA-seq reads 比对、剪接位点感知比对、基因表达定量前处理

## 安装 | Install

```bash
mamba install -c bioconda hisat2
```

## 常用命令 | Common Commands

构建索引：

```bash
hisat2-build reference.fa genome_hisat2
```

双端 RNA-seq 比对：

```bash
hisat2 -x genome_hisat2 \
  -1 sample_R1.fq.gz -2 sample_R2.fq.gz \
  -p 8 -S sample.sam
```

直接输出排序 BAM：

```bash
hisat2 -x genome_hisat2 -1 R1.fq.gz -2 R2.fq.gz -p 8 \
  | samtools sort -@ 8 -o sample.sorted.bam
samtools index sample.sorted.bam
```

## 关键参数 | Key Options

- `hisat2-build`：构建参考索引。
- `-x`：索引前缀。
- `-1` / `-2`：双端 reads。
- `-U`：单端 reads。
- `--rna-strandness`：链特异 RNA-seq 文库方向。
- `-p`：线程数。

## 常见坑 | Pitfalls

- 链特异参数错误会影响后续 feature counting。
- HISAT2 输出 SAM，通常要接 `samtools sort` 转为排序 BAM。
- 参考 FASTA、GTF 注释和染色体命名需要一致。

## 参考 | References

- Official documentation: https://daehwankimlab.github.io/hisat2/
- HISAT2 manual: https://daehwankimlab.github.io/hisat2/manual/

