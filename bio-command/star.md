---
name: STAR
category: RNA-seq alignment
formats: [FASTQ, FASTA, GTF, SAM, BAM]
aliases: [spliced aligner, RNA-seq, genomeGenerate]
tags: [RNA-seq, alignment, splice junction]
summary_zh: 高性能 RNA-seq spliced aligner，常用于 bulk RNA-seq reads 到基因组比对。
summary_en: High-performance RNA-seq spliced aligner widely used for mapping reads to a genome.
install: mamba install -c bioconda star
official: https://github.com/alexdobin/STAR
---

STAR
===

高性能 RNA-seq spliced aligner，常用于 bulk RNA-seq reads 到基因组比对。High-performance RNA-seq spliced aligner widely used for mapping reads to a genome.

## 速览 | Quick Look

- 常见输入：FASTQ, genome FASTA, GTF
- 常见输出：SAM/BAM, splice junction table, logs
- 典型场景：bulk RNA-seq genome alignment、junction discovery、counting 前比对

## 安装 | Install

```bash
mamba install -c bioconda star
```

## 常用命令 | Common Commands

构建 genome index：

```bash
STAR --runMode genomeGenerate \
  --runThreadN 16 \
  --genomeDir star_index \
  --genomeFastaFiles genome.fa \
  --sjdbGTFfile genes.gtf \
  --sjdbOverhang 149
```

双端 RNA-seq 比对并输出排序 BAM：

```bash
STAR --runThreadN 16 \
  --genomeDir star_index \
  --readFilesIn sample_R1.fq.gz sample_R2.fq.gz \
  --readFilesCommand zcat \
  --outSAMtype BAM SortedByCoordinate \
  --outFileNamePrefix star/sample.
```

生成基因计数：

```bash
STAR --quantMode GeneCounts --genomeDir star_index \
  --readFilesIn R1.fq.gz R2.fq.gz --readFilesCommand zcat \
  --runThreadN 16 --outFileNamePrefix star/sample.
```

## 关键参数 | Key Options

- `--runMode genomeGenerate`：构建索引。
- `--genomeDir`：索引目录。
- `--sjdbGTFfile`：注释文件，用于 splice junction。
- `--sjdbOverhang`：一般设为 read length - 1。
- `--readFilesCommand zcat`：读取 gzip FASTQ。
- `--outSAMtype BAM SortedByCoordinate`：直接输出坐标排序 BAM。

## 常见坑 | Pitfalls

- STAR index 体积较大，内存需求也高。
- `sjdbOverhang` 应按 reads 长度设置；不同读长项目最好分开建索引或折中评估。
- 输出目录和 prefix 要提前规划，否则多个样本容易互相覆盖。

## 参考 | References

- Official repository: https://github.com/alexdobin/STAR
- STAR manual: https://github.com/alexdobin/STAR/blob/master/doc/STARmanual.pdf
- AutoBA STAR template: https://github.com/JoshuaChou2018/AutoBA/blob/main/softwares_database/STAR.txt
