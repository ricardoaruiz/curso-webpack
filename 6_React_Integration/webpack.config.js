const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader'},
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            title: 'Integrations with React',
            inject: 'body'
        })
    ]
}