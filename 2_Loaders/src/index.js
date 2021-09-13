import logoImg from './assets/images/webpack.png'
import { Logo, Title, Button } from './components'
import warnning from './templates/warnning.html'
import './styles/warnning.scss'
import fraseTxt from './files/frase.txt'

const logo = new Logo()
logo.render()

const title = new Title()
title.create('Primeira página')

const button1 = new Button()
button1.render('Confirmar?', logoImg)

const button2 = new Button()
button2.render('Cancelar')

// Import de HTML
const body = document.querySelector('body')
body.innerHTML += warnning

// Import arquivo texto
const frase = fraseTxt
console.log('frase:', fraseTxt.toUpperCase())

// Babel spread
const obj = {a: 1, b: 2, c: 3, d:4}
const {a, b, ...teste } = obj
console.log('a',a)
console.log('b',b)
console.log('teste',teste)
console.log(`a: ${a}, b: ${b}, teste: ${JSON.stringify(teste)}`)
