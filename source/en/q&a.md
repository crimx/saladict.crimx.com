---
tocMaxLevel: 1
---

# Common Questions

### Saladict will not open. Clicking its toolbar icon only displays a blank box.

This often happens after a browser update. Chromium-based browsers occasionally trigger a storage-related bug during an update, and restarting your device usually resolves it. See [#183](https://github.com/crimx/ext-saladict/issues/183), [#295](https://github.com/crimx/ext-saladict/issues/295), and [#329](https://github.com/crimx/ext-saladict/issues/329). If the problem continues, please open a new issue.

### Text-selection lookup fails on one website but works everywhere else.

Open a new [issue](https://github.com/crimx/ext-saladict/issues) and follow the issue template closely. Include the exact URL and steps that reproduce the problem. Also check the following:

- If you have just installed Saladict, refresh any pages that were already open so the extension can load on them.
- For security reasons, extensions cannot run on extension store pages, Chrome's built-in PDF viewer, or pages belonging to other extensions.

### Why does the Saladict toolbar icon sometimes show a white "off" label on a yellow background?

Since Saladict 7, the extension automatically detects pages where it cannot load the embedded lookup panel. These include browser system pages, extension store pages, pages belonging to other extensions, and pages that use `frameset`, such as some Java documentation sites.

### Saladict has problems in Chrome Dev or Canary, Firefox Developer Edition or Nightly, or another prerelease browser.

Saladict is designed for stable, everyday browser releases. Problems are expected in development and prerelease builds, and most browser regressions are resolved before the stable release. Please verify the problem in a stable browser before reporting it.

### Why does text-selection lookup not work in Google Docs or Google Play Books?

Google uses a custom text-selection system in these applications, so Saladict cannot access the selected text through the browser APIs. Supporting this would require substantial compatibility work and is unlikely to be implemented by the maintainer, though pull requests are welcome. As an alternative, open Saladict's standalone lookup window in sidebar mode and enter your query there.

### A dictionary returns no results at first, but works after I collapse and reopen it.

This is usually caused by an unstable network connection. Try another dictionary in the settings or change your DNS server. If the same dictionary repeatedly has this problem, report it so the integration can be checked.

### A dictionary never returns results, even for simple words.

Rule out a local network problem first. Click the dictionary title to open its website. If the site does not load, try using a proxy. If the website loads but the dictionary still returns no results in Saladict, the service may have changed its API; please report the problem.

### The popup is too narrow in Firefox and some content is cut off.

Move the Saladict icon out of Firefox's overflow menu and place it directly on the toolbar.

### Saladict opens PDFs automatically, so I cannot use the browser's download or print controls.

Disable PDF interception in Saladict's settings, or add the website to the PDF blocklist. See the [Important Notes](./notice.md) shown after installation and the [PDF section of the user manual](./manual.md#pdf).

### Can Saladict's PDF reader support notes, annotations, or a dark mode?

Saladict uses the reader provided by [PDF.js](https://mozilla.github.io/pdf.js/). Please request additional reader features from that project. You can also use another desktop PDF reader and look up selected text in Saladict's standalone window; see [Configure keyboard shortcuts](./manual.md#shortcuts). @hqyyqh has shared an excellent [tutorial](https://github.com/crimx/ext-saladict/issues/493) on annotating a PDF while using Saladict for translation.

![PDF with Saladict](https://user-images.githubusercontent.com/38676455/68393366-db14e500-01a6-11ea-96fb-edeb2bc4a39c.gif)

### Why does selected text from a PDF contain incorrect characters or join words across line breaks?

PDF files preserve the document's visual appearance rather than its semantic text structure. A character may only look like the one you expect, and a sentence may be stored as separately positioned fragments. The stored reading order can even differ from the visible order. Copy the same passage into a plain-text editor to check whether the problem comes from the PDF itself.

### Can Saladict save a word's definition instead of translating its entire context?

Saladict is designed around learning one precise meaning from each context, an approach explained in [Using Saladict with Anki](./anki.md). A definition detached from its context is not useful for this learning model, so Saladict does not automatically retrieve every definition of a saved word.

Choosing the exact definition for a word requires a natural language processing engine that can analyze its context. This technology is not currently mature enough to run within the extension. Saladict instead translates the context with several machine translation services, allowing you to compare the results and choose the most suitable meaning. You can select the translation services in the settings.

Saladict supports two recommended workflows for saving words:

1. Enable the word editor when clicking the heart icon. Review the automatic translation and add your own notes before saving each word.
2. Disable the word editor when clicking the heart icon. Save words immediately while reading, then review the translations and notes in the notebook when you finish or at regular intervals.

If you are saving words for study, reviewing and editing the notes is an important part of the learning process and is worth keeping in your workflow.

### Can the standalone lookup window stay on top of other windows?

Browsers do not provide an API for keeping an extension window permanently on top. The operating system's window manager controls standalone windows, so check whether it provides this feature directly or through an add-on.

- Windows: [DeskPins, issue #1977](https://github.com/crimx/ext-saladict/issues/1977)

### Can users add their own dictionaries?

Saladict presents information from different dictionary sources in a concise, consistent layout, and its codebase is optimized around that approach. Extracting useful information from a dictionary source requires custom program logic, which makes a no-code configuration difficult to build and maintain for a relatively uncommon use case. Developers can add a dictionary directly and submit a pull request. The integration process is modular; see the [contribution guide](https://github.com/crimx/ext-saladict/blob/dev/CONTRIBUTING-zh.md).

### Can Saladict include a flashcard review feature?

Several dedicated spaced-repetition applications already provide this functionality, including [Anki](./anki.md). Saladict keeps its scope focused on lookup and export, so use one of those applications to review your saved words.

### Can the lookup panel close automatically?

Automatic dismissal is most useful for brief lookups, while Saladict is designed for more detailed dictionary searches. For frequent lookups, pin the panel or open Quick Search in sidebar mode. The maintainer does not currently plan to add an auto-close setting, though pull requests are welcome.

### Is Safari supported?

Safari uses different extension APIs, and support is not currently planned.

### Will there be native Saladict apps for Windows, macOS, Linux, iOS, or Android?

Because of dictionary licensing constraints and the development effort involved, Saladict will continue to provide results through its browser extension. To look up text selected outside the browser on a desktop system, see [Configure keyboard shortcuts](./manual.md#shortcuts). Developing and maintaining the extension already requires substantial time; you can [support the project](./support.md) to help sustain its development.

### Will there be a Chrome App version?

Chrome Apps have been phased out, as described in the [official announcement](https://blog.chromium.org/2016/08/from-chrome-apps-to-web.html), so Saladict will not implement one. Saladict's standalone window already provides the relevant functionality. See also [Open Saladict without opening the browser](./native.md#%E4%B8%8D%E6%89%93%E5%BC%80%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B4%E6%8E%A5%E5%8F%AC%E5%94%A4%E6%B2%99%E6%8B%89%E6%9F%A5%E8%AF%8D).

### Can Saladict look up text in images with OCR?

See [issue #493](https://github.com/crimx/ext-saladict/issues/493).
