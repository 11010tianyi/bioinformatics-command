---
name: BWA
category: Alignment
formats: [FASTQ, FASTA, SAM, BAM]
aliases: [bwa mem, bwa index, short reads]
tags: [DNA-seq, WGS, WES, alignment]
summary_zh: 面向 DNA 短读长的经典参考基因组比对工具，WGS/WES 流程中常用 BWA-MEM。
summary_en: Classic DNA read aligner; BWA-MEM is widely used in WGS/WES pipelines.
install: mamba install -c bioconda bwa
official: https://bio-bwa.sourceforge.net/bwa.shtml
---

BWA
===

面向 DNA 短读长的经典参考基因组比对工具，WGS/WES 流程中常用 BWA-MEM。Classic DNA read aligner; BWA-MEM is widely used in WGS/WES pipelines.

## 速览 | Quick Look

- 常见输入：FASTQ, reference FASTA
- 常见输出：SAM/BAM
- 典型场景：全基因组、外显子组、panel 测序 reads 比对

## 安装 | Install

```bash
mamba install -c bioconda bwa
```

## 常用命令 | Common Commands

构建参考索引：

```bash
bwa index reference.fa
```

双端 BWA-MEM 比对：

```bash
bwa mem -t 16 reference.fa sample_R1.fq.gz sample_R2.fq.gz > sample.sam
```

带 read group 并直接排序：

```bash
bwa mem -t 16 -R '@RG\tID:sample\tSM:sample\tPL:ILLUMINA' reference.fa R1.fq.gz R2.fq.gz \
  | samtools sort -@ 8 -o sample.sorted.bam
```

建立 BAM 索引：

```bash
samtools index sample.sorted.bam
```

## 关键参数 | Key Options

- `mem`：最常用子命令，适合 70bp 到较长 reads。
- `-t`：线程数。
- `-R`：read group，GATK 等下游流程通常需要。
- `-M`：把 shorter split hits 标记为 secondary，某些旧版 Picard 流程需要。

## 常见坑 | Pitfalls

- 参考 FASTA、BWA index、FAI、dict 应来自同一版本参考。
- 下游按样本合并时，`SM` read group 字段必须准确。
- BWA-MEM2 是更快的重实现，但命令和性能细节要单独验证。

## 参考 | References

- Official manual: https://bio-bwa.sourceforge.net/bwa.shtml
- AutoBA BWA template: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_database/bwa.txt
