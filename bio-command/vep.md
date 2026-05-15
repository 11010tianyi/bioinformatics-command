---
name: Ensembl VEP
category: Variant annotation
formats: [VCF, TSV, JSON]
aliases: [Variant Effect Predictor, variant annotation]
tags: [annotation, VCF, consequence, Ensembl]
summary_zh: Ensembl Variant Effect Predictor，用于注释变异对转录本、蛋白和调控区域的潜在影响。
summary_en: Ensembl Variant Effect Predictor annotates variant consequences on transcripts, proteins, and regulatory regions.
install: mamba install -c bioconda ensembl-vep
official: https://www.ensembl.org/info/docs/tools/vep/index.html
---

Ensembl VEP
===

Ensembl Variant Effect Predictor，用于注释变异对转录本、蛋白和调控区域的潜在影响。VEP annotates variant consequences using Ensembl resources.

## 速览 | Quick Look

- 常见输入：VCF
- 常见输出：annotated VCF, TSV, JSON
- 典型场景：变异功能注释、转录本后果预测、临床/群体变异初步解释

## 安装 | Install

```bash
mamba install -c bioconda ensembl-vep
```

## 常用命令 | Common Commands

VCF 注释并输出 VCF：

```bash
vep -i input.vcf.gz -o annotated.vcf.gz \
  --vcf --compress_output bgzip \
  --cache --offline --assembly GRCh38 \
  --fork 8
```

输出表格：

```bash
vep -i input.vcf.gz -o annotated.tsv \
  --tab --cache --offline --assembly GRCh38 \
  --symbol --canonical --protein --fork 8
```

添加常用字段：

```bash
vep -i input.vcf.gz -o annotated.vcf.gz --vcf \
  --cache --offline --assembly GRCh38 \
  --symbol --canonical --mane --af --max_af --fork 8
```

## 关键参数 | Key Options

- `--cache` / `--offline`：使用本地缓存。
- `--assembly`：参考版本，如 GRCh37/GRCh38。
- `--vcf` / `--tab` / `--json`：输出格式。
- `--symbol`：添加 gene symbol。
- `--canonical`：标记 canonical transcript。
- `--fork`：并行进程数。

## 常见坑 | Pitfalls

- VEP cache 版本要和 Ensembl release、参考版本匹配。
- 染色体命名和 assembly 错配会导致注释缺失。
- 注释不等于临床解读，临床场景需要额外证据和规范。

## 参考 | References

- Official documentation: https://www.ensembl.org/info/docs/tools/vep/index.html
- VEP command line docs: https://www.ensembl.org/info/docs/tools/vep/script/index.html

