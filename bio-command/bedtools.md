---
name: bedtools
category: Genomic intervals
formats: [BED, GFF, GTF, VCF, BAM]
aliases: [interval, intersect, coverage, genomecov]
tags: [genome arithmetic, annotation, peak analysis]
summary_zh: 对 BED/GFF/GTF/VCF/BAM 等基因组区间做交集、覆盖度、最近邻和格式转换。
summary_en: Genome arithmetic toolkit for intersections, coverage, closest features, and format conversion.
install: mamba install -c bioconda bedtools
official: https://bedtools.readthedocs.io/en/latest/
---

bedtools
===

对 BED/GFF/GTF/VCF/BAM 等基因组区间做交集、覆盖度、最近邻和格式转换。Genome arithmetic toolkit for intersections, coverage, closest features, and format conversion.

## 速览 | Quick Look

- 常见输入：BED, GFF/GTF, VCF, BAM
- 常见输出：overlap table, coverage table, BEDGraph
- 典型场景：peak 注释、变异落区间、覆盖度统计、最近基因查找

## 安装 | Install

```bash
mamba install -c bioconda bedtools
```

## 常用命令 | Common Commands

求两个区间文件交集：

```bash
bedtools intersect -a peaks.bed -b promoters.bed > peaks.in_promoters.bed
```

保留 A 中所有记录，并标注是否命中 B：

```bash
bedtools intersect -a variants.bed -b genes.bed -loj > variants.with_genes.tsv
```

计算每个区间覆盖度：

```bash
bedtools coverage -a targets.bed -b sample.bam > target_coverage.tsv
```

BAM 转 BED：

```bash
bedtools bamtobed -i alignments.bam > alignments.bed
```

生成 genome coverage：

```bash
bedtools genomecov -ibam sample.bam -bg > sample.bedgraph
```

## 关键参数 | Key Options

- `intersect`：区间交集，最常用子命令。
- `coverage`：计算 A 区间被 B 覆盖的深度/比例。
- `closest`：找距离最近的区间。
- `merge`：合并重叠或相邻区间。
- `slop`：按基因组长度文件扩展区间，避免越界。
- `-sorted`：输入已排序时可显著降低内存占用。

## 常见坑 | Pitfalls

- BED 是 0-based half-open；GTF/GFF/VCF 坐标习惯不同，转换时要特别小心。
- `-sorted` 要求 A/B 都按染色体和起点排序。
- 染色体命名必须一致，例如 `chr1` 和 `1` 不能混用。

## 参考 | References

- Official documentation: https://bedtools.readthedocs.io/en/latest/
- tldr bedtools page: https://github.com/tldr-pages/tldr/blob/main/pages/common/bedtools.md
