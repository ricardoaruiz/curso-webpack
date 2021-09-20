const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:8082/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        port: 8082,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, use: ['ts-loader'], exclude: /node-modules/},
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: 'App'
        }),
        new ModuleFederationPlugin({
            name: 'ContactApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ContactPage': './src/Contact'
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
}