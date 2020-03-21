import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
import InArticleAdsense from 'vue-google-adsense/dist/InArticleAdsense.min.js'

export default ({ Vue, options, router, siteData }) => {
  Vue.use(require('vue-script2'))

  Vue.use(Adsense)
  Vue.use(InArticleAdsense)
}
