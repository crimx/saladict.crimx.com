const JSDOM = require('jsdom').JSDOM
const _ = require('lodash')

hexo.extend.generator.register('releases', (locals) => {
  const sortedReleases = locals.pages
    .filter((page) => page.path.startsWith('releases/'))
    .map((page) => ({
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

  const latestRelease = sortedReleases[0].page

  const dom = new JSDOM(latestRelease.content)
  const [chs, eng] = _.unzip(
    [...dom.window.document.querySelectorAll('li')].map((li) =>
      li.textContent.split('\n').map((line) => line.trim())
    )
  )
  const version = dom.window.document.querySelector('h2').textContent.trim()

  return [
    { path: 'releases/index.html', data: latestRelease, layout: 'page' },
    { path: 'releases/chs.json', data: JSON.stringify({ version, data: chs }) },
    { path: 'releases/eng.json', data: JSON.stringify({ version, data: eng }) },
  ]
})
