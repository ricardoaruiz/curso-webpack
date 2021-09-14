import { Header } from './components'

const header = new Header()
header.render('Webpack')

// Defined values by webpack DefinePlugin in webpack.config.js
console.log('VERSION', VERSION)
console.log('PORT', PORT)