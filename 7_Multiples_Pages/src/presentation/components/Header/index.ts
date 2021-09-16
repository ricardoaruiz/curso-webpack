import { BaseComponent } from "../BaseComponent";

import template from './template.hbs'
import './style.scss'

export class Header extends BaseComponent {

  private title: string

  constructor(title: string, injectPoint?: string) {
    super(injectPoint)
    this.title = title
  }

  buildTemplate(): string {
    return template({ title: this.title })
  }
}