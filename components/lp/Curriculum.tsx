import type { ProgramLp } from '@/content/types'

const shortDate = (d: string) =>
  new Date(`${d}T00:00:00+07:00`).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Asia/Jakarta' })

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

function PhaseHeader({ label, title, intro, meta }: { label: string; title: string; intro: string; meta?: string }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-end">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.16em]">{label}</p>
        <h3 className="mt-2 text-2xl tracking-[-0.03em] sm:text-3xl">{title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">{intro}</p>
      </div>
      {meta && <p className="justify-self-start rounded-full border border-line px-4 py-1.5 text-sm lg:justify-self-end">{meta}</p>}
    </div>
  )
}

const card = 'glass lift flex flex-col p-5'

export function Curriculum({ lp }: { lp: ProgramLp }) {
  return (
    <div className="grid gap-14">
      <div>
        <PhaseHeader
          label="FASE 1 · LIVE CLASS"
          title={lp.phase1.title}
          intro={lp.phase1.intro}
          meta={`${lp.phase1.sessions.length} sesi · ${lp.phase1.time}`}
        />
        <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lp.phase1.sessions.map((s) => (
            <li key={s.code} className={card}>
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="rounded-md bg-cream px-2.5 py-1 font-semibold text-ink [text-shadow:none]">{s.code}</span>
                <span>{shortDate(s.date)}</span>
              </div>
              <h4 className="mt-4 font-heading text-lg leading-snug tracking-[-0.02em]">{s.title}</h4>
              {s.desc && <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>}
              <Tags items={s.tags} />
            </li>
          ))}
        </ol>
      </div>

      <div>
        <PhaseHeader label="FASE 2 · MENTORING" title={lp.phase2.title} intro={lp.phase2.intro} meta="Project + 1on1 mentor" />
        <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lp.phase2.modules.map((m, i) => (
            <li key={m.title} className={card}>
              <span className="font-heading text-3xl tracking-[-0.05em] text-sun">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="mt-4 font-heading text-lg leading-snug tracking-[-0.02em]">{m.title}</h4>
              <p className="mt-2 text-sm leading-relaxed">{m.desc}</p>
              <Tags items={m.tags} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
