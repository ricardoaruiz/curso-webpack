import './Button.scss'

const createButtonContainer = () => {
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')
    return buttonContainer
}

const addImage = (container, image) => {
    if (image) {
        const buttonImage = document.createElement('img')
        buttonImage.src = image
        buttonImage.classList.add('button-img')
        container.appendChild(buttonImage)
    }
}

const addLabel = (container, label) => {
    const buttonLabel = document.createElement('div')
    buttonLabel.innerText = label
    container.appendChild(buttonLabel)
}

const createButton = (container) => {
    const button = document.createElement('button')
    button.classList.add('button')
    button.appendChild(container)
    document.querySelector('body').appendChild(button)
}

export class Button {
    render(label, image) {
        const buttonContainer = createButtonContainer()
        addImage(buttonContainer, image)
        addLabel(buttonContainer, label)
        createButton(buttonContainer)
    }
}