---
name: PAF
category: Alignment
aliases: [Pairwise mApping Format, .paf]
summary_zh: minimap2 默认输出的轻量 pairwise mapping 格式，适合长读长和组装比对摘要。
summary_en: Lightweight pairwise mapping format, default output of minimap2 for long-read and assembly alignments.
official: https://github.com/lh3/miniasm/blob/master/PAF.md
---

PAF
===

minimap2 默认输出的轻量 pairwise mapping 格式，适合长读长和组装比对摘要。Lightweight pairwise mapping format used by minimap2.

## 常见用途 | Common Uses

- assembly-to-reference 比对摘要。
- long-read overlaps。
- 快速比较 contig/read mapping。

## 关键点 | Notes

- 默认不包含完整 SAM 字段。
- 需要 CIGAR 时可让 minimap2 输出额外 tag，或改用 SAM/BAM。
- 坐标和字段解释要按 PAF 规范读取。

## 参考 | References

- PAF specification: https://github.com/lh3/miniasm/blob/master/PAF.md
