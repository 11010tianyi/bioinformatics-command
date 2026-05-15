---
name: BCF
category: Variant
aliases: [Binary VCF, .bcf]
summary_zh: VCF 的二进制形式，适合高效存储和处理大规模变异数据。
summary_en: Binary representation of VCF for efficient storage and processing of variant data.
official: https://samtools.github.io/hts-specs/VCFv4.3.pdf
---

BCF
===

VCF 的二进制形式，适合高效存储和处理大规模变异数据。Binary representation of VCF for efficient storage and processing of variant data.

## 常见用途 | Common Uses

- 大样本队列变异处理。
- bcftools 流程中的中间格式。
- 高效过滤、合并、查询 genotype 数据。

## 关键点 | Notes

- 人类可读性不如 VCF，但速度和体积更适合大规模分析。
- 通常用 `bcftools view -Ob` 输出 BCF。
- 仍需索引才能高效区域访问。

## 常用工具 | Tools

```bash
bcftools view -Ob input.vcf.gz -o output.bcf
bcftools index output.bcf
```

## 参考 | References

- VCF/BCF specification: https://samtools.github.io/hts-specs/VCFv4.3.pdf
