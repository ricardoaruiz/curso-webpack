import { Header, Menu, Footer } from '../../components'
import itemsMenu from '../../menu.json'

import '../../styles/global.scss'
import './style.scss'

type BasePageProps = {
  headerTitle?: string
  footerTitle?: string
}

export class BasePage {

  protected header: Header
  protected menu: Menu
  protected footer: Footer
  
  constructor(params?: BasePageProps) {
    this.header = new Header(params?.headerTitle || 'Webpack multiples pages', 'header')
    this.menu = new Menu(itemsMenu.items, 'menu')
    this.footer = new Footer(params?.footerTitle || 'Developed by Ricardo Ruiz', 'footer')
  }
  
  render() {
    this.header.render()
    this.menu.render()
    this.footer.render()
  }

}