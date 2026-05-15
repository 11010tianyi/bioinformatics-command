# Bioinformatics Commands / 生信命令大全

一个中英双语的生物信息命令速查静态站，改造自 `linux-command` 的 Markdown + EJS 静态构建思路。

## 目标

- 收录高频生信 CLI：FASTQ QC、比对、BAM/VCF/BED 处理、RNA-seq、ChIP-seq、工作流。
- 每个命令一份 Markdown，既能直接读，也能生成搜索站。
- 内容优先参考官方文档、Bioconda、AutoBA 工具模板、tldr-pages 和常见社区实践。

## 本地开发

```bash
npm install
npm run build
```

构建结果在 `.deploy/`。本地预览：

```bash
npx http-server .deploy -p 9665
```

## 内容结构

新命令内容放在 `bio-command/`，文件格式说明放在 `bio-format/`。旧的 `command/` 目录保留为上游资料，不参与当前站点索引。

每个条目建议使用 frontmatter：

```md
---
name: samtools
category: Alignment
formats: [SAM, BAM, CRAM]
aliases: [bam, cram]
summary_zh: 处理高通量测序比对文件的基础工具。
summary_en: Core toolkit for SAM/BAM/CRAM alignment files.
install: mamba install -c bioconda samtools
official: https://www.htslib.org/doc/samtools.html
---
```

## 当前条目

已收录 40 个高频命令，覆盖 FASTQ 质控与预处理、比对、BAM/VCF/BED 处理、RNA-seq、ChIP-seq/ATAC-seq、变异检测与注释、组装与注释、宏基因组、系统发育、同源搜索、群体遗传和工作流。

代表条目包括 `fastp`、`FastQC`、`MultiQC`、`Cutadapt`、`Trim Galore`、`SeqKit`、`seqtk`、`SRA Toolkit`、`BWA`、`Bowtie2`、`HISAT2`、`minimap2`、`STAR`、`samtools`、`bcftools`、`bedtools`、`GATK`、`FreeBayes`、`SnpEff`、`Ensembl VEP`、`PLINK 2`、`featureCounts`、`StringTie`、`Salmon`、`kallisto`、`MACS3`、`deepTools`、`mosdepth`、`Kraken2`、`SPAdes`、`QUAST`、`Prokka`、`BUSCO`、`BLAST+`、`DIAMOND`、`MMseqs2`、`MAFFT`、`IQ-TREE 2`、`Nextflow`、`Snakemake`。

## 格式索引

`formats` frontmatter 会自动生成可点击标签，指向 `bio-format/` 下的格式详情页，例如 `FASTQ`、`BAM`、`VCF`、`BED`、`GVCF`、`SRA`、`bigWig` 等。格式页会反向列出使用该格式的命令；如果某个格式暂时还没有详情页，构建脚本会显示为普通标签，避免生成坏链接。

## License

代码沿用 MIT。命令示例与说明请优先保持原创表述，并在条目末尾附官方文档或可复用资料链接。
