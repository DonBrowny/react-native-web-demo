import { render, screen } from '@testing-library/react'
import Alternate from '@/pages/alternate'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Alternate />)

    const heading = screen.getByRole('heading', {
      name: /Alternate Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})