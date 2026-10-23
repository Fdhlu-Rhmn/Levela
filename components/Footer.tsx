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
    <footer className="mx-auto w-full max-w-6xl px-4 pb-28 sm:px-8 sm:pb-10">
      <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_1.3fr_1.1fr_auto] md:items-center">
        <Logo />
        <p className="max-w-xs text-sm leading-relaxed">{site.tagline}</p>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-7 gap-y-1 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="flex min-h-11 items-center underline-offset-4 hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <small className="text-xs">© {new Date().getFullYear()} Levela Academy.</small>
      </div>
      <p aria-hidden="true" className="mt-10 select-none font-heading text-[clamp(4rem,17vw,13rem)] leading-[0.8] tracking-[-0.07em] text-[#f3833f] [text-shadow:none]">
        levela↗
      </p>
    </footer>
  )
}
