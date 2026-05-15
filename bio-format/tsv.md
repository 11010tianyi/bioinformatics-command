---
name: TSV
category: Table
aliases: [tab-separated values, .tsv]
summary_zh: 以制表符分隔的表格文本格式，常用于统计结果和中间矩阵。
summary_en: Tab-separated table format commonly used for statistics, matrices, and intermediate results.
official: https://www.iana.org/assignments/media-types/text/tab-separated-values
---

TSV
===

以制表符分隔的表格文本格式，常用于统计结果和中间矩阵。Tab-separated table format for statistics and matrices.

## 常见用途 | Common Uses

- counts matrix。
- coverage/statistics table。
- `bcftools query` 输出。
- MultiQC data tables。

## 关键点 | Notes

- 比 CSV 更适合含逗号的生物学字段。
- 仍需注意 header、缺失值和字段转义。
- 大文件可用 `cut`、`awk`、`csvtk`、`datamash` 等处理。

## 参考 | References

- IANA TSV media type: https://www.iana.org/assignments/media-types/text/tab-separated-values
