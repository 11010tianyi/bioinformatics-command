---
name: FastQC
category: FASTQ QC
formats: [FASTQ, HTML, ZIP]
aliases: [quality report, raw data QC]
tags: [QC, FASTQ, sequencing quality]
summary_zh: 生成 FASTQ 测序质量报告，常用于原始数据和清洗后数据检查。
summary_en: Generates FASTQ sequencing quality reports for raw and cleaned reads.
install: mamba install -c bioconda fastqc
official: https://www.bioinformatics.babraham.ac.uk/projects/fastqc/
---

FastQC
===

生成 FASTQ 测序质量报告，常用于原始数据和清洗后数据检查。Generates FASTQ sequencing quality reports for raw and cleaned reads.

## 速览 | Quick Look

- 常见输入：FASTQ / FASTQ.gz
- 常见输出：HTML report, ZIP data bundle
- 典型场景：测序质量、GC、duplication、adapter content 初筛

## 安装 | Install

```bash
mamba install -c bioconda fastqc
```

## 常用命令 | Common Commands

批量运行：

```bash
mkdir -p qc/fastqc
fastqc *.fastq.gz -o qc/fastqc -t 8
```

递归查找 FASTQ 并运行：

```bash
find rawdata -name "*.fq.gz" -o -name "*.fastq.gz" | xargs fastqc -o qc/fastqc -t 8
```

关闭 per-base sequence quality 的分组：

```bash
fastqc --nogroup sample.fastq.gz -o qc/fastqc
```

## 关键参数 | Key Options

- `-o`：输出目录。
- `-t`：线程数。
- `--nogroup`：不按区间合并碱基位置，适合短 reads 或需要细看每个位点时。
- `--extract`：解压输出 ZIP。

## 常见坑 | Pitfalls

- FastQC 的 warning/fail 是启发式提示，不等于数据一定不可用。
- 单个样本多 lane 时，既可逐 lane QC，也可合并后再检查。
- 项目汇总通常交给 MultiQC。

## 参考 | References

- Official project page: https://www.bioinformatics.babraham.ac.uk/projects/fastqc/
- AutoBA FastQC config: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_config/fastqc_0.11.9.config
