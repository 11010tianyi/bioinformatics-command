---
name: SRA Toolkit
category: Data download
formats: [SRA, FASTQ]
aliases: [prefetch, fasterq-dump, sra-tools, ncbi sra]
tags: [download, public data, FASTQ conversion]
summary_zh: NCBI SRA 数据下载与 FASTQ 转换工具集，常用 `prefetch` 和 `fasterq-dump`。
summary_en: Toolkit for downloading NCBI SRA runs and converting them to FASTQ, commonly via `prefetch` and `fasterq-dump`.
install: mamba install -c bioconda sra-tools
official: https://github.com/ncbi/sra-tools/wiki
---

SRA Toolkit
===

NCBI SRA 数据下载与 FASTQ 转换工具集，常用 `prefetch` 下载 `.sra` 缓存，再用 `fasterq-dump` 转换为 FASTQ。Toolkit for downloading and converting SRA sequencing reads.

## 速览 | Quick Look

- 常见输入：SRA run accession, `.sra`
- 常见输出：FASTQ
- 典型场景：复现公开测序数据、批量下载 SRA reads、将 SRA 转换为 FASTQ

## 安装 | Install

```bash
mamba install -c bioconda sra-tools
```

## 常用命令 | Common Commands

下载一个 run：

```bash
prefetch SRR12345678 --output-directory sra_cache
```

转换为双端 FASTQ：

```bash
fasterq-dump sra_cache/SRR12345678/SRR12345678.sra \
  --split-files --threads 8 --outdir fastq
```

转换后压缩：

```bash
pigz -p 8 fastq/SRR12345678_*.fastq
```

批量处理 accession 列表：

```bash
while read acc; do
  prefetch "$acc" --output-directory sra_cache
  fasterq-dump "sra_cache/$acc/$acc.sra" --split-files --threads 8 --outdir fastq
done < runs.txt
```

## 关键参数 | Key Options

- `prefetch`：下载 SRA run 到本地缓存。
- `fasterq-dump`：将 SRA 转为 FASTQ。
- `--split-files`：双端 reads 输出为 `_1` 和 `_2` 文件。
- `--threads`：线程数。
- `--outdir`：输出目录。
- `--temp`：指定临时目录。

## 常见坑 | Pitfalls

- `fasterq-dump` 临时空间需求可能明显大于最终 FASTQ。
- 有些 run 是 single-end，使用 `--split-files` 也只会生成一个 FASTQ。
- 下载公开数据时建议记录 accession、数据库和下载日期。

## 参考 | References

- SRA Toolkit wiki: https://github.com/ncbi/sra-tools/wiki
- NCBI SRA: https://www.ncbi.nlm.nih.gov/sra

