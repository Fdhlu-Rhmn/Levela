import type { Partner } from '@/content/types'
import { asset } from '@/lib/asset'

export function PartnerMatch({ partners }: { partners: Partner[] }) {
  return (
    <div className="glass flex flex-col gap-4 p-5 sm:p-6">
      <h3 className="text-lg font-extrabold">Terhubung dengan mitra hiring</h3>
      <p className="text-sm">
        Skill yang kamu bangun cocok dengan posisi yang dibuka mitra hiring melalui Talentiv Jobs.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {partners.map((p) => (
          <li key={p.id} className="rounded-2xl border border-cream/25 bg-cream/10 p-4">
            {p.logo ? (
              <img src={asset(p.logo)} alt={p.name} loading="lazy" className="h-8 w-auto" />
            ) : (
              <p className="font-heading font-extrabold">{p.name}</p>
            )}
            <p className="mt-2 text-[13px]">{p.roles.join(' · ')}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
