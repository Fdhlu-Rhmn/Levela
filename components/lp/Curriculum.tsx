'use client'

import { useState } from 'react'
import type { ProgramLp } from '@/content/types'

const shortDate = (d: string) =>
  new Date(`${d}T00:00:00+07:00`).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Asia/Jakarta' })

const num = (i: number) => String(i + 1).padStart(2, '0')

function Tags({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-cream/35 bg-cream/15 px-3 py-1 text-xs font-medium">
          {t}
        </li>
      ))}
    </ul>
  )
}

type CardProps = { index: number; meta?: string; title: string; desc?: string; tags?: string[] }

function Card({ index, meta, title, desc, tags }: CardProps) {
  return (
    <li className="glass lift flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="font-heading text-3xl tracking-[-0.05em] text-sun">{num(index)}</span>
        {meta && <span className="pt-2 text-right text-xs font-medium">{meta}</span>}
      </div>
      <h4 className="mt-4 font-heading text-lg leading-snug tracking-[-0.02em]">{title}</h4>
      {desc && <p className="mt-2 text-sm leading-relaxed">{desc}</p>}
      <Tags items={tags} />
    </li>
  )
}

export function Curriculum({ lp }: { lp: ProgramLp }) {
  const [tab, setTab] = useState(0)
  const phases = [
    { label: 'Fase 1', title: lp.phase1.title, intro: lp.phase1.intro, meta: `${lp.phase1.sessions.length} sesi · Live class ${lp.phase1.time}` },
    { label: 'Fase 2', title: lp.phase2.title, intro: lp.phase2.intro, meta: `${lp.phase2.modules.length} modul · Project + 1on1 mentor` },
  ]
  const active = phases[tab]

  return (
    <div>
      <div
        role="tablist"
        aria-label="Fase kurikulum"
        className="glass inline-grid w-full grid-cols-2 gap-1 rounded-2xl! p-1.5 sm:w-auto"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') setTab((t) => (t === 0 ? 1 : 0))
        }}
      >
        {phases.map((ph, i) => (
          <button
            key={ph.label}
            type="button"
            role="tab"
            id={`fase-tab-${i}`}
            aria-selected={tab === i}
            aria-controls="fase-panel"
            tabIndex={tab === i ? 0 : -1}
            onClick={() => setTab(i)}
            className={`min-h-12 rounded-xl px-5 text-left text-sm transition-colors sm:min-w-64 ${
              tab === i ? 'bg-cream text-ink [text-shadow:none]' : 'hover:bg-cream/10'
            }`}
          >
            <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase">{ph.label}</span>
            <span className="block font-semibold">{ph.title}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id="fase-panel" aria-labelledby={`fase-tab-${tab}`} className="mt-8">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <p className="max-w-xl text-base leading-relaxed">{active.intro}</p>
          <p className="justify-self-start rounded-full border border-line px-4 py-1.5 text-sm lg:justify-self-end">{active.meta}</p>
        </div>
        <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tab === 0
            ? lp.phase1.sessions.map((s, i) => (
                <Card key={s.code} index={i} meta={`${shortDate(s.date)} · ${lp.phase1.time}`} title={s.title} desc={s.desc} tags={s.tags} />
              ))
            : lp.phase2.modules.map((m, i) => <Card key={m.title} index={i} title={m.title} desc={m.desc} tags={m.tags} />)}
        </ol>
      </div>
    </div>
  )
}
