hexo.extend.helper.register('i18n_url_for', function (path) {
  const lang = this.page.lang
  const defaultLang = this.config.language
    ? Array.isArray(this.config.language)
      ? this.config.language[0]
      : this.config.language
    : 'en'
  let url = this.url_for(path)

  if (lang !== defaultLang && url[0] === '/') {
    url = '/' + lang + url
  }

  return url
})
