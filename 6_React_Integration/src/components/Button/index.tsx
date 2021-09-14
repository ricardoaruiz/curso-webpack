import React from 'react'

import './style.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    teste: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    console.log(props.teste)
    return (
        <button className="button">Clique me</button>
    )
}


