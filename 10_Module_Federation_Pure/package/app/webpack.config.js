const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:8080/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    devServer: {
        port: 8080,
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
            title: 'App',
        }),
        new ModuleFederationPlugin({
            name: 'App',
            remotes: {
                HomeApp: 'HomeApp@http://localhost:8081/remoteEntry.js',
                ContactApp: 'ContactApp@http://localhost:8082/remoteEntry.js',
            }
        }),
    ]
}