# Levela Academy Website — Design

Tanggal: 2026-10-23 · Pemilik: Fadhlu (web dev Levela)

## 1. Intent

Levela Academy adalah sekolah bisnis dan kreatif, **anak perusahaan Talentiv sekaligus mitranya**. Hubungan anak perusahaan ini **tidak ditampilkan** di website; yang ditampilkan hanya kemitraan dengan Talentiv Jobs. Website ini mengubah landing page statis yang ada (`index.html`, `style.css`, `app.js`) menjadi situs multi-halaman yang:

- meyakinkan **fresh graduate, junior/entry-level BD, dan profesional yang kariernya stuck** untuk ikut program,
- membuat mereka **betah dan nyaman** di semua ukuran layar (desktop, tablet, HP),
- mengarahkan ke dua aksi: **daftar langsung** (yang sudah yakin) atau **Konsultasi Program via WhatsApp** (yang belum paham).

Website tidak menyimpan data, tidak punya login, dan tidak memproses pembayaran. Pendaftaran dan pembayaran terjadi di **CO Edu** (`edu.talentiv.id`, WordPress + WooCommerce), sama seperti Talentiv.

## 2. Goals, non-goals, anti-goals

**Goals**
- 4 komponen utama: Homepage, Landing Page program (BD dan DM), Menu Pencarian program, About Us.
- Gaya glass (frosted glass) di atas identitas visual situs statis sekarang.
- Brand guidelines + brand token sebagai dokumen terpisah.
- Bagian **Talent Verified** di LP: profil gaya CV yang menunjukkan skill dan menghubungkannya dengan mitra hiring.
- LP BD fokus ke business development; semua isi HR dari halaman Talentiv dibuang.
- Paket prompt untuk foto karakter Asia realistis.
- Semua isi mudah diubah oleh web dev lewat file data.

**Non-goals**
- Form, database, login, pembayaran, API route.
- CMS atau panel admin.
- Mengambil data talent dari Talentiv Jobs lewat API (diisi manual).
- LP Social Media (program hanya tampil di pencarian sebagai "Segera Hadir").

**Anti-goals** (gagal walau secara teknis jalan)
- Terlihat "seperti buatan AI": emoji, ikon dekoratif berlebihan, gradien norak, ilustrasi generik.
- Teks tidak terbaca di atas kaca atau foto (badge status samar, kontras rendah).
- Pengunjung HP kesulitan: tombol kecil, scroll horizontal, CTA tersembunyi.
- Ada sisa isi HR di LP BD, atau link WhatsApp dengan pesan program yang salah.

## 3. Keputusan pemilik (diputuskan oleh Fadhlu)

- **Framework:** Next.js, komponen dibuat sendiri (tanpa library UI).
- **Hosting:** Hostinger.
- **Data talent verified:** manual, berupa **profil contoh** dulu; pemilik menggantinya sendiri nanti.
- **Pendaftaran:** tombol "Daftar" mengarah ke checkout CO Edu per paket.
- **Konsultasi:** form konsultasi dihapus; semua diarahkan ke WhatsApp dengan label **"Konsultasi Program"**.
- **Menu Pencarian** = mencari program (bukan kuis). Kartu program **punya gambar**. Badge status harus **jelas terlihat**.
- **Social Media** tetap muncul di pencarian, tanpa LP.
- **Header** sama dengan situs statis sekarang: logo · Program · Cara Belajar · Karier · Tentang Kami · tombol "Konsultasi Program ↗".
- **Struktur LP** mengikuti `talentiv.id/bizdev/`, isi HR dibuang (disetujui lewat mockup).
- **LP DM:** kerangka dan isi contoh diambil dari LP BD dulu.
- **Karakter:** foto realistis (bukan ilustrasi), dibuat pemilik dari prompt yang disiapkan.
- **Brand guidelines:** dokumen terpisah, bukan halaman di website.
- **Desain:** responsif, modern, clean, minim ikon.

## 4. Keputusan builder (usulan Claude, boleh dikoreksi)

- **Next.js App Router + TypeScript + Tailwind CSS 4**, versi sama dengan `Website_Rental/frontend` (Next 16).
- **Static export** (`output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`). Hasil `out/` diunggah ke `public_html` Hostinger; jalan di semua paket termasuk shared hosting.
- **Isi sebagai file data TypeScript** di `content/` dengan tipe yang ketat, supaya salah isi ketahuan saat build.
- **Pencarian di sisi browser** (client component) memfilter data program yang sama; tidak ada server.
- **Gambar** dikompres manual ke WebP (target < 250 KB per foto). `hero.png` sekarang 2 MB.
- **Satu sumber token**: token warna, font, radius, blur, dan spacing ditulis di `app/globals.css` (`@theme` Tailwind 4) dan didokumentasikan di brand guidelines.
- **Font** lewat `next/font/google` (Manrope + DM Sans), di-self-host saat build.
- **Profil contoh jujur:** tipe `Talent` punya `sample: boolean`. Selama `sample: true`, kartu menampilkan label kecil "Contoh profil" dan badge "Verified by Talentiv" **tidak** tampil (diganti teks netral "Profil lulusan"). Badge hanya muncul untuk profil asli. Alasan: profil karangan yang tampil "terverifikasi" menyesatkan bila situs live sebelum diganti.
- **Data yang belum ada:** `checkoutUrl` kosong → tombol "Daftar" disembunyikan dan diganti "Konsultasi Program". Nomor WhatsApp kosong → build tetap jalan tapi mencetak peringatan. Harga kosong → kartu paket menampilkan "Harga diinformasikan saat konsultasi". Logo mitra kosong → nama perusahaan sebagai teks. Build tidak gagal karena placeholder, supaya dev deploy tetap bisa.
- **Situs statis lama:** `index.html`, `style.css`, `app.js` dipindah ke `legacy/` sebagai acuan selama Homepage dibangun ulang, lalu dihapus setelah Homepage baru selesai. `assets/hero.png` dipindah ke `public/images/` (WebP). `CLAUDE.md` diperbarui ke stack baru; `.gitignore` ditambah `node_modules/`, `.next/`, `out/`.
- **Versi:** Next.js 16 dan Tailwind CSS 4 versi stabil terbaru; tidak perlu membaca proyek lain.
- **Hosting:** situs di root domain. `basePath` dibaca dari variabel env `NEXT_PUBLIC_BASE_PATH` (default kosong) kalau suatu saat dipasang di subfolder. Dengan `trailingSlash: true`, setiap halaman jadi `folder/index.html`, jadi Apache Hostinger tidak butuh rewrite. `public/.htaccess` hanya berisi `ErrorDocument 404 /404.html` dan cache header untuk gambar/CSS/JS.

## 5. Arsitektur

```
levela/
  app/
    layout.tsx            header + footer + font + metadata
    page.tsx              Homepage
    program/page.tsx      Menu Pencarian (client component untuk filter)
    program/[slug]/page.tsx  LP program (generateStaticParams dari content/programs)
    tentang/page.tsx      About Us
    globals.css           token (@theme) + utilitas glass
  components/             Header, Footer, GlassCard, Button, StatusBadge, ProgramCard,
                          TalentCard, FAQ, Curriculum, PricingCard, WhatsAppButton, ...
  content/                programs.ts, talents.ts, partners.ts, mentors.ts, faq.ts, site.ts
  public/images/          foto WebP
  docs/brand/             brand guidelines
  docs/superpowers/specs/ dokumen ini
```

**URL:** `/` · `/program` · `/program/business-development` · `/program/digital-marketing` · `/tentang`. Social Media tidak punya halaman; `generateStaticParams` hanya untuk program berstatus `available`.

**Data inti** (`content/programs.ts`), bentuk minimal:

```ts
type ProgramStatus = 'available' | 'coming-soon'
type Program = {
  slug: string; title: string; category: 'Business' | 'Marketing' | 'Creative'
  status: ProgramStatus; summary: string; keywords: string[]   // dipakai pencarian
  image: string; duration: string; level: string; format: string; batchStart?: string
  whatsappText: string                                          // pesan otomatis per program
  packages?: { name: string; normalPrice: number; promoPrice?: number; promoUntil?: string;
               checkoutUrl: string; features: string[] }[]
  lp?: { /* isi per bagian LP: skills, audience, tools, curriculum, projects, mentors,
            talents (id ke talents.ts), certification, reasons, faq */ }
}
```

`content/site.ts` menyimpan nomor WhatsApp, email, sosmed, alamat, dan URL dasar CO Edu. Link WhatsApp dibentuk sebagai `https://wa.me/<nomor>?text=<encodeURIComponent(whatsappText)>`.

## 6. Halaman

### 6.1 Header & footer (semua halaman)
- Header sama dengan situs sekarang. Di desktop menu lengkap; di tablet dan HP jadi tombol menu (min 44×44px).
- "Program" → `/program`. "Cara Belajar" → `/#belajar` (bagian The Levela Way). "Karier" → `/#karier` (bagian Talent Verified + Koneksi Talentiv Jobs, digabung dalam satu `section` ber-id `karier`). "Tentang Kami" → `/tentang`.
- Footer: **isi sama dengan footer situs sekarang** (logo, "Sekolah bisnis dan kreatif untuk membangun karier profesionalmu.", link Program · Koneksi Karier · Tentang Levela, "© <tahun berjalan> Levela Academy."). Yang berubah hanya desain dan layout: lebih rapi, gaya glass, responsif. Tanpa tulisan "bagian dari Talentiv".

### 6.2 Homepage (`/`)
Dibangun ulang dari `index.html` sekarang dengan gaya glass. Urutan:
1. Hero "Bangun karier profesionalmu." + foto karakter + "Temukan Programmu" (→ `/program`).
2. Strip 3 langkah (Belajar terarah · Bangun portofolio · Jelajahi peluang karier).
3. 3 kartu program: BD dan DM → LP; Social Media → badge "Segera Hadir" + Konsultasi Program. Dialog popup lama dihapus.
4. The Levela Way (4 langkah belajar).
5. **Baru:** cuplikan 1–2 kartu Talent Verified → "Lihat di program".
6. Koneksi Talentiv Jobs (ratusan mitra hiring).
7. Tentang singkat → "Kenali Levela" (`/tentang`).
8. FAQ umum.
9. Penutup dengan tombol Konsultasi Program (WhatsApp), menggantikan form konsultasi.

### 6.3 Menu Pencarian (`/program`)
Mengikuti mockup `search-v3-responsive.html`.
- Judul "Temukan programmu." + kotak cari (mencocokkan `title`, `summary`, `keywords`, tanpa peka huruf besar/kecil).
- Filter pill: kategori (Semua, Business, Marketing, Creative) dan status (Tersedia, Segera Hadir). Bisa dikombinasikan.
- Jumlah hasil ("3 program ditemukan").
- Kartu: gambar di atas, **badge status solid** (Tersedia: latar putih + titik hijau; Segera Hadir: latar coklat tua + titik oranye; teks selalu ada, tidak hanya warna), kategori, judul, durasi/format/level, batch. Tombol: "Lihat Program" (utama) + "Daftar ↗" untuk program tersedia; "Konsultasi Program ↗" untuk Segera Hadir.
- Hasil kosong: "Belum ketemu program yang cocok? Ceritakan kebutuhanmu." + Konsultasi Program.
- Desktop 3 kolom, tablet 2 kolom, HP 1 kolom. Di HP kotak cari + filter menempel di atas saat scroll, filter bisa digeser ke samping, tombol Konsultasi Program melayang di bawah.

### 6.4 Landing Page program (`/program/[slug]`)
Mengikuti mockup `lp-bizdev-structure.html`. Urutan:
1. Hero: nama program, subjudul, "Daftar Sekarang" (scroll ke Paket) + "Konsultasi Program", foto karakter.
2. Logo mitra hiring & mitra pelatihan.
3. Skill utama (4 kartu).
4. Gambaran program + angka (live class, durasi, level, format) + jalur karier.
5. Untuk siapa: fresh graduate · junior/entry-level · karier stuck ingin upgrade.
6. Tools yang dipelajari.
7. Kurikulum: Fase 1 live class (accordion per sesi dengan tanggal & jam) + Fase 2 mentoring project.
8. Real project & portofolio.
9. Mentor.
10. **Talent Verified (baru):** judul "Lulus dengan bekal yang dicari mitra hiring". Kiri: kartu profil gaya CV yang bisa digeser (avatar foto, nama, role, "Gaji mulai dari", badge **Verified by Talentiv**, Education, Professional Experience dengan angka hasil, Top Skills, Tools). Kanan: "Terhubung dengan mitra hiring" berisi logo mitra + posisi yang relevan dengan skill.
11. Sertifikasi.
12. Kenapa program ini + tombol daftar.
13. Paket & harga: harga normal dan promo + batas promo; "Daftar ↗" ke `checkoutUrl` paket; "Konsultasi Program" ke WhatsApp.
14. FAQ khusus program.
15. Penutup: "Ceritakan tantanganmu" + Konsultasi Program.

**Dibuang dari Talentiv (HR):** Super Intensive Career Mentoring, Job Support Network (mock interview recruiter HR), Output Bootcamp HR (BNSP HR Staff, Mekari Talenta HRIS, Talentiv Certified HR), testimoni alumni HR, FAQ HR Fast Track, tagline "#1 HR & Finance School". Testimoni alumni tidak diganti dulu; Talent Verified menjadi buktinya.

**Isi BD** diambil dari `talentiv.id/bizdev/` versi Oktober 2026 sebagai isi awal; isinya disalin lengkap di **Lampiran A**, jadi builder tidak perlu membuka halaman itu. Tanggal sesi (10–30 Nov 2026) masih di depan dan dipakai apa adanya. Data yang tidak konsisten di sumber (21+ sesi vs 11 sesi, 3 bulan vs 30 hari) diisi sesuai daftar sesi yang benar-benar ada dan ditandai `// TODO: konfirmasi` di file data.

**Isi DM** menyalin struktur dan isi BD, teks disesuaikan ke digital marketing, seluruhnya ditandai sebagai contoh.

### 6.5 About Us (`/tentang`)
Hero "Tempat memulai langkah profesionalmu." + foto grup · cerita & misi · nilai (ilmu, integritas, kualitas kerja) · Levela × Talentiv Jobs (kemitraan dan akses ke mitra hiring; tanpa menyebut "bagian dari" atau "anak perusahaan") · mentor/tim · angka · kontak. Isi teks contoh; pemilik mengganti.

## 7. Desain visual

**Dasar:** identitas situs statis sekarang.
- Latar: `linear-gradient(110deg, #bf3508 0%, #e95308 43%, #f58b1e 100%)`.
- Warna: cream `#fff7e9`, ink `#311a10`, orange `#ee5b0b`, garis `rgba(255,246,227,.32)`.
- Font: Manrope (judul, 600–800), DM Sans (isi, 400–700).
- Motif: panah **↗**, dipakai hemat (logo, tombol utama).

**Glass:** latar `rgba(255,247,233,.12–.14)`, `backdrop-filter: blur(18px)`, border `1px rgba(255,247,233,.28)`, radius 18–22px, bayangan lembut + highlight tipis di atas. Fallback tanpa `backdrop-filter`: latar lebih pekat supaya kontras tetap aman.

**Aturan clean:**
- Tidak ada emoji. Ikon hanya bila menambah makna (logo tools, chevron accordion), bentuk garis tipis yang konsisten.
- Hierarki dari tipografi dan ruang kosong, bukan dekorasi.
- Satu tombol utama per kartu atau bagian.

**Nyaman & responsif:**
- Breakpoint: HP < 640px, tablet 640–1023px, desktop ≥ 1024px. Tanpa scroll horizontal halaman.
- Target sentuh minimal 44px; teks isi 15–16px di HP.
- Kontras teks minimal WCAG AA, termasuk di atas kaca dan foto.
- Fokus keyboard terlihat; `prefers-reduced-motion` dihormati; gambar punya `alt`.
- WhatsApp selalu terjangkau dalam satu tap (di HP: tombol melayang).

## 8. Brand guidelines & token (dokumen terpisah)

`docs/brand/levela-brand-guidelines.md` (bisa diekspor ke PDF untuk dibagikan). Isi:
- Tentang brand: posisi, audiens, kepribadian, kemitraan dengan Talentiv Jobs.
- Logo: bentuk, ruang aman, ukuran minimum, pemakaian di latar terang/gelap, larangan.
- Warna: palet primer/sekunder dengan HEX/RGB dan pasangan kontras yang lolos AA.
- Tipografi: Manrope + DM Sans, skala ukuran, bobot, tinggi baris.
- Token: tabel token (warna, font, ukuran, spacing, radius, blur, bayangan) dengan nama yang sama persis dengan `app/globals.css`.
- Komponen glass: anatomi, varian, do & don't.
- Tombol, badge status, kartu.
- Fotografi: arahan foto karakter (lihat bagian 9).
- Tone of voice: bahasa Indonesia santai-profesional, menyapa "kamu", contoh do & don't.

## 9. Aset karakter (prompt foto realistis)

`docs/brand/character-prompts.md`. Satu **gaya dasar** yang konsisten dengan `assets/hero.png` (profesional muda Asia Tenggara, latar oranye polos, cahaya studio lembut, pakaian smart-casual krem/gelap, ekspresi percaya diri, foto editorial realistis), lalu prompt per karakter:
- hero Homepage (sudah ada: `hero.png`, cukup dikompres),
- hero LP BD, hero LP DM,
- gambar kartu program BD, DM, Social Media,
- 3–4 avatar close-up untuk kartu Talent Verified,
- 1 foto grup untuk About Us.

Setiap prompt mencantumkan rasio dan ukuran target serta catatan latar (polos/transparan) supaya cocok dipasang di atas kaca.

## 10. Dibiarkan untuk builder

- Nama kelas dan pemecahan komponen.
- Animasi halus (fade/slide saat scroll) selama hemat dan menghormati reduced motion.
- Detail tata letak di dalam setiap bagian, selama mengikuti urutan dan aturan di atas.
- Teks contoh untuk About Us, DM, dan profil talent.

## 11. Placeholder yang diisi pemilik nanti

Nomor WhatsApp Levela dan teks pesan per program · ID produk / URL checkout CO Edu untuk setiap paket Levela · harga dan tanggal batch · data mentor · logo mitra · profil talent asli · foto karakter hasil prompt · domain final.

## 12. Verifikasi

- `next build` sukses dan menghasilkan `out/` statis.
- Cek tampilan di 375px, 768px, 1280px: tanpa scroll horizontal, badge terbaca, CTA terlihat.
- Semua link "Daftar" mengarah ke `checkoutUrl` paket yang benar; semua link WhatsApp memakai pesan program yang benar.
- Tidak ada kata "HR", "BNSP HR", "Mekari", "HRIS" di LP BD/DM.
- Pencarian: kata kunci, filter kategori, filter status, kombinasi, dan hasil kosong bekerja.
- Profil `sample: true` tidak menampilkan badge "Verified by Talentiv".

## Lampiran A — Isi awal LP Business Development (dari talentiv.id/bizdev, Okt 2026)

- **Judul:** Sales & Business Development Fast Track → di Levela: "Business Development Fast Track". Subjudul: "30 Hari Intensif Belajar Best Practice & Strategi Business Development".
- **4 skill:** Business Acumen & Market Analysis · CRM Management Blueprint · Negotiation & Sales · Performance Marketing.
- **Overview:** Relevan untuk staf entry hingga mid level · Materi untuk tantangan kerja sehari-hari · Praktik melalui real business project · Real project & mentoring · Sertifikat & profil di Talentiv Jobs.
- **Angka:** live class (lihat TODO) · 30 hari intensif · 2 fase · Entry level · Online · maks. 20 peserta.
- **Jalur karier:** Business Development Executive · Sales Executive · Account Executive · Partnership Executive · Marketing Executive · Digital Marketing Specialist.
- **Untuk siapa (sumber):** Staf Sales & BD di awal karier · Sales & Account Executive · Praktisi yang ingin upgrade skill · Career switcher & pemula. Di Levela dirumuskan ulang ke: fresh graduate · junior/entry-level · karier stuck.
- **Tools:** Meta Ads · Google Ads · Facebook · Instagram · ChatGPT · Claude.
- **Fase 1 — Sales & Business Development Strategy** (live, pkl 19.30 WIB):
  S1 10 Nov Onboarding Program · S2 11 Nov Business Acumen & Revenue Diagnostic · S3 12 Nov Market Research & Competitor Analysis · S4 16 Nov Business Model Canvas · S5 17 Nov Lead Generation & Pipeline Management · S6 18 Nov Pitching, Pitch Deck & Business Presentation · S7 19 Nov Negotiation Strategy · S8 23 Nov Closing Strategy · S9 25 Nov Digital Marketing: Organic Source & Copywriting · S10 26 Nov Digital Marketing: Meta & Google Ads · S11 30 Nov Mentoring Project Portfolio & Post Test.
- **Fase 2 — Mentoring Project & 1on1:** Project Brief · Market Research & Strategy · Build Strong Company Profile · Running Ads & Online Canvassing · Project Presentation & Evaluation.
- **Real Business Project:** Market Opportunity Research · Business Model Canvas · Lead Generation & Sales Pipeline · Business Pitch Deck & Presentation · Negotiation & Closing Simulation.
- **Mentor (contoh, konfirmasi dulu apakah mentor yang sama mengajar di Levela):** Tri Ali Herviansyah (B2B Growth & Performance Marketing) · Ardan Aziz Rahman (Business Strategy & Business Development) · M Khairul Hamid (Market Research & Data Analytics) · Prita Permatadinata (Strategic Partnership & Business Performance).
- **Kenapa program ini:** 30 hari intensif · Live class interaktif & Q&A · Modul & rekaman hingga 1 tahun · Sertifikat sesuai ketentuan program · 4 mentor praktisi aktif · Maks. 20 peserta.
- **Paket:**
  - Fast Track — normal Rp3.500.000, early bird Rp2.600.000 (hingga 2 Nov 2026). 30 hari intensif · 1 sesi mentoring project · rekaman 1 tahun · sertifikat BD Professional · sertifikasi & portofolio di Talentiv Jobs · 1on1 consultation & mentoring project.
  - Fast Track Plus — normal Rp5.500.000, early bird Rp4.600.000 (hingga 2 Nov 2026). Sama, dengan 2 sesi mentoring project.
- **Sertifikat:** "Business Development Professional" (nama final dikonfirmasi pemilik).
- **FAQ BD (tulis ulang, tanpa HR):** cocok tanpa pengalaman BD? · bisa sambil kerja/kuliah (kelas malam + rekaman) · syarat sertifikat (kehadiran & tugas) · beda Fast Track vs Plus · cara daftar & bayar (CO Edu) · kuota batch terbatas.
