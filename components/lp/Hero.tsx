import type { Program } from '@/content/types'
import { Button } from '../Button'
import { ConsultButton } from '../ConsultButton'
import { StatusBadge } from '../StatusBadge'
import { ArchPhoto } from '../visuals'

export function Hero({ program: p }: { program: Program }) {
  const hasPackages = !!p.packages?.length
  const facts = [
    { label: 'Durasi', value: p.duration },
    { label: 'Format', value: p.format },
    { label: 'Level', value: p.level },
    { label: 'Batch', value: p.batchStart },
  ].filter((f) => f.value)
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-8 sm:pt-10">
      <div className="grid items-center gap-8 lg:min-h-[580px] lg:grid-cols-[1.15fr_1fr]">
        <div className="relative z-10 pt-6">
          <StatusBadge status={p.status} />
          <h1 className="mt-6 text-[clamp(2.8rem,6.2vw,4.8rem)] leading-[1.02] tracking-[-0.06em] lg:-mr-20">
            {p.title}
            <span className="text-sun">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-[1.8]">{p.lp!.heroSubtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hasPackages && (
              <Button href="#paket" arrow>
                Daftar Sekarang
              </Button>
            )}
            <ConsultButton text={p.whatsappText} variant={hasPackages ? 'ghost' : 'primary'} />
          </div>
        </div>
        <div className="relative">
          <ArchPhoto
            src={`/images/lp-${p.slug}.webp`}
            alt={`Peserta ${p.title}`}
            label="Praktik nyata, portofolio nyata."
            note="LEARN. CREATE. GROW."
          />
          {facts.length > 0 && (
            <dl className="glass mt-4 grid grid-cols-2 gap-3 p-4 text-xs sm:absolute sm:top-10 sm:-right-4 sm:mt-0 sm:w-48 sm:grid-cols-1">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="tracking-[0.12em] uppercase">{f.label}</dt>
                  <dd className="font-heading text-base">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  )
}
