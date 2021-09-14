import './style.scss'

export class Header {
    render(title) {
        const h1 = document.createElement('h1');
        h1.innerText = title
        h1.classList.add('header')
        document.querySelector('body').appendChild(h1)
    }
}