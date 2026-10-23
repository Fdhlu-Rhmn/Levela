import Link from 'next/link'
import { programs, getTalents } from '@/content/programs'
import { homeFaq } from '@/content/faq'
import { asset } from '@/lib/asset'
import { Button } from '@/components/Button'
import { ConsultButton } from '@/components/ConsultButton'
import { consultText } from '@/components/Header'
import { Faq } from '@/components/Faq'
import { ProgramCard } from '@/components/ProgramCard'
import { Section } from '@/components/Section'
import { TalentCard } from '@/components/lp/TalentCard'

const steps = [
  { title: 'Pahami cara kerjanya.', desc: 'Pelajari konsep dan alur kerja sesuai bidang pilihanmu. Kenali tujuan di balik setiap pekerjaan.' },
  { title: 'Latih lewat praktik.', desc: 'Terapkan materi melalui tugas dan studi kasus yang menghubungkan pembelajaran dengan kebutuhan bisnis.' },
  { title: 'Tunjukkan hasil belajarmu.', desc: 'Susun hasil praktik menjadi portofolio untuk memperkenalkan kemampuan dan proses berpikirmu.' },
  { title: 'Lengkapi kompetensimu.', desc: 'Dapatkan sertifikat dan profil profesional sesuai bidang dan paket program yang kamu pilih.' },
]

export default function Home() {
  const highlights = getTalents(['bd-1', 'dm-1'])
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-10 pb-14 sm:px-8 sm:pt-16 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-cream/85">SEKOLAH BISNIS &amp; KREATIF</p>
          <h1 className="mt-5 text-5xl leading-[0.98] font-extrabold tracking-[-0.04em] sm:text-7xl">
            Bangun karier profesionalmu.
          </h1>
          <p className="mt-6 max-w-md text-base text-cream/90 sm:text-lg">
            Kembangkan keahlian bisnis dan kreatif. Terhubung dengan <strong>ratusan mitra hiring</strong> melalui Talentiv Jobs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/program/" arrow>
              Temukan Programmu
            </Button>
            <ConsultButton text={consultText} />
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 text-sm">
            {['Praktik sesuai bidang', 'Portofolio nyata', 'Mentor praktisi'].map((t) => (
              <li key={t} className="rounded-full border border-line px-4 py-2">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="glass overflow-hidden p-2">
            <img
              src={asset('/images/hero.webp')}
              alt="Dua talenta muda di bidang bisnis dan kreatif"
              className="aspect-[4/5] w-full rounded-[16px] object-cover"
              fetchPriority="high"
            />
          </div>
          <Link href="/#karier" className="glass absolute -bottom-5 left-4 flex min-h-11 items-center gap-2 px-4 text-sm sm:left-auto sm:right-6">
            <i aria-hidden="true" className="size-2 rounded-full bg-ok ring-3 ring-ok/25" />
            Terhubung dengan <b>Talentiv Jobs</b>
          </Link>
        </div>
      </section>

      <section aria-label="Langkah Levela" className="border-y border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 sm:grid-cols-4 sm:items-center sm:px-8">
          <p className="text-sm">
            Awal yang tepat untuk <strong>langkah profesionalmu.</strong>
          </p>
          {['Belajar terarah', 'Bangun portofolio', 'Jelajahi peluang karier'].map((t, i) => (
            <p key={t} className="text-sm text-cream/90">
              <span className="mr-2 font-bold text-cream/70">{String(i + 1).padStart(2, '0')}</span>
              {t}
            </p>
          ))}
        </div>
      </section>

      <Section id="program" eyebrow="01 / PILIH ARAHMU" title="Temukan bidangmu. Mulai langkahmu." intro="Setiap perjalanan punya titik awal. Pilih keahlian yang ingin kamu bangun.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      <Section id="belajar" eyebrow="02 / THE LEVELA WAY" title="Belajar hari ini. Bawa bekalnya ke dunia kerja." intro="Bangun pemahaman, coba kerjakan, lalu tunjukkan kemampuanmu.">
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="glass flex gap-5 p-6">
              <span className="font-heading text-2xl font-extrabold text-cream/70">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/85">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section id="karier">
        <Section eyebrow="03 / TALENT VERIFIED" title="Lulus dengan bekal yang dicari industri.">
          <div className="grid gap-4 lg:grid-cols-2">
            {highlights.map((t) => (
              <TalentCard key={t.id} talent={t} />
            ))}
          </div>
        </Section>
        <Section eyebrow="04 / LEVELA × TALENTIV JOBS">
          <div className="glass grid gap-6 p-7 sm:p-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-5xl">Keahlian bertumbuh. Peluang terbuka.</h2>
              <p className="mt-4 max-w-xl text-cream/90">
                Perjalananmu berlanjut setelah belajar. Levela terhubung dengan Talentiv Jobs untuk membantumu menjelajahi peluang dari ratusan mitra hiring.
              </p>
              <p className="mt-4 text-xs text-cream/70">Penerimaan kerja mengikuti proses seleksi masing-masing perusahaan.</p>
            </div>
            <div className="rounded-[18px] border border-cream/25 bg-cream/10 p-6">
              <p className="font-heading text-5xl font-extrabold">Ratusan</p>
              <p className="mt-2 text-cream/90">mitra hiring dalam jaringan Talentiv Jobs</p>
            </div>
          </div>
        </Section>
      </section>

      <Section eyebrow="05 / MEET LEVELA" title="Tempat memulai langkah profesionalmu.">
        <p className="max-w-2xl text-cream/90">
          Levela Academy adalah sekolah bisnis dan kreatif untuk kamu yang ingin membangun karier profesional. Kami percaya ilmu, integritas, dan kualitas kerja membuka jalan untuk tumbuh.
        </p>
        <Button href="/tentang/" variant="ghost" arrow className="mt-6">
          Kenali Levela
        </Button>
      </Section>

      <Section eyebrow="06 / GOOD TO KNOW" title="Masih penasaran?">
        <Faq items={homeFaq} />
      </Section>

      <Section>
        <div className="glass flex flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-cream/80">YOUR NEXT CHAPTER STARTS HERE.</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Langkah kecil hari ini. Karier besar di depan.</h2>
          </div>
          <ConsultButton text={consultText} variant="primary" />
        </div>
      </Section>
      <ConsultButton text={consultText} floating />
    </main>
  )
}
