import type { Category, Program } from '@/content/types'
import { packageCta } from '@/lib/programs'
import { asset } from '@/lib/asset'
import { Button } from './Button'
import { ConsultButton } from './ConsultButton'
import { StatusBadge } from './StatusBadge'

const eyebrow: Record<Category, string> = { Business: '01 / BUSINESS', Marketing: '02 / MARKETING', Creative: '03 / CREATIVE' }

export function ProgramCard({ program: p }: { program: Program }) {
  // Only programs with a landing page get "Lihat Program"; others fall back to consult (no 404 links).
  const available = p.status === 'available' && !!p.lp
  const cta = p.packages?.[0] ? packageCta(p.packages[0]) : { kind: 'consult' as const }
  const meta = [p.duration, p.format, p.level].filter(Boolean).join(' · ')
  return (
    <article className="glass lift group flex h-full flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={asset(p.image)}
          alt={p.imageAlt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#b83207]/45 to-transparent" />
        <StatusBadge status={p.status} className="absolute top-3 left-3" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold tracking-[0.16em]">{eyebrow[p.category]}</p>
        <h3 className="mt-4 text-[26px] leading-[1.15] tracking-[-0.03em]">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>
        {(meta || p.batchStart) && (
          <p className="mt-4 border-t border-line pt-4 text-[13px]">
            {meta}
            {p.batchStart && <span className="block">Batch mulai {p.batchStart}</span>}
          </p>
        )}
        <div className="mt-auto flex flex-col gap-2 pt-6">
          {available ? (
            <>
              <Button href={`/program/${p.slug}/`} arrow>
                Lihat Program
              </Button>
              {cta.kind === 'checkout' ? (
                <Button href={cta.href} variant="ghost" external arrow>
                  Daftar
                </Button>
              ) : (
                <ConsultButton text={p.whatsappText} />
              )}
            </>
          ) : (
            <ConsultButton text={p.whatsappText} />
          )}
        </div>
      </div>
    </article>
  )
}
