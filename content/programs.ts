import type { Program, ProgramLp, Talent } from './types'
import { talents } from './talents'

const waText = (title: string) => `Halo kak, saya ingin bertanya mengenai program ${title}.`

const bdLp: ProgramLp = {
  heroSubtitle: '30 hari intensif belajar best practice dan strategi business development, langsung dari praktisi.',
  skills: [
    { title: 'Business Acumen & Market Analysis', desc: 'Baca pasar, kompetitor, dan peluang revenue sebelum melangkah.' },
    { title: 'CRM & Pipeline', desc: 'Kelola prospek dari kontak pertama sampai closing dengan sistem yang rapi.' },
    { title: 'Negotiation & Sales', desc: 'Susun penawaran, tangani keberatan, dan tutup kesepakatan.' },
    { title: 'Performance Marketing', desc: 'Dukung target penjualan dengan channel digital yang terukur.' },
  ],
  overview: [
    'Relevan untuk entry hingga mid level',
    'Materi untuk tantangan kerja sehari-hari',
    'Praktik lewat real business project',
    'Mentoring project bersama praktisi',
    'Sertifikat dan profil di Talentiv Jobs',
  ],
  // TODO: konfirmasi jumlah live class (sumber Talentiv menyebut 21+, daftar sesi berisi 11)
  stats: [
    { value: '11', label: 'Sesi live class' },
    { value: '30 hari', label: 'Fase intensif' },
    { value: 'Entry', label: 'Level peserta' },
    { value: 'Online', label: 'Metode belajar' },
  ],
  careers: [
    'Business Development Executive',
    'Sales Executive',
    'Account Executive',
    'Partnership Executive',
    'Marketing Executive',
  ],
  audience: [
    { title: 'Fresh graduate', desc: 'Baru lulus dan ingin masuk ke dunia sales dan business development dengan bekal praktik.' },
    { title: 'Junior & entry level', desc: 'Sudah di BD atau sales dan ingin cara kerja yang lebih terarah dan terukur.' },
    { title: 'Karier stuck', desc: 'Ingin pindah jalur atau naik level lewat skill yang dicari perusahaan.' },
  ],
  tools: ['Meta Ads', 'Google Ads', 'Facebook', 'Instagram', 'ChatGPT', 'Claude'],
  phase1: {
    title: 'Sales & Business Development Strategy',
    time: 'Pukul 19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-11-10', title: 'Onboarding Program' },
      { code: 'S2', date: '2026-11-11', title: 'Business Acumen & Revenue Diagnostic' },
      { code: 'S3', date: '2026-11-12', title: 'Market Research & Competitor Analysis' },
      { code: 'S4', date: '2026-11-16', title: 'Business Model Canvas' },
      { code: 'S5', date: '2026-11-17', title: 'Lead Generation & Pipeline Management' },
      { code: 'S6', date: '2026-11-18', title: 'Pitching, Pitch Deck & Business Presentation' },
      { code: 'S7', date: '2026-11-19', title: 'Negotiation Strategy' },
      { code: 'S8', date: '2026-11-23', title: 'Closing Strategy' },
      { code: 'S9', date: '2026-11-25', title: 'Digital Marketing: Organic Source & Copywriting' },
      { code: 'S10', date: '2026-11-26', title: 'Digital Marketing: Meta & Google Ads' },
      { code: 'S11', date: '2026-11-30', title: 'Mentoring Project Portfolio & Post Test' },
    ],
  },
  phase2: {
    title: 'Mentoring Project & 1on1',
    modules: [
      'Project Brief',
      'Market Research & Strategy',
      'Build Strong Company Profile',
      'Running Ads & Online Canvassing',
      'Project Presentation & Evaluation',
    ],
  },
  projects: [
    'Market Opportunity Research',
    'Business Model Canvas',
    'Lead Generation & Sales Pipeline',
    'Business Pitch Deck & Presentation',
    'Negotiation & Closing Simulation',
  ],
  // TODO: konfirmasi mentor yang mengajar di Levela
  mentors: [
    { name: 'Tri Ali Herviansyah', role: 'B2B Growth & Performance Marketing' },
    { name: 'Ardan Aziz Rahman', role: 'Business Strategy & Business Development' },
    { name: 'M Khairul Hamid', role: 'Market Research & Data Analytics' },
    { name: 'Prita Permatadinata', role: 'Strategic Partnership & Business Performance' },
  ],
  talentIds: ['bd-1', 'bd-2'],
  certificate: 'Business Development Professional', // TODO: konfirmasi nama sertifikat
  reasons: [
    '30 hari intensif',
    'Live class interaktif dan sesi tanya jawab',
    'Modul dan rekaman kelas hingga 1 tahun',
    'Sertifikat sesuai ketentuan program',
    '4 mentor praktisi aktif',
    'Maksimal 20 peserta per batch',
  ],
  faq: [
    { q: 'Apakah cocok jika saya belum punya pengalaman BD?', a: 'Cocok. Materi dimulai dari dasar dan langsung dipraktikkan lewat project.' },
    { q: 'Apakah bisa sambil kerja atau kuliah?', a: 'Bisa. Kelas dimulai pukul 19.30 WIB dan rekamannya bisa ditonton ulang.' },
    { q: 'Apa syarat mendapatkan sertifikat?', a: 'Mengikuti kelas sesuai ketentuan kehadiran dan menyelesaikan project akhir.' },
    { q: 'Apa beda Fast Track dan Fast Track Plus?', a: 'Fast Track Plus mendapat 2 sesi mentoring project, Fast Track 1 sesi. Fasilitas lainnya sama.' },
    { q: 'Bagaimana cara daftar dan bayar?', a: 'Klik Daftar pada paket pilihanmu. Kamu akan diarahkan ke halaman pembayaran CO Edu.' },
    { q: 'Apakah kuota per batch terbatas?', a: 'Ya, maksimal 20 peserta per batch supaya mentoring tetap efektif.' },
  ],
}

const features = (program: string, mentoring: number) => [
  '30 hari intensif',
  `${mentoring} sesi mentoring project`,
  'Akses rekaman kelas hingga 1 tahun',
  `Sertifikat ${program} Professional`,
  'Sertifikasi dan portofolio di Talentiv Jobs',
  '1on1 consultation & mentoring project',
]

// CONTOH: seluruh isi Digital Marketing disalin dari BD dan disesuaikan. Ganti dengan isi asli.
const dmLp: ProgramLp = {
  ...bdLp,
  heroSubtitle: '30 hari intensif belajar strategi digital marketing: riset audiens, campaign, dan iklan berbayar.',
  skills: [
    { title: 'Audience & Market Research', desc: 'Kenali siapa audiensmu dan apa yang mereka butuhkan.' },
    { title: 'Campaign Planning', desc: 'Rancang campaign dengan tujuan, pesan, dan channel yang jelas.' },
    { title: 'Paid Traffic', desc: 'Jalankan Meta Ads dan Google Ads dengan budget yang terukur.' },
    { title: 'Performance Analytics', desc: 'Baca data dan optimasi hasil campaign.' },
  ],
  careers: ['Digital Marketing Specialist', 'Performance Marketing', 'Marketing Executive', 'Content Strategist'],
  audience: [
    { title: 'Fresh graduate', desc: 'Baru lulus dan ingin masuk ke dunia digital marketing dengan portofolio nyata.' },
    { title: 'Junior & entry level', desc: 'Sudah di marketing dan ingin menguasai iklan berbayar dan data.' },
    { title: 'Karier stuck', desc: 'Ingin pindah ke digital marketing lewat skill yang dicari perusahaan.' },
  ],
  tools: ['Meta Ads', 'Google Ads', 'Google Analytics', 'TikTok Ads', 'ChatGPT', 'Claude'],
  phase1: {
    title: 'Digital Marketing Strategy',
    time: 'Pukul 19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-12-01', title: 'Onboarding Program' },
      { code: 'S2', date: '2026-12-02', title: 'Digital Marketing Fundamentals' },
      { code: 'S3', date: '2026-12-03', title: 'Audience Research & Customer Journey' },
      { code: 'S4', date: '2026-12-07', title: 'Content Strategy & Copywriting' },
      { code: 'S5', date: '2026-12-08', title: 'SEO Basics' },
      { code: 'S6', date: '2026-12-09', title: 'Campaign Planning' },
      { code: 'S7', date: '2026-12-10', title: 'Meta Ads' },
      { code: 'S8', date: '2026-12-14', title: 'Google Ads' },
      { code: 'S9', date: '2026-12-15', title: 'Analytics & Reporting' },
      { code: 'S10', date: '2026-12-16', title: 'Optimization & A/B Testing' },
      { code: 'S11', date: '2026-12-21', title: 'Mentoring Project Portfolio & Post Test' },
    ],
  },
  phase2: {
    title: 'Mentoring Project & 1on1',
    modules: ['Project Brief', 'Audience & Market Research', 'Campaign Plan', 'Running Ads', 'Project Presentation & Evaluation'],
  },
  projects: ['Audience Persona', 'Campaign Plan', 'Ad Creative & Copy', 'Running Meta Ads', 'Performance Report'],
  talentIds: ['dm-1', 'dm-2'],
  certificate: 'Digital Marketing Professional',
  faq: bdLp.faq.map((f) =>
    f.q.includes('pengalaman BD') ? { ...f, q: 'Apakah cocok jika saya belum punya pengalaman marketing?' } : f,
  ),
}

export const programs: Program[] = [
  {
    slug: 'business-development',
    title: 'Business Development Fast Track',
    category: 'Business',
    status: 'available',
    summary: 'Riset pasar, prospek, pitching, negosiasi, dan closing untuk membuka peluang bisnis baru.',
    keywords: ['negosiasi', 'sales', 'pitching', 'lead generation', 'closing', 'partnership', 'b2b'],
    image: '/images/program-business-development.webp',
    imageAlt: 'Dua profesional muda berjabat tangan setelah menutup kesepakatan',
    duration: '30 hari',
    level: 'Entry level',
    format: 'Online',
    batchStart: '10 Nov 2026',
    whatsappText: waText('Business Development Fast Track'),
    // TODO: isi checkoutUrl dengan ID produk CO Edu Levela
    packages: [
      { name: 'Fast Track', normalPrice: 3500000, promoPrice: 2600000, promoUntil: '2026-11-02', features: features('Business Development', 1) },
      { name: 'Fast Track Plus', normalPrice: 5500000, promoPrice: 4600000, promoUntil: '2026-11-02', features: features('Business Development', 2) },
    ],
    lp: bdLp,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Fast Track',
    category: 'Marketing',
    status: 'available',
    summary: 'Riset audiens, perencanaan campaign, iklan berbayar, dan evaluasi performa pemasaran.',
    keywords: ['ads', 'meta ads', 'google ads', 'seo', 'campaign', 'analytics', 'copywriting'],
    image: '/images/program-digital-marketing.webp',
    imageAlt: 'Profesional muda bekerja di laptop dengan grafik performa campaign',
    duration: '30 hari',
    level: 'Entry level',
    format: 'Online',
    batchStart: '1 Des 2026', // CONTOH
    whatsappText: waText('Digital Marketing Fast Track'),
    // CONTOH: harga dan tanggal promo disalin dari BD
    packages: [
      { name: 'Fast Track', normalPrice: 3500000, promoPrice: 2600000, promoUntil: '2026-11-23', features: features('Digital Marketing', 1) },
      { name: 'Fast Track Plus', normalPrice: 5500000, promoPrice: 4600000, promoUntil: '2026-11-23', features: features('Digital Marketing', 2) },
    ],
    lp: dmLp,
  },
  {
    slug: 'social-media',
    title: 'Social Media Fast Track',
    category: 'Creative',
    status: 'coming-soon',
    summary: 'Strategi konten & pengelolaan akun',
    keywords: ['konten', 'instagram', 'tiktok', 'caption'],
    image: '/images/program-social-media.webp',
    imageAlt: 'Profesional muda merekam konten dengan smartphone',
    whatsappText: waText('Social Media Fast Track'),
  },
]

export const getProgram = (slug: string): Program | undefined => programs.find((p) => p.slug === slug)

export const getTalents = (ids: string[]): Talent[] =>
  ids.map((id) => talents.find((t) => t.id === id)).filter((t): t is Talent => !!t)
