import { Header } from './components'
import sum from './calc'

const x = sum(1,2)
const y = sum(10,50)
const z = sum(4,8)

console.log(x)
console.log(y)
console.log(z)

console.log('API_KEY =>', process.env.API_KEY)

const header = new Header()
header.render('Webpack with devServer configured')