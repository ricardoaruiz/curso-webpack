import './style.scss'

type MenuItem = {
  href: string
  title: string
}

export class Menu {

  private items: MenuItem[]
  private injectPoint?: string

  constructor(items: MenuItem[] = [], injectPoint = 'menu') {
    this.items = items
    this.injectPoint = injectPoint
    console.log('injectPoint', injectPoint)
  }

  buildItem(href: string, title: string) {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.href = href
    link.innerText = title
    item.appendChild(link)
    return item
  }

  render() {
    console.log(this.injectPoint)
    const menu = document.createElement('ul')
    menu.classList.add('menu')
    this.items.forEach(({ href, title }) => menu.appendChild(this.buildItem(href,title)))
    document.querySelector(`#${this.injectPoint}`).appendChild(menu)
  }
}