# Levela Academy — Brand Guidelines

Versi 1.0 · Oktober 2026

Panduan ini untuk siapa pun yang membuat materi Levela: website, media sosial, presentasi, iklan, atau materi cetak. Nama token di dokumen ini sama persis dengan yang dipakai di `app/globals.css`.

---

## 1. Tentang brand

**Levela Academy** adalah sekolah bisnis dan kreatif untuk membangun karier profesional.

- **Untuk siapa:** fresh graduate, profesional junior/entry level (terutama business development), dan profesional yang kariernya terasa stuck.
- **Janji kami:** belajar terarah, praktik nyata, portofolio yang bisa ditunjukkan.
- **Kemitraan:** Levela bermitra dengan **Talentiv Jobs**. Alumni bisa menampilkan profil, sertifikat, dan portofolio di sana untuk dilihat ratusan mitra hiring. Sebut Talentiv Jobs sebagai *mitra*. Jangan menulis "bagian dari Talentiv" atau "anak perusahaan".
- **Kepribadian:** hangat, percaya diri, jujur, membumi. Seperti kakak tingkat yang sudah lebih dulu bekerja dan mau berbagi.

## 2. Logo

Logo Levela adalah wordmark **↗levela** dengan teks kecil **ACADEMY** di bawahnya.

- **Bentuk:** panah `↗` + "levela" dalam Manrope ExtraBold (800), tracking −2px. "ACADEMY" dalam huruf kapital 8px dengan tracking 3px, rata di bawah huruf "l" pertama.
- **Ruang aman:** di setiap sisi, minimal setinggi huruf "l".
- **Ukuran minimum:** tinggi wordmark 24px di layar, 8mm di cetak. Di bawah ukuran itu, hilangkan "ACADEMY".
- **Warna:** cream `#fff7e9` di atas gradien atau gelap; ink `#311a10` di atas latar terang.

**Jangan:**
- memutar, meregangkan, atau memberi outline pada logo,
- mengganti panah dengan ikon lain,
- meletakkan logo di atas foto ramai tanpa panel kaca di belakangnya,
- memasang logo berdampingan dengan logo lain sebagai satu kesatuan.

## 3. Warna

### Palet

| Token | HEX | Peran |
|---|---|---|
| `--color-bg-from` | `#bf3508` | Gradien latar, ujung kiri |
| `--color-bg-via` | `#e95308` | Gradien latar, tengah |
| `--color-bg-to` | `#f58b1e` | Gradien latar, ujung kanan |
| `--color-sun` | `#ffd66d` | Titik kuning di akhir judul, label early bird |
| `--color-label` | `#fff1d7` | Label krem miring yang melayang |
| `--color-orange` | `#ee5b0b` | Aksen; jangan dipakai sebagai latar teks kecil |
| `--color-cream` | `#fff7e9` | Teks utama di atas gradien dan kaca |
| `--color-ink` | `#311a10` | Teks di atas putih/cream; tombol; badge "Segera Hadir" |
| `--color-line` | `rgba(255,246,227,.32)` | Garis pemisah dan border tipis |
| `--color-ok` | `#1f9d55` | Titik status "Tersedia" |
| `--color-soon-text` | `#ffd9b3` | Teks badge "Segera Hadir" |
| `--color-soon-dot` | `#ffb066` | Titik status "Segera Hadir" |

**Gradien latar (konsep cerah):** `linear-gradient(110deg, #bf3508 0%, #e95308 43%, #f58b1e 100%)` ditambah cahaya hangat lembut di kanan atas.

### Pasangan kontras (WCAG AA = 4.5:1 teks biasa, 3:1 teks besar)

| Teks | Latar | Rasio | Status |
|---|---|---|---|
| cream `#fff7e9` | `#bf3508` | 5.29 | Lolos AA |
| cream `#fff7e9` | `#e95308` | 3.46 | Lolos AA teks besar saja |
| cream `#fff7e9` | `#f58b1e` | 2.30 | Di bawah AA — hanya untuk dekorasi dan judul sangat besar |
| ink `#311a10` | putih / cream | 16.33 / 15.35 | Lolos AAA |
| ink `#311a10` | label `#fff1d7` | 14+ | Lolos AAA |
| `#ffd9b3` | ink `#311a10` | 12.31 | Lolos AAA |

**Aturan:**
- Konsep cerah adalah pilihan brand. Area oranye terang punya kontras rendah, jadi letakkan teks kecil yang penting (harga, jadwal, syarat) di panel kaca atau di sisi kiri gradien yang lebih gelap.
- Teks selalu **penuh**, tanpa transparansi. Hierarki dibangun lewat ukuran dan ruang, bukan teks pudar. Test `app/contrast.test.ts` menolak kelas `text-cream/NN` dan `opacity-NN`.
- Teks di tombol dan label krem selalu ink, tanpa bayangan teks.

## 4. Tipografi

| Peran | Font | Bobot | Ukuran (HP → desktop) | Tinggi baris |
|---|---|---|---|---|
| Display (H1) | Manrope | 500, tracking −6% | 50px → 86px | 1.02 |
| H2 | Manrope | 500, tracking −4.5% | 34px → 54px | 1.1 |
| H3 | Manrope | 500, tracking −2% | 20px → 26px | 1.15 |
| Body | DM Sans | 400 | 16px → 16–18px | 1.55 |
| Small / meta | DM Sans | 400–500 | 14px | 1.5 |
| Eyebrow | DM Sans | 700, kapital, tracking 0.2em | 12px | 1.4 |

- Token: `--font-heading` (Manrope) dan `--font-body` (DM Sans).
- Judul memakai bobot 500 dengan tracking rapat. Inilah yang memberi kesan editorial dan profesional. Hindari judul ExtraBold.
- Judul utama boleh diakhiri titik kuning `--color-sun`.
- Teks body di HP minimal 15–16px.
- Pola eyebrow: `01 / LABEL`, contohnya `02 / THE LEVELA WAY`.

## 5. Spacing, radius, bayangan

- **Grid:** konten maksimal 1152px (`max-w-6xl`). Gutter samping 16px di HP dan 32px di tablet/desktop.
- **Jarak antarbagian:** 56px di HP, 80px di desktop.
- **Radius:** kaca `--radius-glass: 22px`. Tombol 12px. Chip 8px. Pill dan badge penuh (999px). Gambar di dalam kaca 16px.
- **Target sentuh:** minimal 44px untuk semua tombol, pill, dan link menu.

## 6. Komponen kaca (glass)

Kaca adalah ciri visual utama Levela: panel buram yang membuat konten terbaca di atas gradien.

**Anatomi (`.glass`):**
- latar gradien krem tipis `rgba(255,247,233,.16) → rgba(255,247,233,var(--glass-tint))`, dengan `--glass-tint: 0.1`,
- `backdrop-filter: blur(18px)`,
- border `1px solid rgba(255,247,233,.34)`,
- radius `--radius-glass: 18px`,
- bayangan oranye lembut `0 18px 40px rgba(139,40,0,.14)` + highlight `inset 0 1px 0 rgba(255,255,255,.35)`,
- efek `.lift`: naik 4px saat hover.

**Bahasa visual editorial (dari situs awal Levela):**
- garis tipis `--color-line` di atas setiap bagian, dengan eyebrow `01 / LABEL` di kiri dan catatan pendek di kanan,
- cincin orbit tipis (`.ring-line`), foto berbentuk lengkung, label krem yang dimiringkan −5°,
- komposisi asimetris: kartu di tengah diturunkan sedikit, kartu talent dimiringkan ±0.6°,
- marquee nama mitra, dan animasi muncul halus saat scroll (dimatikan untuk *reduced motion*).

**Lakukan:** pakai kaca untuk kartu, bar pencarian, harga, dan profil talent.
**Jangan:** membungkus seluruh bagian dengan kotak kaca, atau menumpuk kaca lebih dari satu lapis. Biarkan garis dan ruang kosong yang membagi halaman.

## 7. Tombol, badge, kartu

**Tombol utama:** latar putih, teks ink, bold 14px, tinggi minimal 44px, diikuti `↗`. Satu tombol utama per kartu atau bagian.
**Tombol sekunder (ghost):** border cream 50%, teks cream.
**Konsultasi Program:** label selalu "Konsultasi Program ↗" dan selalu membuka WhatsApp. Di HP ada versi melayang di bawah layar.

**Badge status:** selalu solid, selalu ada teks, selalu ada titik.
- **Tersedia:** latar putih, teks ink, titik `#1f9d55`.
- **Segera Hadir:** latar ink, teks `#ffd9b3`, titik `#ffb066`.

**Kartu program:** foto di atas (badge di pojok kiri atas), lalu eyebrow kategori, judul, meta, batch, dan tombol.
**Kartu talent:** gaya CV (foto, nama, role, gaji mulai dari, education, experience, skill, tools). Badge **Verified by Talentiv** hanya untuk profil asli. Profil contoh memakai "Profil lulusan" + "Contoh profil".

## 8. Ikon & dekorasi

- Tidak ada emoji.
- Motif satu-satunya adalah panah `↗`, dipakai di logo dan tombol utama.
- Ikon hanya bila menambah makna (logo tools, tanda + pada accordion), garis tipis dan konsisten.
- Hierarki dibangun dari tipografi, ruang kosong, dan kaca, bukan dari dekorasi.

## 9. Fotografi

Foto karakter realistis: profesional muda Indonesia, latar oranye polos, cahaya studio lembut, pakaian smart-casual krem/beige/hitam/coklat tua, ekspresi percaya diri dan ramah. Prompt lengkap dan daftar file ada di `docs/brand/character-prompts.md`.

- Avatar talent: laki-laki, tanpa hijab.
- Wajah tidak boleh tertutup badge atau judul.
- Ekspor ke WebP di bawah 250 KB (`node scripts/to-webp.mjs`).

## 10. Tone of voice

Bahasa Indonesia santai-profesional. Sapa pembaca dengan **"kamu"**.

| Lakukan | Hindari |
|---|---|
| "Bangun karier profesionalmu." | "Raih kesuksesan karier impian Anda sekarang juga!!!" |
| "Penerimaan kerja mengikuti proses seleksi masing-masing perusahaan." | "Dijamin langsung kerja!" |
| "Ceritakan tantanganmu." | "Hubungi CS kami untuk informasi lebih lanjut." |
| Kalimat pendek, satu ide per kalimat. | Paragraf panjang penuh jargon. |

Jujur soal hasil. Jangan menjanjikan pekerjaan, gaji, atau sertifikasi yang tidak ada di paket.
