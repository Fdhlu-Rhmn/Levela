import { render, screen } from '@testing-library/react'
import Tentang from './page'

test('about page shows the partnership without subsidiary wording', () => {
  const { container } = render(<Tentang />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tempat memulai langkah profesionalmu.')
  expect(container.textContent).toContain('Talentiv Jobs')
  expect(container.textContent).not.toMatch(/bagian dari|anak perusahaan/i)
})

test('mentor grid never leaves a single card on the last desktop row', async () => {
  const { mentorCols } = await import('./page')
  for (let n = 2; n <= 20; n++) {
    const cols = Number(mentorCols(n).match(/grid-cols-(\d)/)![1])
    expect(n % cols === 1 && n > cols).toBe(false)
  }
  expect(mentorCols(9)).toBe('lg:grid-cols-3')
  expect(mentorCols(8)).toBe('lg:grid-cols-4')
})
