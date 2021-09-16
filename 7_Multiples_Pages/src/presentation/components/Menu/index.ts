import { BaseComponent } from "../BaseComponent";

import template from './template.hbs'
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
    return template({ items: this.items })
  }

  getItems(): MenuItem[] {
    return [ ...this.items ]
  }
}