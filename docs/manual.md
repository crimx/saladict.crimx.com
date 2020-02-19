# 沙拉查词使用方式

下载[最新发布版本](https://github.com/crimx/ext-saladict/releases)。



## 打开扩展选项 {#open-setting}

入口：

1. 右击右上方地址栏旁的图标，可看到选项。
2. 扩展管理页面，找到“沙拉查词”，可看到“选项”。
3. 查词面板绿色任务栏上的菜单图标
   ![taskbar][taskbar]



## 多词典支持 {#dicts}

精选大量词典，手工打磨排版，涵盖几乎所有领域。

高度[可配置](#dict-settings)的多词典支持是本扩展的一个亮点，个人按需配置可以加快查询速度以及提升阅读效率。词典接口一般很稳定，但长时间下来难免会遇到不兼容的更新，如有发现请及时[反馈](https://github.com/crimx/crx-saladict/issues)。



## 支持自动发音 {#autopron}

- [打开扩展选项](#open-setting)；
- 分别选择中英文自动发音；
- 英文会有英美音偏好选项，支持的词典会优先选择该口音。



## 各个词典个性化调整 {#dict-settings}

- [打开扩展选项](#open-setting)；
- 在“**词典设置**”配置词典
  - 配置结果会在右方实时显示；
  - “**添加**”按钮可以增加其它支持的词典；
  - **拖动词典**可以排序；
  - 点击每个词典可展开配置选项
    - “**默认展开**”关闭的词典不会自动开始搜索，需要手动展开才会搜索。适合一些不常用但又必须的词典，以加快加载速度，以及查询频率有限制的词典（《双语例句》）；
    - “**查中（英）文时显示**”可以配置词典仅在划词包含某种语言的情况下显示，节省空间和加快速度；
    - “**默认高度**”为词典展示的初始高度，如果词典结果比此高度要长，会先显示默认高度，同时下部会有下箭头按钮展开全部结果；如果结果长度比此高度要短则按结果长度显示。此选项针对优化显示多词典结果设计，对于不喜欢点两遍展开的朋友只需将值调得非常大就可以；
    - 余下的选项因词典而异，按需配置。



## 谷歌和有道网页翻译 {#page-trans}

**注意**

- [有道网页翻译](http://fanyi.youdao.com/web2/)已经多年没有更新，我做了些维护，将其内置到 Saladict 并支持 https 网页。（因基于有道混淆过的代码修改，应火狐要求已在该浏览器上去除此功能。）
- Google 网页翻译是直接用的官方脚本，部分网站可能不支持。如果你有兴趣对其进行改进欢迎提交 PR。
- 百度、搜狗网页翻译是通过将网页内嵌到它们自身网页上实现翻译的。请勿在翻译后的页面输入个人资料。出于安全原因有的网页可能不允许被嵌入。
- 其它网页翻译扩展可以用 [Google 翻译](https://chrome.google.com/webstore/detail/aapbdbdomjkkjkaonfhkkikfgjllcleb/)和[彩云小译](https://chrome.google.com/webstore/detail/jmpepeebcbihafjjadogphmbgiffiajh)。

![youdao page translation][youdao-page]

入口：

1. 右击右上方地址栏旁的图标，可看到选项；
2. 在[右键菜单设置]里添加了，则可以在右键中使用。


## 右键菜单页面直达 {#context-menus}

在设置页面可配置右键菜单，选择文字之后右击既可调整各个词典。

可添加自定义链接。`%s` 会被替换为划词。


## 四种划词方式，鼠标悬浮取词 {#mode}

多种查词方式覆盖了大多数用户的习惯，创新的 iframe 划词可以支持各种大小的第三方页面。

- [打开扩展选项](#open-setting)。
- “**查词模式**”选择查词模式。
- 当用鼠标在网页上选择了一段文本
  - “**显示图标**”会先在鼠标附近显示一个图标，鼠标移上去后才显示词典面板；
  - “**直接搜索**”则不显示图标，直接显示词典面板；
  - “**双击搜索**”双击选择文本之后直接显示词典面板；
    - 选择“双击搜索”之后会出现新的框可以调整双击的间隔时长，以适应不同人的按键速度；
  - “**按住 Ctrl/⌘**”在选择文本时需同时按住 <kbd>Ctrl</kbd> 或者 <kbd>Command ⌘</kbd> 键才显示词典面板。
  - “**鼠标悬浮取词**”会自动选择鼠标下方的文字。

查词面板钉住后以及面板内部可另外配置查词模式。



## 音频 AB 循环与变速播放 {#audio}

浏览器音频变速同时也会导致变调，开启 Pitch Stretch 可保持正常声调，目前使用的库可能会在一些浏览器上出现噪音，关闭即可。

![waveform][waveform]



## 查词面板钉住与拖动 {#pin}

![pin panel][pin]

点击查词面板绿色任务栏上的“图钉”图标即可“钉住”面板，面板不会消失，除非点击面板的“**×**”按钮。

任务栏中间的空白部分按住可以拖动面板。

钉住之后可设置三种查词模式，参考[查词模式](#mode)。



## 情境模式 {#profile}

每个模式下的设置都是独立的，互不干扰。预设了几个模式，可满足几个不同的使用场景。可再搭配设置不同划词方式等等...限制的只有想象力。

鼠标悬浮在查词面板的菜单图标上可快速切换，或者焦点选中菜单图标然后按<kbd>↓</kbd>。

![taskbar][taskbar]

在[选项](#open-setting)页面可配置各个模式。



## 快捷键操作 {#shortcuts}

Chrome 所有版本都支持，在扩展管理页面的左上方点开菜单按钮可看到，或者直接打开 `chrome://extensions/shortcuts`。其中“激活该扩展程序”代表点击地址栏旁的图标。

Firefox 66 开始支持，在扩展管理页面 `about:addons` 上方的齿轮设置按钮点开最底 `Manage Extension Shortcuts`。

另外还支持[浏览器外选词](./native.md)以及 [OCR 图像识别查词](./ocr.md)。

## 支持独立窗口快捷查词 {#triple-ctrl}

三按 ctrl （或设置其它快捷键）即可跳出快捷查词面板。可设置自动获取剪贴板数据以及自动查词。

面板默认是独立窗口，配合浏览器[全局快捷键](#shortcuts)可随时调出来，非常方便。

点击菜单栏「钉住按钮」可以控制查词时独立窗口是否占焦点（跳到最前）。注意这里不是“保持最前”因为浏览器没有提供这个接口。

可在设置中配置响应主页面划词，若要响应浏览器外划词，见[快捷键设置](#shortcuts)。

设置中开启侧边栏模式可以方便并排查词。

- [打开扩展选项](#open-setting)；
- “**快捷查词**”配置快捷查词
  - 可选择预先加载的来源，“**剪贴板**”、“**页面划词**”从当前页面上获取单词或者“**无**”不预载；
  - 开启“**自动查词**”面板将会在出现后马上开始查词；
  - “**出现位置**”可配置 9 个方位。



## 点击图标快速查词 {#popup-icon}

因安全问题，chrome 会限制扩展访问一些页面，比如 chrome 商店、其它扩展页面……

在不能享受划词翻译支持的页面也可以点击右上方地址栏旁的图标打开查词面板，事先复制文字可以快速查词。

- [打开扩展选项](#open-setting)；
- “**右上弹框**”配置图标快速查词
  - 可选择预先加载的来源，“**剪贴板**”、“**页面划词**”从当前页面上获取单词或者“**无**”不预载；
  - 开启“**自动查词**”面板将会在出现后马上开始查词；



## 生词本与查词历史 {#search-history}

本扩展支持添加生词与记录查词历史，并提供管理页面。

![screen-notebook][screen-notebook]]

注意卸载扩展或使用系统清理工具可能会将记录一并清除，请定期导出文件或设置同步。

因浏览器自带同步容量有限，仅设置本身采用了浏览器同步，单词本需手动设置。目前支持 WebDAV 服务器，如坚果云或 DropDAV 。

入口：

1. 查词面板绿色任务栏上的心型图标和时间图标，左击笔记本添加生词，右击进入生词本页面；  
   ![taskbar][taskbar]
2. 右击右上方地址栏旁的图标，可看到相应选项。

Saladict 6 中，点击心型图标后默认会并列显示查词面板和编辑面板。可在[选项](#open-setting)中关闭。

![notebook][notebook]

导出记录时可修改导出模板，使用替换符代表生成的内容。[导出 ANKI](./ANKI) 时推荐使用反引号 `` ` `` 作为分隔符。



## 黑白名单 {#black-white-list}

打开[扩展选项](#open-setting)配置。同时支持 PDF 黑白名单。可以匹配特定网页屏蔽拦截。网址支持[匹配模式](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#%E8%8C%83%E4%BE%8B)。



## 支持 PDF 划词 {#pdf}

因安全原因，扩展访问不了浏览器的 PDF 插件，但得益于 [pdf.js](https://github.com/mozilla/pdf.js)，扩展现自带了一个 PDF 阅读器。

默认会让本扩展打开所有 PDF 链接（包括本地路径，如果勾选了“[允许访问文件网址](/images/ext-setting.png)”），可在[设置](#open-setting)中关闭。

Firefox 目前不支持本地路径拦截，可以在 Saladict 的 PDF 页面中按右上方的按钮打开本地文件。

注意：

- 如果 PDF 是扫描的或者是其它图片类型，里面没有文字的都不能划译。
- **另外 PDF 是没有语义的，只负责保持样式一致。所以如果 PDF 划词显示不正确请先自行复制一遍原文粘贴到纯文本编辑器上看看是不是 PDF 的问题。**

其它入口：

1. 右击右上方地址栏旁的图标，可看到选项。
   - 如果当前页面是 PDF 链接，扩展会加载当前 PDF 链接。
   - 否则打开默认 PDF 页面。
2. 右键点击网页上的任意链接会看到“**打开为 PDF**”选项（选项可能会归进“**沙拉查词**”中）。
3. 打开 PDF 页面后顶部有按钮可以打开本地 PDF 。
4. 设置浏览器[快捷键](#shortcuts)。



## 当前页面二维码 {#qrcode}

查看当前页面链接的二维码。

点击右上方地址栏旁的图标打开查词面板，在最下方可看到二维码图标，鼠标移上去即可显示。


[taskbar]: https://image.baidu.com/search/down?tn=download&url=https://wx1.sinaimg.cn/large/6e3591e5gy1gc29418yaij20do039a9t.jpg
[screen-notebook]: https://image.baidu.com/search/down?tn=download&url=https://wx4.sinaimg.cn/large/6e3591e5gy1gc294iulgqj211c0cdt8v.jpg

[pin]: https://image.baidu.com/search/down?tn=download&url=https://wx1.sinaimg.cn/large/6e3591e5gy1gc295dv2feg20lx0hynpd.gif
[youdao-page]: https://image.baidu.com/search/down?tn=download&url=https://wx4.sinaimg.cn/large/6e3591e5gy1gc294odd4zg20sq0hywl0.gif
[waveform]: https://image.baidu.com/search/down?tn=download&url=https://wx4.sinaimg.cn/large/6e3591e5gy1gc294s0jc6g20hb0if7fx.gif
[notebook]: https://image.baidu.com/search/down?tn=download&url=https://wx1.sinaimg.cn/large/6e3591e5gy1gc295is219g21090i64qp.gif
