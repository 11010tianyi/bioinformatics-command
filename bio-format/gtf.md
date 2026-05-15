---
name: GTF
category: Annotation
aliases: [Gene Transfer Format, .gtf]
summary_zh: 常用于 RNA-seq 的基因注释格式，描述 gene、transcript、exon 等 feature。
summary_en: Gene annotation format widely used in RNA-seq workflows for genes, transcripts, and exons.
official: https://www.gencodegenes.org/pages/data_format.html
---

GTF
===

常用于 RNA-seq 的基因注释格式，描述 gene、transcript、exon 等 feature。Gene annotation format widely used in RNA-seq workflows.

## 常见用途 | Common Uses

- STAR genome index 构建。
- featureCounts read counting。
- transcript-to-gene mapping。

## 关键点 | Notes

- GTF 是 GFF2 的约定化变体。
- 第九列常含 `gene_id`、`transcript_id` 等属性。
- 坐标通常为 1-based inclusive。

## 参考 | References

- GENCODE format guide: https://www.gencodegenes.org/pages/data_format.html
