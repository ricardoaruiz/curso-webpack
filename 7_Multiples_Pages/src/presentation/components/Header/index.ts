import './style.scss'

export class Header {

  private title: string

  constructor(title: string) {
    this.title = title
  }

  render() {
    const header = document.createElement('header')
    header.id = "app-header"
    header.innerHTML = `<p>${this.title}</p>`
    document.querySelector('body').firstChild.before(header)
  }
}