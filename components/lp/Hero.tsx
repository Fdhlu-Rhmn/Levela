import type { Program } from '@/content/types'
import { asset } from '@/lib/asset'
import { Button } from '../Button'
import { ConsultButton } from '../ConsultButton'
import { StatusBadge } from '../StatusBadge'

export function Hero({ program: p }: { program: Program }) {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 pt-8 pb-12 sm:px-8 sm:pt-14 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <StatusBadge status={p.status} />
        <h1 className="mt-5 text-4xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg">{p.lp!.heroSubtitle}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="#paket" arrow>
            Daftar Sekarang
          </Button>
          <ConsultButton text={p.whatsappText} />
        </div>
        <p className="mt-6 text-sm">
          {[p.duration, p.format, p.level].filter(Boolean).join(' · ')}
          {p.batchStart && ` · Batch mulai ${p.batchStart}`}
        </p>
      </div>
      <div className="glass overflow-hidden p-2">
        <img
          src={asset(`/images/lp-${p.slug}.webp`)}
          alt={`Peserta ${p.title}`}
          className="aspect-[4/5] w-full rounded-[16px] object-cover"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
