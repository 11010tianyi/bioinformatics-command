---
name: IQ-TREE 2
category: Phylogeny
formats: [FASTA, Newick, TSV]
aliases: [iqtree, maximum likelihood, phylogenetic tree]
tags: [phylogeny, tree, model selection, bootstrap]
summary_zh: 最大似然系统发育树构建工具，集成模型选择、bootstrap 和多种树评估方法。
summary_en: Maximum-likelihood phylogenetic inference tool with model selection, bootstrap, and tree testing methods.
install: mamba install -c bioconda iqtree
official: http://www.iqtree.org/doc/
---

IQ-TREE 2
===

最大似然系统发育树构建工具，集成模型选择、bootstrap 和多种树评估方法。Maximum-likelihood phylogenetic inference toolkit.

## 速览 | Quick Look

- 常见输入：aligned FASTA/PHYLIP/NEXUS
- 常见输出：Newick tree, log, model report, support values
- 典型场景：基因树/物种树构建、模型选择、ultrafast bootstrap

## 安装 | Install

```bash
mamba install -c bioconda iqtree
```

## 常用命令 | Common Commands

自动模型选择并构树：

```bash
iqtree2 -s alignment.fa -m MFP -T AUTO
```

ultrafast bootstrap：

```bash
iqtree2 -s alignment.fa -m MFP -B 1000 -alrt 1000 -T AUTO
```

指定 DNA 模型：

```bash
iqtree2 -s alignment.fa -m GTR+G -B 1000 -T 8
```

蛋白序列构树：

```bash
iqtree2 -s proteins.aln.fa -m MFP -B 1000 -T AUTO
```

## 关键参数 | Key Options

- `-s`：输入 alignment。
- `-m MFP`：ModelFinder 自动模型选择。
- `-B`：ultrafast bootstrap 重复次数。
- `-alrt`：SH-aLRT support。
- `-T`：线程数或 `AUTO`。
- `--prefix`：输出前缀。

## 常见坑 | Pitfalls

- 输入必须是多序列比对结果，不是未比对 FASTA。
- bootstrap 支持度不是分支真实性的唯一证据。
- 构树前要检查重组、低质量 alignment 和离群序列。

## 参考 | References

- IQ-TREE documentation: http://www.iqtree.org/doc/

