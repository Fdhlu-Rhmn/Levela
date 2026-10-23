import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { programs } from '@/content/programs'
import { ProgramSearch } from './ProgramSearch'

test('shows all programs initially', () => {
  render(<ProgramSearch programs={programs} />)
  expect(screen.getByText('3 program ditemukan')).toBeInTheDocument()
})

test('typing filters by keyword', async () => {
  render(<ProgramSearch programs={programs} />)
  await userEvent.type(screen.getByRole('searchbox', { name: 'Cari program' }), 'ads')
  expect(screen.getByText('1 program ditemukan')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Digital Marketing Fast Track' })).toBeInTheDocument()
})

test('combined filters with no result show the consult prompt', async () => {
  render(<ProgramSearch programs={programs} />)
  await userEvent.click(screen.getByRole('button', { name: 'Creative' }))
  await userEvent.click(screen.getByRole('button', { name: 'Tersedia' }))
  expect(screen.getByText('Belum ketemu program yang cocok? Ceritakan kebutuhanmu.')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Creative' })).toHaveAttribute('aria-pressed', 'true')
})

test('coming-soon card offers consult only', () => {
  render(<ProgramSearch programs={programs} />)
  const card = screen.getByRole('heading', { name: 'Social Media Fast Track' }).closest('article')!
  expect(within(card).getByRole('link', { name: 'Konsultasi Program ↗' })).toBeInTheDocument()
  expect(within(card).queryByRole('link', { name: 'Lihat Program' })).toBeNull()
})

test('available program without a landing page does not link to a missing page', () => {
  const noLp = { ...programs[0], slug: 'baru', title: 'Program Baru', lp: undefined }
  render(<ProgramSearch programs={[noLp]} />)
  const card = screen.getByRole('heading', { name: 'Program Baru' }).closest('article')!
  expect(within(card).queryByRole('link', { name: 'Lihat Program' })).toBeNull()
  expect(within(card).getByRole('link', { name: 'Konsultasi Program ↗' })).toBeInTheDocument()
})
