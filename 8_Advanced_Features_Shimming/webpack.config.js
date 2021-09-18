const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        port: 8000,
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Shimming',
            inject: 'body'
        })
    ]
}