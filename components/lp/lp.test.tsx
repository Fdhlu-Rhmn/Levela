import { render, screen } from '@testing-library/react'
import { talents } from '@/content/talents'
import { TalentCard } from './TalentCard'
import { PricingCard } from './PricingCard'
import { generateStaticParams } from '@/app/program/[slug]/page'

test('sample talent never shows verification badge', () => {
  render(<TalentCard talent={{ ...talents[0], sample: true }} />)
  expect(screen.getByText('Profil lulusan')).toBeInTheDocument()
  expect(screen.getByText('Contoh profil')).toBeInTheDocument()
  expect(screen.queryByText('Verified by Talentiv')).toBeNull()
})

test('real talent shows verification badge', () => {
  render(<TalentCard talent={{ ...talents[0], sample: false }} />)
  expect(screen.getByText('Verified by Talentiv')).toBeInTheDocument()
})

test('package without checkout or price falls back to consult', () => {
  render(<PricingCard pkg={{ name: 'Fast Track', features: ['a'] }} whatsappText="Halo" />)
  expect(screen.getByRole('link', { name: 'Konsultasi Program ↗' })).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: /Daftar/ })).toBeNull()
  expect(screen.getByText('Harga diinformasikan saat konsultasi')).toBeInTheDocument()
})

test('expired promo shows only the normal price', () => {
  vi.useFakeTimers({ toFake: ['Date'] })
  vi.setSystemTime(new Date('2026-11-03T12:00:00+07:00'))
  render(
    <PricingCard
      pkg={{ name: 'Fast Track', normalPrice: 3500000, promoPrice: 2600000, promoUntil: '2026-11-02', features: [] }}
      whatsappText="Halo"
      now={new Date('2026-11-03T12:00:00+07:00')}
    />,
  )
  expect(screen.getByText('Rp3.500.000')).toBeInTheDocument()
  expect(screen.queryByText('Rp2.600.000')).toBeNull()
  vi.useRealTimers()
})

test('only available programs with an lp get a page', () => {
  expect(generateStaticParams()).toEqual([{ slug: 'business-development' }, { slug: 'digital-marketing' }])
})

test('promo shown at build time switches to normal price once it has ended in the browser', async () => {
  vi.useFakeTimers({ toFake: ['Date'] })
  vi.setSystemTime(new Date('2026-11-05T10:00:00+07:00'))
  render(
    <PricingCard
      pkg={{ name: 'Fast Track', normalPrice: 3500000, promoPrice: 2600000, promoUntil: '2026-11-02', features: [] }}
      whatsappText="Halo"
      now={new Date('2026-10-23T10:00:00+07:00')}
    />,
  )
  expect(await screen.findByText('Rp3.500.000')).toBeInTheDocument()
  expect(screen.queryByText('Rp2.600.000')).toBeNull()
  vi.useRealTimers()
})

test('program with an lp but no packages still builds a page without a paket section', async () => {
  const { programs } = await import('@/content/programs')
  const bd = programs[0]
  const original = bd.packages
  bd.packages = undefined
  const { default: Page } = await import('@/app/program/[slug]/page')
  const { container } = render(await Page({ params: Promise.resolve({ slug: bd.slug }) }))
  expect(container.querySelector('#paket')).toBeNull()
  expect(screen.queryByRole('link', { name: /Daftar Sekarang/ })).toBeNull()
  bd.packages = original
})
