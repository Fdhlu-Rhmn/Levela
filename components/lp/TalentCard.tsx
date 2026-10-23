import type { Talent } from '@/content/types'
import { formatRupiah, talentBadge } from '@/lib/programs'
import { asset } from '@/lib/asset'

function Chips({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold tracking-[0.14em] uppercase">{label}</p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((i) => (
          <li key={i} className="rounded-lg border border-cream/25 bg-cream/10 px-2.5 py-1 text-[13px]">
            {i}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TalentCard({ talent: t }: { talent: Talent }) {
  const badge = talentBadge(t)
  return (
    <article className="glass flex w-full flex-col gap-5 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={asset(t.photo)} alt={`Foto ${t.name}`} loading="lazy" className="size-14 rounded-2xl object-cover" />
          <div>
            <h3 className="text-lg leading-tight">{t.name}</h3>
            <p className="text-sm">{t.role}</p>
          </div>
        </div>
        {t.salaryFrom && (
          <div className="text-right">
            <p className="text-xs">Gaji mulai dari</p>
            <p className="font-heading text-lg">{formatRupiah(t.salaryFrom)}</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            t.sample ? 'border border-cream/40' : 'bg-white text-ink'
          }`}
        >
          {badge}
        </span>
        {t.sample && <span className="text-xs">Contoh profil</span>}
      </div>

      <dl className="grid gap-4 border-t border-line pt-4 text-sm">
        <div>
          <dt className="text-xs font-bold tracking-[0.14em] uppercase">Education</dt>
          <dd className="mt-1">
            <b>{t.education.org}</b> · {t.education.program} ({t.education.date})
            <p className="mt-1">{t.education.summary}</p>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-bold tracking-[0.14em] uppercase">Professional Experience</dt>
          <dd className="mt-1">
            <b>{t.experience.org}</b> · {t.experience.role} ({t.experience.date})
            <p className="mt-1">{t.experience.summary}</p>
          </dd>
        </div>
      </dl>

      <Chips label="Top Skills" items={t.skills} />
      <Chips label="Tools & Software" items={t.tools} />
    </article>
  )
}
