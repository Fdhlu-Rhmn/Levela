import type { Program } from '@/content/types'
import { whatsappUrl } from '@/lib/whatsapp'
import { buttonBase, buttonVariants } from '../Button'
import { ConsultButton } from '../ConsultButton'
import { MobileCta } from '../MobileCta'
import { Section } from '../Section'
import { StatusBadge } from '../StatusBadge'
import { ArchPhoto } from '../visuals'

// Coming-soon page: shows what the program will cover and collects interest via WhatsApp.
export function Teaser({ program: p }: { program: Program }) {
  const t = p.teaser!
  const notify = (
    <a href={whatsappUrl(t.notifyText)} target="_blank" rel="noopener" className={`${buttonBase} ${buttonVariants.primary}`}>
      <span>Kabari Saya Saat Dibuka</span> <span aria-hidden="true" className="text-xl leading-none">↗</span>
    </a>
  )
  return (
    <main className="pb-20 sm:pb-0">
      <section className="mx-auto w-full max-w-6xl px-4 pt-8 pb-14 sm:px-8 sm:pt-10 sm:pb-20">
        <div className="grid items-center gap-8 lg:min-h-[560px] lg:grid-cols-[1.15fr_1fr]">
          <div className="pt-6">
            <StatusBadge status={p.status} />
            <p className="mt-6 text-[11px] font-semibold tracking-[0.18em]">{p.title.toUpperCase()}</p>
            <h1 className="mt-4 text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[1.03] tracking-[-0.06em]">
              {t.headline}
              <span className="text-sun">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-[1.8]">{t.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {notify}
              <ConsultButton text={p.whatsappText} />
            </div>
          </div>
          <div className="relative">
            <ArchPhoto src={p.image} alt={p.imageAlt} label="Sedang kami siapkan." note="COMING SOON" />
          </div>
        </div>
      </section>

      <Section eyebrow="01 / Sneak peek" aside="What you will learn." title="Intip materi yang sedang disiapkan.">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.topics.map((topic, i) => (
            <li key={topic.title} className="glass lift reveal flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-3xl tracking-[-0.05em] text-sun">{String(i + 1).padStart(2, '0')}</span>
                <span className="rounded-full border border-cream/40 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em]">PREVIEW</span>
              </div>
              <h3 className="mt-5 text-xl leading-snug tracking-[-0.02em]">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{topic.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-6">
          <span className="mr-3 text-[11px] font-semibold tracking-[0.16em]">TOOLS</span>
          {t.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-cream/35 bg-cream/15 px-4 py-2 text-sm">
              {tool}
            </span>
          ))}
        </div>
      </Section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8">
        <div className="reveal relative grid gap-8 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#ffba4c]/10 to-[#ffcf6f]/25 px-6 py-10 sm:px-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em]">DAFTAR TUNGGU</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-[-0.05em]">Jadi yang pertama tahu saat program dibuka.</h2>
            <div className="mt-7">{notify}</div>
          </div>
          <ul className="relative grid gap-3">
            {t.perks.map((perk, i) => (
              <li key={perk} className="glass flex items-center gap-4 p-4">
                <span className="ring-line grid size-9 shrink-0 place-items-center text-xs">{String(i + 1).padStart(2, '0')}</span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <MobileCta consultText={t.notifyText} />
    </main>
  )
}
