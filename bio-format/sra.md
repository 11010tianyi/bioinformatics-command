---
name: SRA
category: Sequence archive
aliases: [Sequence Read Archive, .sra]
summary_zh: NCBI Sequence Read Archive 的原始测序数据封装格式，常通过 SRA Toolkit 转换为 FASTQ。
summary_en: NCBI Sequence Read Archive container format, commonly converted to FASTQ with SRA Toolkit.
official: https://github.com/ncbi/sra-tools/wiki
---

SRA
===

SRA 文件是 NCBI Sequence Read Archive 中常见的原始 reads 容器格式。日常分析中通常先用 `prefetch` 下载，再用 `fasterq-dump` 转换成 FASTQ。SRA is an archive container for raw sequencing reads.

## 常见用途 | Common Uses

- 从 SRA run accession 下载公开测序数据。
- 作为 FASTQ 转换前的本地缓存。
- 批量复现实验数据下载流程。

## 注意事项 | Notes

- 下游分析通常不直接读取 `.sra`，而是读取转换后的 FASTQ。
- `fasterq-dump` 需要较多临时磁盘空间。
- 公开数据下载建议记录 accession、数据库和下载日期。

## 参考 | References

- SRA Toolkit wiki: https://github.com/ncbi/sra-tools/wiki
