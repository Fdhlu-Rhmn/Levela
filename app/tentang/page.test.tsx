import { render, screen } from '@testing-library/react'
import Tentang from './page'

test('about page shows the partnership without subsidiary wording', () => {
  const { container } = render(<Tentang />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tempat memulai langkah profesionalmu.')
  expect(container.textContent).toContain('Talentiv Jobs')
  expect(container.textContent).not.toMatch(/bagian dari|anak perusahaan/i)
})
