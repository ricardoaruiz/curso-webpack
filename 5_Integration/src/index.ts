import './styles/global.scss'

// import hquery
import $ from 'jquery'
import { Header } from './components/Header/index'

const header = new Header()
header.render({title: 'Webpack Integrate with external libs'})

const body = $('body')
const p = $('<p></p>').text('Inserindo texto').css('color','red').css('font-size','3rem').css('font-weight','700')
body.append(p)