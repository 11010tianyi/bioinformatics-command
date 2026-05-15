---
name: GFF
category: Annotation
aliases: [GFF3, .gff, .gff3]
summary_zh: 通用基因组特征注释格式，用九列文本描述基因、转录本、外显子等 feature。
summary_en: General feature annotation format describing genes, transcripts, exons, and other genomic features in nine columns.
official: https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md
---

GFF
===

通用基因组特征注释格式，用九列文本描述基因、转录本、外显子等 feature。General feature annotation format for genomic features.

## 常见用途 | Common Uses

- 基因组注释。
- feature 提取和区间交集。
- 转换到 BED/GTF 或用于可视化。

## 关键点 | Notes

- GFF3 第九列使用 `key=value` 属性。
- 坐标通常为 1-based inclusive。
- feature 层级通过 `ID` 和 `Parent` 表示。

## 参考 | References

- GFF3 specification: https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md
