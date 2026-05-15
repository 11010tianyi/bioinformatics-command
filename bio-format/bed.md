---
name: BED
category: Genomic intervals
aliases: [.bed, Browser Extensible Data]
summary_zh: 用 0-based half-open 坐标表示基因组区间的轻量文本格式。
summary_en: Lightweight tab-delimited interval format using 0-based half-open genomic coordinates.
official: https://genome.ucsc.edu/FAQ/FAQformat.html#format1
---

BED
===

用 0-based half-open 坐标表示基因组区间的轻量文本格式。Lightweight tab-delimited interval format using 0-based half-open genomic coordinates.

## 常见用途 | Common Uses

- peak、target region、promoter、enhancer、blacklist 区间。
- bedtools 交集、覆盖度和最近邻分析。
- UCSC Genome Browser track。

## 关键点 | Notes

- BED 坐标是 0-based，end 不包含在区间内。
- VCF/GTF/GFF 多为 1-based，转换时容易 off-by-one。
- 前三列通常是 `chrom`, `start`, `end`。

## 示例 | Example

```text
chr1    1000    1200    peak_1
```

## 参考 | References

- UCSC BED format: https://genome.ucsc.edu/FAQ/FAQformat.html#format1
