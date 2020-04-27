const markdownItAttrs = require('markdown-it-attrs')
const fs = require('fs')
const path = require('path')

const releases = fs
  .readdirSync(path.join(__dirname, '../releases'))
  .map(filename => ({
    name: filename,
    value: Number(
      filename
        .slice(1, -3)
        .split('.')
        .map(digit => digit.padStart(3, '0'))
        .join('')
    )
  }))
  .sort((a, b) => b.value - a.value)
  .map(({ name }) => name.slice(0, -3))

module.exports = {
  theme: require.resolve('./theme'),
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(markdownItAttrs)
    }
  },
  plugins: [
    [
      'vuepress-plugin-redirect',
      {
        redirectors: [
          {
            base: '/releases/',
            storage: false,
            alternative: releases[0]
          }
        ]
      }
    ],
    [
      ('@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      })
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-49163616-5'
      }
    ]
  ],
  // prettier-ignore
  head: [
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
    activeHeaderLinks: false,
    sidebar: {
      '/releases/': [
        {
          title: 'Releases', // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: releases.map(name => [name, name])
        }
      ]
    },
    locales: {
      '/': {
        selectText: '🌐Languages',
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
              { text: 'OCR（图片文字识别）', link: '/ocr.html' },
              { text: '浏览器外划词', link: '/native.html' }
            ]
          },
          {
            text: '❤️支持项目',
            link: '/support.html',
            items: [{ text: '支持方式', link: '/support.html' }]
          },
          {
            text: '📦下载安装',
            link: '/download.html',
            items: [
              { text: '下载地址', link: '/download.html' },
              { text: '更新信息', link: '/releases/' },
            ]
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
              },
              {
                text: '私隐政策',
                link: '/privacy-policy'
              }
            ]
          }
        ],
        smoothScroll: true
      },
      '/en/': {
        // text for the language dropdown
        selectText: '🌐选择语言',
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
              { text: 'OCR', link: '/en/ocr.html' },
              { text: 'Use Outside of Browser', link: '/en/native.html' }
            ]
          },
          {
            text: '❤️Support',
            link: '/en/support.html',
            items: [{ text: 'Methods of Support', link: '/en/support.html' }]
          },
          {
            text: '📦Download',
            link: '/download.html',
            items: [
              { text: 'Download', link: '/download.html' },
              { text: 'Releases', link: '/releases/' },
            ]
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
              },
              {
                text: 'Privacy Policy',
                link: '/en/privacy-policy'
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
