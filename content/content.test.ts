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

test('BD curriculum: 9 sessions in 3 modules, starting 11 Nov, last session date to be confirmed', () => {
  const lp = bySlug('business-development').lp!
  const s = lp.phase1.sessions
  expect(s.length).toBe(9)
  expect(s[0]).toMatchObject({ code: 'S1', date: '2026-11-11', title: 'Business Acumen & Revenue Diagnostic', module: 'Market Intelligence' })
  expect([...new Set(s.map((x) => x.module))]).toEqual([
    'Market Intelligence',
    'Lead Generation & Commercial Operations',
    'Deal Making & Strategic Partnerships',
  ])
  expect(s[8]).toMatchObject({ code: 'S9', title: 'Mentoring Project Portfolio & Post-Test' })
  expect(s[8].date).toBeUndefined()
  expect(lp.stats[0]).toEqual({ value: '9', label: 'Sesi live class' })
  expect(bySlug('business-development').batchStart).toBe('11 Nov 2026')
})

test('checkout urls point to CO Edu', () => {
  for (const p of programs) for (const pkg of p.packages ?? [])
    if (pkg.checkoutUrl) expect(pkg.checkoutUrl.startsWith('https://edu.talentiv.id/')).toBe(true)
})

test('whatsapp text names the program', () => {
  for (const p of programs) expect(p.whatsappText).toContain(p.title)
})

test('landing pages carry visual proof slots and explained tools', () => {
  for (const p of programs.filter((p) => p.lp)) {
    const lp = p.lp!
    expect(lp.certificateImage).toMatch(/^\/images\/certificate-.+\.webp$/)
    expect(lp.situations.length).toBeGreaterThanOrEqual(3)
    for (const t of lp.tools) expect(t.use.length).toBeGreaterThan(10)
    for (const m of lp.mentors) {
      expect(m.photo).toMatch(/^\/images\/mentor-.+\.webp$/)
      expect(m.experience?.length).toBeGreaterThan(10)
    }
  }
})

test('Levela prices: Fast Track 349K (was 499K), Fast Track Plus 1.9 jt (was 2.9 jt)', () => {
  for (const p of programs.filter((p) => p.packages)) {
    const [ft, plus] = p.packages!
    expect([ft.normalPrice, ft.promoPrice, ft.promoUntil]).toEqual([499000, 349000, undefined])
    expect([plus.normalPrice, plus.promoPrice, plus.promoUntil]).toEqual([2900000, 1900000, undefined])
  }
})

test('every curriculum session explains what is covered', () => {
  for (const p of programs.filter((p) => p.lp)) for (const s of p.lp!.phase1.sessions) expect(s.desc?.length).toBeGreaterThan(30)
})

test('curriculum sessions, phase 2 modules and projects all carry description and tags like Talentiv', () => {
  for (const p of programs.filter((p) => p.lp)) {
    const lp = p.lp!
    expect(lp.phase1.intro.length).toBeGreaterThan(30)
    expect(lp.phase2.intro.length).toBeGreaterThan(30)
    for (const s of lp.phase1.sessions) {
      expect(s.tags!.length).toBeGreaterThanOrEqual(3)
      expect(s.tags!.length).toBeLessThanOrEqual(4)
    }
    for (const m of lp.phase2.modules) {
      expect(m.desc.length).toBeGreaterThan(30)
      expect(m.tags.length).toBe(3)
      expect(new Set(m.tags).size).toBe(3)
    }
    for (const pr of lp.projects) expect(pr.desc.length).toBeGreaterThan(30)
  }
})

test('BD session 2 uses the owner-supplied curriculum text', () => {
  const s2 = programs[0].lp!.phase1.sessions[1]
  expect(s2.desc).toBe(
    'Kuasai teknik riset pasar, perhitungan potensi pasar, analisis kompetitor, dan pengolahan data menggunakan Excel untuk mendukung strategi bisnis.',
  )
  expect(s2.tags).toEqual(['Market Research', 'Market Sizing', 'Competitor Analysis', 'Excel'])
})

test('Facebook is a separate tool on every landing page', () => {
  for (const p of programs.filter((p) => p.lp)) expect(p.lp!.tools.map((t) => t.name)).toContain('Facebook')
})

test('Social Media is coming soon with a teaser page', () => {
  const sm = programs.find((p) => p.slug === 'social-media')!
  expect(sm.status).toBe('coming-soon')
  expect(sm.teaser?.topics.length).toBeGreaterThanOrEqual(3)
  expect(sm.teaser?.notifyText).toContain('Social Media Fast Track')
})

test('overview points are image cards with a description; stats stay short', () => {
  for (const p of programs.filter((p) => p.lp)) {
    for (const o of p.lp!.overview) expect(o.desc.length).toBeGreaterThan(30)
    for (const o of p.lp!.overview) expect(o.image).toMatch(/^\/images\/.+\.webp$/)
    for (const s of p.lp!.stats) expect(s).not.toHaveProperty('desc')
  }
  expect(programs[0].lp!.overview[0]).toMatchObject({
    title: 'Relevan untuk Staf Entry hingga Mid Level',
    desc: 'Perkuat fondasi dan asah keterampilan melalui praktik serta simulasi alur kerja sales dan Business Development.',
  })
})

test('DM curriculum: 8 owner-supplied sessions without dates yet', () => {
  const lp = bySlug('digital-marketing').lp!
  const s = lp.phase1.sessions
  expect(s.map((x) => x.title)).toEqual([
    'Business Acumen & Revenue Diagnostic',
    'Market Research & Competitor Analysis',
    'Business Model Canvas',
    'Lead Generation & Pipeline Management',
    'Negotiation Strategy',
    'Closing Strategy',
    'Pitching, Pitch Deck & Business Presentation',
    'Building Relation & Retention with Customers',
  ])
  expect(s.every((x) => x.date === undefined)).toBe(true)
  expect(s[1].tags).toEqual(['Market Research', 'Market Sizing', 'Competitor Analysis', 'Excel Masterclass'])
  expect(lp.stats[0]).toEqual({ value: '8', label: 'Sesi live class' })
})
