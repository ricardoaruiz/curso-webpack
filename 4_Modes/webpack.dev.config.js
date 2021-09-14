const path = require('path')
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        port: 8000,
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DotenvPlugin({
            path: './.env.development'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Modes',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}