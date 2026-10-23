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
| `--color-bg-from` | `#b13507` | Gradien latar, ujung kiri |
| `--color-bg-via` | `#c2410c` | Gradien latar, tengah |
| `--color-bg-to` | `#c6470b` | Gradien latar, ujung kanan |
| `--color-orange` | `#ee5b0b` | Aksen; jangan dipakai sebagai latar teks kecil |
| `--color-cream` | `#fff7e9` | Teks utama di atas gradien dan kaca |
| `--color-ink` | `#311a10` | Teks di atas putih/cream; tombol; badge "Segera Hadir" |
| `--color-line` | `rgba(255,246,227,.32)` | Garis pemisah dan border tipis |
| `--color-ok` | `#1f9d55` | Titik status "Tersedia" |
| `--color-soon-text` | `#ffd9b3` | Teks badge "Segera Hadir" |
| `--color-soon-dot` | `#ffb066` | Titik status "Segera Hadir" |

**Gradien latar:** `linear-gradient(110deg, #b13507 0%, #c2410c 45%, #c6470b 100%)`.

> Catatan: gradien situs statis lama (`#bf3508 → #e95308 → #f58b1e`) diperdalam. Teks cream di atas `#f58b1e` hanya mencapai kontras 2.30:1, jauh di bawah standar keterbacaan. Gradien baru tetap oranye hangat, dan semua teks lolos WCAG AA.

### Pasangan kontras (WCAG AA = 4.5:1 untuk teks biasa)

| Teks | Latar | Rasio | Status |
|---|---|---|---|
| cream `#fff7e9` | `#b13507` | 5.84 | Lolos AA |
| cream `#fff7e9` | `#c2410c` | 4.87 | Lolos AA |
| cream `#fff7e9` | `#c6470b` | 4.58 | Lolos AA |
| cream `#fff7e9` | kaca di atas `#c6470b` | 6.66 | Lolos AA |
| ink `#311a10` | putih `#ffffff` | 16.33 | Lolos AAA |
| ink `#311a10` | cream `#fff7e9` | 15.35 | Lolos AAA |
| `#ffd9b3` | ink `#311a10` | 12.31 | Lolos AAA |

**Aturan:**
- Teks selalu **penuh**, tanpa transparansi. Bangun hierarki lewat ukuran dan ketebalan, bukan dengan membuat teks pudar. Test `app/contrast.test.ts` menolak kelas `text-cream/NN` dan `opacity-NN`.
- Jangan menaruh teks cream di atas `--color-orange` atau oranye yang lebih terang.

## 4. Tipografi

| Peran | Font | Bobot | Ukuran (HP → desktop) | Tinggi baris |
|---|---|---|---|---|
| Display (H1) | Manrope | 800 | 40–48px → 64–72px | 1.0 |
| H2 | Manrope | 800 | 30px → 48px | 1.15 |
| H3 | Manrope | 800 | 18–20px → 20–24px | 1.25 |
| Body | DM Sans | 400 | 16px → 16–18px | 1.55 |
| Small / meta | DM Sans | 400–500 | 14px | 1.5 |
| Eyebrow | DM Sans | 700, kapital, tracking 0.2em | 12px | 1.4 |

- Token: `--font-heading` (Manrope) dan `--font-body` (DM Sans).
- Judul memakai tracking negatif (−1 sampai −4%). Body tidak.
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
- latar `rgb(49 26 16 / var(--glass-tint))` dengan `--glass-tint: 0.3` (tint gelap hangat, bukan putih),
- `backdrop-filter: blur(18px)`,
- border `1px solid rgba(255,247,233,.28)`,
- radius 22px,
- bayangan `0 10px 36px rgba(60,20,0,.16)` + highlight `inset 0 1px 0 rgba(255,255,255,.25)`,
- fallback tanpa blur: latar `rgba(90,35,10,.55)`.

**Lakukan:** pakai kaca untuk kartu, bar pencarian, footer, panel CTA, dan bingkai foto.
**Jangan:** menumpuk kaca di atas kaca lebih dari satu lapis, memakai tint putih (menurunkan kontras), atau memakai blur di bawah 12px.

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
