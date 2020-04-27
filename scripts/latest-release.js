const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const JSDOM = require("jsdom").JSDOM
const _ = require('lodash')

const dir = path.join(__dirname, '../docs/releases')

const latest = fs
  .readdirSync(dir)
  .map(filename => ({
    name: filename,
    value: Number(
      filename
        .slice(1, -3)
        .split('.')
        .map(digit => digit.padStart(3, '0'))
        .join('')
    )
  }))
  .sort((a, b) => b.value - a.value)[0].name

const text = fs.readFileSync(path.join(dir, latest), 'utf8')
const dom = new JSDOM(MarkdownIt({ breaks: true }).render(text))
const [chs, eng] = _.unzip(
  [...dom.window.document.querySelectorAll('li')]
    .map(li => li.textContent.split('\n'))
)

fs.writeFileSync(
  path.join(__dirname, '../docs/.vuepress/dist/releases/chs.json'),
  JSON.stringify(chs)
)

fs.writeFileSync(
  path.join(__dirname, '../docs/.vuepress/dist/releases/eng.json'),
  JSON.stringify(eng)
)
