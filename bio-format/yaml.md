---
name: YAML
category: Configuration
aliases: [.yaml, .yml]
summary_zh: 常用于流程配置、环境定义和参数文件的人类可读结构化格式。
summary_en: Human-readable structured format commonly used for workflow configs, environments, and parameter files.
official: https://yaml.org/spec/
---

YAML
===

常用于流程配置、环境定义和参数文件的人类可读结构化格式。Human-readable structured format for configs and parameters.

## 常见用途 | Common Uses

- Nextflow/nf-core 参数文件。
- Conda environment 文件。
- pipeline sample/config metadata。

## 关键点 | Notes

- 缩进有语义，tab/space 混用容易出错。
- 字符串、布尔值和数字的自动解析要小心。
- 复杂配置建议配合 schema 校验。

## 参考 | References

- YAML specification: https://yaml.org/spec/
