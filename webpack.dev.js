const { merge } = require('webpack-merge')
const fs = require('fs')
const path = require('path')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    allowedHosts: ['oslav-dev.local'],
    public: 'oslav-dev.local',
    publicPath: '/',
    port: 443,
    https: {
      key: fs.readFileSync('https/key'),
      cert: fs.readFileSync('https/crt'),
    },
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
})
