const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }, 
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('1.0.123'),
            PORT: JSON.stringify('3000')
        }),
        new DotenvPlugin()
    ]    
}