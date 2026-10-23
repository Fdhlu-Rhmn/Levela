import type { Category, Package, Program, ProgramStatus, Talent } from '@/content/types'

export type ProgramFilter = { query: string; category: Category | 'all'; status: ProgramStatus | 'all' }

export function filterPrograms(list: Program[], f: ProgramFilter): Program[] {
  const q = f.query.trim().replace(/\s+/g, ' ').toLowerCase()
  return list.filter(
    (p) =>
      (f.category === 'all' || p.category === f.category) &&
      (f.status === 'all' || p.status === f.status) &&
      (!q || [p.title, p.summary, p.keywords.join(' ')].some((s) => s.toLowerCase().includes(q))),
  )
}

export function packageCta(pkg: Package): { kind: 'checkout'; href: string } | { kind: 'consult' } {
  return pkg.checkoutUrl ? { kind: 'checkout', href: pkg.checkoutUrl } : { kind: 'consult' }
}

export function isPromoActive(pkg: Package, now: Date): boolean {
  if (!pkg.promoPrice) return false
  if (!pkg.promoUntil) return true // standing discount, no end date
  return now <= new Date(`${pkg.promoUntil}T23:59:59+07:00`)
}

export const formatRupiah = (n: number): string => 'Rp' + n.toLocaleString('id-ID')

export const talentBadge = (t: Talent): 'Verified by Talentiv' | 'Profil lulusan' =>
  t.sample ? 'Profil lulusan' : 'Verified by Talentiv'
