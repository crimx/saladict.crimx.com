const markdownItAttrs = require('markdown-it-attrs')

module.exports = {
  theme: require.resolve('./theme'),
  markdown: {
    extendMarkdown: md => {
      md.use(markdownItAttrs)
    }
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  // prettier-ignore
  head: [
    [
      'script',
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true
      }
    ],
    [
      'script',
      {},
      `
      (adsbygoogle = window.adsbygoogle || []).push({});
      `
    ],
    ['link', {rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-icon-57x57.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-icon-60x60.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-icon-72x72.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "76x76", href: "/icons/apple-icon-76x76.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-icon-114x114.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-icon-120x120.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-icon-144x144.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-icon-152x152.png"}],
    ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "192x192" , href: "/icons/android-icon-192x192.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png"}],
    ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png"}],
    ['link', {rel: "manifest", href: "/manifest.json"}],
    ['meta', {name: "msapplication-TileColor", content: "#ffffff"}],
    ['meta', {name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png"}],
    ['meta', {name: "theme-color", content: "#5caf9e"}]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Saladict 沙拉查词',
      description:
        'Saladict 沙拉查词-聚合词典划词翻译 是一款专业划词翻译扩展，为交叉阅读而生。大量权威词典涵盖中英日韩法德西语，支持复杂的划词操作、网页翻译、生词本、PDF、以及 Vimium 全键盘操作。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Saladict',
      description:
        'Saladict is a professional inline translator browser extension, built for comparative reading, with comprehensive dictionaries covering all major languages.'
    }
  },
  themeConfig: {
    editLinks: true,
    docsRepo: 'crimx/saladict.crimx.com',
    activeHeaderLinks: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        algolia: {},
        nav: [
          { text: '⚠️注意事项', link: '/notice.html' },
          {
            text: '📒教程',
            items: [
              { text: '完整使用说明', link: '/manual.html' },
              { text: '配合 Anki 使用', link: '/anki.html' },
              {
                text: 'OCR（图片文字识别）',
                link: 'https://github.com/crimx/ext-saladict/issues/493'
              },
              {
                text: '浏览器外划词',
                items: [
                  {
                    text: 'Windows: Quicker',
                    link: 'https://github.com/crimx/ext-saladict/issues/493'
                  },
                  {
                    text: 'Windows: WGestures',
                    link:
                      'https://github.com/crimx/ext-saladict/issues/366#issuecomment-495828772'
                  },
                  {
                    text: 'MacOS: Alfred Workflows',
                    link: 'https://github.com/crimx/ext-saladict/issues/509'
                  },
                  {
                    text: 'MacOS: Popclip',
                    link: 'https://github.com/crimx/ext-saladict/issues/463'
                  }
                ]
              }
            ]
          },
          { text: '❤️支持项目', link: '/support.html' },
          {
            text: '📦下载安装',
            link: 'https://github.com/crimx/ext-saladict/releases'
          },
          {
            text: '反馈与建议',
            items: [
              {
                text: '常见问题与答复',
                link: '/q&a'
              },
              {
                text: '反馈与建议',
                link: 'https://github.com/crimx/ext-saladict/issues'
              }
            ]
          }
        ],
        sidebar: 'auto',
        smoothScroll: true
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        algolia: {},
        nav: [
          { text: '⚠️Notice', link: '/en/notice.html' },
          {
            text: '📒Tutorials',
            items: [
              { text: 'User Manual', link: '/en/manual.html' },
              { text: 'Use with Anki', link: '/en/anki.html' },
              {
                text: 'OCR',
                link: 'https://github.com/crimx/ext-saladict/issues/493'
              },
              {
                text: 'Global Search',
                items: [
                  {
                    text: 'Windows: Quicker',
                    link: 'https://github.com/crimx/ext-saladict/issues/493'
                  },
                  {
                    text: 'Windows: WGestures',
                    link:
                      'https://github.com/crimx/ext-saladict/issues/366#issuecomment-495828772'
                  },
                  {
                    text: 'MacOS: Alfred Workflows',
                    link: 'https://github.com/crimx/ext-saladict/issues/509'
                  },
                  {
                    text: 'MacOS: Popclip',
                    link: 'https://github.com/crimx/ext-saladict/issues/463'
                  }
                ]
              }
            ]
          },
          { text: '❤️Support', link: '/en/support.html' },
          {
            text: '📦Download',
            link: 'https://github.com/crimx/ext-saladict/releases'
          },
          {
            text: 'Issues',
            items: [
              {
                text: 'Q&A',
                link: '/en/q&a'
              },
              {
                text: 'Report Issues',
                link: 'https://github.com/crimx/ext-saladict/issues'
              }
            ]
          }
        ],
        sidebar: 'auto',
        smoothScroll: true
      }
    }
  }
}
