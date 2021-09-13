const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader','css-loader'] },
            { test: /\.(png|jpg?g|gif)$/i, use: ['file-loader']},
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}