---
name: broadPeak
category: Peak
aliases: [.broadPeak, broad peak]
summary_zh: 基于 BED 的宽峰格式，常用于组蛋白修饰等宽区域富集信号。
summary_en: BED-derived broad peak format commonly used for broad enrichment signals such as histone marks.
official: https://genome.ucsc.edu/FAQ/FAQformat.html#format13
---

broadPeak
===

基于 BED 的宽峰格式，常用于组蛋白修饰等宽区域富集信号。BED-derived broad peak format for broad enrichment signals.

## 常见用途 | Common Uses

- H3K27me3、H3K36me3 等 broad histone mark peak calling。
- MACS `--broad` 输出。
- Genome Browser peak track。

## 关键点 | Notes

- 坐标遵循 BED 0-based half-open。
- 通常含 signal、p/q-value 等额外列。
- 与 narrowPeak 相比，更强调连续宽区域而不是尖峰 summit。

## 参考 | References

- UCSC broadPeak format: https://genome.ucsc.edu/FAQ/FAQformat.html#format13
