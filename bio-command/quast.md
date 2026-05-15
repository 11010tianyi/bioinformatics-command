---
name: QUAST
category: Assembly QC
formats: [FASTA, GFF, TSV, HTML]
aliases: [assembly quality, genome assembly QC]
tags: [assembly, QC, contigs, scaffolds]
summary_zh: 基因组组装质量评估工具，可输出 N50、总长度、错配、基因覆盖等报告。
summary_en: Genome assembly quality assessment tool reporting N50, total length, misassemblies, gene coverage, and related metrics.
install: mamba install -c bioconda quast
official: https://quast.sourceforge.net/docs/manual.html
---

QUAST
===

基因组组装质量评估工具，可输出 N50、总长度、错配、基因覆盖等报告。Assembly quality assessment tool for contigs and scaffolds.

## 速览 | Quick Look

- 常见输入：assembly FASTA, optional reference FASTA/GFF
- 常见输出：HTML report, TSV tables, plots
- 典型场景：比较多个组装版本、评估 contig/scaffold 质量、参考引导错配分析

## 安装 | Install

```bash
mamba install -c bioconda quast
```

## 常用命令 | Common Commands

无参考评估：

```bash
quast.py assembly.fasta -o quast_out -t 8
```

有参考评估：

```bash
quast.py assembly.fasta -r reference.fa -g annotation.gff \
  -o quast_ref_out -t 8
```

比较多个组装：

```bash
quast.py spades/contigs.fasta flye/assembly.fasta \
  -l spades,flye -o quast_compare -t 8
```

宏基因组模式：

```bash
metaquast.py contigs.fasta -o metaquast_out -t 16
```

## 关键参数 | Key Options

- `quast.py`：常规基因组组装评估。
- `metaquast.py`：宏基因组组装评估。
- `-r`：参考基因组。
- `-g`：基因注释 GFF。
- `-l`：多个 assembly 的标签。
- `-t`：线程数。

## 常见坑 | Pitfalls

- N50 不是唯一质量指标，需要结合完整性、错配和污染。
- 参考版本不匹配会放大 misassembly 指标。
- 多个 assembly 比较时建议统一最短 contig 阈值。

## 参考 | References

- QUAST manual: https://quast.sourceforge.net/docs/manual.html

