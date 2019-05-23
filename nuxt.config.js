export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Saladict 沙拉查词-聚合词典划词翻译',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
          {
            code: 'zh-CN',
            iso: 'zh-CN',
            name: '中文 (简体)',
            file: 'zh-CN.js'
          },
          {
            code: 'zh-TW',
            iso: 'zh-TW',
            name: '正體中文 (繁體)',
            file: 'zh-TW.js'
          }
        ],
        defaultLocale: 'zh-CN',
        lazy: true,
        langDir: 'lang/',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ]
  ],

  bootstrapVue: {
    componentPlugins: [
      'ButtonPlugin',
      'CarouselPlugin',
      'CollapsePlugin',
      'ImagePlugin',
      'JumbotronPlugin',
      'LayoutPlugin',
      'ListGroupPlugin'
    ],
    directivePlugins: ['VBTooltipPlugin']
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
