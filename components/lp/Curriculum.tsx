'use client'

import { useState } from 'react'
import type { ProgramLp, Session } from '@/content/types'

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

type CardProps = { index: number; meta?: string; mentor?: string; title: string; desc?: string; tags?: string[] }

function Card({ index, meta, mentor, title, desc, tags }: CardProps) {
  return (
    <li className="glass lift flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="font-heading text-3xl tracking-[-0.05em] text-sun">{num(index)}</span>
        {meta && <span className="pt-2 text-right text-xs font-medium">{meta}</span>}
      </div>
      <h4 className="mt-4 font-heading text-lg leading-snug tracking-[-0.02em]">{title}</h4>
      {mentor && <p className="mt-1.5 text-[13px] font-semibold">Mentor: {mentor}</p>}
      {desc && <p className="mt-2 text-sm leading-relaxed">{desc}</p>}
      <Tags items={tags} />
    </li>
  )
}

// Consecutive sessions sharing a module form one group; numbering stays continuous across groups.
function groupByModule(sessions: Session[]) {
  const groups: { module?: string; sessions: { session: Session; index: number }[] }[] = []
  sessions.forEach((session, index) => {
    const last = groups[groups.length - 1]
    if (last && last.module === session.module) last.sessions.push({ session, index })
    else groups.push({ module: session.module, sessions: [{ session, index }] })
  })
  return groups
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
        {tab === 0 ? (
          groupByModule(lp.phase1.sessions).map((group, g) => (
            <div key={group.module ?? g} className="mt-9">
              {group.module && (
                <h3 className="flex items-center gap-3 text-xl tracking-[-0.02em]">
                  <span aria-hidden="true" className="rounded-md bg-sun px-2.5 py-1 text-xs font-semibold text-ink [text-shadow:none]">
                    Modul {g + 1}
                  </span>
                  <span aria-hidden="true">{group.module}</span>
                  <span className="sr-only">{`Modul ${g + 1} — ${group.module}`}</span>
                </h3>
              )}
              <ol className={`mobile-carousel grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${group.module ? 'mt-5' : ''}`}>
                {group.sessions.map(({ session: s, index }) => (
                  <Card
                    key={s.code}
                    index={index}
                    meta={s.date ? `${shortDate(s.date)} · ${lp.phase1.time}` : 'Tanggal perlu dikonfirmasi'}
                    mentor={s.mentor}
                    title={s.title}
                    desc={s.desc}
                    tags={s.tags}
                  />
                ))}
              </ol>
            </div>
          ))
        ) : (
          <ol className="mobile-carousel mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lp.phase2.modules.map((m, i) => (
              <Card key={m.title} index={i} title={m.title} desc={m.desc} tags={m.tags} />
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}
