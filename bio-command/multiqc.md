---
name: MultiQC
category: QC summary
formats: [HTML, TSV, JSON]
aliases: [report aggregation, qc summary]
tags: [QC, reporting, pipeline]
summary_zh: 汇总 FastQC、fastp、STAR、samtools 等工具报告，生成统一 QC 报告。
summary_en: Aggregates reports from tools such as FastQC, fastp, STAR, and samtools into one QC report.
install: mamba install -c bioconda multiqc
official: https://docs.seqera.io/multiqc/
---

MultiQC
===

汇总 FastQC、fastp、STAR、samtools 等工具报告，生成统一 QC 报告。Aggregates reports from tools such as FastQC, fastp, STAR, and samtools into one QC report.

## 速览 | Quick Look

- 常见输入：各类工具日志/报告目录
- 常见输出：`multiqc_report.html`, `multiqc_data/`
- 典型场景：项目级 QC 汇总、pipeline 结果检查

## 安装 | Install

```bash
mamba install -c bioconda multiqc
```

## 常用命令 | Common Commands

扫描当前项目：

```bash
multiqc . -o qc/multiqc
```

只扫描指定目录：

```bash
multiqc qc/fastqc qc/fastp align_logs -o qc/multiqc
```

覆盖旧报告：

```bash
multiqc . -o qc/multiqc --force
```

导出额外数据：

```bash
multiqc . -o qc/multiqc --data-format json
```

## 关键参数 | Key Options

- `-o`：输出目录。
- `--force`：覆盖已有输出。
- `--filename`：自定义 HTML 报告名。
- `--ignore`：忽略路径或文件。
- `--module`：只运行指定模块。

## 常见坑 | Pitfalls

- MultiQC 依赖文件名和日志格式识别模块，移动或改名太激进可能影响识别。
- 一些工具日志需要保留原始结尾，如 STAR 的 `Log.final.out`。
- 大项目建议按批次和最终汇总分别生成报告。

## 参考 | References

- Official documentation: https://docs.seqera.io/multiqc/
- Supported tools: https://docs.seqera.io/multiqc/modules/
