const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:8082/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    devServer: {
        port: 8082,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
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
        })
    ]
}