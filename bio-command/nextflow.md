---
name: Nextflow
category: Workflow
formats: [NF, YAML, JSON, HTML]
aliases: [nf-core, workflow manager, pipeline]
tags: [workflow, reproducibility, HPC, cloud]
summary_zh: 面向可复现生信流程的工作流引擎，常与 nf-core、Conda、Docker/Singularity 配合使用。
summary_en: Workflow engine for reproducible bioinformatics pipelines, commonly used with nf-core, Conda, Docker, and Singularity.
install: mamba install -c bioconda nextflow
official: https://www.nextflow.io/docs/latest/
---

Nextflow
===

面向可复现生信流程的工作流引擎，常与 nf-core、Conda、Docker/Singularity 配合使用。Workflow engine for reproducible bioinformatics pipelines, commonly used with nf-core, Conda, Docker, and Singularity.

## 速览 | Quick Look

- 常见输入：pipeline script, samplesheet, params
- 常见输出：pipeline results, reports, trace/timeline/DAG
- 典型场景：RNA-seq、WGS、ATAC-seq、单细胞等标准流程运行

## 安装 | Install

```bash
mamba install -c bioconda nextflow
```

## 常用命令 | Common Commands

运行 nf-core/rnaseq：

```bash
nextflow run nf-core/rnaseq \
  -profile docker \
  --input samplesheet.csv \
  --outdir results \
  --genome GRCh38
```

恢复中断任务：

```bash
nextflow run nf-core/rnaseq -resume -profile conda --input samplesheet.csv --outdir results
```

查看执行记录：

```bash
nextflow log
nextflow log <run_name> -f process,hash,status,exit,workdir
```

清理 work 目录中无用缓存：

```bash
nextflow clean -f
```

## 关键参数 | Key Options

- `run`：运行本地或远程 pipeline。
- `-profile`：选择执行环境，如 `conda`, `docker`, `singularity`, `slurm`。
- `-resume`：复用缓存继续运行。
- `-params-file`：从 JSON/YAML 读取参数。
- `-with-report`, `-with-trace`, `-with-timeline`, `-with-dag`：生成运行报告。

## 常见坑 | Pitfalls

- `-resume` 依赖 work 目录和任务 hash，改参数可能触发重跑。
- HPC 上容器、文件系统、队列参数通常写在 profile/config 里。
- nf-core pipeline 参数较多，正式运行前先 `-profile test` 或小样本试跑。

## 参考 | References

- Official documentation: https://www.nextflow.io/docs/latest/
- nf-core: https://nf-co.re/
