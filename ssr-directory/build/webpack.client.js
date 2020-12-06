const merge = require('webpack-merge'),
path = require('path'),
base = require('./webpack.base');
module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, 'src/entry-server.js')
    }
})
