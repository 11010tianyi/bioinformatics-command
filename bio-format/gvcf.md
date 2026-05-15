---
name: GVCF
category: Variant
aliases: [gVCF, genomic VCF, reference confidence]
summary_zh: VCF 的参考置信度扩展，既记录变异位点，也记录非变异区间，常用于联合分型。
summary_en: Reference-confidence VCF extension that records variant sites and non-variant blocks for joint genotyping.
official: https://gatk.broadinstitute.org/hc/en-us/articles/360035531812
---

GVCF
===

GVCF 常用于 GATK HaplotypeCaller 的 `-ERC GVCF` 模式。它保留单样本变异位点和非变异 reference block，方便后续多样本联合分型。GVCF is a VCF-like intermediate for reference-confidence variant calling.

## 常见用途 | Common Uses

- 单样本 calling 后进入 `GenomicsDBImport` 或 `CombineGVCFs`。
- 多样本 cohort joint genotyping。
- 需要保留非变异区间置信度的变异流程。

## 注意事项 | Notes

- GVCF 通常不是最终发布格式，最终结果一般是普通 VCF。
- `END`、`MIN_DP` 等字段用于描述 reference block。
- 多样本联合分型前要保持参考版本和 intervals 一致。

## 参考 | References

- GATK GVCF overview: https://gatk.broadinstitute.org/hc/en-us/articles/360035531812

