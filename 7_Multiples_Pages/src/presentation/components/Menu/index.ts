import { BaseComponent } from "../BaseComponent";

import './style.scss'

type MenuItem = {
  href: string
  title: string
}

export class Menu extends BaseComponent {

  private items: MenuItem[]

  constructor(items: MenuItem[] = [], injectPoint?: string) {
    super(injectPoint)
    this.items = items
  }

  buildTemplate(): string {
    return `
      <nav>
        <ul class="menu">
          ${this.items.map(({ href, title }) => `
            <li>
              <a href="${href}">${title}</a>
            </li>
          `)}
        </ul>
      </nav>
    `
  }

  getItems(): MenuItem[] {
    return [ ...this.items ]
  }
}