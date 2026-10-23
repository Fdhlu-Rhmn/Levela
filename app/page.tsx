import Link from 'next/link'
import { programs, getTalents } from '@/content/programs'
import { PartnerMarquee } from '@/components/PartnerMarquee'
import { homeFaq } from '@/content/faq'
import { Button } from '@/components/Button'
import { ConsultButton } from '@/components/ConsultButton'
import { consultText } from '@/components/Header'
import { Faq } from '@/components/Faq'
import { ProgramCard } from '@/components/ProgramCard'
import { Section } from '@/components/Section'
import { TalentCard } from '@/components/lp/TalentCard'
import { ArchPhoto, NetworkVisual, OrbitalVisual } from '@/components/visuals'

const steps = [
  { title: 'Pahami cara kerjanya.', desc: 'Pelajari konsep dan alur kerja sesuai bidang pilihanmu. Kenali tujuan di balik setiap pekerjaan.' },
  { title: 'Latih lewat praktik.', desc: 'Terapkan materi melalui tugas dan studi kasus yang menghubungkan pembelajaran dengan kebutuhan bisnis.' },
  { title: 'Tunjukkan hasil belajarmu.', desc: 'Susun hasil praktik menjadi portofolio untuk memperkenalkan kemampuan dan proses berpikirmu.' },
  { title: 'Lengkapi kompetensimu.', desc: 'Dapatkan sertifikat dan profil profesional sesuai bidang dan paket program yang kamu pilih.' },
]

const stats = [
  { value: 'Ratusan', label: 'mitra hiring' },
  { value: '30 hari', label: 'program intensif' },
  { value: 'Maks. 20', label: 'peserta per batch' },
]

export default function Home() {
  const highlights = getTalents(['bd-1', 'dm-1'])
  return (
    <main>
      {/* Hero */}
      <section className="relative mx-auto w-full max-w-6xl px-4 pt-8 sm:px-8 sm:pt-10">
        <div className="flex items-start justify-between gap-6">
          <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em]">
            <i aria-hidden="true" className="size-1.5 rounded-full bg-cream" />
            SEKOLAH BISNIS &amp; KREATIF
          </p>
          <p className="hidden text-right text-xs leading-relaxed sm:block">
            Langkah berikutnya,
            <br />
            versi terbaik dirimu.
          </p>
        </div>

        <div className="grid items-center gap-6 lg:min-h-[600px] lg:grid-cols-[1.15fr_1fr]">
          <div className="relative z-10 pt-8 pb-6 lg:pb-10">
            <h1 className="text-[clamp(3.1rem,7vw,5.4rem)] leading-[1.02] tracking-[-0.06em] lg:-mr-24">
              Bangun karier profesionalmu<span className="text-sun">.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-[1.8]">
              Kembangkan keahlian bisnis dan kreatif. Terhubung dengan <strong className="font-semibold">ratusan mitra hiring</strong> melalui Talentiv Jobs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/program/" arrow>
                Temukan Programmu
              </Button>
              <ConsultButton text={consultText} />
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-heading text-2xl tracking-[-0.04em]">{s.value}</dd>
                  <dd className="mt-1 text-xs">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <ArchPhoto
              src="/images/hero.webp"
              alt="Dua talenta muda di bidang bisnis dan kreatif"
              label="Potensimu, peluang barumu."
              note="LET’S BUILD YOUR NEXT CHAPTER"
            />
            <Link
              href="/#karier"
              className="absolute right-0 bottom-6 z-10 flex items-center gap-2 rounded-md border border-line bg-[#dc4c10]/70 px-3.5 py-3 text-xs backdrop-blur-md transition-transform hover:-translate-y-0.5 sm:-right-3"
            >
              <i aria-hidden="true" className="size-2 rounded-full bg-[#7dffb0] shadow-[0_0_0_4px_rgba(125,255,176,.2)]" />
              Connected to <b className="font-semibold">talentiv jobs</b> ↗
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line py-5 text-[10px] tracking-[0.12em]">
          <span>LEARN. CREATE. GROW.</span>
          <a href="#program" className="flex items-center gap-3">
            Scroll untuk eksplorasi <span aria-hidden="true" className="text-lg">↓</span>
          </a>
          <span className="hidden sm:inline">01 — YOUR NEXT CHAPTER</span>
        </div>
      </section>

      {/* Strip */}
      <section aria-label="Langkah Levela" className="border-y border-line bg-[#ffb43b]/10">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-7 sm:grid-cols-4 sm:items-center sm:px-8">
          <p className="text-sm leading-snug">
            Awal yang tepat untuk
            <br />
            <strong className="font-medium">langkah profesionalmu.</strong>
          </p>
          {['Belajar terarah', 'Bangun portofolio', 'Jelajahi peluang karier'].map((t, i) => (
            <p key={t} className="flex items-center gap-4 text-sm">
              <span className="ring-line grid size-9 shrink-0 place-items-center text-[11px]">{String(i + 1).padStart(2, '0')}</span>
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* Programs */}
      <Section id="program" eyebrow="01 / Pilih arahmu" aside="Three paths. Your future." title="Temukan bidangmu. Mulai langkahmu." intro="Setiap perjalanan punya titik awal. Pilih keahlian yang ingin kamu bangun.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <div key={p.slug} className="reveal h-full">
              <ProgramCard program={p} />
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-5 text-sm sm:flex-row sm:items-center">
          <span>Belum tahu program yang cocok untukmu?</span>
          <Link href="/program/" className="underline-offset-4 hover:underline">
            Cari program sesuai skill ↗
          </Link>
        </div>
      </Section>

      {/* The Levela Way */}
      <div className="bg-gradient-to-r from-[#892500]/20 to-[#ffb341]/10">
        <Section id="belajar" eyebrow="02 / The Levela Way" aside="Progress with purpose.">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="reveal">
              <h2 className="text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1] tracking-[-0.045em]">
                Belajar hari ini. Bawa bekalnya ke dunia kerja.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed">Bangun pemahaman, coba kerjakan, lalu tunjukkan kemampuanmu.</p>
              <OrbitalVisual />
            </div>
            <ol>
              {steps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-6 border-b border-line py-7 first:pt-0">
                  <span className="pt-2 text-[11px]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[22px] tracking-[-0.02em]">{s.title}</h3>
                    <p className="mt-2.5 max-w-sm text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </div>

      {/* Karier: Talentiv Jobs network + verified talent */}
      <section id="karier">
        <Section eyebrow="03 / Open your opportunities" aside="Levela × Talentiv Jobs">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-[0.16em]">BELAJAR TERARAH. PELUANG LEBIH LUAS.</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] leading-[1.05] tracking-[-0.05em]">Keahlian bertumbuh. Peluang terbuka.</h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed">
                Perjalananmu berlanjut setelah belajar. Levela terhubung dengan Talentiv Jobs untuk membantumu menjelajahi peluang dari ratusan mitra hiring.
              </p>
              <Button href="#talent" arrow className="mt-7">
                Kenali Koneksi Karier
              </Button>
              <p className="mt-5 max-w-sm text-[11px] leading-relaxed">Penerimaan kerja mengikuti proses seleksi masing-masing perusahaan.</p>
            </div>
            <NetworkVisual />
          </div>
        </Section>

        <PartnerMarquee />

        <Section id="talent" eyebrow="04 / Talent verified" aside="Portofolio yang bicara." title="Lulus dengan bekal yang dicari industri.">
          <div className="grid gap-5 lg:grid-cols-2">
            {highlights.map((t, i) => (
              <div key={t.id} className="reveal">
                <TalentCard talent={t} />
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div className="grid gap-6 border-y border-line py-12 md:grid-cols-[1fr_2fr_auto] md:items-start">
          <p className="pt-2 text-[11px] font-semibold tracking-[0.16em]">05 / MEET LEVELA</p>
          <div className="reveal">
            <h2 className="text-4xl leading-[1.1] tracking-[-0.045em]">Tempat memulai langkah profesionalmu.</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed">
              Levela Academy adalah sekolah bisnis dan kreatif untuk kamu yang ingin membangun karier profesional. Kami percaya ilmu, integritas, dan kualitas kerja membuka jalan untuk tumbuh dan memberi kontribusi.
            </p>
            <Link href="/tentang/" className="mt-5 inline-block text-sm font-semibold underline-offset-4 hover:underline">
              Kenali Levela ↗
            </Link>
          </div>
          <span aria-hidden="true" className="hidden font-heading text-[96px] leading-none font-light md:block">
            ↗
          </span>
        </div>
      </section>

      {/* FAQ */}
      <Section eyebrow="06 / Good to know" aside="Sebelum kamu mulai.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
          <h2 className="reveal text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1] tracking-[-0.045em]">Masih penasaran?</h2>
          <Faq items={homeFaq} />
        </div>
      </Section>

      {/* Closing */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#ffba4c]/10 to-[#ffcf6f]/25 px-6 py-10 sm:px-12 sm:py-12">
          <div aria-hidden="true" className="ring-line absolute -top-24 -right-24 size-72" />
          <div aria-hidden="true" className="ring-line absolute -top-10 -right-10 size-44" />
          <p className="text-[11px] font-semibold tracking-[0.16em]">YOUR NEXT CHAPTER STARTS HERE.</p>
          <h2 className="mt-7 max-w-3xl text-[clamp(2.3rem,4.7vw,3.9rem)] leading-[1.05] tracking-[-0.05em]">
            Langkah kecil hari ini. Karier besar di depan.
          </h2>
          <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-sm text-sm leading-relaxed">Mulai dari rasa ingin tahu. Temukan arah belajarmu bersama Levela.</p>
            <ConsultButton text={consultText} variant="primary" />
          </div>
        </div>
      </section>
      <ConsultButton text={consultText} floating />
    </main>
  )
}
