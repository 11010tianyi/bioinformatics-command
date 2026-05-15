---
name: FASTQ
category: Sequence reads
aliases: [.fq, .fastq, fastq.gz]
summary_zh: 保存测序 reads 及其碱基质量值的标准文本格式。
summary_en: Standard text format for sequencing reads and per-base quality scores.
official: https://en.wikipedia.org/wiki/FASTQ_format
---

FASTQ
===

保存测序 reads 及其碱基质量值的标准文本格式。Standard text format for sequencing reads and per-base quality scores.

## 常见用途 | Common Uses

- 原始测序 reads。
- 质控、去接头、过滤和比对输入。
- 单端或双端 reads 文件。

## 关键点 | Notes

- 每条 read 占四行：header、sequence、separator、quality。
- gzip 压缩后常见扩展名为 `.fq.gz` 或 `.fastq.gz`。
- Phred quality encoding 是质量判断的核心。

## 示例 | Example

```text
@read1
ACGT
+
IIII
```

## 参考 | References

- FASTQ overview: https://en.wikipedia.org/wiki/FASTQ_format
