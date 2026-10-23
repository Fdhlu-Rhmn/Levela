import { programs } from './programs'
import { talents } from './talents'
import { partners } from './partners'

const bySlug = (s: string) => programs.find((p) => p.slug === s)!

test('slugs are unique and fixed', () => {
  expect(programs.map((p) => p.slug)).toEqual(['business-development', 'digital-marketing', 'social-media'])
})

test('available programs have an lp and a package; social media is coming soon', () => {
  for (const p of programs.filter((p) => p.status === 'available')) {
    expect(p.lp).toBeDefined()
    expect(p.packages?.length).toBeGreaterThan(0)
  }
  expect(bySlug('social-media').status).toBe('coming-soon')
  expect(bySlug('social-media').lp).toBeUndefined()
})

test('no HR content on BD and DM pages', () => {
  for (const s of ['business-development', 'digital-marketing']) {
    expect(JSON.stringify(bySlug(s).lp)).not.toMatch(/\b(HR|HRD|HRIS|Mekari|Human Resource|recruiter)\b/i)
  }
})

test('talent and partner references resolve', () => {
  const talentIds = new Set(talents.map((t) => t.id))
  const partnerIds = new Set(partners.map((p) => p.id))
  for (const p of programs) for (const id of p.lp?.talentIds ?? []) expect(talentIds.has(id)).toBe(true)
  for (const t of talents) for (const id of t.partnerIds) expect(partnerIds.has(id)).toBe(true)
})

test('all talents are samples for now', () => {
  expect(talents.length).toBe(4)
  expect(talents.every((t) => t.sample)).toBe(true)
})

test('BD phase 1 has 11 sessions starting with onboarding', () => {
  const s = bySlug('business-development').lp!.phase1.sessions
  expect(s.length).toBe(11)
  expect(s[0]).toEqual({ code: 'S1', date: '2026-11-10', title: 'Onboarding Program' })
})

test('checkout urls point to CO Edu', () => {
  for (const p of programs) for (const pkg of p.packages ?? [])
    if (pkg.checkoutUrl) expect(pkg.checkoutUrl.startsWith('https://edu.talentiv.id/')).toBe(true)
})

test('whatsapp text names the program', () => {
  for (const p of programs) expect(p.whatsappText).toContain(p.title)
})
