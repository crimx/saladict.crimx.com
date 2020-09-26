const JSDOM = require('jsdom').JSDOM

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

hexo.extend.helper.register('fallback_img', function (srcs, attrs = {}) {
  const srcAttrs = srcs
    .map((src, i) => (i === 0 ? `src="${src}"` : `data-src-${i}="${src}"`))
    .join(' ')

  const extraAttrs = Object.keys(attrs)
    .map((key) =>
      typeof attrs[key] === 'boolean' ? key : `${key}="${attrs[key]}"`
    )
    .join(' ')

  return `<img ${srcAttrs} ${extraAttrs} onerror="imgFallback(this)">`
})

hexo.extend.helper.register('toc_blocks', function () {
  const tocMaxLevel =
    typeof this.page.tocMaxLevel == 'number' ? this.page.tocMaxLevel : 3
  const blocks = []
  let maxLevel = 1

  for (const el of this.page.dom.window.document.body.children) {
    const hMatch = /^H(\d)$/.exec(el.tagName)
    if (!hMatch) continue

    const level = Number(hMatch[1])

    if (level < 1 || level > 3 || level > tocMaxLevel) {
      continue
    }

    maxLevel = Math.max(maxLevel, level)

    if (level === 1) {
      blocks.push({ el, level, children: [] })
    } else if (level == 2) {
      const lastBlock = blocks[blocks.length - 1]
      if (lastBlock && lastBlock.level === 1) {
        lastBlock.children.push({ el, level, children: [] })
      } else {
        blocks.push({ el, level, children: [] })
      }
    } else if (level === 3) {
      let lastBlock = blocks[blocks.length - 1]
      if (lastBlock && lastBlock.level === 2) {
        lastBlock.children.push({ el, level, children: [] })
      } else if (lastBlock && lastBlock.level === 1) {
        lastBlock = lastBlock.children[lastBlock.children.length - 1]
        if (lastBlock && lastBlock.level === 2) {
          lastBlock.children.push({ el, level, children: [] })
        } else {
          blocks.push({ el, level, children: [] })
        }
      } else {
        blocks.push({ el, level, children: [] })
      }
    }
  }

  return { blocks, maxLevel }
})

hexo.extend.helper.register('releases_toc_blocks', function () {
  const blocks = []

  const sortedReleases = hexo.locals
    .get('pages')
    .filter((page) => page.path.startsWith('releases/'))
    .data.map((page) => ({
      page,
      value: Number(
        page.path
          .slice(10, -5)
          .split('.')
          .map((digit) => digit.padStart(3, '0'))
          .join('')
      ),
    }))
    .sort((a, b) => b.value - a.value)

  let lastTitle
  for (const { page: release } of sortedReleases) {
    const title = (/^releases\/(.+)\.html$/.exec(release.path) || ['', ''])[1]
    if (title !== lastTitle) {
      lastTitle = title
      const el = this.page.dom.window.document.createElement('div')
      el.textContent = title
      blocks.push({
        el,
        level: 1,
        href:
          release.path === this.page.path ? '#' : this.url_for(release.path),
        children: [],
      })
    }

    const dom =
      release.path === this.page.path
        ? this.page.dom
        : new JSDOM(release.content)

    for (const el of dom.window.document.body.children) {
      if (el.tagName === 'H2') {
        const lastBlock = blocks[blocks.length - 1]
        if (lastBlock) {
          lastBlock.children.push({
            el,
            level: 2,
            href:
              release.path === this.page.path
                ? `#${el.id}`
                : this.url_for(`${release.path}#${el.id}`),
            children: [],
          })
        }
      }
    }
  }

  return { blocks, maxLevel: 2 }
})
