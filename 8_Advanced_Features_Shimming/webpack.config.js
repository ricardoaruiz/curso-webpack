const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        teste: {
            import: './src/teste.js',
            dependOn: 'shared'
        },
        shared: ['lodash']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        port: 8000,
        open: true,
        hot: false,
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