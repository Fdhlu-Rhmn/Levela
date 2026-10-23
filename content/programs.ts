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
    { name: 'Facebook', use: 'Mencari calon klien di grup dan halaman bisnis, lalu melakukan online canvassing.' },
    { name: 'Instagram', use: 'Riset kompetitor dan membangun kredibilitas lewat profil bisnis sebelum menghubungi klien.' },
    { name: 'ChatGPT', use: 'Menyusun draft riset pasar, pesan prospek, dan kerangka proposal lebih cepat.' },
    { name: 'Claude', use: 'Merangkum data riset dan merapikan isi pitch deck sebelum presentasi.' },
  ],
  // Kurikulum BD disalin dari talentiv.id/bizdev (Okt 2026): deskripsi dan tag per sesi/modul.
  phase1: {
    title: 'Sales & Business Development Strategy',
    intro:
      'Pahami bisnis dan target pelanggan, bangun pipeline, lalu latih cara menyampaikan penawaran, bernegosiasi, dan mengarahkan percakapan menuju closing.',
    time: '19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-11-10', title: 'Onboarding Program', desc: 'Memahami learning journey, tujuan program, kontrak belajar, serta mendapatkan insight dan motivasi untuk memulai perjalanan sebagai Business Development.', tags: ['Learning Journey', 'Kontrak Belajar', 'Insight Business Development'] },
      { code: 'S2', date: '2026-11-11', title: 'Business Acumen & Revenue Diagnostic', desc: 'Memahami anatomi model bisnis, revenue stream, dan framework keuangan untuk mengidentifikasi peluang bisnis.', tags: ['Business Acumen', 'Revenue Stream', 'Business Diagnostic'] },
      { code: 'S3', date: '2026-11-12', title: 'Market Research & Competitor Analysis', desc: 'Mempelajari metodologi riset pasar, market sizing, analisis kompetitif, dan segmentasi untuk menemukan peluang bisnis.', tags: ['Market Research', 'Market Sizing', 'Competitor Analysis'] },
      { code: 'S4', date: '2026-11-16', title: 'Business Model Canvas', desc: 'Memahami 9 building blocks dan menyusun Business Model Canvas untuk melihat struktur bisnis secara menyeluruh.', tags: ['Business Model Canvas', 'Value Proposition', 'Revenue Streams'] },
      { code: 'S5', date: '2026-11-17', title: 'Lead Generation & Pipeline Management', desc: 'Mempelajari inbound dan outbound prospecting, kualifikasi lead, segmentasi lead stage, hingga pengelolaan sales pipeline.', tags: ['Lead Generation', 'Lead Qualification', 'Sales Pipeline'] },
      { code: 'S6', date: '2026-11-18', title: 'Pitching, Pitch Deck & Business Presentation', desc: 'Menyusun pitch deck persuasif, melakukan business storytelling, serta menangani pertanyaan dan objection.', tags: ['Pitch Deck', 'Business Storytelling', 'Business Presentation'] },
      // Sumber menulis tag "Persuasive Communication" dua kali; tag kedua diganti "Objection Handling" sesuai deskripsi.
      { code: 'S7', date: '2026-11-19', title: 'Negotiation Strategy', desc: 'Mempelajari prinsip dan taktik negosiasi, handling objection & rejection, serta komunikasi persuasif.', tags: ['Negotiation', 'Objection Handling', 'Persuasive Communication'] },
      { code: 'S8', date: '2026-11-23', title: 'Closing Strategy', desc: 'Mengenali buying signals, menerapkan teknik closing, serta memahami post-closing dan retention strategy.', tags: ['Buying Signals', 'Closing', 'Retention Strategy'] },
      { code: 'S9', date: '2026-11-25', title: 'Digital Marketing: Organic Source & Copywriting', desc: 'Memahami sumber organik dan copywriting untuk mendukung aktivitas marketing dan akuisisi pelanggan.', tags: ['Organic Source', 'Copywriting', 'Lead Acquisition'] },
      { code: 'S10', date: '2026-11-26', title: 'Digital Marketing: Meta & Google Ads', desc: 'Mempelajari penggunaan Meta Ads dan Google Ads untuk mendukung lead generation dan aktivitas pemasaran.', tags: ['Meta Ads', 'Google Ads', 'Performance Marketing'] },
      { code: 'S11', date: '2026-11-30', title: 'Mentoring Project Portfolio & Post Test', desc: 'Menerapkan hasil pembelajaran melalui project portfolio, final capstone project, simulasi pitching dan negosiasi, review, feedback, serta evaluasi akhir.', tags: ['Portfolio Project', 'Final Capstone', 'Post Test'] },
    ],
  },
  phase2: {
    title: 'Mentoring Project & 1on1',
    intro:
      'Ubah materi yang dipelajari menjadi hasil kerja: riset pasar, profil perusahaan, dan rencana akuisisi pelanggan. Kerjakan proyek dengan arahan mentor, lalu presentasikan strategi serta hasilnya untuk mendapatkan feedback.',
    modules: [
      { title: 'Project Brief & Business Context', desc: 'Pahami konteks bisnis, masalah yang ingin diselesaikan, target pelanggan, dan hasil yang perlu disusun sebelum memulai proyek.', tags: ['Business Context', 'Problem Definition', 'Project Output'] },
      { title: 'Market Research & Strategy', desc: 'Analisis kebutuhan pelanggan dan kompetitor, lalu susun rekomendasi target pasar serta pendekatan bisnis berdasarkan temuanmu.', tags: ['Market Research', 'Competitor Analysis', 'Customer Research'] },
      // Sumber menulis tag "Company Profile" dua kali; tag kedua diganti "Value Proposition" sesuai deskripsi.
      { title: 'Build Strong Company Profile', desc: 'Susun profil perusahaan yang menjelaskan solusi, value proposition, dan bukti kredibilitas untuk mendukung penawaran kepada calon pelanggan.', tags: ['Company Profile', 'Value Proposition', 'Business Storytelling'] },
      { title: 'Running Ads & Online Canvassing', desc: 'Terapkan pendekatan akuisisi melalui iklan digital dan online canvassing. Susun pesan penawaran serta evaluasi respons yang diperoleh.', tags: ['Target Audience', 'Running Ads', 'Online Canvassing'] },
      { title: 'Project Presentation & Evaluation', desc: 'Presentasikan hasil proyek, jelaskan alasan di balik strategi, dan gunakan feedback mentor untuk memperbaiki rekomendasi serta hasil kerja.', tags: ['Project Presentation', 'Evaluation', 'Business Insight'] },
    ],
  },
  projects: [
    { title: 'Market Opportunity Research', desc: 'Petakan kebutuhan pelanggan dan kompetitor untuk menentukan peluang pasar yang layak ditindaklanjuti.' },
    { title: 'Business Model Canvas (BMC)', desc: 'Hubungkan segmen pelanggan, value proposition, dan sumber pendapatan dalam satu peta bisnis.' },
    { title: 'Lead Generation & Sales Pipeline', desc: 'Susun prospek dan tahapan peluang agar aktivitas pendekatan serta tindak lanjut lebih terarah.' },
    { title: 'Business Pitch Deck & Presentation', desc: 'Buat presentasi yang menjelaskan kebutuhan pelanggan, manfaat solusi, dan alasan memilih penawaranmu.' },
    { title: 'Negotiation & Closing Simulation', desc: 'Latih respons atas keberatan, persiapkan negosiasi, dan tentukan langkah untuk mencapai kesepakatan.' },
  ],
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
    { name: 'Facebook', use: 'Mengelola halaman bisnis dan komunitas, serta menjadi sumber audiens untuk iklan Meta.' },
    { name: 'TikTok Ads', use: 'Menjangkau audiens muda lewat iklan video singkat.' },
    { name: 'ChatGPT', use: 'Membuat variasi copywriting dan ide konten untuk A/B testing.' },
    { name: 'Claude', use: 'Merangkum data performa menjadi laporan yang mudah dipahami.' },
  ],
  certificateImage: '/images/certificate-digital-marketing.webp',
  // CONTOH: kurikulum DM mengikuti format BD. Ganti deskripsi dan tag dengan materi asli.
  phase1: {
    title: 'Digital Marketing Strategy',
    intro:
      'Pahami audiens dan kanal digital, rancang campaign, lalu jalankan dan optimasi iklan berdasarkan data.',
    time: '19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-12-01', title: 'Onboarding Program', desc: 'Memahami learning journey, tujuan program, kontrak belajar, serta gambaran peran digital marketing di perusahaan.', tags: ['Learning Journey', 'Kontrak Belajar', 'Insight Digital Marketing'] },
      { code: 'S2', date: '2026-12-02', title: 'Digital Marketing Fundamentals', desc: 'Memahami funnel pemasaran, peran setiap kanal digital, dan metrik dasar untuk mengukur keberhasilan campaign.', tags: ['Marketing Funnel', 'Digital Channel', 'Marketing Metrics'] },
      { code: 'S3', date: '2026-12-03', title: 'Audience Research & Customer Journey', desc: 'Menyusun persona audiens dan memetakan perjalanan pelanggan dari mengenal brand hingga melakukan pembelian.', tags: ['Audience Persona', 'Customer Journey', 'Market Research'] },
      { code: 'S4', date: '2026-12-07', title: 'Content Strategy & Copywriting', desc: 'Menyusun pilar konten dan menulis copy yang sesuai dengan audiens serta tujuan campaign.', tags: ['Content Pillar', 'Copywriting', 'Content Plan'] },
      { code: 'S5', date: '2026-12-08', title: 'SEO Basics', desc: 'Mempelajari riset kata kunci dan optimasi konten agar website lebih mudah ditemukan di mesin pencari.', tags: ['Keyword Research', 'On-page SEO', 'Organic Traffic'] },
      { code: 'S6', date: '2026-12-09', title: 'Campaign Planning', desc: 'Merancang campaign lengkap mulai dari tujuan, pesan utama, kanal, budget, hingga cara mengukur hasil.', tags: ['Campaign Objective', 'Media Plan', 'Budgeting'] },
      { code: 'S7', date: '2026-12-10', title: 'Meta Ads', desc: 'Membuat struktur campaign, menentukan target audiens, dan mengoptimasi iklan di Facebook serta Instagram.', tags: ['Meta Ads', 'Audience Targeting', 'Ad Optimization'] },
      { code: 'S8', date: '2026-12-14', title: 'Google Ads', desc: 'Menjalankan iklan pencarian, memilih kata kunci, dan mengatur bidding untuk mendatangkan calon pembeli.', tags: ['Google Ads', 'Search Campaign', 'Bidding Strategy'] },
      { code: 'S9', date: '2026-12-15', title: 'Analytics & Reporting', desc: 'Membaca data di Google Analytics dan menyusun laporan performa campaign yang mudah dipahami.', tags: ['Google Analytics', 'Conversion Tracking', 'Reporting'] },
      { code: 'S10', date: '2026-12-16', title: 'Optimization & A/B Testing', desc: 'Menguji variasi materi iklan dan landing page untuk menemukan kombinasi dengan hasil terbaik.', tags: ['A/B Testing', 'Creative Testing', 'Performance Marketing'] },
      { code: 'S11', date: '2026-12-21', title: 'Mentoring Project Portfolio & Post Test', desc: 'Menerapkan hasil pembelajaran melalui project portfolio, review campaign bersama mentor, feedback, serta evaluasi akhir.', tags: ['Portfolio Project', 'Final Capstone', 'Post Test'] },
    ],
  },
  phase2: {
    title: 'Mentoring Project & 1on1',
    intro:
      'Ubah materi menjadi hasil kerja: riset audiens, rencana campaign, dan iklan yang benar-benar dijalankan. Kerjakan bersama mentor, lalu presentasikan hasilnya untuk mendapatkan feedback.',
    modules: [
      { title: 'Project Brief & Business Context', desc: 'Pahami brand, produk, target pasar, dan tujuan campaign yang akan kamu kerjakan sebelum memulai proyek.', tags: ['Business Context', 'Campaign Goal', 'Project Output'] },
      { title: 'Audience & Market Research', desc: 'Analisis audiens dan kompetitor, lalu tentukan segmen dan pesan yang paling relevan untuk campaign.', tags: ['Audience Research', 'Competitor Analysis', 'Positioning'] },
      { title: 'Campaign Plan', desc: 'Susun rencana campaign lengkap dengan kanal, jadwal konten, budget, dan target metrik.', tags: ['Media Plan', 'Content Calendar', 'KPI'] },
      { title: 'Running Ads', desc: 'Jalankan iklan di Meta atau Google, pantau performanya, dan lakukan optimasi berdasarkan data.', tags: ['Running Ads', 'Optimization', 'Budget Control'] },
      { title: 'Project Presentation & Evaluation', desc: 'Presentasikan hasil campaign, jelaskan alasan strategimu, dan perbaiki rekomendasi berdasarkan feedback mentor.', tags: ['Project Presentation', 'Evaluation', 'Marketing Insight'] },
    ],
  },
  projects: [
    { title: 'Audience Persona', desc: 'Susun profil audiens lengkap dengan kebutuhan, kebiasaan, dan pesan yang tepat untuk mereka.' },
    { title: 'Campaign Plan', desc: 'Rencana campaign dengan tujuan, kanal, jadwal, budget, dan metrik keberhasilan.' },
    { title: 'Ad Creative & Copy', desc: 'Materi iklan dan variasi copy yang siap diuji untuk menemukan pesan paling efektif.' },
    { title: 'Running Meta Ads', desc: 'Campaign Meta Ads yang dijalankan, dipantau, dan dioptimasi berdasarkan data performa.' },
    { title: 'Performance Report', desc: 'Laporan hasil campaign beserta insight dan rekomendasi langkah berikutnya.' },
  ],
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
    // CONTOH: isi teaser sementara sampai program Social Media siap.
    teaser: {
      headline: 'Konten yang dibuat dengan strategi, bukan sekadar rutin posting',
      subtitle: 'Program Social Media Fast Track sedang kami siapkan. Ini gambaran yang akan kamu pelajari.',
      topics: [
        { title: 'Strategi akun & pilar konten', desc: 'Menentukan positioning akun dan pilar konten yang konsisten dengan tujuan brand.' },
        { title: 'Content planning & copywriting', desc: 'Menyusun kalender konten, brief, dan caption yang mengajak audiens berinteraksi.' },
        { title: 'Produksi konten short video', desc: 'Merancang ide, hook, dan alur video singkat untuk Reels dan TikTok.' },
        { title: 'Insight & evaluasi konten', desc: 'Membaca insight akun dan memperbaiki konten berdasarkan data.' },
      ],
      tools: ['Instagram', 'TikTok', 'Facebook', 'Meta Business Suite', 'Canva', 'CapCut', 'ChatGPT'],
      perks: ['Kuota batch pertama terbatas', 'Info harga dan jadwal lebih dulu', 'Prioritas konsultasi program'],
      notifyText: 'Halo kak, kabari saya saat Social Media Fast Track dibuka ya.',
    },
  },
]

export const getProgram = (slug: string): Program | undefined => programs.find((p) => p.slug === slug)

export const getTalents = (ids: string[]): Talent[] =>
  ids.map((id) => talents.find((t) => t.id === id)).filter((t): t is Talent => !!t)
