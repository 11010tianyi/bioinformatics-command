---
name: Salmon
category: RNA-seq
formats: [FASTQ, FASTA, TSV]
aliases: [transcript quantification, quasi-mapping]
tags: [RNA-seq, quantification, transcriptome]
summary_zh: 快速 RNA-seq transcript-level 定量工具，常用于无比对或准比对定量流程。
summary_en: Fast transcript-level RNA-seq quantification tool using lightweight mapping methods.
install: mamba install -c bioconda salmon
official: https://salmon.readthedocs.io/
---

Salmon
===

快速 RNA-seq transcript-level 定量工具，常用于无比对或准比对定量流程。Fast transcript-level RNA-seq quantification tool using lightweight mapping methods.

## 速览 | Quick Look

- 常见输入：transcriptome FASTA, FASTQ
- 常见输出：`quant.sf`
- 典型场景：bulk RNA-seq transcript quantification, tximport 到 gene-level

## 安装 | Install

```bash
mamba install -c bioconda salmon
```

## 常用命令 | Common Commands

构建 transcriptome index：

```bash
salmon index -t transcripts.fa -i salmon_index -k 31
```

双端定量：

```bash
salmon quant -i salmon_index -l A \
  -1 sample_R1.fq.gz -2 sample_R2.fq.gz \
  -p 8 --validateMappings -o sample_quant
```

单端定量：

```bash
salmon quant -i salmon_index -l A -r sample.fq.gz -p 8 -o sample_quant
```

## 关键参数 | Key Options

- `index`：构建索引。
- `quant`：执行定量。
- `-l A`：自动推断 library type。
- `--validateMappings`：常用的更稳健 mapping 校验。
- `--gcBias` / `--seqBias`：偏倚校正。
- `-p`：线程数。

## 常见坑 | Pitfalls

- index 的 transcript FASTA 应和后续注释版本一致。
- transcript-level 到 gene-level 汇总通常用 `tximport`。
- stranded library type 会影响定量，自动推断后仍建议抽查日志。

## 参考 | References

- Official documentation: https://salmon.readthedocs.io/
- Bioconda recipe: https://bioconda.github.io/recipes/salmon/README.html
