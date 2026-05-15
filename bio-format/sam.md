---
name: SAM
category: Alignment
aliases: [Sequence Alignment/Map, .sam]
summary_zh: 以文本形式保存 reads 比对结果的标准格式，是 BAM/CRAM 的可读源格式。
summary_en: Text-based standard format for read alignments; human-readable counterpart of BAM/CRAM.
official: https://samtools.github.io/hts-specs/SAMv1.pdf
---

SAM
===

以文本形式保存 reads 比对结果的标准格式，是 BAM/CRAM 的可读源格式。Text-based standard format for read alignments.

## 常见用途 | Common Uses

- aligner 输出的中间结果。
- 调试 CIGAR、FLAG、MAPQ、optional tags。
- 转换为 BAM 后用于正式下游分析。

## 关键点 | Notes

- 文本体积很大，不适合长期保存大项目。
- header 以 `@` 开头。
- 正式流程通常直接管道到 `samtools sort` 生成 BAM。

## 参考 | References

- SAM/BAM specification: https://samtools.github.io/hts-specs/SAMv1.pdf
