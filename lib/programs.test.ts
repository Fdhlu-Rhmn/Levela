import { programs } from '@/content/programs'
import { talents } from '@/content/talents'
import { filterPrograms, packageCta, isPromoActive, formatRupiah, talentBadge } from './programs'

const slugs = (list: { slug: string }[]) => list.map((p) => p.slug)
const all = { category: 'all', status: 'all' } as const

describe('filterPrograms', () => {
  test('messy query matches keywords', () => {
    expect(slugs(filterPrograms(programs, { ...all, query: '  ADS ' }))).toEqual(['digital-marketing'])
  })
  test('matches indonesian keyword', () => {
    expect(slugs(filterPrograms(programs, { ...all, query: 'negosiasi' }))).toEqual(['business-development'])
  })
  test('category filter with empty query', () => {
    expect(slugs(filterPrograms(programs, { query: '', category: 'Creative', status: 'all' }))).toEqual(['social-media'])
  })
  test('combined filters can be empty', () => {
    expect(filterPrograms(programs, { query: '', category: 'Creative', status: 'available' })).toEqual([])
  })
  test('keeps original order', () => {
    expect(slugs(filterPrograms(programs, { ...all, query: '' }))).toEqual(slugs(programs))
  })
})

test('packageCta falls back to consult without checkoutUrl', () => {
  expect(packageCta({ name: 'x', features: [] })).toEqual({ kind: 'consult' })
  const href = 'https://edu.talentiv.id/checkout/?add-to-cart=1'
  expect(packageCta({ name: 'x', features: [], checkoutUrl: href })).toEqual({ kind: 'checkout', href })
})

test('isPromoActive ends after promoUntil in Jakarta time', () => {
  const pkg = { name: 'x', features: [], promoPrice: 1, promoUntil: '2026-11-02' }
  expect(isPromoActive(pkg, new Date('2026-11-02T23:00:00+07:00'))).toBe(true)
  expect(isPromoActive(pkg, new Date('2026-11-03T00:00:00+07:00'))).toBe(false)
  expect(isPromoActive({ name: 'x', features: [], promoUntil: '2026-11-02' }, new Date('2026-10-01'))).toBe(false)
})

test('formatRupiah', () => {
  expect(formatRupiah(3500000)).toBe('Rp3.500.000')
})

test('talentBadge hides verification for samples', () => {
  expect(talentBadge({ ...talents[0], sample: true })).toBe('Profil lulusan')
  expect(talentBadge({ ...talents[0], sample: false })).toBe('Verified by Talentiv')
})
