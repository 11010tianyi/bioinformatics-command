---
name: ZIP
category: Archive
aliases: [.zip]
summary_zh: 通用压缩归档格式，FastQC 等工具会把机器可读结果打包为 ZIP。
summary_en: General archive format; tools such as FastQC package machine-readable outputs as ZIP files.
official: https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
---

ZIP
===

通用压缩归档格式，FastQC 等工具会把机器可读结果打包为 ZIP。General archive format used by tools such as FastQC.

## 常见用途 | Common Uses

- FastQC 原始结果包。
- 分发报告附属资源。
- 小型结果归档。

## 关键点 | Notes

- HTML 报告常用于人工查看，ZIP 内部数据更适合程序解析。
- MultiQC 可直接识别许多工具的 ZIP/日志结果。

## 参考 | References

- ZIP APPNOTE: https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
