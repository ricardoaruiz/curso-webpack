const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/presentation/index.ts',
    about: './src/presentation/about.ts',
    contact: './src/presentation/contact.ts'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.ts$/i, use: ['ts-loader'], exclude: /node_modules/},
      {
        test: /\.(scss|sass)$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/i, loader: 'url-loader'
    }
    ]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/index.html'),
        inject: 'body',
        chunks: ['index'],
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/about.html'),
        inject: 'body',
        chunks: ['about'],
        filename: 'about.html'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/contact.html'),
        inject: 'body',
        chunks: ['contact'],
        filename: 'contact.html'
      })
    ],
}