import { render, screen } from '@testing-library/react'
import Tentang from './page'

test('about page shows the partnership without subsidiary wording', () => {
  const { container } = render(<Tentang />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tempat memulai langkah profesionalmu.')
  expect(container.textContent).toContain('Talentiv Jobs')
  expect(container.textContent).not.toMatch(/bagian dari|anak perusahaan/i)
})


test('mentors sit in a carousel with previous and next controls', async () => {
  const { allMentors } = await import('@/content/programs')
  render(<Tentang />)
  const region = screen.getByRole('region', { name: 'Daftar mentor' })
  expect(region.querySelectorAll('li').length).toBeGreaterThanOrEqual(allMentors().length)
  expect(screen.getByRole('button', { name: 'Mentor sebelumnya' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Mentor berikutnya' })).toBeInTheDocument()
})
