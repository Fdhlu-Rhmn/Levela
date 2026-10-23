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
  situations: [
    'Sudah kirim banyak lamaran sales atau BD, tapi belum punya portofolio untuk ditunjukkan saat interview.',
    'Sudah bekerja di sales, tapi target terasa berat karena belum punya cara kerja yang terstruktur.',
    'Ingin pindah ke business development, tapi bingung harus mulai dari skill apa.',
  ],
  tools: [
    { name: 'Meta Ads', use: 'Menjalankan iklan Facebook dan Instagram untuk mendatangkan prospek baru.' },
    { name: 'Google Ads', use: 'Menjangkau calon klien yang sedang mencari solusi lewat pencarian Google.' },
    { name: 'Instagram & Facebook', use: 'Riset kompetitor dan online canvassing langsung ke calon klien.' },
    { name: 'ChatGPT', use: 'Menyusun draft riset pasar, pesan prospek, dan kerangka proposal lebih cepat.' },
    { name: 'Claude', use: 'Merangkum data riset dan merapikan isi pitch deck sebelum presentasi.' },
  ],
  phase1: {
    title: 'Sales & Business Development Strategy',
    time: 'Pukul 19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-11-10', title: 'Onboarding Program', desc: 'Kenalan dengan mentor dan sesama peserta, memahami alur program, dan menentukan target belajarmu.' },
      { code: 'S2', date: '2026-11-11', title: 'Business Acumen & Revenue Diagnostic', desc: 'Membaca cara bisnis menghasilkan uang dan menemukan titik yang bisa ditingkatkan dari sisi revenue.' },
      { code: 'S3', date: '2026-11-12', title: 'Market Research & Competitor Analysis', desc: 'Riset pasar dan kompetitor untuk menemukan peluang serta posisi yang tepat bagi produk.' },
      { code: 'S4', date: '2026-11-16', title: 'Business Model Canvas', desc: 'Memetakan model bisnis dalam satu kanvas: pelanggan, nilai, channel, hingga sumber pendapatan.' },
      { code: 'S5', date: '2026-11-17', title: 'Lead Generation & Pipeline Management', desc: 'Mencari calon klien yang tepat dan mengelola pipeline dari kontak pertama sampai siap closing.' },
      { code: 'S6', date: '2026-11-18', title: 'Pitching, Pitch Deck & Business Presentation', desc: 'Menyusun pitch deck dan berlatih presentasi bisnis yang ringkas, jelas, dan meyakinkan.' },
      { code: 'S7', date: '2026-11-19', title: 'Negotiation Strategy', desc: 'Strategi negosiasi: menyiapkan penawaran, membaca kebutuhan klien, dan menangani keberatan.' },
      { code: 'S8', date: '2026-11-23', title: 'Closing Strategy', desc: 'Teknik menutup kesepakatan dan menjaga hubungan dengan klien setelah deal.' },
      { code: 'S9', date: '2026-11-25', title: 'Digital Marketing: Organic Source & Copywriting', desc: 'Mendatangkan prospek dari kanal organik dan menulis copy yang mendorong calon klien merespons.' },
      { code: 'S10', date: '2026-11-26', title: 'Digital Marketing: Meta & Google Ads', desc: 'Dasar iklan berbayar di Meta dan Google untuk mendukung target penjualan.' },
      { code: 'S11', date: '2026-11-30', title: 'Mentoring Project Portfolio & Post Test', desc: 'Review project portofolio bersama mentor dan post test untuk mengukur pemahamanmu.' },
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
  // Pengalaman diambil dari halaman Talentiv (Okt 2026). TODO: foto asli di public/images/mentor-*.webp
  mentors: [
    {
      name: 'Tri Ali Herviansyah',
      role: 'B2B Growth & Performance Marketing',
      photo: '/images/mentor-tri-ali-herviansyah.webp',
      experience: 'Praktisi B2B growth dan performance marketing. TODO: lengkapi riwayat kerja.',
    },
    {
      name: 'Ardan Aziz Rahman',
      role: 'Business Strategy & Business Development',
      photo: '/images/mentor-ardan-aziz-rahman.webp',
      experience: 'CEO & Founder Talentiv Academy.',
    },
    {
      name: 'M Khairul Hamid',
      role: 'Market Research & Data Analytics',
      photo: '/images/mentor-m-khairul-hamid.webp',
      experience: 'Ex-Director of Business Intelligence dan Senior Software Engineer di perusahaan SaaS global.',
    },
    {
      name: 'Prita Permatadinata',
      role: 'Strategic Partnership & Business Performance',
      photo: '/images/mentor-prita-permatadinata.webp',
      experience: '6+ tahun di bidang business performance dan marketing.',
    },
  ],
  talentIds: ['bd-1', 'bd-2'],
  certificate: 'Business Development Professional', // TODO: konfirmasi nama sertifikat
  // TODO: ganti placeholder dengan contoh sertifikat asli dan foto kegiatan kelas asli
  certificateImage: '/images/certificate-business-development.webp',
  gallery: [
    { src: '/images/class-live.webp', alt: 'Live class bersama mentor', caption: 'Live class bersama mentor' },
    { src: '/images/class-mentoring.webp', alt: 'Sesi mentoring project', caption: 'Mentoring project 1on1' },
    { src: '/images/class-presentation.webp', alt: 'Presentasi hasil project peserta', caption: 'Presentasi hasil project' },
  ],
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
  situations: [
    'Lowongan digital marketing selalu minta pengalaman iklan, padahal kamu belum pernah pegang budget.',
    'Sudah rutin posting konten, tapi belum tahu cara membaca hasilnya dan memperbaikinya.',
    'Ingin pindah ke digital marketing, tapi materi gratis terasa acak dan tidak terarah.',
  ],
  tools: [
    { name: 'Meta Ads', use: 'Membuat dan mengoptimasi campaign iklan Facebook dan Instagram.' },
    { name: 'Google Ads', use: 'Menjalankan iklan pencarian untuk audiens yang siap membeli.' },
    { name: 'Google Analytics', use: 'Membaca perilaku pengunjung website dan sumber konversi.' },
    { name: 'TikTok Ads', use: 'Menjangkau audiens muda lewat iklan video singkat.' },
    { name: 'ChatGPT', use: 'Membuat variasi copywriting dan ide konten untuk A/B testing.' },
    { name: 'Claude', use: 'Merangkum data performa menjadi laporan yang mudah dipahami.' },
  ],
  certificateImage: '/images/certificate-digital-marketing.webp',
  phase1: {
    title: 'Digital Marketing Strategy',
    time: 'Pukul 19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-12-01', title: 'Onboarding Program', desc: 'Kenalan dengan mentor dan sesama peserta, memahami alur program, dan menentukan target belajarmu.' },
      { code: 'S2', date: '2026-12-02', title: 'Digital Marketing Fundamentals', desc: 'Memahami peta digital marketing: funnel, kanal, dan peran setiap kanal dalam campaign.' },
      { code: 'S3', date: '2026-12-03', title: 'Audience Research & Customer Journey', desc: 'Mengenali audiens dan memetakan perjalanan mereka dari kenal brand sampai membeli.' },
      { code: 'S4', date: '2026-12-07', title: 'Content Strategy & Copywriting', desc: 'Menyusun pilar konten dan menulis copy yang sesuai dengan audiens dan tujuan campaign.' },
      { code: 'S5', date: '2026-12-08', title: 'SEO Basics', desc: 'Dasar SEO: riset kata kunci dan optimasi konten agar mudah ditemukan di Google.' },
      { code: 'S6', date: '2026-12-09', title: 'Campaign Planning', desc: 'Merancang campaign lengkap: tujuan, pesan, kanal, budget, dan cara mengukurnya.' },
      { code: 'S7', date: '2026-12-10', title: 'Meta Ads', desc: 'Membuat, menargetkan, dan mengoptimasi campaign iklan di Facebook dan Instagram.' },
      { code: 'S8', date: '2026-12-14', title: 'Google Ads', desc: 'Menjalankan iklan pencarian dan memilih kata kunci yang mendatangkan calon pembeli.' },
      { code: 'S9', date: '2026-12-15', title: 'Analytics & Reporting', desc: 'Membaca data di Google Analytics dan menyusun laporan performa yang mudah dipahami.' },
      { code: 'S10', date: '2026-12-16', title: 'Optimization & A/B Testing', desc: 'Menguji variasi iklan dan konten untuk menemukan yang paling efektif.' },
      { code: 'S11', date: '2026-12-21', title: 'Mentoring Project Portfolio & Post Test', desc: 'Review project portofolio bersama mentor dan post test untuk mengukur pemahamanmu.' },
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
      { name: 'Fast Track', normalPrice: 499000, promoPrice: 349000, features: features('Business Development', 1) },
      { name: 'Fast Track Plus', normalPrice: 2900000, promoPrice: 1900000, features: features('Business Development', 2) },
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
    packages: [
      { name: 'Fast Track', normalPrice: 499000, promoPrice: 349000, features: features('Digital Marketing', 1) },
      { name: 'Fast Track Plus', normalPrice: 2900000, promoPrice: 1900000, features: features('Digital Marketing', 2) },
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
