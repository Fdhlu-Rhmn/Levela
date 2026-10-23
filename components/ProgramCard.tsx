import type { Category, Program } from '@/content/types'
import { packageCta } from '@/lib/programs'
import { asset } from '@/lib/asset'
import { Button } from './Button'
import { ConsultButton } from './ConsultButton'
import { StatusBadge } from './StatusBadge'

const eyebrow: Record<Category, string> = { Business: '01 / BUSINESS', Marketing: '02 / MARKETING', Creative: '03 / CREATIVE' }

export function ProgramCard({ program: p }: { program: Program }) {
  const available = p.status === 'available'
  const cta = p.packages?.[0] ? packageCta(p.packages[0]) : { kind: 'consult' as const }
  const meta = [p.duration, p.format, p.level].filter(Boolean).join(' · ')
  return (
    <article className="glass flex flex-col overflow-hidden">
      <div className="relative h-44 sm:h-48">
        <img src={asset(p.image)} alt={p.imageAlt} loading="lazy" className="size-full object-cover" />
        <StatusBadge status={p.status} className="absolute top-3 left-3" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="text-[11px] font-bold tracking-[0.18em] text-cream/80">{eyebrow[p.category]}</p>
        <h3 className="text-xl leading-snug font-extrabold">{p.title}</h3>
        <p className="text-sm text-cream/90">{meta || p.summary}</p>
        {p.batchStart && <p className="text-sm text-cream/90">Batch mulai {p.batchStart}</p>}
        <div className="mt-auto flex gap-2 pt-4">
          {available ? (
            <>
              <Button href={`/program/${p.slug}/`} className="flex-1">
                Lihat Program
              </Button>
              {cta.kind === 'checkout' ? (
                <Button href={cta.href} variant="ghost" external arrow className="flex-1">
                  Daftar
                </Button>
              ) : (
                <ConsultButton text={p.whatsappText} className="flex-1" />
              )}
            </>
          ) : (
            <ConsultButton text={p.whatsappText} className="flex-1" />
          )}
        </div>
      </div>
    </article>
  )
}
