const JSDOM = require('jsdom').JSDOM

hexo.extend.helper.register('get_dom', function () {
  return new JSDOM(this.page.content)
})
