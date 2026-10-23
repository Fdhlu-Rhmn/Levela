import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProgram, getTalents, programs } from '@/content/programs'
import { partners } from '@/content/partners'
import { PartnerMarquee } from '@/components/PartnerMarquee'
import { asset } from '@/lib/asset'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { ConsultButton } from '@/components/ConsultButton'
import { MobileCta } from '@/components/MobileCta'
import { Faq } from '@/components/Faq'
import { Hero } from '@/components/lp/Hero'
import { Curriculum } from '@/components/lp/Curriculum'
import { TalentCard } from '@/components/lp/TalentCard'
import { PartnerMatch } from '@/components/lp/PartnerMatch'
import { PricingCard } from '@/components/lp/PricingCard'
import { Teaser } from '@/components/lp/Teaser'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return programs
    .filter((p) => (p.status === 'available' && p.lp) || (p.status === 'coming-soon' && p.teaser))
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProgram((await params).slug)
  return { title: p?.title, description: p?.summary }
}

const h2 = 'text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] tracking-[-0.045em]'
const num = (i: number) => String(i + 1).padStart(2, '0')

export default async function ProgramLanding({ params }: { params: Promise<Params> }) {
  const p = getProgram((await params).slug)
  if (p?.status === 'coming-soon' && p.teaser) return <Teaser program={p} />
  if (!p?.lp || p.status !== 'available') notFound()
  const lp = p.lp
  const packages = p.packages ?? []
  const talents = getTalents(lp.talentIds)
  const matched = partners.filter((pt) => talents.some((t) => t.partnerIds.includes(pt.id)))
  const daftar = packages.length ? (
    <Button href="#paket" arrow>
      Daftar Sekarang
    </Button>
  ) : null

  return (
    <main className="pb-20 sm:pb-0">
      <Hero program={p} />

      <PartnerMarquee />

      {/* Relatable situations */}
      <Section eyebrow="01 / Kenal situasi ini?" aside="Kamu tidak sendirian.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <h2 className={`reveal ${h2}`}>Kalau salah satu ini terasa dekat, program ini dibuat untukmu.</h2>
          <ul className="grid gap-4">
            {lp.situations.map((s, i) => (
              <li key={s} className="glass reveal flex items-start gap-5 p-5">
                <span className="ring-line grid size-10 shrink-0 place-items-center text-xs">{num(i)}</span>
                <p className="pt-2 text-base leading-relaxed">{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Skills */}
      <Section eyebrow="02 / Skill & output" aside="What you will build." title="Skill utama yang kamu bangun.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lp.skills.map((s, i) => (
            <article key={s.title} className="glass lift reveal flex flex-col p-6">
              <p className="font-heading text-4xl tracking-[-0.05em] text-sun">{num(i)}</p>
              <h3 className="mt-6 text-xl leading-snug tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Overview + gallery proof */}
      <div className="bg-gradient-to-r from-[#892500]/20 to-[#ffb341]/10">
        <Section eyebrow="03 / Gambaran program" aside="Progress with purpose.">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <h2 className={h2}>Belajar seperti di dunia kerja.</h2>
              <ul className="mt-8">
                {lp.overview.map((o, i) => (
                  <li key={o.title} className="flex gap-5 border-b border-line py-4">
                    <span className="pt-1 w-6 shrink-0 text-[11px]">{num(i)}</span>
                    <div>
                      <h3 className="font-heading text-lg leading-snug tracking-[-0.02em]">{o.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed">{o.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="reveal grid content-start gap-4 sm:grid-cols-2">
              {lp.stats.map((s) => (
                <div key={s.label} className="glass p-5">
                  <dd className="font-heading text-[clamp(2rem,3.6vw,2.8rem)] leading-none tracking-[-0.05em]">{s.value}</dd>
                  <dt className="mt-2 text-sm font-semibold">{s.label}</dt>
                  {s.desc && <dd className="mt-2 text-[13px] leading-relaxed">{s.desc}</dd>}
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {lp.gallery.map((g) => (
              <figure key={g.src} className="glass reveal overflow-hidden">
                <img src={asset(g.src)} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-5 py-4 text-sm">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      {/* Career proof */}
      <Section eyebrow="04 / Potensi karier" aside="Levela × Talentiv Jobs" title="Ke mana skill ini membawamu.">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="glass reveal p-7">
            <p className="text-[11px] font-semibold tracking-[0.16em]">POSISI YANG BISA KAMU TUJU</p>
            <ul className="mt-5">
              {lp.careers.map((c, i) => (
                <li key={c} className="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-0">
                  <span className="font-heading text-lg tracking-[-0.02em]">{c}</span>
                  <span className="text-xs">{num(i)}</span>
                </li>
              ))}
            </ul>
          </div>
          <PartnerMatch partners={matched} />
        </div>
      </Section>

      {/* Audience + tools */}
      <Section eyebrow="05 / Untuk siapa" aside="Your next chapter." title="Program ini untuk kamu yang…">
        <div className="grid gap-5 md:grid-cols-3">
          {lp.audience.map((a) => (
            <article key={a.title} className="glass lift reveal p-7">
              <span aria-hidden="true" className="font-heading text-3xl text-sun">
                ↗
              </span>
              <h3 className="mt-5 text-2xl tracking-[-0.03em]">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="06 / Tools" aside="Learn by using." title="Tools yang kamu pakai, dan untuk apa.">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lp.tools.map((t) => (
            <li key={t.name} className="glass reveal flex gap-4 p-6">
              {/* TODO: logo resmi tools di public/images/tools/ */}
              <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-xl bg-cream font-heading text-lg text-ink [text-shadow:none]">
                {t.name[0]}
              </span>
              <div>
                <h3 className="text-lg tracking-[-0.02em]">{t.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed">{t.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="kurikulum" eyebrow="07 / Kurikulum" aside="Two phases." title="Kurikulum lengkap.">
        <Curriculum lp={lp} />
      </Section>

      {/* Projects */}
      <Section eyebrow="08 / Real project" aside="Portfolio first." title="Portofolio dari proyek bisnis nyata.">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {lp.projects.map((pr, i) => (
            <li key={pr.title} className="glass reveal flex flex-col p-5">
              <span className="font-heading text-3xl tracking-[-0.05em] text-sun">{num(i)}</span>
              <h3 className="mt-5 text-lg leading-snug tracking-[-0.02em]">{pr.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{pr.desc}</p>
              <p className="mt-auto border-t border-line pt-3 text-xs font-semibold">Masuk ke portofoliomu ↗</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-[#ffb43b]/10 p-5 sm:flex-row sm:items-center">
          <p className="text-sm">Semua project dirangkum menjadi portofolio yang tampil di profil Talentiv Jobs-mu.</p>
          {daftar}
        </div>
      </Section>

      {/* Mentors */}
      <Section eyebrow="09 / Mentor" aside="Learn from practitioners." title="Belajar langsung dari praktisi.">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lp.mentors.map((m) => (
            <li key={m.name} className="glass lift reveal flex flex-col overflow-hidden">
              {m.photo && <img src={asset(m.photo)} alt={`Foto ${m.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />}
              <div className="flex flex-1 flex-col p-5">
                <p className="font-heading text-lg tracking-[-0.02em]">{m.name}</p>
                <p className="mt-1 text-[13px] font-semibold">{m.role}</p>
                {m.experience && <p className="mt-3 border-t border-line pt-3 text-[13px] leading-relaxed">{m.experience}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Verified talent */}
      <Section id="talent" eyebrow="10 / Talent verified" aside="Levela × Talentiv Jobs" title="Lulus dengan bekal yang dicari mitra hiring." intro="Begini profil lulusan tampil di Talentiv Jobs: skill, project, dan tools yang bisa dilihat mitra hiring.">
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0">
          {talents.map((t) => (
            <div key={t.id} className="w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-auto">
              <TalentCard talent={t} />
            </div>
          ))}
        </div>
      </Section>

      {/* Certificate */}
      <Section eyebrow="11 / Sertifikasi" aside="Proof of competence.">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <figure className="glass reveal p-3">
            <img src={asset(lp.certificateImage)} alt={`Contoh sertifikat ${lp.certificate}`} loading="lazy" className="aspect-[1.414/1] w-full rounded-xl object-cover" />
          </figure>
          <div className="reveal">
            <h2 className={h2}>{lp.certificate}</h2>
            <dl className="mt-7">
              {[
                ['Diterbitkan oleh', 'Levela Academy'], // TODO: konfirmasi penerbit resmi
                ['Ketentuan', 'Mengikuti kelas sesuai ketentuan kehadiran dan menyelesaikan project akhir.'],
                ['Tampil di', 'Profil Talentiv Jobs, bersama portofolio project-mu.'],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-xs font-semibold tracking-[0.12em] uppercase">{k}</dt>
                  <dd className="text-sm">{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {lp.reasons.map((r) => (
                <li key={r} className="rounded-full border border-line px-3.5 py-1.5 text-[13px]">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {packages.length > 0 && (
        <Section id="paket" eyebrow="12 / Paket" aside="Choose your track." title="Pilih paket programmu.">
          <div className="grid gap-5 md:grid-cols-2">
            {packages.map((pkg, i) => (
              <PricingCard
                key={pkg.name}
                pkg={pkg}
                whatsappText={p.whatsappText}
                programTitle={p.title}
                highlight={i === packages.length - 1 && packages.length > 1}
              />
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="13 / FAQ" aside="Sebelum kamu mulai.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
          <h2 className={`reveal ${h2}`}>Masih penasaran?</h2>
          <Faq items={lp.faq} />
        </div>
      </Section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#ffba4c]/10 to-[#ffcf6f]/25 px-6 py-10 sm:px-12">
          <div aria-hidden="true" className="ring-line absolute -top-24 -right-24 size-72" />
          <p className="text-[11px] font-semibold tracking-[0.16em]">SIAP MULAI?</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-[-0.05em]">Amankan kursimu di batch berikutnya.</h2>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {daftar}
            <ConsultButton text={p.whatsappText} />
          </div>
        </div>
      </section>
      <MobileCta daftarHref={packages.length ? '#paket' : undefined} consultText={p.whatsappText} />
    </main>
  )
}
