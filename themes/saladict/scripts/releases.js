const JSDOM = require('jsdom').JSDOM
const _ = require('lodash')

hexo.extend.generator.register('releases', function (locals) {
  const sortedReleases = locals.pages
    .filter((page) => page.path.startsWith('releases/'))
    .map((page) => ({
      page,
      dom: new JSDOM(page.content),
      value: Number(
        page.path
          .slice(10, -5)
          .split('.')
          .map((digit) => digit.padStart(3, '0'))
          .join('')
      ),
    }))
    .sort((a, b) => b.value - a.value)

  const allReleases =
    '<h1>Releases</h1>\n' +
    sortedReleases
      .map((release) => {
        const title = (/^releases\/(.+)\.html$/.exec(release.page.path) || [
          '',
          '',
        ])[1]
        const content = [...release.dom.window.document.querySelectorAll('h2')]
          .map((h2) => {
            const root = this.config.root || '/'
            const href = `${root}${release.page.path}#${h2.id}`
            return `<p><a href="${href}">${getHeaderText(h2)}</a></p>`
          })
          .join('\n')
        return `<h2>${title}</h2>\n${content}`
      })
      .join('\n')

  const [chs, eng] = _.unzip(
    [
      ...sortedReleases[0].dom.window.document.querySelectorAll('li'),
    ].map((li) => li.textContent.split('\n').map((line) => line.trim()))
  )
  const version = getHeaderText(
    sortedReleases[0].dom.window.document.querySelector('h2')
  )

  return [
    {
      path: 'releases/all.html',
      data: { content: allReleases },
      layout: 'page',
    },
    {
      path: 'releases/index.html',
      data: sortedReleases[0].page,
      layout: 'page',
    },
    { path: 'releases/chs.json', data: JSON.stringify({ version, data: chs }) },
    { path: 'releases/eng.json', data: JSON.stringify({ version, data: eng }) },
  ]
})

function getHeaderText(el) {
  return (el.textContent || '').replace(/¶/, '').trim()
}
