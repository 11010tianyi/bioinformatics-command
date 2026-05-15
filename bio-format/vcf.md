---
name: VCF
category: Variant
aliases: [Variant Call Format, .vcf, vcf.gz]
summary_zh: 保存遗传变异、样本基因型和注释信息的标准文本格式。
summary_en: Standard text format for genetic variants, sample genotypes, and annotations.
official: https://samtools.github.io/hts-specs/VCFv4.3.pdf
---

VCF
===

保存遗传变异、样本基因型和注释信息的标准文本格式。Standard text format for genetic variants, genotypes, and annotations.

## 常见用途 | Common Uses

- SNP/indel/SV variant calls。
- cohort genotype matrix。
- 变异过滤、注释、合并和查询。

## 关键点 | Notes

- 数据行常见字段：`CHROM POS ID REF ALT QUAL FILTER INFO FORMAT samples...`。
- bgzip 压缩并 tabix/bcftools index 后可区域访问。
- 坐标是 1-based。

## 常用工具 | Tools

```bash
bcftools view input.vcf.gz
bcftools query -f '%CHROM\t%POS\t%REF\t%ALT\n' input.vcf.gz
```

## 参考 | References

- VCF specification: https://samtools.github.io/hts-specs/VCFv4.3.pdf
