const JSDOM = require('jsdom').JSDOM

hexo.extend.filter.register('template_locals', function (locals) {
  locals.page.dom = new JSDOM(locals.page.content)
  return locals
})
