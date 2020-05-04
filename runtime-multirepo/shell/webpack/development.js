const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__hot_reload&reload=true',
    './src/main.tsx'
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true
  },
  watch: true
})
