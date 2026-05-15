---
name: Newick
category: Phylogeny
aliases: [tree, treefile, nwk]
summary_zh: 用括号嵌套表示系统发育树拓扑和分支长度的轻量文本格式。
summary_en: Lightweight text format for phylogenetic tree topology and branch lengths.
official: https://evolution.genetics.washington.edu/phylip/newicktree.html
---

Newick
===

Newick 用括号和逗号表示系统发育树拓扑，可附带分支长度，常见后缀包括 `.nwk`, `.tree`, `.treefile`。Newick is a compact representation of phylogenetic trees.

## 常见用途 | Common Uses

- 保存 IQ-TREE、RAxML、FastTree 等工具输出的系统树。
- 在 FigTree、iTOL、ETE Toolkit、R ape/ggtree 中可视化。
- 在流程中传递物种树、基因树或聚类树。

## 注意事项 | Notes

- 节点标签中的空格和特殊字符需要谨慎处理。
- Newick 本身不规定丰富样式，颜色和注释通常放在额外文件。
- 带支持度和带分支长度的树在不同工具中字段位置可能不同。

## 参考 | References

- PHYLIP Newick description: https://evolution.genetics.washington.edu/phylip/newicktree.html

