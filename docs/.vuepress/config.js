const markdownItAttrs = require('markdown-it-attrs')

module.exports = {
  theme: require.resolve('./theme'),
  markdown: {
    extendMarkdown: md => {
      md.use(markdownItAttrs)
    }
  },
  head: [
    [
      'script',
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-6993077405597797',
        async: true
      }
    ]
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
          { text: '⚠️注意事项', link: '/notice/' },
          {
            text: '📒教程',
            items: [
              { text: '完整使用说明', link: '/manual/' },
              { text: '配合 Anki 使用', link: '/anki/' },
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
          { text: '❤️支持项目', link: '/support/' },
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
          { text: '⚠️Notice', link: '/en/notice/' },
          {
            text: '📒Tutorials',
            items: [
              { text: 'User Manual', link: '/en/manual/' },
              { text: 'Use with Anki', link: '/en/anki/' },
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
          { text: '❤️Support', link: '/en/support/' },
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
