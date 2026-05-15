---
name: PLINK 2
category: Population genetics
formats: [VCF, PGEN, TSV]
aliases: [plink2, GWAS, genotype QC]
tags: [GWAS, genotype, population genetics, QC]
summary_zh: 大规模基因型数据 QC、转换和关联分析的常用命令行工具。
summary_en: Common command-line toolkit for large-scale genotype QC, conversion, and association analysis.
install: mamba install -c bioconda plink2
official: https://www.cog-genomics.org/plink/2.0/
---

PLINK 2
===

大规模基因型数据 QC、转换和关联分析的常用命令行工具。Command-line toolkit for genotype data management and association testing.

## 速览 | Quick Look

- 常见输入：VCF, PGEN/PVAR/PSAM, PLINK BED/BIM/FAM
- 常见输出：PGEN, filtered genotype set, TSV reports
- 典型场景：样本/位点 QC、格式转换、PCA、GWAS 预处理

## 安装 | Install

```bash
mamba install -c bioconda plink2
```

## 常用命令 | Common Commands

VCF 转 PGEN：

```bash
plink2 --vcf cohort.vcf.gz --make-pgen --out cohort
```

按缺失率过滤：

```bash
plink2 --pfile cohort --geno 0.05 --mind 0.05 --make-pgen --out cohort.qc1
```

按 MAF 和 HWE 过滤：

```bash
plink2 --pfile cohort.qc1 --maf 0.01 --hwe 1e-6 \
  --make-pgen --out cohort.qc2
```

计算 PCA：

```bash
plink2 --pfile cohort.qc2 --pca 20 approx --out cohort.pca
```

导出 VCF：

```bash
plink2 --pfile cohort.qc2 --export vcf bgz --out cohort.qc2
```

## 关键参数 | Key Options

- `--pfile`：读取 PGEN/PVAR/PSAM 数据集。
- `--vcf`：读取 VCF。
- `--make-pgen`：写出 PGEN 数据集。
- `--geno` / `--mind`：按位点/样本缺失率过滤。
- `--maf` / `--hwe`：按等位频率和 HWE 过滤。
- `--pca`：主成分分析。

## 常见坑 | Pitfalls

- PGEN、PVAR、PSAM 三个文件需要配套。
- 样本 ID 和 family ID 在不同输入格式中规则不同，合并前要检查。
- GWAS 分析还需要群体结构、亲缘关系和批次效应控制。

## 参考 | References

- PLINK 2 documentation: https://www.cog-genomics.org/plink/2.0/
- PLINK 2 formats: https://www.cog-genomics.org/plink/2.0/formats

