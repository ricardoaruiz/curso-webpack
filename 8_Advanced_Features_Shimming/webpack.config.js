const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        port: 8000,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            { test: /\.js$/i, use: 'babel-loader', include: path.resolve(__dirname, 'src')}
        ]
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
    ],
    optimization: {
        runtimeChunk: true
    }
}