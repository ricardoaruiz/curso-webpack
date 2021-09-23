import React from 'react'
import { render, screen } from '@testing-library/react'
import { ButtonStyled } from '.'

it('teste', () => {
  render(<ButtonStyled teste="Testando" />)
  expect(screen.getByText(/clique me testando/i)).toBeInTheDocument()
})
