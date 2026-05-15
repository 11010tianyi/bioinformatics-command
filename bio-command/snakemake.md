---
name: Snakemake
category: Workflow
formats: [YAML, JSON, HTML]
aliases: [workflow manager, Snakefile, reproducible pipeline]
tags: [workflow, reproducibility, HPC, conda]
summary_zh: Python 风格的可复现工作流引擎，常用于本地、HPC 和云端生信流程编排。
summary_en: Pythonic workflow engine for reproducible bioinformatics pipelines on local machines, HPC, and cloud environments.
install: mamba install -c conda-forge -c bioconda snakemake
official: https://snakemake.readthedocs.io/
---

Snakemake
===

Python 风格的可复现工作流引擎，常用于本地、HPC 和云端生信流程编排。Pythonic workflow engine for reproducible pipelines.

## 速览 | Quick Look

- 常见输入：Snakefile, config YAML/JSON, samplesheet
- 常见输出：pipeline results, DAG, HTML report
- 典型场景：小到中大型生信流程、规则依赖管理、Conda 环境自动创建

## 安装 | Install

```bash
mamba install -c conda-forge -c bioconda snakemake
```

## 常用命令 | Common Commands

本地运行：

```bash
snakemake --cores 8
```

空跑查看计划：

```bash
snakemake --dry-run --printshellcmds
```

使用 Conda 环境：

```bash
snakemake --cores 8 --use-conda
```

生成 DAG：

```bash
snakemake --dag | dot -Tpdf > dag.pdf
```

生成 HTML report：

```bash
snakemake --report report.html
```

## 关键参数 | Key Options

- `--cores`：本地核心数。
- `--dry-run`：只展示将运行的任务。
- `--printshellcmds`：打印 shell 命令。
- `--use-conda`：按 rule 创建 Conda 环境。
- `--configfile`：指定配置文件。
- `--rerun-incomplete`：重跑未完成任务。

## 常见坑 | Pitfalls

- 输入输出文件名是依赖图核心，通配符设计要稳定。
- Conda 环境解析慢时可以先小样本测试。
- HPC profile、资源声明和日志路径应尽早规范化。

## 参考 | References

- Official documentation: https://snakemake.readthedocs.io/
