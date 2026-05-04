---
name: Cutadapt
category: FASTQ preprocessing
formats: [FASTQ]
aliases: [adapter trimming, trim adapters]
tags: [QC, preprocessing, FASTQ]
summary_zh: 从 FASTQ reads 中去除接头、引物和低质量片段。
summary_en: Removes adapters, primers, and low-quality sequence from FASTQ reads.
install: mamba install -c bioconda cutadapt
official: https://cutadapt.readthedocs.io/
---

Cutadapt
===

从 FASTQ reads 中去除接头、引物和低质量片段。Removes adapters, primers, and low-quality sequence from FASTQ reads.

## 速览 | Quick Look

- 常见输入：single-end or paired-end FASTQ
- 常见输出：trimmed FASTQ
- 典型场景：adapter trimming、amplicon primer trimming、小 RNA 接头去除

## 安装 | Install

```bash
mamba install -c bioconda cutadapt
```

## 常用命令 | Common Commands

单端去接头：

```bash
cutadapt -a AGATCGGAAGAGC -o sample.trimmed.fq.gz sample.fq.gz
```

双端去接头：

```bash
cutadapt -a AGATCGGAAGAGC -A AGATCGGAAGAGC \
  -o sample_R1.trimmed.fq.gz -p sample_R2.trimmed.fq.gz \
  sample_R1.fq.gz sample_R2.fq.gz
```

设置最短长度并过滤低质量：

```bash
cutadapt -q 20 -m 30 -a ADAPTER -o out.fq.gz in.fq.gz
```

去除 5' primer：

```bash
cutadapt -g ^FORWARD_PRIMER -o trimmed.fq.gz reads.fq.gz
```

## 关键参数 | Key Options

- `-a` / `-A`：3' adapter，分别用于 R1/R2。
- `-g` / `-G`：5' adapter 或 primer。
- `-o` / `-p`：单端输出或双端 R1/R2 输出。
- `-q`：质量剪切。
- `-m`：过滤短 reads。
- `--discard-untrimmed`：只保留成功匹配接头/引物的 reads。

## 常见坑 | Pitfalls

- Amplicon primer 常需要锚定到 5' 端，例如 `^PRIMER`。
- 双端输出必须同时给 `-o` 和 `-p`。
- 接头序列不确定时先用 FastQC/MultiQC 检查 overrepresented sequences。

## 参考 | References

- Official documentation: https://cutadapt.readthedocs.io/
- Bioconda recipe: https://bioconda.github.io/recipes/cutadapt/README.html
