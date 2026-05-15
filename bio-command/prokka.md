---
name: Prokka
category: Genome annotation
formats: [FASTA, GFF, GenBank, TSV]
aliases: [prokaryotic annotation, bacterial annotation]
tags: [annotation, bacteria, genome, gene prediction]
summary_zh: 原核基因组快速注释工具，可从组装 FASTA 生成 GFF、GenBank、蛋白序列和表格结果。
summary_en: Rapid prokaryotic genome annotation tool producing GFF, GenBank, protein FASTA, and tabular outputs from assemblies.
install: mamba install -c bioconda prokka
official: https://github.com/tseemann/prokka
---

Prokka
===

原核基因组快速注释工具，可从组装 FASTA 生成 GFF、GenBank、蛋白序列和表格结果。Rapid annotation toolkit for bacterial and archaeal genomes.

## 速览 | Quick Look

- 常见输入：assembly FASTA
- 常见输出：GFF, GBK, FAA, FFN, TSV
- 典型场景：细菌基因组 CDS/rRNA/tRNA 注释、下游泛基因组分析前处理

## 安装 | Install

```bash
mamba install -c bioconda prokka
```

## 常用命令 | Common Commands

基础注释：

```bash
prokka assembly.fasta --outdir prokka_out --prefix sample \
  --cpus 8
```

指定属种：

```bash
prokka assembly.fasta --outdir prokka_out --prefix sample \
  --genus Escherichia --species coli --strain sample1 \
  --cpus 8
```

保留 locus tag：

```bash
prokka assembly.fasta --outdir prokka_out --prefix sample \
  --locustag SAM --cpus 8
```

## 关键参数 | Key Options

- `--outdir`：输出目录。
- `--prefix`：输出文件前缀。
- `--genus` / `--species` / `--strain`：物种信息。
- `--locustag`：locus tag 前缀。
- `--kingdom`：Bacteria/Archaea/Viruses 等。
- `--cpus`：线程数。

## 常见坑 | Pitfalls

- Prokka 主要面向原核，真核基因组不要直接套用。
- 属种信息会影响注释命名，但错误信息也会误导结果。
- 输出文件很多，下游通常重点使用 `.gff`, `.gbk`, `.faa`, `.tsv`。

## 参考 | References

- Official repository: https://github.com/tseemann/prokka

