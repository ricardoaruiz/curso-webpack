import { Header, Menu, Footer } from '../../components'
import itemsMenu from '../../menu.json'

import './style.scss'

export class BasePage {

  protected header: Header
  protected menu: Menu
  protected footer: Footer
  
  constructor() {
    this.header = new Header('Webpack multiples pages', 'header')
    this.menu = new Menu(itemsMenu.items, 'menu')
    this.footer = new Footer('Developed by Ricardo Ruiz', 'footer')
  }
  
  render() {
    this.header.render()
    this.menu.render()
    this.footer.render()
  }

}