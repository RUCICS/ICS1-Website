---
description: 关于实验报告提交的注意事项
---

# 实验报告提交

为了确保实验报告的质量和一致性，我们对报告的格式、内容和提交方式有一些具体要求。请仔细阅读以下指南。

## 1. 报告格式

我们推荐使用 Markdown 格式编写报告，并将其导出为 PDF 文件。Markdown 支持简单的公式和表格编写，非常适合用于实验报告。

### 1.1 Markdown 转 PDF 的方法

#### 方法一：使用 Typora（推荐）

Typora 是一款优秀的 Markdown 编辑器，可以直接导出 PDF。你可以从 [Typora 官网](https://typora.io/#download) 下载安装。

#### 方法二：使用 VS Code

1. 安装 VS Code 插件 "Markdown PDF"
2. 使用快捷键 `Command+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows/Linux）
3. 搜索 "export" 并选择 "Export PDF"

#### 方法三：使用 pandoc（不推荐）

如果无法使用上述方法，可以考虑使用 pandoc。但请注意，这种方法需要较大的磁盘空间（>2G），且转换效果可能不如前两种方法。

环境配置（占用空间较大，>2G）：

```bash
sudo apt-get install pandoc texlive-xetex texlive-lang-chinese
```

检查系统安装的中文字体：

```bash
fc-list :lang=zh
```

转化命令：

```bash
pandoc -s report.md -o report.pdf --pdf-engine=xelatex -V CJKmainfont="字体名称"
```

## 2. 报告内容要求

### 2.1 通用要求

1. 避免贴大段代码，可以使用以下方法:

   - 使用伪代码
   - 用注释替代不重要的部分
   - 如必须贴代码，请分小段复制并配合文字解释

2. 对于长段内容，使用"总分"格式组织:

   - 先分点简述
   - 再展开详细内容
   - 优先讲述最重要的部分

3. 不要写大段"助教已知"的内容，除非特别要求。

4. 尽量精简内容，不要用生成式 AI 工具的车轱辘话来应付报告，我们宁愿你写得很短。

### 2.2 具体实验要求

每个实验都有其特定的报告模板，包含了助教希望你填写的具体内容。请务必参考相应的模板:

- 通用要求: `report/README.md`
- 具体实验要求: 如 `report/DataLab.md`

## 3. 报告提交

### 3.1 提交方式

将你的实验仓库 push 到 GitHub 上游仓库即可完成提交。

### 3.2 文件结构

提交时，你的目录结构应该如下:

```
|- report
  |- report.md
  |- report.pdf
  |- imgs
    |- img1.png
    |- img2.png
```

注意: 无论使用何种格式，都需要同时提交**源文件**和**转换后的 PDF 文件**。
