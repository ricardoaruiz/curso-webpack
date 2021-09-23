import React from 'react'

import './style.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  teste: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button className="button">Clique me {props.teste}</button>
}
