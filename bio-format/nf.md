---
name: NF
category: Workflow
aliases: [.nf, Nextflow script]
summary_zh: Nextflow 流程脚本文件，描述 process、channel 和 workflow 逻辑。
summary_en: Nextflow pipeline script describing processes, channels, and workflow logic.
official: https://www.nextflow.io/docs/latest/script.html
---

NF
===

Nextflow 流程脚本文件，描述 process、channel 和 workflow 逻辑。Nextflow pipeline script format.

## 常见用途 | Common Uses

- `main.nf` 工作流入口。
- 模块化 process 定义。
- nf-core pipeline 组织。

## 关键点 | Notes

- 运行参数通常不写死在 `.nf`，而放在 config 或 params 文件中。
- DSL2 是当前主流写法。
- 与 container/profile/cache 共同决定可复现性。

## 参考 | References

- Nextflow scripting: https://www.nextflow.io/docs/latest/script.html
