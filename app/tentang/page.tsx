import type { Metadata } from 'next'
import { allMentors, programs } from '@/content/programs'
import { site } from '@/content/site'
import { asset } from '@/lib/asset'
import { ConsultButton } from '@/components/ConsultButton'
import { consultText } from '@/components/Header'
import { Section } from '@/components/Section'
import { MentorCarousel } from '@/components/MentorCarousel'

export const metadata: Metadata = { title: 'Tentang Kami' }

const h2 = 'text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1] tracking-[-0.045em]'
const num = (i: number) => String(i + 1).padStart(2, '0')

const values = [
  {
    title: 'Ilmu yang relevan',
    desc: 'Kurikulum disusun dari kebutuhan peran di industri dan disampaikan oleh praktisi yang menjalankan pekerjaan tersebut setiap hari. Fokusnya pada keterampilan yang dapat langsung diterapkan, bukan sekadar teori.',
  },
  {
    title: 'Integritas',
    desc: 'Kami transparan mengenai materi, fasilitas, dan hasil yang dapat diharapkan dari setiap program. Kami tidak menjanjikan pekerjaan; kami membantumu menyiapkan kemampuan dan portofolio untuk bersaing secara layak.',
  },
  {
    title: 'Kualitas kerja',
    desc: 'Setiap peserta menyelesaikan proyek yang terukur dan menerima umpan balik dari mentor, sehingga hasil belajarnya dapat ditunjukkan sebagai portofolio profesional.',
  },
]

const journey = [
  { from: 'Paham teori, jarang praktik', to: 'Terbiasa mengerjakan kasus nyata' },
  { from: 'CV tanpa bukti hasil kerja', to: 'Portofolio proyek yang bisa ditunjukkan' },
  { from: 'Belajar sendiri tanpa arah', to: 'Kurikulum terstruktur dan mentor praktisi' },
  { from: 'Sulit ditemukan perusahaan', to: 'Profil dan portofolio di Talentiv Jobs' },
]

const partnerSteps = [
  { title: 'Belajar & praktik', desc: 'Live class dan proyek bersama mentor.' },
  { title: 'Portofolio & sertifikat', desc: 'Hasil kerja terdokumentasi dan terukur.' },
  { title: 'Profil Talentiv Jobs', desc: 'Kompetensimu tampil dalam satu profil.' },
  { title: 'Dilihat mitra hiring', desc: 'Perusahaan menilai lebih dari sekadar CV.' },
]

// TODO: konfirmasi klaim angka sebelum live (lihat docs/audit)
const stats = [
  { value: 'Ratusan', label: 'mitra hiring', desc: 'dalam jaringan Talentiv Jobs yang dapat melihat profil dan portofolio alumni.' },
  { value: String(programs.length), label: 'jalur program', desc: 'Business Development, Digital Marketing, dan Social Media yang segera hadir.' },
  { value: '20', label: 'peserta per batch', desc: 'paling banyak, agar setiap peserta mendapat perhatian dan umpan balik yang personal.' },
]

export default function Tentang() {
  const mentors = allMentors()
  const contacts = [
    { label: 'Email', value: site.email },
    { label: 'Instagram', value: site.instagram },
    { label: 'LinkedIn', value: site.linkedin },
    { label: 'Alamat', value: site.address },
  ].filter((c) => c.value)

  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-8 sm:pt-16">
        <p className="text-xs font-bold tracking-[0.2em]">TENTANG LEVELA</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] tracking-[-0.06em] sm:text-7xl">
          Tempat memulai langkah profesionalmu.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-[1.8] sm:text-lg">
          Levela Academy membekali fresh graduate dan profesional muda dengan keterampilan bisnis dan kreatif yang dibutuhkan dunia kerja, melalui pembelajaran terstruktur, praktik proyek, dan pendampingan praktisi.
        </p>
        <div className="glass mt-10 overflow-hidden p-2">
          <img
            src={asset('/images/about-group.webp')}
            alt="Tim dan alumni Levela Academy"
            className="aspect-[16/9] w-full rounded-[16px] object-cover"
            fetchPriority="high"
          />
        </div>
      </section>

      <Section eyebrow="01 / Cerita kami" aside="Why Levela.">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div className="reveal">
            <h2 className={h2}>
              Menjembatani pendidikan dan kebutuhan dunia kerja<span className="text-sun">.</span>
            </h2>
            <p className="mt-7 border-l-2 border-sun pl-5 font-heading text-xl leading-snug tracking-[-0.01em] sm:text-2xl">
              Banyak lulusan dan profesional muda punya semangat untuk berkembang, tetapi belum memiliki pengalaman praktik dan portofolio yang dicari perusahaan.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed">
              Levela Academy hadir untuk menutup jarak tersebut. Program kami berangkat dari tantangan kerja sehari-hari: memahami bisnis dan pasar, membangun pipeline, bernegosiasi, hingga menjaga hubungan dengan pelanggan. Setiap materi dipelajari, dipraktikkan, lalu didokumentasikan sebagai hasil kerja.
            </p>
          </div>
          <div className="glass reveal overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-line px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase">
              <span>Sebelum</span>
              <span aria-hidden="true" />
              <span>Bersama Levela</span>
            </div>
            <ul>
              {journey.map((j) => (
                <li key={j.from} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-line px-6 py-5 last:border-0">
                  <span className="text-sm leading-snug">{j.from}</span>
                  <span aria-hidden="true" className="ring-line grid size-8 place-items-center text-sm">
                    →
                  </span>
                  <span className="font-heading text-base leading-snug tracking-[-0.01em]">{j.to}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values: editorial columns divided by hairlines instead of identical boxes */}
      <Section eyebrow="02 / Nilai kami" aside="What we stand for.">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 className={`reveal ${h2}`}>
            Tiga hal yang tidak kami kompromikan<span className="text-sun">.</span>
          </h2>
          <ol className="grid border-t border-line md:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.title} className="reveal border-b border-line py-7 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
                <span className="font-heading text-4xl tracking-[-0.05em] text-sun">{num(i)}</span>
                <h3 className="mt-5 text-xl tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{v.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section eyebrow="03 / Levela × Talentiv Jobs" aside="From classroom to hiring.">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className={`reveal ${h2}`}>
            Kompetensimu terlihat, bukan hanya tertulis di CV<span className="text-sun">.</span>
          </h2>
          <p className="reveal max-w-md leading-relaxed">
            Melalui kemitraan dengan Talentiv Jobs, profil profesional, sertifikat, dan portofolio alumni dapat ditampilkan kepada jaringan mitra hiring.
          </p>
        </div>
        <ol className="mobile-carousel mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerSteps.map((s, i) => (
            <li key={s.title} className="glass reveal relative flex flex-col p-6">
              <span className="font-heading text-3xl tracking-[-0.05em] text-sun">{num(i)}</span>
              <h3 className="mt-5 text-lg leading-snug tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
              {i < partnerSteps.length - 1 && (
                <span aria-hidden="true" className="absolute top-1/2 -right-3.5 z-10 hidden size-7 -translate-y-1/2 place-items-center rounded-full bg-cream text-sm text-ink lg:grid">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed">
          Levela tidak menjamin penempatan kerja. Keputusan rekrutmen sepenuhnya mengikuti proses seleksi masing-masing perusahaan.
        </p>
      </Section>

      {/* Mentors: every mentor across programs, with photo and experience; grows as data grows */}
      <Section eyebrow="04 / Mentor" aside="Learn from practitioners.">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <h2 className={`reveal ${h2}`}>
            Dibimbing praktisi berpengalaman dari industri<span className="text-sun">.</span>
          </h2>
          <div className="reveal">
            <p className="leading-relaxed">
              Mentor Levela adalah praktisi di bidang bisnis, pemasaran, dan pengembangan kemitraan. Mereka membagikan cara kerja yang mereka gunakan dan memberi umpan balik langsung pada proyekmu.
            </p>
            <dl className="mt-7 grid grid-cols-2 border-t border-line">
              {[
                { value: mentors.length, label: 'Praktisi industri' },
                { value: new Set(mentors.flatMap((m) => m.programs)).size, label: 'Program yang didampingi' },
              ].map((s, i) => (
                <div key={s.label} className={`pt-5 ${i ? 'border-l border-line pl-6' : 'pr-6'}`}>
                  <dd className="font-heading text-5xl leading-none tracking-[-0.06em] tabular-nums">{String(s.value).padStart(2, '0')}</dd>
                  <dt className="mt-2 text-xs font-semibold tracking-[0.14em] uppercase">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-14">
          <MentorCarousel mentors={mentors} />
        </div>
      </Section>

      {/* Numbers: one panel, large numerals split by hairlines */}
      <Section eyebrow="05 / Dalam angka" aside="Small classes, real feedback.">
        <h2 className={`reveal ${h2}`}>
          Kelas kecil, umpan balik nyata<span className="text-sun">.</span>
        </h2>
        <dl className="glass reveal mt-12 grid md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-line p-7 last:border-0 md:border-b-0 md:border-l md:first:border-l-0">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-[clamp(2.8rem,5vw,4rem)] leading-none tracking-[-0.06em]">{s.value}</dd>
              <dd className="mt-3 text-xs font-semibold tracking-[0.16em] uppercase">{s.label}</dd>
              <dd className="mt-2 text-sm leading-relaxed">{s.desc}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section eyebrow="06 / Kontak" aside="Let’s talk.">
        <div className="glass reveal flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className={h2}>
              Satu percakapan bisa memperjelas arah kariermu<span className="text-sun">.</span>
            </h2>
            <p className="mt-5 leading-relaxed">
              Ceritakan tujuan dan pengalamanmu. Tim Levela akan membantu memberikan gambaran program, jadwal, dan paket yang paling sesuai.
            </p>
            {contacts.length > 0 && (
              <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                {contacts.map((c) => (
                  <div key={c.label}>
                    <dt>{c.label}</dt>
                    <dd className="font-semibold">{c.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <ConsultButton text={consultText} variant="primary" />
        </div>
      </Section>
      <ConsultButton text={consultText} floating />
    </main>
  )
}
