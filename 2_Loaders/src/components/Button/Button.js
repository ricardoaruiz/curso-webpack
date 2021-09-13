import './Button.scss'

export class Button {

    render(label, image) {
        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')

        if (image) {
            const buttonImage = document.createElement('img')
            buttonImage.src = image
            buttonImage.classList.add('button-img')
            buttonContainer.appendChild(buttonImage)
        }

        const buttonLabel = document.createElement('div')
        buttonLabel.innerText = label
        buttonContainer.appendChild(buttonLabel)

        const button = document.createElement('button')
        button.classList.add('button')
        button.appendChild(buttonContainer)
        document.querySelector('body').appendChild(button)
    }

}