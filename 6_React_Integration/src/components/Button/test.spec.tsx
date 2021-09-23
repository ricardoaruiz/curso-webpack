import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '.'

it('teste', () => {
  render(<Button teste="Testando" />)
  expect(screen.getByText(/clique me testando/i)).toBeInTheDocument()
})
