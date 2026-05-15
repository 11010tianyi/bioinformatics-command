---
name: MAFFT
category: Multiple sequence alignment
formats: [FASTA]
aliases: [MSA, sequence alignment]
tags: [alignment, phylogeny, protein, nucleotide]
summary_zh: 常用多序列比对工具，适合核酸或蛋白序列的 MSA 构建。
summary_en: Widely used multiple sequence alignment tool for nucleotide and protein sequences.
install: mamba install -c bioconda mafft
official: https://mafft.cbrc.jp/alignment/software/
---

MAFFT
===

常用多序列比对工具，适合核酸或蛋白序列的 MSA 构建。Widely used multiple sequence alignment tool.

## 速览 | Quick Look

- 常见输入：FASTA
- 常见输出：aligned FASTA
- 典型场景：系统发育树前处理、同源序列比对、保守区域检查

## 安装 | Install

```bash
mamba install -c bioconda mafft
```

## 常用命令 | Common Commands

自动策略：

```bash
mafft --auto sequences.fa > sequences.aln.fa
```

高精度小数据集：

```bash
mafft --maxiterate 1000 --localpair sequences.fa > sequences.linsi.fa
```

大数据集快速比对：

```bash
mafft --retree 2 --maxiterate 0 sequences.fa > sequences.fast.aln.fa
```

保留输入顺序：

```bash
mafft --auto --inputorder sequences.fa > sequences.aln.fa
```

## 关键参数 | Key Options

- `--auto`：自动选择策略。
- `--localpair` / `--globalpair`：更精细的 pairwise alignment 策略。
- `--maxiterate`：迭代次数。
- `--thread`：线程数。
- `--inputorder`：保留输入顺序。
- `--add`：向已有 alignment 添加序列。

## 常见坑 | Pitfalls

- 大量序列用高精度模式会很慢。
- 输入序列应为同源序列，非同源混入会破坏 alignment。
- 构树前常需要 trimAl、BMGE 或 ClipKIT 等工具修剪低质量区域。

## 参考 | References

- Official site: https://mafft.cbrc.jp/alignment/software/

