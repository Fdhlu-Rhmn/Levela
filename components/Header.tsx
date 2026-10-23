'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Logo } from './Logo'
import { ConsultButton } from './ConsultButton'

export const navLinks = [
  { href: '/program/', label: 'Program' },
  { href: '/#belajar', label: 'Cara Belajar' },
  { href: '/#karier', label: 'Karier' },
  { href: '/tentang/', label: 'Tentang Kami' },
]

export const consultText = 'Halo kak, saya ingin konsultasi program Levela.'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative z-30 mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-6 border-b border-line px-4 sm:h-24 sm:px-8">
      <Logo />
      <nav aria-label="Navigasi utama" className="hidden gap-8 text-sm lg:flex">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} className="opacity-85 transition-opacity hover:opacity-100">
            {l.label}
          </Link>
        ))}
      </nav>
      <ConsultButton text={consultText} className="hidden lg:inline-flex" />
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
        onClick={() => setOpen(!open)}
        className="grid size-11 place-items-center rounded-xl border border-line lg:hidden"
      >
        <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
          <i className={`h-0.5 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <i className={`h-0.5 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
          <i className={`h-0.5 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </span>
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi mobile"
          className="glass absolute inset-x-4 top-full mt-2 flex flex-col p-3 lg:hidden"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-4 text-base hover:bg-cream/10"
            >
              {l.label}
            </Link>
          ))}
          <ConsultButton text={consultText} variant="primary" className="mt-2" />
        </nav>
      )}
    </header>
  )
}
