import Link from 'next/link'
import { site } from '@/content/site'
import { Logo } from './Logo'

const links = [
  { href: '/program/', label: 'Program' },
  { href: '/#karier', label: 'Koneksi Karier' },
  { href: '/tentang/', label: 'Tentang Levela' },
]

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pt-6 pb-28 sm:px-8 sm:pb-10">
      <div className="glass grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_1fr_auto] md:items-end">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm">{site.tagline}</p>
        </div>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="flex min-h-11 items-center underline-offset-4 hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <small className="text-xs">© {new Date().getFullYear()} Levela Academy.</small>
      </div>
    </footer>
  )
}
