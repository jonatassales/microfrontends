const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/main.tsx'
  ],
  output: {
    path: resolve(__dirname, 'lib'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: resolve(__dirname, './tsconfig.json')
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Posts'
    }),
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true
  },
  watch: __DEV__
}
