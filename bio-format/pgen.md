---
name: PGEN
category: Genotype
aliases: [PLINK2, pvar, psam]
summary_zh: PLINK 2 的二进制基因型格式，通常与 PVAR 和 PSAM 一起使用。
summary_en: PLINK 2 binary genotype format, usually paired with PVAR variant metadata and PSAM sample metadata.
official: https://www.cog-genomics.org/plink/2.0/formats
---

PGEN
===

PGEN 是 PLINK 2 的核心二进制基因型文件，通常和 `.pvar`、`.psam` 组成一个数据集。PGEN is PLINK 2's binary genotype storage format.

## 常见用途 | Common Uses

- 大规模 genotype array 或 WGS cohort 的过滤、QC、关联分析前处理。
- 从 VCF 转换到 PLINK 2 原生格式。
- 保存 dosage、phase 或多等位信息。

## 注意事项 | Notes

- PGEN 数据集需要 PGEN/PVAR/PSAM 三类文件配套。
- 和 PLINK 1 的 BED/BIM/FAM 不是同一个格式。
- 跨工具交换时常导出为 VCF 或 PLINK 1 binary。

## 参考 | References

- PLINK 2 file formats: https://www.cog-genomics.org/plink/2.0/formats

