# :warning: Read It Before You Use It

-----

**Chrome 76 contains bug which may cause random extension crashes. Please upgrade to Chrome 77 or newer**

-----

::: warning
Help translate this page to English.
:::

感谢使用沙拉查词！这里列举了一些初次使用需要注意的事项，以免产生不必要的问题。另外还有[完整使用说明](./manual/)和[常见问题及答复](./q&a/)。

:rotating_light: 如果在[官方平台](https://github.com/crimx/ext-saladict/releases)以外下载安装，请注意在浏览器扩展管理页面查看本扩展的 ID，Firefox 为 `saladict@crimx.com`，其它浏览器均为 `cdonnmffkdaoajfknoeeecmchibpmkmg`，安装了其它版本有可能被植入恶意代码，见「[克隆版名单](https://github.com/crimx/ext-saladict/wiki/Clones)」。

## 预设

1. 希望自动打开本地 PDF 链接或者对本地的网页划词翻译请在扩展管理页面勾选“允许访问文件网址”。 
1. 私隐原因查词记录默认关闭，如有需要请在[设置](./manual#open-setting)手动开启。
1. 点击 PDF 链接默认会用本扩展打开（**从 v7.5.3 开始默认关闭**，推荐使用本地阅读器搭配沙拉查词独立窗口划词），关闭了依然可以使用右键或[快捷键](./manual#shortcuts)的方式[打开 PDF](./manual#pdf)。**亦可对部分网站[设置 PDF 黑名单](./manual#black-white-list)**。
1. 部分功能支持设置[快捷键](./manual#shortcuts)，对于浏览器以外的选词，
   - 在 Windows 平台可以结合 [Quicker](https://github.com/crimx/ext-saladict/issues/493) 调用 Saladict。
     ![Quicker](https://user-images.githubusercontent.com/38676455/67744041-6bdb1a80-fa5b-11e9-93e0-6c39d76cc45d.gif)
   - 在 MacOS 平台可以结合 [Alfred Workflows](https://github.com/crimx/ext-saladict/issues/509) 或 [Popclip](https://github.com/crimx/ext-saladict/issues/463) 调用 Saladict。
     ![Popclip](https://user-images.githubusercontent.com/51223743/64909399-0c8ca980-d73e-11e9-965d-a413e586c911.png)
   - 另外还可以通过 [WGestures](https://github.com/crimx/ext-saladict/issues/366#issuecomment-495828772) 配置鼠标手势调用 Saladict。
     ![WGestures](https://user-images.githubusercontent.com/25548230/58363445-c8e40a80-7ed6-11e9-8c30-83824e64a8f2.gif)

### 局限性

1. 因浏览器安全策略，扩展**不能**在谷歌/火狐商店页面以及其它扩展的页面使用，这时可以用快捷键或者地址栏旁边的图标打开查词面板。
1. “直接查词”与鼠标“悬浮取词”一起启用时，要配合[快捷键](./manual#shortcuts)开启关闭。否则将发现鼠标不能选词。
1. 注意 PDF 是没有语义的，只负责保持样式一致。所以如果发现一些 PDF 文件划词显示不正确，如空格都没了，或者段落没有断行，这些都是正常现象。

## Chrome

1. 如果需要访问其它扩展页面，打开 `chrome://flags/#extensions-on-chrome-urls` 并启用该选项。注意这同时也给予了其它扩展访问其它扩展页面的权限，风险自行定夺。
1. Chrome APP 已在除 Chrome OS 的平台被抛弃，故不会再作实现。

## Firefox

1. 如果点击地址栏旁的图标打开，发现查词面板溢出了，请把 Saladict 图标从二级菜单中拖出来。

## Opera

1. 据 [#256](https://github.com/crimx/ext-saladict/issues/256) 新版 Opera 需要勾选才能让扩展访问搜索页。


## :memo: 反馈

1. 使用过程中有什么问题请到[这里](https://github.com/crimx/crx-saladict/issues)来反馈。

