---
name: FASTA
category: Sequence
aliases: [.fa, .fasta, .fna, .faa]
summary_zh: 用 header 和序列行表示核酸或蛋白序列的基础文本格式。
summary_en: Basic text format for nucleotide or protein sequences with headers and sequence lines.
official: https://www.ncbi.nlm.nih.gov/genbank/fastaformat/
---

FASTA
===

用 header 和序列行表示核酸或蛋白序列的基础文本格式。Basic text format for nucleotide or protein sequences.

## 常见用途 | Common Uses

- 参考基因组、转录本、蛋白序列。
- 比对索引构建。
- 序列提取、统计和格式转换。

## 关键点 | Notes

- header 行以 `>` 开头。
- 序列可以换行，也可以线性化成单行。
- 参考 FASTA 常配套 `.fai`、dict、aligner index 等文件。

## 示例 | Example

```text
>chr1
ACGTACGTACGT
```

## 参考 | References

- NCBI FASTA format: https://www.ncbi.nlm.nih.gov/genbank/fastaformat/
