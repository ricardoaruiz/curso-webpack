import './styles/global.scss'

// import jquery
import $ from 'jquery'
import { Header } from './components/Header/index'

// import Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons'

library.add(faBacon)
library.add(faAnchor)
dom.watch()

const header = new Header()
header.render({title: 'Webpack Integrate with external libs'})

const body = $('body')
const p = $('<p></p>').text('Inserindo texto').css('color','red').css('font-size','3rem').css('font-weight','700')
body.after(p)
