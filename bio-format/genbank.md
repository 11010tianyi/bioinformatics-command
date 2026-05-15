---
name: GenBank
category: Annotation
aliases: [GBK, GBFF, flat file]
summary_zh: NCBI GenBank 平面文件格式，可同时保存序列、feature 注释和来源信息。
summary_en: NCBI flat-file format for sequences, feature annotations, and source metadata.
official: https://www.ncbi.nlm.nih.gov/Sitemap/samplerecord.html
---

GenBank
===

GenBank 格式常用 `.gb`, `.gbk`, `.gbff` 后缀，能在同一个文本文件中保存序列、CDS/rRNA/tRNA 等 feature、来源和参考文献信息。GenBank is a rich flat-file format for annotated biological sequences.

## 常见用途 | Common Uses

- 原核基因组注释结果交换。
- 向 NCBI 或本地数据库保存带 feature 的序列记录。
- 在 Artemis、Geneious、SnapGene 等工具中查看注释。

## 注意事项 | Notes

- GenBank 更适合完整记录，批量统计时通常先转换成 GFF/TSV。
- feature 坐标、strand、qualifier 写法需要符合下游工具要求。
- 大规模基因组项目常同时保留 FASTA、GFF 和 GenBank。

## 参考 | References

- NCBI sample GenBank record: https://www.ncbi.nlm.nih.gov/Sitemap/samplerecord.html

