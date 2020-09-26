const JSDOM = require('jsdom').JSDOM

hexo.extend.filter.register('template_locals', function (locals) {
  locals.page.dom = new JSDOM(locals.page.content)
  locals.NODE_ENV = process.env.NODE_ENV
  return locals
})
