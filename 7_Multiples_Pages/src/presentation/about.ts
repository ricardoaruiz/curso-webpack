import { BasePage } from './components'

import '../styles/about.scss';
class AboutPage extends BasePage {

    constructor() {
        super()
        this.render()
    }
    
}

export default new AboutPage()