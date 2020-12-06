const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname,'../dist')
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
            test: /.js$/,
            use : {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            ,
            exclude: /node_module/
            }, {
                test: /.css$/,
                use: {
                    loader: ['style-loader', 'css-loader']
                }
            }, {
                test: /.vue$/,
                use: {
                    loader: ['vue-loader']
                }
            }
        ]
    }
}