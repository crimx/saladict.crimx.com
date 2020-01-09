# Works Outside of Browser

Theoretically there are two ways to make Saladict work outside of browser:

- Search clipboard content with global shortcut(which is the theory behind all current toolchains).
- Native messaging via browser API(Not implemented. PRs are welcomed!).

## Search directly

浏览器支持为扩展设置全局快捷键，通过独立窗口沙拉查词可以在浏览器外查词。

Browser offers global shortcuts settings for extensions through which we can search text on any place.

1. Open `chrome://extensions/shortcuts`, set a `Global` shortcut for ***Search clipboard content in Standalone Panel***.
2. Copy any text, then press the shortkeys.

许多聪明的用户发现通过工具可以将此流程自动化，感谢ta们无私分享这些优秀的教程！

Many brilliant users on Saladict have found out ways to automate this process with other tools. Thank them for taking the time to share all these magnificent tutorials!

## Windows

### Quicker

<https://github.com/crimx/ext-saladict/issues/493>

The author also shared tutorials on OCR, PDF notation and mouse gesture!

![Quicker](https://user-images.githubusercontent.com/38676455/68393366-db14e500-01a6-11ea-96fb-edeb2bc4a39c.gif)

### PantherBar

<https://github.com/crimx/ext-saladict/issues/605>

Similar to PopClip on MacOS.

![PantherBar](https://user-images.githubusercontent.com/38676455/71537746-8b0eff00-295b-11ea-9455-c6b56d395cf8.gif)

## MacOS

### Alfred Workflows

<https://github.com/crimx/ext-saladict/issues/509>

![Alfred Workflows](https://user-images.githubusercontent.com/8779091/66551929-fc1ff100-eb7a-11e9-9785-63693bcffd05.gif)

### Popclip

<https://github.com/crimx/ext-saladict/issues/463>

![Popclip](https://user-images.githubusercontent.com/51223743/70034632-705f9980-15ec-11ea-9e32-d6e2291ffef7.png)

Got more ideas? Welcome to share your own tutorials!

## Trigger Saladict Searching Without Opening Browser

1. Search `background` in Chrome Settings, enable:
   ```
   Continue running background apps when Google Chrome is closed
   ```
2. Add Chrome to system startup.
