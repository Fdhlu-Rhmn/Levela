import type { Metadata } from 'next'
import { programs } from '@/content/programs'
import { site } from '@/content/site'
import { asset } from '@/lib/asset'
import { ConsultButton } from '@/components/ConsultButton'
import { consultText } from '@/components/Header'
import { Section } from '@/components/Section'

export const metadata: Metadata = { title: 'Tentang Kami' }

// CONTOH: teks halaman ini contoh. Ganti dengan cerita, tim, dan angka asli Levela.
const values = [
  { title: 'Ilmu', desc: 'Materi yang relevan dengan kebutuhan kerja hari ini, diajarkan oleh praktisi.' },
  { title: 'Integritas', desc: 'Jujur soal apa yang bisa dan tidak bisa kami janjikan untuk kariermu.' },
  { title: 'Kualitas kerja', desc: 'Setiap peserta pulang membawa hasil kerja yang bisa ditunjukkan.' },
]

const stats = [
  { value: 'Ratusan', label: 'Mitra hiring di Talentiv Jobs' },
  { value: String(programs.length), label: 'Jalur program' },
  { value: '20', label: 'Peserta maksimal per batch' },
]

export default function Tentang() {
  const mentors = programs.find((p) => p.lp)?.lp?.mentors ?? []
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
        <div className="glass mt-10 overflow-hidden p-2">
          <img
            src={asset('/images/about-group.webp')}
            alt="Tim dan alumni Levela Academy"
            className="aspect-[16/9] w-full rounded-[16px] object-cover"
            fetchPriority="high"
          />
        </div>
      </section>

      <Section eyebrow="01 / CERITA KAMI" title="Dari rasa ingin tahu ke karier yang jelas arahnya.">
        <div className="grid gap-6 md:grid-cols-2">
          <p>
            Levela Academy adalah sekolah bisnis dan kreatif untuk fresh graduate, profesional di awal karier, dan kamu yang ingin kariernya bergerak lagi.
          </p>
          <p>
            Kami menggabungkan live class, praktik proyek nyata, dan mentoring, supaya yang kamu pelajari langsung bisa dipakai di tempat kerja.
          </p>
        </div>
      </Section>

      <Section eyebrow="02 / NILAI KAMI" title="Yang kami pegang.">
        <ul className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="glass p-6">
              <h3 className="text-2xl">{v.title}</h3>
              <p className="mt-2 text-sm">{v.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="03 / LEVELA × TALENTIV JOBS" title="Belajar terarah. Peluang lebih luas.">
        <div className="glass p-7 sm:p-10">
          <p className="max-w-2xl">
            Levela bermitra dengan Talentiv Jobs. Profil, sertifikat, dan portofolio alumni tampil di Talentiv Jobs, sehingga lebih mudah ditemukan oleh ratusan mitra hiring.
          </p>
          <p className="mt-4 text-xs">Penerimaan kerja mengikuti proses seleksi masing-masing perusahaan.</p>
        </div>
      </Section>

      <Section eyebrow="04 / MENTOR" title="Praktisi yang mendampingimu.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m) => (
            <li key={m.name} className="glass p-6">
              <p className="font-heading text-lg">{m.name}</p>
              <p className="mt-1 text-sm">{m.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="05 / DALAM ANGKA">
        <ul className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <li key={s.label} className="glass p-6">
              <p className="font-heading text-4xl">{s.value}</p>
              <p className="mt-2 text-sm">{s.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="06 / KONTAK" title="Ngobrol dengan tim Levela.">
        <div className="glass flex flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-end md:justify-between">
          {contacts.length > 0 ? (
            <dl className="grid gap-3 text-sm">
              {contacts.map((c) => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd className="font-semibold">{c.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="max-w-md">Cara tercepat menghubungi kami adalah lewat WhatsApp.</p>
          )}
          <ConsultButton text={consultText} variant="primary" />
        </div>
      </Section>
      <ConsultButton text={consultText} floating />
    </main>
  )
}
