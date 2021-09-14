import { Header } from './components'

const header = new Header()
header.render('Webpack')

// Defined values by webpack DefinePlugin in webpack.config.js
console.log('VERSION', VERSION)
console.log('PORT', PORT)

// Defined in .env file that writed by webpack with dotenv-webpack plugin
console.log('process.env.API_KEY => ', process.env.API_KEY)