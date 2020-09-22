const JSDOM = require('jsdom').JSDOM

hexo.extend.helper.register('extract_title', function () {
  const page = this.page

  if (page.title) {
    return page.title
  }

  if (page.path.startsWith('releases/')) {
    return (/^releases\/(.+)\.html$/.exec(page.page.path) || [])[1]
  }

  if (page.content) {
    const doc = new JSDOM(page.content).window.document
    for (hx of ['h1', 'h2']) {
      const h = doc.querySelector(`.site-article ${hx}`)
      if (h) {
        const content = (h.textContent || '').trim()
        if (content) {
          return content
        }
      }
    }
  }

  return ''
})
