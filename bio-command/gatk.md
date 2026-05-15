---
name: GATK
category: Variant calling
formats: [BAM, CRAM, VCF, GVCF]
aliases: [Genome Analysis Toolkit, HaplotypeCaller, joint genotyping]
tags: [variant calling, germline, somatic, genotyping]
summary_zh: Broad Institute 的变异分析工具箱，常用于 germline calling、GVCF 联合分型和变异过滤。
summary_en: Broad Institute toolkit for variant analysis, commonly used for germline calling, GVCF joint genotyping, and filtering.
install: mamba install -c bioconda gatk4
official: https://gatk.broadinstitute.org/hc/en-us
---

GATK
===

Broad Institute 的变异分析工具箱，常用于 germline calling、GVCF 联合分型和变异过滤。Genome Analysis Toolkit for variant discovery workflows.

## 速览 | Quick Look

- 常见输入：reference FASTA, BAM/CRAM, known sites VCF
- 常见输出：GVCF, VCF
- 典型场景：HaplotypeCaller、joint genotyping、BQSR、variant filtering

## 安装 | Install

```bash
mamba install -c bioconda gatk4
```

## 常用命令 | Common Commands

单样本 GVCF calling：

```bash
gatk HaplotypeCaller \
  -R reference.fa \
  -I sample.sorted.bam \
  -O sample.g.vcf.gz \
  -ERC GVCF
```

导入多个 GVCF：

```bash
gatk GenomicsDBImport \
  --sample-name-map samples.map \
  --genomicsdb-workspace-path cohort_db \
  -L targets.interval_list
```

联合分型：

```bash
gatk GenotypeGVCFs \
  -R reference.fa \
  -V gendb://cohort_db \
  -O cohort.vcf.gz
```

过滤 SNP：

```bash
gatk VariantFiltration \
  -R reference.fa -V cohort.vcf.gz -O cohort.filtered.vcf.gz \
  --filter-expression "QD < 2.0 || FS > 60.0 || MQ < 40.0" \
  --filter-name "basic_snp_filter"
```

## 关键参数 | Key Options

- `HaplotypeCaller`：germline variant calling。
- `-ERC GVCF`：输出 GVCF 供联合分型。
- `GenomicsDBImport`：导入多样本 GVCF。
- `GenotypeGVCFs`：联合分型生成 cohort VCF。
- `-R`：参考基因组。
- `-L`：限制 intervals。

## 常见坑 | Pitfalls

- 参考 FASTA、dict、fai、known sites 坐标体系必须一致。
- GVCF 不是最终结果，通常还要 joint genotyping。
- 生产流程应按项目类型选择官方最佳实践，而不是机械套参数。

## 参考 | References

- GATK documentation: https://gatk.broadinstitute.org/hc/en-us
- HaplotypeCaller: https://gatk.broadinstitute.org/hc/en-us/articles/360037225632

