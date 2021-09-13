import logo from '../../assets/images/webpack.png'

import './Logo.css'

export class Logo {

    render() {
        const image = document.createElement('img')
        image.src = logo
        image.classList.add('logo')
        document.querySelector('body').appendChild(image)
    }

}