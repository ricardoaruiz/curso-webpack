const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        port: 9002,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            { 
                test: /\.(ts|tsx)$/, 
                use: ['ts-loader'], 
                exclude: /node-modules/
            },
            {
                test: /\.(sass|scss)/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: 'Contacts'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new ModuleFederationPlugin({
            name: 'ContactsApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ContactsPage': './src/App'
            }
        }),
    ]
}