import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProgram, getTalents, programs } from '@/content/programs'
import { partners } from '@/content/partners'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { ConsultButton } from '@/components/ConsultButton'
import { Faq } from '@/components/Faq'
import { Hero } from '@/components/lp/Hero'
import { Curriculum } from '@/components/lp/Curriculum'
import { TalentCard } from '@/components/lp/TalentCard'
import { PartnerMatch } from '@/components/lp/PartnerMatch'
import { PricingCard } from '@/components/lp/PricingCard'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return programs.filter((p) => p.status === 'available' && p.lp).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProgram((await params).slug)
  return { title: p?.title, description: p?.summary }
}

const h2 = 'text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1] tracking-[-0.045em]'
const num = (i: number) => String(i + 1).padStart(2, '0')

export default async function ProgramLanding({ params }: { params: Promise<Params> }) {
  const p = getProgram((await params).slug)
  if (!p?.lp || p.status !== 'available') notFound()
  const lp = p.lp
  const packages = p.packages ?? []
  const talents = getTalents(lp.talentIds)
  const matched = partners.filter((pt) => talents.some((t) => t.partnerIds.includes(pt.id)))

  return (
    <main>
      <Hero program={p} />

      <div aria-label="Mitra hiring" className="mt-6 overflow-hidden border-y border-line bg-[#ffb43b]/10 py-5">
        <ul className="marquee flex w-max gap-14 pr-14 text-sm font-semibold tracking-[0.08em] uppercase">
          {[...partners, ...partners, ...partners, ...partners].map((pt, i) => (
            <li key={i} aria-hidden={i >= partners.length} className="whitespace-nowrap">
              {pt.name}
            </li>
          ))}
        </ul>
      </div>

      <Section eyebrow="01 / Skill & output" aside="What you will build." title="Skill utama yang kamu bangun.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lp.skills.map((s, i) => (
            <article key={s.title} className={`glass lift reveal p-6 ${i % 2 ? 'lg:mt-10' : ''}`}>
              <p className="text-[11px] font-semibold">{num(i)}</p>
              <h3 className="mt-8 text-xl leading-snug tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-gradient-to-r from-[#892500]/20 to-[#ffb341]/10">
        <Section eyebrow="02 / Gambaran program" aside="Progress with purpose.">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal">
              <h2 className={h2}>Belajar seperti di dunia kerja.</h2>
              <ul className="mt-8">
                {lp.overview.map((o, i) => (
                  <li key={o} className="flex gap-5 border-b border-line py-4 text-sm">
                    <span className="text-[11px]">{num(i)}</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal grid content-start gap-5">
              <dl className="grid grid-cols-2 gap-5">
                {lp.stats.map((s) => (
                  <div key={s.label} className="border-t border-line pt-4">
                    <dd className="font-heading text-[clamp(2.2rem,4vw,3rem)] tracking-[-0.05em]">{s.value}</dd>
                    <dt className="mt-1 text-sm">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <div className="glass p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em]">POTENSI KARIER</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {lp.careers.map((c) => (
                    <li key={c} className="rounded-full border border-line px-3.5 py-1.5 text-[13px]">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section eyebrow="03 / Untuk siapa" aside="Your next chapter." title="Program ini untuk kamu yang…">
        <div className="grid gap-5 md:grid-cols-3">
          {lp.audience.map((a, i) => (
            <article key={a.title} className={`glass lift reveal p-7 ${i === 1 ? 'md:mt-10' : ''}`}>
              <span aria-hidden="true" className="font-heading text-4xl font-light">
                ↗
              </span>
              <h3 className="mt-6 text-2xl tracking-[-0.03em]">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-6">
          <span className="mr-3 text-[11px] font-semibold tracking-[0.16em]">TOOLS</span>
          {lp.tools.map((t) => (
            <span key={t} className="rounded-full border border-line px-4 py-2 text-sm">
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section id="kurikulum" eyebrow="04 / Kurikulum" aside="Two phases." title="Kurikulum lengkap.">
        <Curriculum lp={lp} />
      </Section>

      <Section eyebrow="05 / Real project" aside="Portfolio first." title="Portofolio dari proyek bisnis nyata.">
        <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {lp.projects.map((pr, i) => (
            <li key={pr} className="reveal border-b border-line py-6 sm:pr-6 lg:border-b-0 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-[11px]">{num(i)}</p>
              <p className="mt-8 font-heading text-lg leading-snug tracking-[-0.02em]">{pr}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="06 / Mentor" aside="Learn from practitioners." title="Belajar langsung dari praktisi.">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lp.mentors.map((m, i) => (
            <li key={m.name} className={`glass lift reveal p-6 ${i % 2 ? 'lg:mt-10' : ''}`}>
              <span aria-hidden="true" className="ring-line grid size-16 place-items-center font-heading text-xl">
                {m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </span>
              <p className="mt-6 font-heading text-lg tracking-[-0.02em]">{m.name}</p>
              <p className="mt-1.5 text-sm">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="talent" eyebrow="07 / Talent verified" aside="Levela × Talentiv Jobs" title="Lulus dengan bekal yang dicari mitra hiring." intro="Portofolio dan skill alumni tampil di Talentiv Jobs, terhubung dengan mitra hiring.">
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:overflow-visible lg:px-0">
            {talents.map((t, i) => (
              <div key={t.id} className={`w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-auto ${i % 2 ? 'lg:ml-10' : ''}`}>
                <TalentCard talent={t} />
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-6">
            <PartnerMatch partners={matched} />
          </div>
        </div>
      </Section>

      <Section eyebrow="08 / Sertifikasi & keunggulan" aside="Why this program.">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal">
            <h2 className={h2}>{lp.certificate}</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              Sertifikat diberikan sesuai ketentuan program, lengkap dengan profil dan portofolio di Talentiv Jobs.
            </p>
          </div>
          <ul className="reveal">
            {lp.reasons.map((r, i) => (
              <li key={r} className="flex gap-5 border-b border-line py-4 text-base">
                <span className="pt-1 text-[11px]">{num(i)}</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {packages.length > 0 && (
        <Section id="paket" eyebrow="09 / Paket" aside="Choose your track." title="Pilih paket programmu.">
          <div className="grid gap-5 md:grid-cols-2 md:items-start">
            {packages.map((pkg, i) => (
              <div key={pkg.name} className={`reveal ${i === 1 ? 'md:mt-8' : ''}`}>
                <PricingCard pkg={pkg} whatsappText={p.whatsappText} highlight={i === packages.length - 1 && packages.length > 1} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="10 / FAQ" aside="Sebelum kamu mulai.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
          <h2 className={`reveal ${h2}`}>Masih penasaran?</h2>
          <Faq items={lp.faq} />
        </div>
      </Section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#ffba4c]/10 to-[#ffcf6f]/25 px-6 py-10 sm:px-12 sm:py-12">
          <div aria-hidden="true" className="ring-line absolute -top-24 -right-24 size-72" />
          <div aria-hidden="true" className="ring-line absolute -top-10 -right-10 size-44" />
          <p className="text-[11px] font-semibold tracking-[0.16em]">MASIH RAGU?</p>
          <h2 className="mt-7 max-w-2xl text-[clamp(2.3rem,4.7vw,3.9rem)] leading-[1.05] tracking-[-0.05em]">Ceritakan tantanganmu.</h2>
          <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-sm text-sm leading-relaxed">Tim Levela bantu kamu memilih langkah dan paket yang tepat.</p>
            <ConsultButton text={p.whatsappText} variant="primary" />
          </div>
        </div>
      </section>
      <ConsultButton text={p.whatsappText} floating />
    </main>
  )
}
