import React from 'react'
import { ButtonStyled } from './components'
import { Button } from './components/Button'

export const App = () => {
  return (
    <div>
      Wellcome to React with webpack
      <Button teste="with scss" />
      <ButtonStyled teste="styled component" />
    </div>
  )
}

export default App
