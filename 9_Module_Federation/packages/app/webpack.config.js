const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:9001/'
    },
    mode: 'development',
    devServer: {
        port: 9001,
        hot: true,
        open: true,
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            inject: 'body',
            title: 'App'
        })
    ],
    optimization: {
        runtimeChunk: true
    }
}