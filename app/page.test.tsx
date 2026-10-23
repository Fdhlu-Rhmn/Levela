import { render, screen } from '@testing-library/react'
import Home from './page'

test('homepage has hero, programs, anchors and no form', () => {
  const { container } = render(<Home />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bangun karier profesionalmu')
  for (const t of ['Business Development Fast Track', 'Digital Marketing Fast Track', 'Social Media Fast Track'])
    expect(screen.getByRole('heading', { name: t })).toBeInTheDocument()
  expect(container.querySelector('#belajar')).not.toBeNull()
  expect(container.querySelector('#karier')).not.toBeNull()
  expect(container.querySelector('a[href^="/tentang"]')).not.toBeNull()
  expect(container.querySelector('form')).toBeNull()
})
