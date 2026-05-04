---
name: Bowtie2
category: Alignment
formats: [FASTQ, FASTA, SAM]
aliases: [bowtie2-build, short reads, aligner]
tags: [DNA-seq, ChIP-seq, metagenomics, alignment]
summary_zh: 快速短读长比对工具，常用于 ChIP-seq、ATAC-seq、宏基因组和小基因组比对。
summary_en: Fast short-read aligner often used for ChIP-seq, ATAC-seq, metagenomics, and small genomes.
install: mamba install -c bioconda bowtie2
official: https://bowtie-bio.sourceforge.net/bowtie2/manual.shtml
---

Bowtie2
===

快速短读长比对工具，常用于 ChIP-seq、ATAC-seq、宏基因组和小基因组比对。Fast short-read aligner often used for ChIP-seq, ATAC-seq, metagenomics, and small genomes.

## 速览 | Quick Look

- 常见输入：FASTQ, reference FASTA
- 常见输出：SAM
- 典型场景：ChIP-seq/ATAC-seq mapping、微生物基因组比对、宿主去除

## 安装 | Install

```bash
mamba install -c bioconda bowtie2
```

## 常用命令 | Common Commands

构建索引：

```bash
bowtie2-build --threads 8 genome.fa genome_index
```

双端比对：

```bash
bowtie2 -p 16 -x genome_index -1 sample_R1.fq.gz -2 sample_R2.fq.gz -S sample.sam
```

单端比对：

```bash
bowtie2 -p 16 -x genome_index -U sample.fq.gz -S sample.sam
```

管道输出排序 BAM：

```bash
bowtie2 -p 16 -x genome_index -1 R1.fq.gz -2 R2.fq.gz \
  | samtools sort -@ 8 -o sample.sorted.bam
```

## 关键参数 | Key Options

- `-x`：索引前缀。
- `-1` / `-2`：双端 reads。
- `-U`：单端或未配对 reads。
- `--very-sensitive`：更敏感，速度较慢。
- `--local`：局部比对，允许端部软剪切。
- `-p`：线程数。

## 常见坑 | Pitfalls

- 索引前缀不是 `.bt2` 文件全名，而是生成索引时的 prefix。
- 默认端到端比对；接头残留或 reads 质量差时可考虑 `--local`。
- 输出 SAM 通常很大，生产流程中建议直接管道到 `samtools sort`。

## 参考 | References

- Official manual: https://bowtie-bio.sourceforge.net/bowtie2/manual.shtml
- AutoBA Bowtie2 template: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_database/bowtie2.txt
