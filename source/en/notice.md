# :warning: Read It Before Use

Thanks for using Saladict! Here are a few notes before you start. Also see the [complete manual](./manual.md) and [Q&A](./q&a.md).

:rotating_light: Saladict has its own [offical download page](https://saladict.crimx.com/download.html) and [backup page](https://github.com/crimx/ext-saladict/releases). You may also install Saladict in browser web stores which updates automatically.

If you download Saladict from sites that are not on the offical recommended list, please verify the extension ID on browser Extensions Management page. Saladict extensions with ID other than `cdonnmffkdaoajfknoeeecmchibpmkmg` (Firefox: `saladict@crimx.com`, Edge: `idghocbbahafpfhjnfhpbfbmpegphmmp`) could have potential risk of malware injection.

## Preset

1. If you want to enable Saladict on local pages please enable "Allow access to file URLs" on browser Extensions Management page.
1. Though it is recommmended to use any native PDF viewers you like with Saladict global shortkeys, PDF links can also be [automatically opened](./manual.md#open-setting) with Saladict built-in PDF viewer. You can also add sites to PDF Black/White list.
1. Keyboard shortcuts can be set on browser Extensions Management page.
1. With [other tools](./native.md) you can use Saladict to search text outside of browser.

### Limitations

1. Due to browser policies, extensions *cannot* visit Chrome Web Store/Firefox AMO and other extension's internal pages. But you can bypass that with [native search tools](./native.md).
1. **Do not** put Saladict into Extension Management type of extensions. These extensions will break Saladict's functionalities. Use Saladict's own switches and shortcuts instead.
1. If you set search mode to "Direct Search" with "Instant Capture", you should also set [keyborad shortcuts](./manual.md#shortcuts) to toggle Instant Capture.
1. Note that PDF does not guarantee semantic correctness. Some PDF generators may produce PDF file with layout that does not match its semantics. For example spaces between words are not actual space characters but simply by layout styling; paragraphs are not split by linebreak characters; letters in English words may even not from the English alphabet (e.g. `f` and `ƒ`). These are all common in PDF which has nothing to do with Saladict. If you have trobule with the PDF viewer in Saladict, try picking your own favorite native PDF viewer and go with [Search Words Outside of Browser](./native.md).

## Chrome

1. Chrome 76 contains bug which may cause random extension crashes. Please upgrade to Chrome 77 or newer.
1. Saldict will not offer a Chrome APP verison as the platform is deprecated by Google.

## Edge

1. Does not support immersive reader. But you can bypass that with [native search tools](./native.md).

## Firefox

1. If the browser action panel overflows please drag the Saladict icon out of the drawers.
1. Local PDF files cannot be opened via `file://` url in Firefox. Open the Saldict PDF viewer and load files from the viewer menus.
1. Firefox doest not support global browser shortcuts.
1. Youdao page translate has been removed from Firefox as Add-on reviewer requested.

## Opera

1. According to [#256](https://github.com/crimx/ext-saladict/issues/256) if you want Saladict to access search page results on Opera, enable "Allow access to search page result".


## :memo: Report issues

1. Report issues on [here](https://github.com/crimx/crx-saladict/issues).

