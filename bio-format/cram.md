---
name: CRAM
category: Alignment
aliases: [.cram]
summary_zh: 面向比对数据的高压缩格式，通常需要参考基因组辅助解码。
summary_en: Highly compressed alignment format that usually relies on the reference genome for decoding.
official: https://samtools.github.io/hts-specs/CRAMv3.pdf
---

CRAM
===

面向比对数据的高压缩格式，通常需要参考基因组辅助解码。Highly compressed alignment format that usually relies on the reference genome for decoding.

## 常见用途 | Common Uses

- 长期归档大规模 BAM 数据。
- 云端或队列级测序数据存储。
- 与 samtools/htslib 生态配合使用。

## 关键点 | Notes

- 读取 CRAM 时要能找到匹配参考基因组。
- 文件体积通常小于 BAM。
- 区域访问需要 `.crai` 或相关索引。

## 常用工具 | Tools

```bash
samtools view -C -T reference.fa sample.bam -o sample.cram
samtools index sample.cram
```

## 参考 | References

- CRAM specification: https://samtools.github.io/hts-specs/CRAMv3.pdf
