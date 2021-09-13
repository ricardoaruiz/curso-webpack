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
            { test: /\.(png|jpg?g|gif)$/i, use: 'file-loader'},
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']},
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
            },
            { test: /.html$/i, use: 'html-loader' },
            { test: /\.txt$/i, use: 'raw-loader' },
        ]
    }
}