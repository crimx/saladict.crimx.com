hexo.extend.filter.register('markdown-it:renderer', function (md) {
  md.use(require('markdown-it-anchor'), {
    level: 1,
    permalink: true,
    permalinkBefore: true,
    permalinkClass: 'article-header-anchor',
  })
    .use(require('markdown-it-attrs'), {
      allowedAttributes: ['id'],
    })
    .use(require('markdown-it-prism'))
})
