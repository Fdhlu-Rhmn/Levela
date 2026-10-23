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

// TODO: konfirmasi klaim angka sebelum live (lihat docs/audit)
const stats = [
  { value: 'Ratusan', label: 'Mitra hiring dalam jaringan Talentiv Jobs yang dapat melihat profil dan portofolio alumni.' },
  { value: String(programs.length), label: 'Jalur program: Business Development, Digital Marketing, dan Social Media yang segera hadir.' },
  { value: '20', label: 'Peserta maksimal per batch, agar setiap peserta mendapat perhatian dan umpan balik yang personal.' },
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

      <Section eyebrow="01 / CERITA KAMI" title="Menjembatani pendidikan dan kebutuhan dunia kerja.">
        <div className="grid gap-6 leading-relaxed md:grid-cols-2">
          <p>
            Banyak lulusan dan profesional muda memiliki semangat untuk berkembang, tetapi belum memiliki pengalaman praktik dan portofolio yang dicari perusahaan. Levela Academy hadir untuk menutup jarak tersebut.
          </p>
          <p>
            Program kami berangkat dari tantangan kerja sehari-hari: memahami bisnis dan pasar, membangun pipeline, bernegosiasi, hingga menjaga hubungan dengan pelanggan. Setiap materi dipelajari, dipraktikkan, lalu didokumentasikan sebagai hasil kerja.
          </p>
        </div>
      </Section>

      <Section eyebrow="02 / NILAI KAMI" title="Prinsip yang kami pegang.">
        <ul className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="glass p-6">
              <h3 className="text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{v.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="03 / LEVELA × TALENTIV JOBS" title="Belajar terarah. Peluang lebih luas.">
        <div className="glass p-7 sm:p-10">
          <p className="max-w-2xl leading-relaxed">
            Melalui kemitraan dengan Talentiv Jobs, profil profesional, sertifikat, dan portofolio alumni dapat ditampilkan kepada jaringan mitra hiring. Perusahaan dapat menilai kompetensimu secara lebih utuh, tidak hanya dari CV.
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-relaxed">
            Levela tidak menjamin penempatan kerja. Keputusan rekrutmen sepenuhnya mengikuti proses seleksi masing-masing perusahaan.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="04 / MENTOR"
        title="Didampingi praktisi industri."
        intro="Mentor Levela adalah praktisi di bidang bisnis, pemasaran, dan pengembangan kemitraan. Mereka membagikan cara kerja yang mereka gunakan, memberi umpan balik pada proyek, dan membantumu memahami standar kerja profesional."
      >
        <ul className="mobile-carousel grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m) => (
            <li key={m.name} className="glass p-6">
              <p className="font-heading text-lg">{m.name}</p>
              <p className="mt-1 text-sm font-semibold">{m.role}</p>
              {m.experience && <p className="mt-3 border-t border-line pt-3 text-[13px] leading-relaxed">{m.experience}</p>}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="05 / DALAM ANGKA" title="Dirancang agar tetap personal.">
        <ul className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <li key={s.label} className="glass p-6">
              <p className="font-heading text-4xl">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed">{s.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="06 / KONTAK"
        title="Diskusikan langkah kariermu."
        intro="Ingin tahu program mana yang paling sesuai dengan tujuan dan pengalamanmu? Tim Levela siap membantu memberikan gambaran program, jadwal, dan paket yang tersedia."
      >
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
            <p className="max-w-md leading-relaxed">Konsultasi dilakukan melalui WhatsApp bersama tim Levela.</p>
          )}
          <ConsultButton text={consultText} variant="primary" />
        </div>
      </Section>
      <ConsultButton text={consultText} floating />
    </main>
  )
}
