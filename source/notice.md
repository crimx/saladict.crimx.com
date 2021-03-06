# :warning:（重要）初次使用注意事项！！！
-----

感谢使用沙拉查词！这里列举了一些初次使用需要注意的事项，以免产生不必要的问题。另外还有[完整使用说明](./manual.md)和[常见问题及答复](./q&a.md)。

:rotating_light: 沙拉查词有[官网下载页面](https://saladict.crimx.com/download.html)以及[备用页面](https://github.com/crimx/ext-saladict/releases)，各大扩展商店也都可以直接安装自动更新。

如果在官方平台以外下载安装，请注意在浏览器扩展管理页面查看本扩展的 ID，Firefox 为 `saladict@crimx.com`，Edge 为 `idghocbbahafpfhjnfhpbfbmpegphmmp`，其它浏览器均为 `cdonnmffkdaoajfknoeeecmchibpmkmg`，安装了其它版本有可能被植入恶意代码，见「[克隆版名单](https://github.com/crimx/ext-saladict/wiki/Clones)」。

## 预设

1. 希望自动打开本地 PDF 链接或者对本地的网页划词翻译请在扩展管理页面勾选“允许访问文件网址”。 
1. 点击 PDF 链接默认会用本扩展打开（**从 v7.5.3 开始默认关闭**，推荐使用本地阅读器搭配沙拉查词[浏览器外划词](./native.md)），可在[设置](./manual.md#open-setting)中开启关闭。关闭了依然可以使用右键或[快捷键](./manual.md#shortcuts)的方式[打开 PDF](./manual.md#pdf)。**亦可对部分网站[设置 PDF 黑名单](./manual.md#black-white-list)**。
1. 部分功能支持设置[快捷键](./manual.md#shortcuts)。
1. 可[搭配工具](./native.md)实现浏览器外划词。
1. 地址栏旁的沙拉按钮默认为网页翻译功能，如需要改为打开查词面板或其它功能，请打开设置「右上弹框」。

### 局限性

1. 因浏览器安全策略，扩展**不能**在谷歌/火狐商店页面以及其它扩展的页面使用，这时可以用快捷键或者地址栏旁边的图标打开查词面板。
1. **请勿**将沙拉查词放入扩展管理类的扩展中，这类扩展会破坏沙拉查词的生命周期，导致无法在页面中划词。沙拉查词自带开关与快捷键，可以灵活管理。
1. “直接查词”与鼠标“悬浮取词”一起启用时，要配合[快捷键](./manual.md#shortcuts)开启关闭。否则将发现鼠标不能选词。
1. 注意 PDF 是没有语义的，只负责保持渲染出来的结果看上去一致。所以根据 PDF 制作软件的不同，一些 PDF 文件可能会出现排版与实际语义不相符的情况，如空格并不是由空格字符隔开，而是由排版分开，故划词时会出现单词粘连；同样，段落也可能不是由断行符分割；一些英文单词甚至不是由英文字母构成，而是类似的字符，如 `f` 和 `ƒ`。这些都是常见现象，并不是沙拉查词的问题。如使用沙拉查词自带的 PDF 阅读器出现问题，建议使用自己喜欢的本地 PDF 阅读器搭配沙拉查词[浏览器外划词](./native.md)。

## Chrome

1. 注意扩展快捷键第一个「激活该扩展程序/Activate the extension」为 Chrome 为每个扩展自动生成的，相当于点击地址栏旁的扩展图标，可能不支持全局快捷键。
1. Chrome 76 存在 bug 导致部分扩展会出现随机崩溃， 如果不幸中奖请更新到 Chrome 77 或之后的版本。
1. Chrome APP 已在除 Chrome OS 的平台被抛弃，故不会再作实现。

## Edge

1. 浏览器内划词不支持沉浸阅读模式，请配合[浏览器外划词](./native.md)使用。

## Safari

请访问 <https://saladict.crimx.com/safari> 。

## Firefox

1. 如果点击地址栏旁的图标打开，发现查词面板溢出了，请把 Saladict 图标从二级菜单中拖出来。
1. 火狐不支持通过链接打开本地 PDF 文件，需要打开沙拉查词 PDF 阅读器后从里面的菜单按钮加载。
1. 火狐不支持全局浏览器快捷键，故无法支持浏览器外划词。
1. 火狐浏览器上去除了有道网页翻译功能。因为该功能是在有道混淆过的代码上面修改，而火狐扩展审核要求必须提供所有源码。

## Opera

1. 据 [#256](https://github.com/crimx/ext-saladict/issues/256) 新版 Opera 需要勾选才能让扩展访问搜索页。


## :memo: 反馈

1. 使用过程中有什么问题请到[这里](https://github.com/crimx/crx-saladict/issues)来反馈。

