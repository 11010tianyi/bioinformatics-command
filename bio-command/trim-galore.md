---
name: Trim Galore
category: FASTQ preprocessing
formats: [FASTQ, HTML]
aliases: [cutadapt wrapper, adapter trimming, methylation]
tags: [QC, preprocessing, adapter, Cutadapt]
summary_zh: Cutadapt 和 FastQC 的常用封装工具，用于 FASTQ 接头剪切、质量过滤和报告生成。
summary_en: Wrapper around Cutadapt and FastQC for adapter trimming, quality filtering, and reporting.
install: mamba install -c bioconda trim-galore
official: https://github.com/FelixKrueger/TrimGalore
---

Trim Galore
===

Cutadapt 和 FastQC 的常用封装工具，用于 FASTQ 接头剪切、质量过滤和报告生成。A practical Cutadapt/FastQC wrapper for read preprocessing.

## 速览 | Quick Look

- 常见输入：single-end or paired-end FASTQ
- 常见输出：trimmed FASTQ, trimming report, optional FastQC HTML
- 典型场景：Illumina reads 接头剪切、RRBS/WGBS 预处理、标准流程快速质控

## 安装 | Install

```bash
mamba install -c bioconda trim-galore
```

## 常用命令 | Common Commands

双端剪切：

```bash
trim_galore --paired --cores 4 \
  sample_R1.fq.gz sample_R2.fq.gz \
  -o trimmed
```

同时运行 FastQC：

```bash
trim_galore --paired --fastqc --cores 4 R1.fq.gz R2.fq.gz -o trimmed
```

RRBS 模式：

```bash
trim_galore --paired --rrbs --cores 4 R1.fq.gz R2.fq.gz -o rrbs_trimmed
```

## 关键参数 | Key Options

- `--paired`：双端模式。
- `--cores`：并行核心数。
- `--fastqc`：剪切后运行 FastQC。
- `--quality`：质量剪切阈值。
- `--length`：保留 reads 最短长度。
- `--rrbs`：RRBS 特殊处理。

## 常见坑 | Pitfalls

- 双端模式会要求 R1/R2 文件顺序正确。
- 输出文件名较长，后续流程最好显式匹配。
- 如果项目已有 fastp 或 Cutadapt SOP，不要混用默认过滤策略。

## 参考 | References

- Official repository: https://github.com/FelixKrueger/TrimGalore
- Cutadapt documentation: https://cutadapt.readthedocs.io/

