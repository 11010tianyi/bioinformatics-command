---
name: bcftools
category: VCF/BCF
formats: [VCF, BCF]
aliases: [variant, genotype, SNP, indel]
tags: [variant calling, filtering, annotation, population genetics]
summary_zh: 读取、过滤、规范化、合并、查询和注释 VCF/BCF 变异文件。
summary_en: Toolkit for viewing, filtering, normalizing, merging, querying, and annotating VCF/BCF variant files.
install: mamba install -c bioconda bcftools
official: https://samtools.github.io/bcftools/bcftools.html
---

bcftools
===

读取、过滤、规范化、合并、查询和注释 VCF/BCF 变异文件。Toolkit for viewing, filtering, normalizing, merging, querying, and annotating VCF/BCF variant files.

## 速览 | Quick Look

- 常见输入：`.vcf`, `.vcf.gz`, `.bcf`
- 常见输出：filtered VCF/BCF, TSV query table, annotated VCF
- 典型场景：变异过滤、样本/区域子集、等位基因规范化、群体频率统计、注释转移

## 安装 | Install

```bash
mamba install -c bioconda bcftools
```

## 常用命令 | Common Commands

查看压缩 VCF：

```bash
bcftools view cohort.vcf.gz | less -S
```

按区域或样本抽取：

```bash
bcftools view -r chr1:100000-200000 -s sampleA,sampleB cohort.vcf.gz -Oz -o subset.vcf.gz
bcftools index -t subset.vcf.gz
```

过滤低质量变异：

```bash
bcftools view -i 'QUAL>=30 && INFO/DP>=10' input.vcf.gz -Oz -o filtered.vcf.gz
```

规范化多等位和左对齐：

```bash
bcftools norm -f reference.fa -m -both input.vcf.gz -Oz -o normalized.vcf.gz
```

提取表格：

```bash
bcftools query -f '%CHROM\t%POS\t%REF\t%ALT\t%QUAL\n' input.vcf.gz > variants.tsv
```

## 关键参数 | Key Options

- `view`：查看、过滤、子集化 VCF/BCF。
- `query`：按格式字符串导出字段。
- `filter`：按表达式标记或过滤记录。
- `norm`：拆分多等位、左对齐、参考校验。
- `annotate`：添加或删除 INFO/FORMAT 注释。
- `concat` / `merge`：拼接同一样本的分染色体文件，或合并不同样本集合。

## 常见坑 | Pitfalls

- `bcftools index` 要求输入通常是 bgzip 压缩的 `.vcf.gz`，普通 gzip 不够。
- `concat` 适合同一样本、不同区域；`merge` 适合不同样本、同一坐标体系。
- `norm -f` 依赖参考基因组，参考版本和染色体命名必须和 VCF 一致。

## 参考 | References

- Official manual: https://samtools.github.io/bcftools/bcftools.html
- AutoBA software templates: https://github.com/JoshuaChou2018/AutoBA/tree/main/softwares_database
- tldr bcftools page: https://github.com/tldr-pages/tldr/blob/main/pages/common/bcftools.md
