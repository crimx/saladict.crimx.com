# :warning:（重要）初次使用注意事项！！！
-----

感谢使用沙拉查词！这里列举了一些初次使用需要注意的事项，以免产生不必要的问题。另外还有[完整使用说明](./manual.md)和[常见问题及答复](./q&a.md)。

:rotating_light: 如果在[官方平台](https://github.com/crimx/ext-saladict/releases)以外下载安装，请注意在浏览器扩展管理页面查看本扩展的 ID，Firefox 为 `saladict@crimx.com`，Edge 为 `idghocbbahafpfhjnfhpbfbmpegphmmp`，其它浏览器均为 `cdonnmffkdaoajfknoeeecmchibpmkmg`，安装了其它版本有可能被植入恶意代码，见「[克隆版名单](https://github.com/crimx/ext-saladict/wiki/Clones)」。

## 预设

1. 希望自动打开本地 PDF 链接或者对本地的网页划词翻译请在扩展管理页面勾选“允许访问文件网址”。 
1. 点击 PDF 链接默认会用本扩展打开（**从 v7.5.3 开始默认关闭**，推荐使用本地阅读器搭配沙拉查词[浏览器外划词](./native.md)），可在[设置](./manual.md#open-setting)中开启关闭。关闭了依然可以使用右键或[快捷键](./manual.md#shortcuts)的方式[打开 PDF](./manual.md#pdf)。**亦可对部分网站[设置 PDF 黑名单](./manual.md#black-white-list)**。
1. 部分功能支持设置[快捷键](./manual.md#shortcuts)。
1. 可[搭配工具](./native.md)实现浏览器外划词。
1. 网页翻译默认关闭。因网页翻译其实不需要沙拉查词，故该功能已进入维护状态，不再新增功能，请使用官方的扩展如彩云小译和谷歌翻译。

### 局限性

1. 因浏览器安全策略，扩展**不能**在谷歌/火狐商店页面以及其它扩展的页面使用，这时可以用快捷键或者地址栏旁边的图标打开查词面板。
1. “直接查词”与鼠标“悬浮取词”一起启用时，要配合[快捷键](./manual.md#shortcuts)开启关闭。否则将发现鼠标不能选词。
1. 注意 PDF 是没有语义的，只负责保持样式一致。所以如果发现一些 PDF 文件划词显示不正确，如空格都没了，或者段落没有断行，这些都是正常现象。推荐使用自己喜欢的本地 PDF 阅读器。

## Chrome

1. Chrome 76 存在 bug 导致部分扩展会出现随机崩溃， 如果不幸中奖请更新到 Chrome 77 或之后的版本。
1. Chrome APP 已在除 Chrome OS 的平台被抛弃，故不会再作实现。

---
sidebar: 'auto'
---

## Edge

1. 浏览器内划词不支持沉浸阅读模式，请配合[浏览器外划词](./native.md)使用。

## Firefox

1. 如果点击地址栏旁的图标打开，发现查词面板溢出了，请把 Saladict 图标从二级菜单中拖出来。
1. 火狐浏览器上去除了有道网页翻译功能。因为该功能是在有道混淆过的代码上面修改，而火狐扩展审核要求必须提供所有源码。

## Opera

1. 据 [#256](https://github.com/crimx/ext-saladict/issues/256) 新版 Opera 需要勾选才能让扩展访问搜索页。


## :memo: 反馈

1. 使用过程中有什么问题请到[这里](https://github.com/crimx/crx-saladict/issues)来反馈。

