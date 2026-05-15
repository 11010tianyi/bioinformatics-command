---
name: SnpEff
category: Variant annotation
formats: [VCF, HTML]
aliases: [variant effect, annotation, snpsift]
tags: [annotation, VCF, effect prediction]
summary_zh: 快速变异影响注释工具，可为 VCF 添加基因、转录本和预测后果信息。
summary_en: Fast variant effect annotation tool that adds gene, transcript, and consequence annotations to VCF files.
install: mamba install -c bioconda snpeff
official: https://pcingola.github.io/SnpEff/
---

SnpEff
===

快速变异影响注释工具，可为 VCF 添加基因、转录本和预测后果信息。Fast variant effect annotator for VCF files.

## 速览 | Quick Look

- 常见输入：VCF, SnpEff database
- 常见输出：annotated VCF, HTML summary
- 典型场景：SNP/indel effect annotation、快速功能分层、和 SnpSift 联用过滤

## 安装 | Install

```bash
mamba install -c bioconda snpeff
```

## 常用命令 | Common Commands

查看可用数据库：

```bash
snpEff databases | less -S
```

下载数据库：

```bash
snpEff download GRCh38.99
```

注释 VCF：

```bash
snpEff -v GRCh38.99 input.vcf.gz > input.snpeff.vcf
```

压缩并索引：

```bash
bgzip -c input.snpeff.vcf > input.snpeff.vcf.gz
tabix -p vcf input.snpeff.vcf.gz
```

## 关键参数 | Key Options

- `download`：下载数据库。
- `-v`：输出详细日志和 summary。
- `-stats`：指定 HTML 统计报告。
- `-canon`：优先 canonical transcripts。
- `-no-downstream` / `-no-upstream`：关闭上下游注释。

## 常见坑 | Pitfalls

- 数据库名和参考版本必须匹配。
- 输出 VCF 可能很大，通常用 bgzip/tabix 处理。
- SnpEff 注释字段较丰富，下游解析前先确认 ANN 字段结构。

## 参考 | References

- Official documentation: https://pcingola.github.io/SnpEff/
