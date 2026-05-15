---
name: SAF
category: Annotation
aliases: [Simplified Annotation Format, .saf]
summary_zh: featureCounts 支持的简化注释格式，用少量列描述可计数 feature。
summary_en: Simplified annotation format supported by featureCounts for countable genomic features.
official: https://subread.sourceforge.net/SubreadUsersGuide.pdf
---

SAF
===

featureCounts 支持的简化注释格式，用少量列描述可计数 feature。Simplified annotation format supported by featureCounts.

## 常见用途 | Common Uses

- 自定义 target/read counting 注释。
- 不方便使用 GTF/GFF 时的 featureCounts 输入。
- panel、peak、custom region 计数。

## 关键点 | Notes

- 常见列为 `GeneID`, `Chr`, `Start`, `End`, `Strand`。
- 坐标语义按 featureCounts 文档执行。
- 比 GTF 更简单，但生物学层级信息更少。

## 参考 | References

- Subread user guide: https://subread.sourceforge.net/SubreadUsersGuide.pdf
