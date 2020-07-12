---
sidebar: 'auto'
---

# 浏览器外划词

让沙拉查词查询浏览器外的划词理论上有两种方式：

- 通过剪贴板做中转配合全局快捷键（目前的工具都是基于此原理）。
- 通过扩展 API 与本地程序通讯（尚未实现，欢迎 PR）。

## 无辅助查词

浏览器支持为扩展设置全局快捷键（火狐尚未支持），通过独立窗口沙拉查词可以在浏览器外查词。

1. 前往扩展管理中心为沙拉查词「在独立窗口中搜索剪贴板内容」[设置全局快捷键](./manual.md#shortcuts)。
2. 复制要查的文本，按下快捷键查词。

许多聪明的用户发现通过工具可以将此流程自动化，并抽时间编写了优秀的教程分享给大家，请为TA们点赞👍！

## Windows

### Quicker

<https://github.com/crimx/ext-saladict/issues/493>

此教程最大的亮点是作者大神继续扩展了工具链，支持 OCR 图片文字识别，支持一边标注 PDF 一边使用沙拉查词翻译，支持鼠标手势操作。

![Quicker](https://user-images.githubusercontent.com/38676455/68393366-db14e500-01a6-11ea-96fb-edeb2bc4a39c.gif)

### PantherBar

<https://github.com/crimx/ext-saladict/issues/605>

与 MacOS 下的 PopClip 类似。

![PantherBar](https://user-images.githubusercontent.com/38676455/71537746-8b0eff00-295b-11ea-9455-c6b56d395cf8.gif)

## MacOS

### Alfred Workflows

<https://github.com/crimx/ext-saladict/issues/509>

![Alfred Workflows](https://user-images.githubusercontent.com/8779091/66551929-fc1ff100-eb7a-11e9-9785-63693bcffd05.gif)

### Popclip

<https://github.com/crimx/ext-saladict/issues/463>

![Popclip](https://user-images.githubusercontent.com/51223743/70034632-705f9980-15ec-11ea-9e32-d6e2291ffef7.png)

如果聪明的你也发现了其它便捷的使用方式欢迎分享！

## 不打开浏览器直接召唤沙拉查词

1. 沙拉查词设置中开启「后台保持运行」。
2. 在 Chrome 设置中搜索 `background` 或者 `后台`，可以看到选项
   ```
   Continue running background apps when Google Chrome is closed
   ```
   启动即可。
3. 将 Chrome 加入开机启动。
