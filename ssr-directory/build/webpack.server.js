const merge = require('webpack-merge'),
path = require('path'),
webpackHtmlPlugin = require('webpack-html-plugin'),
base = require('./webpack.base');
const { target } = require('./webpack.client');
module.exports = merge(base, {
    entry: {
        server: path.resolve(__dirname, './src/entry-server.js')
    },
    target: 'node',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpackHtmlPlugin({
            filename: 'index.template.html',
            template: path.resolve(__dirname, '../index.template.html'),
            excludeChunks: ['server'], // 告诉webpack不要将打包好的server.js引入到index.template.html中
            minify: {
                removeComments: false
            }
        })
    ]

})
