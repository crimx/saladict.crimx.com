const path = require('path')
const fs = require('fs')

const jsPath = path.resolve(__dirname, 'source', 'js')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: fs.readdirSync(jsPath).reduce((entry, name) => {
    if (name.endsWith('.js')) {
      entry[name.slice(0, -3)] = path.resolve(jsPath, name)
    }
    return entry
  }, {}),
  output: {
    path: jsPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }],
            ],
          },
        },
      },
    ],
  },
}
