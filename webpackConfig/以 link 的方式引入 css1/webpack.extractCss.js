var { resolve} = require('path'),
const MiniCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { module } = require('../webpack.config');
const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
// 设置 node.JS 的环境变量;
process.env.NODE_ENV = "development";
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader('提取 JS 中的 css 为单独的 css 文件, 通过 link 标签引入, 解决闪屏问题'), 'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => {
              require('postcss-preset-env')
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      entry: {
        template: './src/index.html'
      }
    }),
    new MiniCssPlugin({
      filename: 'css/build.css'  // 对打包过后的 css 文件重新命名
    }),
    new optimizeCssPlugin({
      filename: 'css/compress.css'
    }),
    new OptimiseCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}]
      },
      canPrint: true
    })
  ]
  change every thing
}
/**
 *  css 的兼容性处理 postcss -> postcss-loader -> postcss-preset-env (能让兼容性精确到某一个浏览器的版本, 做法 : 帮助 postcss先去找package.json 中的 browerList 里面 的配置,通过配置加载指定的 css 兼容性的样式)
 */
/**
 * optimize-css-assets-webpack-plugin 压缩 css 文件 , 移除 css 文件中的注释
 */
