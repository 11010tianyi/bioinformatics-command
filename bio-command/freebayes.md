---
name: FreeBayes
category: Variant calling
formats: [BAM, CRAM, VCF]
aliases: [variant caller, haplotype-based caller]
tags: [variant calling, SNP, indel, population]
summary_zh: 基于 haplotype 的变异检测工具，可从 BAM/CRAM 中调用 SNP、indel 和复杂变异。
summary_en: Haplotype-based variant caller for SNPs, indels, and complex variants from BAM/CRAM alignments.
install: mamba install -c bioconda freebayes
official: https://github.com/freebayes/freebayes
---

FreeBayes
===

基于 haplotype 的变异检测工具，可从 BAM/CRAM 中调用 SNP、indel 和复杂变异。Haplotype-based variant caller for alignment data.

## 速览 | Quick Look

- 常见输入：reference FASTA, BAM/CRAM
- 常见输出：VCF
- 典型场景：小样本 variant calling、非模式物种变异检测、群体变异初筛

## 安装 | Install

```bash
mamba install -c bioconda freebayes
```

## 常用命令 | Common Commands

单样本 calling：

```bash
freebayes -f reference.fa sample.sorted.bam > sample.freebayes.vcf
```

多样本 calling：

```bash
freebayes -f reference.fa -L bam.list > cohort.freebayes.vcf
```

限制区域：

```bash
freebayes -f reference.fa -t targets.bed -L bam.list > cohort.targets.vcf
```

基础过滤：

```bash
bcftools view -i 'QUAL>=20 && INFO/DP>=10' cohort.freebayes.vcf \
  -Oz -o cohort.filtered.vcf.gz
```

## 关键参数 | Key Options

- `-f`：参考 FASTA。
- `-L`：BAM 列表。
- `-t`：目标区域 BED。
- `--ploidy`：倍性。
- `--min-alternate-count`：候选 ALT 最少支持数。
- `--min-alternate-fraction`：候选 ALT 最低比例。

## 常见坑 | Pitfalls

- 输入 BAM 应排序并建立索引。
- 非二倍体或 pooled 样本需要明确设置倍性和 calling 策略。
- 大基因组全量 calling 常按区域并行后再合并。

## 参考 | References

- Official repository: https://github.com/freebayes/freebayes

