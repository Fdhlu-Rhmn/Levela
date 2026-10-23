import type { Program, ProgramLp, Talent } from './types'
import { talents } from './talents'

const waText = (title: string) => `Halo kak, saya ingin bertanya mengenai program ${title}.`

const bdLp: ProgramLp = {
  heroSubtitle: '30 hari intensif belajar best practice dan strategi business development, langsung dari praktisi.',
  skills: [
    { title: 'Business Acumen & Market Analysis', desc: 'Baca pasar, kompetitor, dan peluang revenue sebelum melangkah.' },
    { title: 'CRM & Pipeline', desc: 'Kelola prospek dari kontak pertama sampai closing dengan sistem yang rapi.' },
    { title: 'Negotiation & Sales', desc: 'Susun penawaran, tangani keberatan, dan tutup kesepakatan.' },
    { title: 'Pitching & Customer Retention', desc: 'Presentasikan solusi dengan meyakinkan dan jaga hubungan pelanggan setelah deal.' },
  ],
  // Overview dari talentiv.id/bizdev (Okt 2026); nama sertifikat disesuaikan ke Levela.
  overview: [
    { title: 'Relevan untuk Staf Entry hingga Mid Level', desc: 'Perkuat fondasi dan asah keterampilan melalui praktik serta simulasi alur kerja sales dan Business Development.', image: '/images/overview-level.webp' },
    { title: 'Materi untuk Tantangan Kerja Sehari-hari', desc: 'Pelajari riset pasar, prospecting, pitching, negosiasi, dan closing untuk menghadapi kebutuhan pelanggan serta target penjualan.', image: '/images/class-live.webp' },
    { title: 'Praktik melalui Real Business Project', desc: 'Terapkan pembelajaran dalam proyek bisnis bersama mitra dan dapatkan pengalaman menyusun solusi untuk kebutuhan bisnis.', image: '/images/class-presentation.webp' },
    { title: 'Real Project & Mentoring', desc: 'Kerjakan proyek bisnis untuk menerapkan strategi yang dipelajari, lalu gunakan arahan dan feedback mentor untuk memperbaiki hasilnya.', image: '/images/class-mentoring.webp' },
    { title: 'Sertifikat & Profil di Talentiv Jobs', desc: 'Lengkapi profil profesionalmu di Talentiv Jobs dengan sertifikat dan portofolio untuk menunjukkan kemampuan sales serta Business Development.', image: '/images/overview-profile.webp' },
  ],
  stats: [
    { value: '9', label: 'Sesi live class' },
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
    { name: 'Microsoft Excel', use: 'Mengolah data riset pasar, menghitung market size, dan menyusun pipeline penjualan.' },
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
      // Kurikulum dari pemilik (24 Okt 2026), 3 modul.
      { code: 'S1', date: '2026-11-11', title: 'Business Acumen & Revenue Diagnostic', module: 'Market Intelligence', desc: 'Pelajari cara memahami model bisnis, mengidentifikasi sumber pendapatan, dan menganalisis aspek keuangan untuk menemukan peluang pertumbuhan bisnis.', tags: ['Business Acumen', 'Revenue Stream', 'Model Bisnis', 'Business Finance'] },
      { code: 'S2', date: '2026-11-12', title: 'Market Research & Competitor Analysis', module: 'Market Intelligence', desc: 'Kuasai teknik riset pasar, perhitungan potensi pasar, analisis kompetitor, dan pengolahan data menggunakan Excel untuk mendukung strategi bisnis.', tags: ['Market Research', 'Market Sizing', 'Competitor Analysis', 'Excel'] },
      { code: 'S3', date: '2026-11-13', title: 'Business Model Canvas', module: 'Market Intelligence', desc: 'Pelajari penyusunan Business Model Canvas (BMC) melalui 9 elemen utama untuk merancang model bisnis yang terstruktur dan berorientasi pada nilai pelanggan.', tags: ['Business Model Canvas', '9 Building Blocks', 'Value Proposition'] },
      { code: 'S4', date: '2026-11-18', title: 'Lead Generation & Pipeline Management', module: 'Lead Generation & Commercial Operations', desc: 'Pelajari strategi mendapatkan prospek potensial, menentukan kualifikasi lead, serta menyusun dan mengelola sales pipeline melalui praktik kasus perusahaan.', tags: ['Lead Generation', 'Lead Qualification', 'Sales Pipeline', 'Praktik Pipeline'] },
      { code: 'S5', date: '2026-11-19', title: 'Negotiation Strategy', module: 'Deal Making & Strategic Partnerships', desc: 'Kuasai strategi negosiasi bisnis, komunikasi persuasif, dan teknik menghadapi keberatan calon pelanggan untuk mencapai kesepakatan yang efektif.', tags: ['Business Negotiation', 'Handling Objections', 'Persuasive Communication'] },
      { code: 'S6', date: '2026-11-23', title: 'Closing Strategy', module: 'Deal Making & Strategic Partnerships', desc: 'Pelajari cara mengenali sinyal pembelian, menerapkan teknik closing, serta membangun strategi tindak lanjut untuk menjaga hubungan pelanggan.', tags: ['Buying Signals', 'Closing Techniques', 'Customer Retention'] },
      { code: 'S7', date: '2026-11-24', title: 'Pitching, Pitch Deck & Business Presentation', module: 'Deal Making & Strategic Partnerships', desc: 'Pelajari penyusunan pitch deck, teknik storytelling bisnis, dan pemanfaatan AI untuk menyampaikan presentasi yang persuasif serta menjawab pertanyaan audiens.', tags: ['Pitch Deck', 'Business Storytelling', 'Presentation Skills', 'AI Tools'] },
      { code: 'S8', date: '2026-11-25', title: 'Building Relationships & Customer Retention', module: 'Deal Making & Strategic Partnerships', desc: 'Pelajari strategi membangun hubungan pelanggan, mengelola layanan aftersales, dan meningkatkan loyalitas untuk mendukung keberlanjutan bisnis.', tags: ['Customer Relationship', 'Aftersales Strategy', 'Customer Loyalty'] },
      // TODO: tanggal sesi 9 perlu dikonfirmasi
      { code: 'S9', title: 'Mentoring Project Portfolio & Post-Test', module: 'Deal Making & Strategic Partnerships', desc: 'Evaluasi pemahaman materi melalui post-test dan susun portofolio profesional sebagai dokumentasi keterampilan Sales & Business Development yang telah dipelajari.', tags: ['Post-Test', 'Portfolio Building', 'Project Mentoring'] },
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
      experience: 'Praktisi B2B growth dan performance marketing.', // TODO: lengkapi riwayat kerja
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
  // TODO: ganti placeholder dengan contoh sertifikat asli
  certificateImage: '/images/certificate-business-development.webp',
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

// Digital Marketing LP disesuaikan dengan kurikulum dari pemilik (24 Okt 2026):
// topik bisnis & sales untuk pemasar. Jadwal dan mentor dari tabel pemilik.
const M1 = 'Market Intelligence'
const M2 = 'Lead Generation & Commercial Operations'
const M3 = 'Deal Making & Strategic Partnerships'

const dmLp: ProgramLp = {
  ...bdLp,
  stats: bdLp.stats.map((st) => (st.label === 'Sesi live class' ? { ...st, value: '8' } : st)),
  heroSubtitle: '30 hari intensif memahami bisnis dan pasar, membangun pipeline, sampai closing dan menjaga loyalitas pelanggan.',
  skills: [
    { title: 'Business & Market Insight', desc: 'Baca model bisnis, sumber pendapatan, dan potensi pasar sebelum menyusun strategi.' },
    { title: 'Lead Generation & Pipeline', desc: 'Cari prospek yang tepat dan kelola pipeline sampai siap closing.' },
    { title: 'Negotiation & Closing', desc: 'Hadapi keberatan, bernegosiasi, dan tutup kesepakatan.' },
    { title: 'Pitching & Customer Retention', desc: 'Presentasikan solusi dengan meyakinkan dan jaga pelanggan tetap loyal.' },
  ],
  overview: [
    { title: 'Relevan untuk Staf Entry hingga Mid Level', desc: 'Perkuat fondasi dan asah keterampilan melalui praktik serta simulasi alur kerja marketing dan penjualan.', image: '/images/overview-level.webp' },
    { title: 'Materi untuk Tantangan Kerja Sehari-hari', desc: 'Pelajari riset pasar, business model, lead generation, negosiasi, closing, dan retensi pelanggan untuk mengejar target bisnis.', image: '/images/class-live.webp' },
    { title: 'Praktik melalui Real Business Project', desc: 'Terapkan pembelajaran dalam proyek bisnis dan dapatkan pengalaman menyusun solusi untuk kebutuhan nyata.', image: '/images/class-presentation.webp' },
    { title: 'Real Project & Mentoring', desc: 'Kerjakan proyek bisnis, lalu gunakan arahan dan feedback mentor untuk memperbaiki hasilnya.', image: '/images/class-mentoring.webp' },
    { title: 'Sertifikat & Profil di Talentiv Jobs', desc: 'Lengkapi profil profesionalmu di Talentiv Jobs dengan sertifikat dan portofolio untuk menunjukkan kemampuanmu.', image: '/images/overview-profile.webp' },
  ],
  careers: ['Marketing Executive', 'Business Development Executive', 'Sales Executive', 'Account Executive', 'Partnership Executive'],
  audience: [
    { title: 'Fresh graduate', desc: 'Baru lulus dan ingin memahami cara bisnis tumbuh, dari riset pasar sampai closing.' },
    { title: 'Junior & entry level', desc: 'Sudah di marketing atau sales dan ingin menghubungkan pekerjaanmu dengan target penjualan.' },
    { title: 'Karier stuck', desc: 'Ingin naik level lewat skill bisnis dan penjualan yang dicari perusahaan.' },
  ],
  situations: [
    'Sudah membuat banyak konten dan campaign, tapi sulit menunjukkan dampaknya ke penjualan.',
    'Sering diminta mencari prospek, tapi belum punya cara kerja yang terstruktur dari lead sampai closing.',
    'Ingin naik ke peran yang lebih strategis, tapi belum percaya diri membaca model bisnis dan pasar.',
  ],
  tools: [
    { name: 'Microsoft Excel', use: 'Mengolah data riset pasar, menghitung market size, dan menyusun pipeline.' },
    { name: 'Facebook', use: 'Mencari dan menjangkau prospek lewat grup dan halaman bisnis.' },
    { name: 'Instagram', use: 'Riset kompetitor dan membangun kredibilitas sebelum menghubungi calon pelanggan.' },
    { name: 'ChatGPT', use: 'Menyusun draft riset, pesan prospek, dan kerangka pitch deck lebih cepat.' },
    { name: 'Claude', use: 'Merapikan isi presentasi bisnis dan menyiapkan jawaban untuk sesi tanya jawab.' },
  ],
  certificateImage: '/images/certificate-digital-marketing.webp',
  phase1: {
    title: 'Market & Commercial Strategy',
    intro: 'Pahami bisnis dan pasar, bangun pipeline, lalu latih negosiasi, closing, pitching, dan cara menjaga hubungan pelanggan.',
    time: '19.30 WIB',
    sessions: [
      { code: 'S1', date: '2026-11-11', mentor: 'Aziz', module: M1, title: 'Business Acumen & Revenue Diagnostic', desc: 'Memahami sumber pendapatan, model bisnis, dan kerangka keuangan untuk mengidentifikasi peluang bisnis.', tags: ['Revenue Business', 'Business Model', 'Financial Framework'] },
      { code: 'S2', date: '2026-11-12', mentor: 'Hamid', module: M1, title: 'Market Research & Competitor Analysis', desc: 'Mempelajari metodologi riset pasar, menghitung potensi pasar, menganalisis kompetitor, dan melakukan segmentasi berbasis data.', tags: ['Market Research', 'Market Sizing', 'Competitor Analysis', 'Excel Masterclass'] },
      { code: 'S3', date: '2026-11-13', mentor: 'Herdi', module: M1, title: 'Business Model Canvas', desc: 'Memahami sembilan elemen Business Model Canvas dan menyusun model bisnis yang mencakup proposisi nilai, pelanggan, mitra, aktivitas, biaya, serta sumber pendapatan.', tags: ['9 Building Blocks', 'Value Proposition', 'Customer Relationship', 'Revenue Streams'] },
      { code: 'S4', date: '2026-11-18', mentor: 'Herdi', module: M2, title: 'Lead Generation & Pipeline Management', desc: 'Mempelajari strategi pencarian prospek, kualifikasi dan segmentasi lead, serta pengelolaan sales pipeline untuk mendukung proses penjualan.', tags: ['Inbound & Outbound Prospecting', 'Lead Qualification', 'Sales Pipeline'] },
      { code: 'S5', date: '2026-11-19', mentor: 'Usamah', module: M3, title: 'Negotiation Strategy', desc: 'Mengembangkan kemampuan negosiasi bisnis, menangani keberatan dan penolakan, serta menerapkan komunikasi persuasif untuk mencapai kesepakatan.', tags: ['Negotiation Tactics', 'Objection Handling', 'Persuasive Communication'] },
      { code: 'S6', date: '2026-11-23', mentor: 'Usamah', module: M3, title: 'Closing Strategy', desc: 'Mengenali sinyal kesiapan membeli, menerapkan teknik closing, dan menyusun strategi tindak lanjut untuk meningkatkan keberhasilan penjualan.', tags: ['Buying Signals', 'Closing Techniques', 'Post-Closing Strategy'] },
      { code: 'S7', date: '2026-11-24', mentor: 'Sahrul', module: M3, title: 'Pitching, Pitch Deck & Business Presentation', desc: 'Menyusun pitch deck yang persuasif, mengembangkan storytelling bisnis, menjawab pertanyaan dan keberatan, serta memanfaatkan AI dalam presentasi bisnis.', tags: ['Pitch Deck', 'Business Storytelling', 'Handling Q&A', 'AI for Business Presentation'] },
      { code: 'S8', date: '2026-11-25', mentor: 'Sahrul', module: M3, title: 'Building Relation & Retention with Customers', desc: 'Membangun hubungan jangka panjang dengan pelanggan melalui manajemen relasi, pelayanan aftersales, dan strategi mempertahankan loyalitas pelanggan.', tags: ['Customer Relationship Management', 'Aftersales', 'Customer Loyalty'] },
    ],
  },
  // Fase 2 dan project sama dengan BD karena topik kurikulumnya sama.
  // Mentor: hanya nama panggilan dari jadwal. TODO: nama lengkap, foto asli, dan pengalaman.
  mentors: [
    { name: 'Aziz', role: 'Business Acumen & Revenue Diagnostic', photo: '/images/mentor-aziz.webp' },
    { name: 'Hamid', role: 'Market Research & Competitor Analysis', photo: '/images/mentor-hamid.webp' },
    { name: 'Herdi', role: 'Business Model Canvas · Lead Generation', photo: '/images/mentor-herdi.webp' },
    { name: 'Usamah', role: 'Negotiation & Closing Strategy', photo: '/images/mentor-usamah.webp' },
    { name: 'Sahrul', role: 'Pitching & Customer Retention', photo: '/images/mentor-sahrul.webp' },
  ],
  talentIds: ['dm-1', 'dm-2'],
  certificate: 'Digital Marketing Professional', // TODO: konfirmasi nama sertifikat
  faq: bdLp.faq.map((f) =>
    f.q.includes('pengalaman BD') ? { ...f, q: 'Apakah cocok jika saya belum punya pengalaman marketing atau sales?' } : f,
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
    batchStart: '11 Nov 2026',
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
    summary: 'Riset pasar, model bisnis, lead generation, negosiasi, closing, dan retensi pelanggan untuk pemasar.',
    keywords: ['marketing', 'market sizing', 'retention', 'aftersales', 'customer loyalty', 'excel'],
    image: '/images/program-digital-marketing.webp',
    imageAlt: 'Profesional muda bekerja di laptop dengan grafik performa campaign',
    duration: '30 hari',
    level: 'Entry level',
    format: 'Online',
    batchStart: '11 Nov 2026',
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
