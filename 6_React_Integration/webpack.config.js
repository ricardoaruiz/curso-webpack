const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.(ts|tsx)$/, use: ['ts-loader'], exclude: /node-modules/},
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']}
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