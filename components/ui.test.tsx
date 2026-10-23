import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StatusBadge } from './StatusBadge'
import { ConsultButton } from './ConsultButton'
import { Header } from './Header'
import { Footer } from './Footer'

test('StatusBadge shows readable text for each status', () => {
  const { rerender } = render(<StatusBadge status="available" />)
  expect(screen.getByText('Tersedia')).toBeInTheDocument()
  rerender(<StatusBadge status="coming-soon" />)
  expect(screen.getByText('Segera Hadir')).toBeInTheDocument()
})

test('ConsultButton links to WhatsApp with encoded text', () => {
  render(<ConsultButton text="Halo & tes" />)
  const link = screen.getByRole('link', { name: 'Konsultasi Program ↗' })
  expect(link.getAttribute('href')).toContain('text=Halo%20%26%20tes')
})

test('Header menu button toggles navigation', async () => {
  render(<Header />)
  const button = screen.getByRole('button', { name: 'Buka navigasi' })
  await userEvent.click(button)
  expect(button).toHaveAttribute('aria-expanded', 'true')
  expect(button).toHaveAccessibleName('Tutup navigasi')
})

test('Footer keeps the tagline and year without subsidiary wording', () => {
  const { container } = render(<Footer />)
  expect(screen.getByText('Sekolah bisnis dan kreatif untuk membangun karier profesionalmu.')).toBeInTheDocument()
  expect(container.textContent).toContain(String(new Date().getFullYear()))
  expect(container.textContent).not.toMatch(/bagian dari/i)
})
