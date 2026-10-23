import type { ProgramLp } from '@/content/types'

const shortDate = (d: string) =>
  new Date(`${d}T00:00:00+07:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', timeZone: 'Asia/Jakarta' })

export function Curriculum({ lp }: { lp: ProgramLp }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <details open className="glass group p-5 sm:p-6">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="block text-xs font-bold tracking-[0.16em]">FASE 1 · LIVE CLASS</span>
            <span className="font-heading text-xl font-extrabold">{lp.phase1.title}</span>
          </span>
          <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <p className="mt-2 text-sm">{lp.phase1.time}</p>
        <ol className="mt-4 divide-y divide-line">
          {lp.phase1.sessions.map((s) => (
            <li key={s.code} className="grid grid-cols-[3rem_4.5rem_1fr] gap-2 py-2.5 text-sm">
              <span className="font-bold">{s.code}</span>
              <span>{shortDate(s.date)}</span>
              <span>{s.title}</span>
            </li>
          ))}
        </ol>
      </details>
      <div className="glass p-5 sm:p-6">
        <p className="text-xs font-bold tracking-[0.16em]">FASE 2 · MENTORING</p>
        <h3 className="font-heading text-xl font-extrabold">{lp.phase2.title}</h3>
        <ol className="mt-4 grid gap-2 text-sm">
          {lp.phase2.modules.map((m, i) => (
            <li key={m} className="flex gap-3 rounded-xl border border-cream/20 p-3">
              <span className="font-bold">{String(i + 1).padStart(2, '0')}</span>
              {m}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
