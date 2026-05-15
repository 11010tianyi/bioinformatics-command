---
name: BAM
category: Alignment
aliases: [Binary Alignment Map, .bam]
summary_zh: SAM 的二进制压缩形式，用于存储 reads 到参考基因组的比对结果。
summary_en: Binary compressed representation of SAM for storing read alignments to a reference genome.
official: https://samtools.github.io/hts-specs/SAMv1.pdf
---

BAM
===

SAM 的二进制压缩形式，用于存储 reads 到参考基因组的比对结果。Binary compressed representation of SAM for storing read alignments to a reference genome.

## 常见用途 | Common Uses

- 保存 DNA-seq、RNA-seq、ChIP-seq、ATAC-seq 等比对结果。
- 作为 variant calling、coverage、peak calling、read counting 的输入。
- 坐标排序后可配合 `.bai` 索引进行区域随机访问。

## 关键点 | Notes

- BAM 通常需要 `samtools sort` 后再 `samtools index`。
- 染色体命名、参考版本、read group 会影响下游流程。
- CRAM 比 BAM 更省空间，但读取时通常依赖参考基因组。

## 常用工具 | Tools

```bash
samtools view sample.bam
samtools sort -o sample.sorted.bam sample.bam
samtools index sample.sorted.bam
```

## 参考 | References

- SAM/BAM specification: https://samtools.github.io/hts-specs/SAMv1.pdf
