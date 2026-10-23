import type { ProgramLp } from '@/content/types'

const shortDate = (d: string) =>
  new Date(`${d}T00:00:00+07:00`).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Asia/Jakarta' })

export function Curriculum({ lp }: { lp: ProgramLp }) {
  return (
    <div className="grid gap-12">
      <div>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em]">FASE 1 · LIVE CLASS</p>
            <h3 className="mt-2 text-2xl tracking-[-0.03em]">{lp.phase1.title}</h3>
          </div>
          <p className="rounded-full border border-line px-4 py-1.5 text-sm">
            {lp.phase1.sessions.length} sesi · {lp.phase1.time}
          </p>
        </div>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lp.phase1.sessions.map((s) => (
            <li key={s.code} className="glass lift flex flex-col p-5">
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="rounded-md bg-cream px-2.5 py-1 font-semibold text-ink [text-shadow:none]">{s.code}</span>
                <span>{shortDate(s.date)}</span>
              </div>
              <h4 className="mt-4 font-heading text-lg leading-snug tracking-[-0.02em]">{s.title}</h4>
              {s.desc && <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>}
            </li>
          ))}
        </ol>
      </div>

      <div className="glass p-6 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_2.4fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em]">FASE 2 · MENTORING</p>
            <h3 className="mt-2 text-2xl tracking-[-0.03em]">{lp.phase2.title}</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Setelah live class, kamu mengerjakan project bersama mentor lewat sesi 1on1 sampai siap dipresentasikan.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-5">
            {lp.phase2.modules.map((m, i) => (
              <li key={m} className="rounded-xl border border-line p-4">
                <span className="font-heading text-2xl tracking-[-0.05em] text-sun">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-sm leading-snug">{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
