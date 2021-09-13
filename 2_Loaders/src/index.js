import logoImg from './assets/images/webpack.png'
import { Logo, Title, Button } from './components'

const logo = new Logo()
logo.render()

const title = new Title()
title.create('Primeira página')

const button1 = new Button()
button1.render('Confirmar?', logoImg)

const button2 = new Button()
button2.render('Cancelar')