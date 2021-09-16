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
      },
      { 
        test: /\.m?js$/i , 
        exclude: /(node_modules|bower_components)/, 
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
        }
      }
    ]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/page.ejs'),
        filename: 'index.html',
        inject: 'body',
        chunks: ['index'],
        templateParameters: {
          'title': 'Home'
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/page.ejs'),
        filename: 'about.html',
        inject: 'body',
        chunks: ['about'],
        templateParameters: {
          'title': 'About'
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/page.ejs'),
        filename: 'contact.html',
        inject: 'body',
        chunks: ['contact'],
        templateParameters: {
          'title': 'Contact'
        },
      })
    ],
}