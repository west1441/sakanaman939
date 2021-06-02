const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index/index.ejs',
    }),
    new HtmlWebpackPlugin({
      filename: './about.html',
      template: './about/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
}
