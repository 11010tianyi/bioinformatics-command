---
name: MACS3
category: ChIP-seq/ATAC-seq
formats: [BAM, BED, BEDPE, narrowPeak, broadPeak]
aliases: [macs2, peak calling, callpeak]
tags: [ChIP-seq, ATAC-seq, peak calling]
summary_zh: ChIP-seq/ATAC-seq 常用 peak calling 工具，MACS2 的后续版本。
summary_en: Peak caller for ChIP-seq and ATAC-seq; successor of MACS2.
install: mamba install -c bioconda macs3
official: https://macs3-project.github.io/MACS/
---

MACS3
===

ChIP-seq/ATAC-seq 常用 peak calling 工具，MACS2 的后续版本。Peak caller for ChIP-seq and ATAC-seq; successor of MACS2.

## 速览 | Quick Look

- 常见输入：BAM, BED, BEDPE
- 常见输出：narrowPeak, broadPeak, pileup, model files
- 典型场景：TF ChIP-seq narrow peaks、histone broad peaks、ATAC-seq peaks

## 安装 | Install

```bash
mamba install -c bioconda macs3
```

## 常用命令 | Common Commands

转录因子 ChIP-seq：

```bash
macs3 callpeak -t chip.bam -c input.bam -f BAM -g hs -n sample --outdir macs3/sample
```

ATAC-seq 常见设置：

```bash
macs3 callpeak -t atac.bam -f BAMPE -g hs -n atac_sample --outdir peaks --nomodel
```

宽峰：

```bash
macs3 callpeak -t h3k27me3.bam -c input.bam -f BAM -g hs \
  --broad --broad-cutoff 0.1 -n h3k27me3 --outdir peaks
```

## 关键参数 | Key Options

- `callpeak`：peak calling 主命令。
- `-t` / `-c`：treatment 和 control。
- `-f`：输入格式，常见 `BAM`, `BAMPE`, `BED`。
- `-g`：有效基因组大小，`hs` human，`mm` mouse。
- `--nomodel`：不建模片段长度，ATAC-seq 常用。
- `--broad`：宽峰模式。

## 常见坑 | Pitfalls

- `-g` 不是 FASTA 路径，而是有效基因组大小。
- ATAC-seq 使用 `BAMPE` 时，MACS 会从 paired-end 信息估计 fragment。
- narrowPeak/broadPeak 的坐标是 BED 风格。

## 参考 | References

- Official documentation: https://macs3-project.github.io/MACS/
- AutoBA MACS template: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_database/macs2.txt
