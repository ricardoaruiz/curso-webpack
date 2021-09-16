import { BasePage } from './components'

import '../styles/home.scss';
class HomePage extends BasePage {

    constructor() {
        super()
        this.render()
    }

}

export default new HomePage()