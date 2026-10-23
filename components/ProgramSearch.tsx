'use client'

import { useState } from 'react'
import type { Category, Program, ProgramStatus } from '@/content/types'
import { filterPrograms } from '@/lib/programs'
import { consultText } from './Header'
import { ConsultButton } from './ConsultButton'
import { ProgramCard } from './ProgramCard'

const categories: (Category | 'all')[] = ['all', 'Business', 'Marketing', 'Creative']
const statuses: { value: ProgramStatus; label: string }[] = [
  { value: 'available', label: 'Tersedia' },
  { value: 'coming-soon', label: 'Segera Hadir' },
]

function Pill({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`h-10 shrink-0 rounded-full border px-4 text-sm transition-colors ${
        on ? 'border-white bg-white font-bold text-ink' : 'border-cream/45 hover:bg-cream/10'
      }`}
    >
      {children}
    </button>
  )
}

export function ProgramSearch({ programs }: { programs: Program[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [status, setStatus] = useState<ProgramStatus | 'all'>('all')
  const results = filterPrograms(programs, { query, category, status })

  return (
    <>
      <div className="glass sticky top-2 z-20 flex flex-col gap-3 p-3 sm:static sm:p-4">
        <label className="sr-only" htmlFor="program-query">
          Cari program
        </label>
        <input
          id="program-query"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari skill: negosiasi, ads, konten…"
          className="h-12 rounded-2xl bg-white px-4 text-base text-ink shadow-[0_4px_14px_rgba(60,20,0,.12)] placeholder:text-ink/50"
        />
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none]">
          {categories.map((c) => (
            <Pill key={c} on={category === c} onClick={() => setCategory(c)}>
              {c === 'all' ? 'Semua' : c}
            </Pill>
          ))}
          <span aria-hidden="true" className="mx-1 w-px shrink-0 bg-line" />
          {statuses.map((s) => (
            <Pill key={s.value} on={status === s.value} onClick={() => setStatus(status === s.value ? 'all' : s.value)}>
              {s.label}
            </Pill>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-5 mb-3 text-sm">
        {results.length} program ditemukan
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <ProgramCard key={p.slug} program={p} />
        ))}
      </div>

      <div className="glass mt-5 flex flex-col items-stretch gap-3 p-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>Belum ketemu program yang cocok? Ceritakan kebutuhanmu.</p>
        <ConsultButton text={consultText} variant="primary" />
      </div>
      <ConsultButton text={consultText} floating />
    </>
  )
}
