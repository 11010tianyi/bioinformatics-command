---
name: BEDPE
category: Genomic intervals
aliases: [.bedpe, paired-end BED]
summary_zh: 用于表示成对基因组区间的 BED 扩展格式，常见于 paired-end peak calling 和结构变异。
summary_en: BED extension for paired genomic intervals, often used for paired-end peak calling and structural variants.
official: https://bedtools.readthedocs.io/en/latest/content/general-usage.html#bedpe-format
---

BEDPE
===

用于表示成对基因组区间的 BED 扩展格式，常见于 paired-end peak calling 和结构变异。BED extension for paired genomic intervals.

## 常见用途 | Common Uses

- ATAC-seq/ChIP-seq paired-end fragment 表示。
- 结构变异 breakend 或 breakpoint pair。
- MACS3 `BAMPE`/fragment 类分析的相邻概念。

## 关键点 | Notes

- 前六列描述两个区间：`chrom1 start1 end1 chrom2 start2 end2`。
- 坐标语义延续 BED 的 0-based half-open。
- 不同工具对后续列含义可能不同。

## 参考 | References

- bedtools BEDPE format: https://bedtools.readthedocs.io/en/latest/content/general-usage.html#bedpe-format
