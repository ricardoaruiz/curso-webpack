import './style.scss'
import logoSVG from '../../assets/images/webpack.svg'
import logoPNG from '../../assets/images/webpack.png'

type HeaderProps = {
    title: string
}

export class Header {
    render({title}: HeaderProps) {
        
        const imageSVG = document.createElement('img')
        imageSVG.src = logoSVG

        const imagePNG = document.createElement('img')
        imagePNG.src = logoPNG

        const text = document.createElement('p')
        text.innerHTML = title

        const header = document.createElement('div');
        header.appendChild(imagePNG)
        header.appendChild(imageSVG)
        header.appendChild(text)
        header.classList.add('header')
        document.querySelector('body').insertAdjacentHTML('afterbegin', header.outerHTML)
    }
}