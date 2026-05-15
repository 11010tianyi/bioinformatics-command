---
name: BUSCO
category: Completeness QC
formats: [FASTA, TSV, JSON]
aliases: [genome completeness, transcriptome completeness, orthologs]
tags: [assembly, QC, completeness, ortholog]
summary_zh: 基于单拷贝直系同源基因集评估基因组、转录组或蛋白集完整性的工具。
summary_en: Tool for assessing genome, transcriptome, or protein-set completeness using single-copy ortholog sets.
install: mamba install -c bioconda busco
official: https://busco.ezlab.org/busco_userguide.html
---

BUSCO
===

基于单拷贝直系同源基因集评估基因组、转录组或蛋白集完整性的工具。Completeness assessment using lineage-specific single-copy orthologs.

## 速览 | Quick Look

- 常见输入：genome/transcriptome/protein FASTA
- 常见输出：summary TSV/JSON, full table
- 典型场景：组装完整性评估、注释蛋白集 QC、不同组装版本比较

## 安装 | Install

```bash
mamba install -c bioconda busco
```

## 常用命令 | Common Commands

基因组模式：

```bash
busco -i assembly.fasta -m genome \
  -l bacteria_odb10 -o sample_busco -c 8
```

蛋白模式：

```bash
busco -i proteins.faa -m proteins \
  -l eukaryota_odb10 -o proteins_busco -c 8
```

自动选择 lineage：

```bash
busco -i assembly.fasta -m genome \
  --auto-lineage -o auto_busco -c 8
```

## 关键参数 | Key Options

- `-i`：输入 FASTA。
- `-m`：模式，`genome`, `transcriptome`, `proteins`。
- `-l`：lineage dataset。
- `--auto-lineage`：自动选择 lineage。
- `-o`：输出名称。
- `-c`：线程数。

## 常见坑 | Pitfalls

- lineage 选错会让完整性分数失真。
- BUSCO 高不代表没有污染，低也可能来自物种特殊性或组装碎片化。
- 比较多个样本时要使用同一 BUSCO 版本和 lineage。

## 参考 | References

- BUSCO user guide: https://busco.ezlab.org/busco_userguide.html

