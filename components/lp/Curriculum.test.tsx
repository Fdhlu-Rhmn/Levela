import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { programs } from '@/content/programs'
import { Curriculum } from './Curriculum'

const lp = programs[0].lp!

test('phase 1 tab is open by default and shows numbered sessions with date and time', () => {
  render(<Curriculum lp={lp} />)
  expect(screen.getByRole('tab', { name: /Fase 1/ })).toHaveAttribute('aria-selected', 'true')
  const panel = screen.getByRole('tabpanel')
  const first = within(panel).getByRole('heading', { name: 'Onboarding Program' }).closest('li')!
  expect(within(first).getByText('01')).toBeInTheDocument()
  expect(first.textContent).toMatch(/10 Nov · 19\.30 WIB/)
  expect(within(panel).queryByRole('heading', { name: 'Project Brief & Business Context' })).toBeNull()
})

test('switching to phase 2 shows the mentoring modules', async () => {
  render(<Curriculum lp={lp} />)
  await userEvent.click(screen.getByRole('tab', { name: /Fase 2/ }))
  expect(screen.getByRole('tab', { name: /Fase 2/ })).toHaveAttribute('aria-selected', 'true')
  const panel = screen.getByRole('tabpanel')
  expect(within(panel).getByRole('heading', { name: 'Project Brief & Business Context' })).toBeInTheDocument()
  expect(within(panel).queryByRole('heading', { name: 'Onboarding Program' })).toBeNull()
})
