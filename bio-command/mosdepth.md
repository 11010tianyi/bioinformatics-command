---
name: mosdepth
category: Coverage
formats: [BAM, CRAM, BED, TSV]
aliases: [coverage, depth, per-base depth]
tags: [coverage, depth, WGS, exome]
summary_zh: 快速计算 BAM/CRAM 覆盖度、深度分布和目标区域覆盖统计的工具。
summary_en: Fast tool for BAM/CRAM coverage, depth distribution, and target-region coverage statistics.
install: mamba install -c bioconda mosdepth
official: https://github.com/brentp/mosdepth
---

mosdepth
===

快速计算 BAM/CRAM 覆盖度、深度分布和目标区域覆盖统计的工具。Fast coverage and depth calculation for BAM/CRAM files.

## 速览 | Quick Look

- 常见输入：BAM, CRAM, optional BED
- 常见输出：per-base/region depth TSV, summary
- 典型场景：WGS/WES coverage QC、panel 区域覆盖评估、测序深度报告

## 安装 | Install

```bash
mamba install -c bioconda mosdepth
```

## 常用命令 | Common Commands

全基因组深度：

```bash
mosdepth -t 8 sample sample.sorted.bam
```

按 BED 区域统计：

```bash
mosdepth -t 8 --by targets.bed sample sample.sorted.bam
```

设置阈值统计覆盖比例：

```bash
mosdepth -t 8 --by targets.bed --thresholds 1,10,20,30 sample sample.bam
```

输出不压缩 per-base 文件：

```bash
mosdepth -t 8 --no-per-base sample sample.bam
```

## 关键参数 | Key Options

- `--by`：按 BED 或固定窗口统计。
- `--thresholds`：计算达到指定深度阈值的碱基数。
- `--no-per-base`：不输出逐碱基深度，节省空间。
- `--fast-mode`：跳过 CIGAR 细节，速度更快但不适合所有场景。
- `-t`：线程数。

## 常见坑 | Pitfalls

- CRAM 输入需要能访问匹配参考基因组。
- per-base 输出可能很大，panel 或 WGS 项目常用 `--no-per-base`。
- BED 染色体命名需要和 BAM header 一致。

## 参考 | References

- Official repository: https://github.com/brentp/mosdepth

