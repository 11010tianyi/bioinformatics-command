---
name: fastp
category: FASTQ preprocessing
formats: [FASTQ, JSON, HTML]
aliases: [quality control, adapter trimming, filtering]
tags: [QC, preprocessing, FASTQ]
summary_zh: 一体化 FASTQ 质控、过滤、接头剪切和 HTML/JSON 报告工具。
summary_en: All-in-one FASTQ quality control, filtering, adapter trimming, and reporting tool.
install: mamba install -c bioconda fastp
official: https://github.com/OpenGene/fastp
---

fastp
===

一体化 FASTQ 质控、过滤、接头剪切和 HTML/JSON 报告工具。All-in-one FASTQ quality control, filtering, adapter trimming, and reporting tool.

## 速览 | Quick Look

- 常见输入：single-end or paired-end FASTQ
- 常见输出：filtered FASTQ, HTML report, JSON report
- 典型场景：原始 reads 过滤、自动接头识别、UMI 处理前质控

## 安装 | Install

```bash
mamba install -c bioconda fastp
```

## 常用命令 | Common Commands

双端 reads 质控：

```bash
fastp -i sample_R1.fq.gz -I sample_R2.fq.gz \
  -o sample.clean_R1.fq.gz -O sample.clean_R2.fq.gz \
  -h sample.fastp.html -j sample.fastp.json \
  -w 8
```

单端 reads 质控：

```bash
fastp -i sample.fq.gz -o sample.clean.fq.gz -h sample.fastp.html -j sample.fastp.json
```

限制长度并启用低复杂度过滤：

```bash
fastp -i R1.fq.gz -I R2.fq.gz -o clean_R1.fq.gz -O clean_R2.fq.gz \
  --length_required 30 --low_complexity_filter
```

## 关键参数 | Key Options

- `-i` / `-I`：输入 R1/R2。
- `-o` / `-O`：输出 R1/R2。
- `-h` / `-j`：HTML/JSON 报告。
- `-w`：线程数。
- `--detect_adapter_for_pe`：双端自动接头检测。
- `--umi`：处理 UMI 场景。

## 常见坑 | Pitfalls

- fastp 默认会做多项过滤，和项目 SOP 比对时要记录参数。
- 对非常短的 reads 或特殊文库，自动接头检测可能不如显式给接头稳。
- MultiQC 可以汇总 fastp 的 JSON/HTML 结果。

## 参考 | References

- Official repository: https://github.com/OpenGene/fastp
- AutoBA fastp template: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_database/fastp.txt
