const path = require('path')
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new DotenvPlugin({
            path: './.env.development'
        })
    ]
}