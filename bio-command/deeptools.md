---
name: deepTools
category: Epigenomics
formats: [BAM, BED, GTF, bigWig, TSV, HTML]
aliases: [bamCoverage, computeMatrix, plotHeatmap, plotProfile]
tags: [ChIP-seq, ATAC-seq, coverage, visualization]
summary_zh: 面向 ChIP-seq、ATAC-seq、RNA-seq 等数据的覆盖度计算、矩阵生成和可视化工具集。
summary_en: Toolkit for coverage calculation, matrix generation, and visualization for ChIP-seq, ATAC-seq, RNA-seq, and related assays.
install: mamba install -c bioconda deeptools
official: https://deeptools.readthedocs.io/
---

deepTools
===

面向 ChIP-seq、ATAC-seq、RNA-seq 等数据的覆盖度计算、矩阵生成和可视化工具集。Toolkit for coverage tracks, signal matrices, heatmaps, and profiles.

## 速览 | Quick Look

- 常见输入：BAM, BED/GTF
- 常见输出：bigWig, matrix, heatmap, profile, TSV
- 典型场景：生成 genome browser signal、TSS/peak signal heatmap、样本相关性检查

## 安装 | Install

```bash
mamba install -c bioconda deeptools
```

## 常用命令 | Common Commands

BAM 转 bigWig：

```bash
bamCoverage -b sample.sorted.bam -o sample.rpgc.bw \
  --normalizeUsing RPGC --effectiveGenomeSize 2913022398 \
  --binSize 10 -p 8
```

计算 TSS 周围信号矩阵：

```bash
computeMatrix reference-point \
  -S sample.rpgc.bw \
  -R genes.bed \
  --referencePoint TSS -b 3000 -a 3000 \
  -o matrix.gz -p 8
```

画 heatmap 和 profile：

```bash
plotHeatmap -m matrix.gz -out heatmap.pdf
plotProfile -m matrix.gz -out profile.pdf --outFileNameData profile.tsv
```

样本相关性：

```bash
multiBamSummary bins --bamfiles *.bam -o bam_summary.npz -p 8
plotCorrelation -in bam_summary.npz --corMethod pearson \
  --whatToPlot heatmap -o correlation.pdf
```

## 关键参数 | Key Options

- `bamCoverage`：从 BAM 生成 coverage bigWig。
- `computeMatrix`：按区域生成信号矩阵。
- `plotHeatmap` / `plotProfile`：可视化矩阵。
- `multiBamSummary`：计算多个 BAM 的覆盖度摘要。
- `--normalizeUsing`：选择标准化方式。
- `-p`：线程数。

## 常见坑 | Pitfalls

- `--effectiveGenomeSize` 要与物种和过滤策略匹配。
- bigWig 染色体命名需要和 BED/GTF 一致。
- binSize 越小文件越大，浏览器展示和统计速度也会变化。

## 参考 | References

- Official documentation: https://deeptools.readthedocs.io/

