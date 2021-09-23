import React from 'react'

import * as S from './styled'

type ButtonStyledProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  teste: string
}

export const ButtonStyled: React.FC<ButtonStyledProps> = (props) => {
  return <S.Button>Clique me {props.teste}</S.Button>
}
