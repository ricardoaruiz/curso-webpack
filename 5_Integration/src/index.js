import $ from 'jquery'
import { Header } from './components'

const header = new Header()
header.render('Webpack Integrate with external libs')

const body = $('body')
const p = $('<p></p>').text('Inserindo texto').css('color','red')
body.append(p)