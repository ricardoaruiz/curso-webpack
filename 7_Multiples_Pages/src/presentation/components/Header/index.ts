import { BaseComponent } from "../BaseComponent";

import './style.scss'

export class Header extends BaseComponent {

  private title: string

  constructor(title: string, injectPoint?: string) {
    super(injectPoint)
    this.title = title
  }

  buildTemplate(): string {
    return `
      <header id="app-header">
        <p>${this.title}</p>
      </header>
    `
  }
}