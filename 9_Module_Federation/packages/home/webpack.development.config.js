const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:9002/'
    },
    mode: 'development',
    devServer: {
        port: 9002,
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
            },
            {
                test: /\.(ts|tsx)$/,
                use: ['ts-loader'],
                exclude: /node-modules/
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            inject: 'body',
            title: 'App'
        }),
        new ModuleFederationPlugin({
            name: 'HomeApp',
            filename: 'remoteEntry.js',
            exposes: {
                './HomePage':'./src/Home'
            }
        })
    ],
    optimization: {
        runtimeChunk: true
    }
}