---
name: StringTie
category: RNA-seq
formats: [BAM, GTF, GFF, TSV]
aliases: [transcript assembly, transcript quantification]
tags: [RNA-seq, transcriptome, assembly, quantification]
summary_zh: 从 RNA-seq 比对结果组装转录本并估计表达量的工具。
summary_en: Tool for transcript assembly and expression estimation from RNA-seq alignments.
install: mamba install -c bioconda stringtie
official: https://ccb.jhu.edu/software/stringtie/
---

StringTie
===

从 RNA-seq 比对结果组装转录本并估计表达量的工具。Tool for transcript assembly and expression estimation from RNA-seq alignments.

## 速览 | Quick Look

- 常见输入：sorted BAM, reference GTF/GFF
- 常见输出：GTF, gene abundance table
- 典型场景：转录本组装、reference-guided quantification、合并样本转录本

## 安装 | Install

```bash
mamba install -c bioconda stringtie
```

## 常用命令 | Common Commands

按参考注释估计表达：

```bash
stringtie sample.sorted.bam -p 8 -G annotation.gtf \
  -e -B -o sample/stringtie.gtf
```

无参考组装：

```bash
stringtie sample.sorted.bam -p 8 -o sample.assembled.gtf
```

合并多个样本组装结果：

```bash
stringtie --merge -p 8 -G annotation.gtf \
  -o merged.gtf mergelist.txt
```

生成 gene abundance 表：

```bash
stringtie sample.sorted.bam -p 8 -G annotation.gtf \
  -A sample.gene_abund.tsv -o sample.gtf
```

## 关键参数 | Key Options

- `-G`：参考注释 GTF/GFF。
- `-e`：仅估计参考转录本表达，不组装新转录本。
- `-B`：生成 Ballgown 兼容输出。
- `-A`：输出 gene abundance 表。
- `--merge`：合并多个 GTF。
- `-p`：线程数。

## 常见坑 | Pitfalls

- 输入 BAM 通常需要坐标排序。
- 链特异文库建议确认上游比对参数。
- 不同版本注释混用会导致 transcript/gene ID 难以追踪。

## 参考 | References

- Official site: https://ccb.jhu.edu/software/stringtie/
- StringTie manual: https://ccb.jhu.edu/software/stringtie/index.shtml?t=manual

