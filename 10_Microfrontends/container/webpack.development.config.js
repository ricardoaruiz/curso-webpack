const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
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
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        }),
        new ModuleFederationPlugin({
            name: 'ContainerApp',
            remotes: {
                HomeApp: 'HomeApp@http://localhost:9001/remoteEntry.js',
                ContactsApp: 'ContactsApp@http://localhost:9002/remoteEntry.js',
            }
        })
    ],
    optimization: {
        runtimeChunk: true
    }
}