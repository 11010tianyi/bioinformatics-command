---
name: narrowPeak
category: Peak
aliases: [.narrowPeak, peak]
summary_zh: 基于 BED 的窄峰格式，常用于 TF ChIP-seq 和 ATAC-seq peak 结果。
summary_en: BED-derived narrow peak format commonly used for TF ChIP-seq and ATAC-seq peaks.
official: https://genome.ucsc.edu/FAQ/FAQformat.html#format12
---

narrowPeak
===

基于 BED 的窄峰格式，常用于 TF ChIP-seq 和 ATAC-seq peak 结果。BED-derived narrow peak format for sharp enrichment peaks.

## 常见用途 | Common Uses

- MACS narrow peak output。
- TF binding sites。
- ATAC-seq accessible regions。

## 关键点 | Notes

- 坐标遵循 BED 0-based half-open。
- 通常有 10 列，包含 signal、p/q-value 和 summit。
- 可作为 bedtools 或 motif enrichment 输入。

## 参考 | References

- UCSC narrowPeak format: https://genome.ucsc.edu/FAQ/FAQformat.html#format12
