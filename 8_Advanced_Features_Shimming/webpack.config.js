const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: ['lodash']
        },
        teste: {
            import: './src/teste.js',
            dependOn: ['lodash','jquery']
        },
        lodash: 'lodash',
        jquery: 'jquery'
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
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
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