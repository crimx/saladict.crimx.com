module.exports = {
  theme: require.resolve('./theme'),
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
          { text: '使用说明', link: '/manual/' },
          {
            text: '📦下载安装',
            link: 'https://github.com/crimx/ext-saladict/releases'
          },
          {
            text: '反馈问题',
            link: 'https://github.com/crimx/ext-saladict/issues'
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
          { text: '⚠️Notice', link: '/notice/' },
          { text: 'Manual', link: '/manual/' },
          {
            text: '📦Download',
            link: 'https://github.com/crimx/ext-saladict/releases'
          },
          {
            text: 'Issues',
            link: 'https://github.com/crimx/ext-saladict/issues'
          }
        ],
        sidebar: 'auto',
        smoothScroll: true
      }
    }
  }
}
