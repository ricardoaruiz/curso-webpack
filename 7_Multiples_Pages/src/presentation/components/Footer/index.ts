import { BaseComponent } from "../BaseComponent";

import './style.scss'

export class Footer extends BaseComponent {

    private title: string

    constructor(title: string, injectPoint?: string) {
        super(injectPoint)
        this.title = title
    }

    buildTemplate(): string {
        return `
            <footer class="footer">
                <p>${this.title}</p>
            </footer>
        `
    }
}