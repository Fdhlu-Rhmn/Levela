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

const card = 'glass p-5 sm:p-6'

export default async function ProgramLanding({ params }: { params: Promise<Params> }) {
  const p = getProgram((await params).slug)
  if (!p?.lp || p.status !== 'available') notFound()
  const lp = p.lp
  const talents = getTalents(lp.talentIds)
  const matched = partners.filter((pt) => talents.some((t) => t.partnerIds.includes(pt.id)))

  return (
    <main>
      <Hero program={p} />

      <section aria-label="Mitra hiring" className="border-y border-line">
        <ul className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-4 py-6 text-sm font-semibold sm:px-8">
          {partners.map((pt) => (
            <li key={pt.id}>{pt.name}</li>
          ))}
        </ul>
      </section>

      <Section eyebrow="01 / SKILL & OUTPUT" title="Skill utama yang kamu bangun.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lp.skills.map((s, i) => (
            <article key={s.title} className={card}>
              <p className="text-sm font-bold">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-6 text-lg leading-snug font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="02 / GAMBARAN PROGRAM" title="Belajar seperti di dunia kerja.">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <ul className={`${card} grid gap-3`}>
            {lp.overview.map((o) => (
              <li key={o} className="border-b border-line pb-3 last:border-0 last:pb-0">
                {o}
              </li>
            ))}
          </ul>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {lp.stats.map((s) => (
                <div key={s.label} className={card}>
                  <p className="font-heading text-3xl font-extrabold">{s.value}</p>
                  <p className="mt-1 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
            <div className={card}>
              <p className="text-xs font-bold tracking-[0.16em]">POTENSI KARIER</p>
              <p className="mt-2 text-sm">{lp.careers.join(' · ')}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="03 / UNTUK SIAPA" title="Program ini untuk kamu yang…">
        <div className="grid gap-4 md:grid-cols-3">
          {lp.audience.map((a) => (
            <article key={a.title} className={card}>
              <h3 className="text-xl font-extrabold">{a.title}</h3>
              <p className="mt-2 text-sm">{a.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="04 / TOOLS" title="Tools yang kamu pakai.">
        <ul className="flex flex-wrap gap-2">
          {lp.tools.map((t) => (
            <li key={t} className="glass rounded-full! px-5 py-3 text-sm font-semibold">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="kurikulum" eyebrow="05 / KURIKULUM" title="Kurikulum lengkap.">
        <Curriculum lp={lp} />
      </Section>

      <Section eyebrow="06 / REAL PROJECT" title="Portofolio dari proyek bisnis nyata.">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {lp.projects.map((pr, i) => (
            <li key={pr} className={card}>
              <p className="text-sm font-bold">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-6 font-semibold">{pr}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="07 / MENTOR" title="Belajar langsung dari praktisi.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lp.mentors.map((m) => (
            <li key={m.name} className={card}>
              <span aria-hidden="true" className="grid size-14 place-items-center rounded-2xl bg-cream/20 font-heading text-lg font-extrabold">
                {m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
              </span>
              <p className="mt-4 font-heading text-lg font-extrabold">{m.name}</p>
              <p className="mt-1 text-sm">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="talent" eyebrow="08 / TALENT VERIFIED" title="Lulus dengan bekal yang dicari mitra hiring." intro="Portofolio dan skill alumni tampil di Talentiv Jobs, terhubung dengan mitra hiring.">
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:overflow-visible lg:px-0">
            {talents.map((t) => (
              <div key={t.id} className="w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-auto">
                <TalentCard talent={t} />
              </div>
            ))}
          </div>
          <PartnerMatch partners={matched} />
        </div>
      </Section>

      <Section eyebrow="09 / SERTIFIKASI" title={lp.certificate}>
        <p className="max-w-2xl">Sertifikat diberikan sesuai ketentuan program, lengkap dengan profil dan portofolio di Talentiv Jobs.</p>
      </Section>

      <Section eyebrow="10 / KENAPA PROGRAM INI" title={`Kenapa ${p.title}?`}>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lp.reasons.map((r) => (
            <li key={r} className={card}>
              {r}
            </li>
          ))}
        </ul>
        <Button href="#paket" arrow className="mt-6">
          Daftar Sekarang
        </Button>
      </Section>

      <Section id="paket" eyebrow="11 / PAKET" title="Pilih paket programmu.">
        <div className="grid gap-4 md:grid-cols-2">
          {p.packages!.map((pkg, i) => (
            <PricingCard key={pkg.name} pkg={pkg} whatsappText={p.whatsappText} highlight={i === p.packages!.length - 1} />
          ))}
        </div>
      </Section>

      <Section eyebrow="12 / FAQ" title="Sebelum kamu mulai.">
        <Faq items={lp.faq} />
      </Section>

      <Section>
        <div className="glass flex flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ceritakan tantanganmu.</h2>
            <p className="mt-3 max-w-lg">Belum yakin program ini cocok? Tim Levela bantu kamu memilih langkah yang tepat.</p>
          </div>
          <ConsultButton text={p.whatsappText} variant="primary" />
        </div>
      </Section>
      <ConsultButton text={p.whatsappText} floating />
    </main>
  )
}
