---
name: bigWig
category: Signal track
aliases: [bw, coverage track, genome browser track]
summary_zh: 用于存储连续基因组信号轨道的二进制索引格式，常见于覆盖度、富集信号和浏览器展示。
summary_en: Indexed binary format for continuous genome signal tracks such as coverage and enrichment profiles.
official: https://genome.ucsc.edu/goldenPath/help/bigWig.html
---

bigWig
===

bigWig 是 UCSC 生态中常用的二进制索引信号轨道格式，用于快速展示全基因组覆盖度、ChIP/ATAC 富集信号、RNA-seq coverage 等连续数值。bigWig is an indexed binary format for continuous genomic signal tracks.

## 常见用途 | Common Uses

- 在 IGV、UCSC Genome Browser、JBrowse 中查看 coverage 或 signal。
- 存储 `bamCoverage`、`bamCompare` 等工具生成的标准化信号。
- 发布可远程随机访问的浏览器轨道。

## 注意事项 | Notes

- 通常由 bedGraph 或 BAM 经过工具转换生成。
- 染色体名称和长度必须与目标参考基因组一致。
- bigWig 适合展示连续数值，不适合表示离散 feature 注释。

## 参考 | References

- UCSC bigWig help: https://genome.ucsc.edu/goldenPath/help/bigWig.html

