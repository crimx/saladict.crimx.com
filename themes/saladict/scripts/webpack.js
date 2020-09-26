const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const mfs = new MemoryFS()
const config = require('../webpack.config')

const listeners = []

hexo.extend.renderer.register('js', 'js', async function (
  data,
  options,
  callback
) {
  if (mfs.existsSync(data.path)) {
    const text = mfs.readFileSync(data.path, 'utf8')
    mfs.unlinkSync(data.path)
    return callback(null, text)
  }

  listeners.push(() => {
    if (mfs.existsSync(data.path)) {
      const text = mfs.readFileSync(data.path, 'utf8')
      mfs.unlinkSync(data.path)
      return callback(null, text)
    } else {
      // ignore webpack unrelated files
      return callback(null, data.text)
    }
  })

  if (listeners.length > 1) {
    // webpack building is running
    return
  }

  const compiler = webpack(config)
  compiler.outputFileSystem = mfs

  compiler.run((err, stats) => {
    const lastListeners = [...listeners]
    listeners.length = 0 // clear list first

    if (err) {
      return callback(err, 'Webpack Error.')
    } else if (stats.hasErrors()) {
      return callback(stats.toJson().errors, 'Webpack Error.')
    }

    if (stats.hasWarnings()) {
      hexo.log.warn(stats.toJson().warnings)
    }

    lastListeners.forEach((listener) => listener())
  })
})
