# Aset & Data yang Dibutuhkan

Status per 2026-10-24. File placeholder = kotak gradien oranye bertuliskan nama file.
Ganti foto: `node scripts/to-webp.mjs <file-asli> public/images/<nama-file> <lebar>` lalu `npm run build`.
Jangan pakai foto AI/stok untuk bukti (mentor, sertifikat, dokumentasi kelas).

## Foto — sudah terpasang

- [x] `hero.webp` — Hero Homepage
- [x] `lp-business-development.webp` — Hero LP BD
- [x] `lp-digital-marketing.webp` — Hero LP DM
- [x] `program-business-development.webp` — Kartu BD
- [x] `program-digital-marketing.webp` — Kartu DM
- [x] `program-social-media.webp` — Kartu Social Media & teaser
- [x] `about-group.webp` — Hero About Us

## Foto — masih placeholder

**Wajib asli (bukti kredibilitas):**

| File | Dipakai di | Ukuran |
|---|---|---|
| `mentor-tri-ali-herviansyah.webp` | LP BD, Mentor; About Us | 800×1000 (4:5) |
| `mentor-ardan-aziz-rahman.webp` | LP BD, Mentor; About Us | 800×1000 |
| `mentor-m-khairul-hamid.webp` | LP BD, Mentor; About Us | 800×1000 |
| `mentor-prita-permatadinata.webp` | LP BD, Mentor; About Us | 800×1000 |
| `mentor-aziz.webp` | LP DM, Mentor | 800×1000 |
| `mentor-hamid.webp` | LP DM, Mentor | 800×1000 |
| `mentor-herdi.webp` | LP DM, Mentor | 800×1000 |
| `mentor-usamah.webp` | LP DM, Mentor | 800×1000 |
| `mentor-sahrul.webp` | LP DM, Mentor | 800×1000 |
| `certificate-business-development.webp` | LP BD, Sertifikasi | 1414×1000 (A4 landscape) |
| `certificate-digital-marketing.webp` | LP DM, Sertifikasi | 1414×1000 |
| `class-live.webp` | Kartu "Materi untuk Tantangan Kerja" | 1200×750 (16:10) |
| `class-presentation.webp` | Kartu "Praktik melalui Real Project" | 1200×750 |
| `class-mentoring.webp` | Kartu "Real Project & Mentoring" | 1200×750 |
| `overview-profile.webp` | Kartu "Sertifikat & Profil di Talentiv Jobs" (screenshot profil alumni, dengan izin) | 1200×750 |

**Boleh foto karakter (lihat `character-prompts.md`):**

| File | Dipakai di | Ukuran |
|---|---|---|
| `overview-level.webp` | Kartu "Relevan untuk Staf Entry hingga Mid Level" | 1200×750 |
| `talent-bd-1.webp`, `talent-bd-2.webp`, `talent-dm-1.webp`, `talent-dm-2.webp` | Avatar kartu talent (laki-laki, tanpa hijab) | 600×600 (1:1) |

## Data yang masih dibutuhkan

**Wajib sebelum live**
- [ ] Nomor WhatsApp Levela (format `62…`) — `content/site.ts`. Sekarang semua tombol Konsultasi membuka "pilih kontak".
- [ ] Link checkout CO Edu (ID produk) untuk 4 paket: BD Fast Track, BD Fast Track Plus, DM Fast Track, DM Fast Track Plus — `content/programs.ts`. Sekarang tombol Daftar ke WhatsApp.
- [ ] Nama asli mitra hiring + logo (sekarang "Mitra Hiring A–D") — `content/partners.ts`.
- [ ] Email, Instagram, LinkedIn, alamat — `content/site.ts` (About Us & footer).
- [ ] Domain final — untuk canonical, sitemap, Open Graph.

**Konten yang perlu dikonfirmasi**
- [ ] Tanggal sesi 9 BD (Mentoring Project Portfolio & Post-Test).
- [ ] Mentor BD: apakah Tri Ali, Ardan Aziz Rahman, M Khairul Hamid, Prita Permatadinata benar mengajar di Levela; riwayat kerja Tri Ali.
- [ ] Mentor DM: nama lengkap + pengalaman Aziz, Hamid, Herdi, Usamah, Sahrul (Aziz/Hamid sama dengan mentor BD?).
- [ ] Nama & penerbit resmi sertifikat BD dan DM.
- [ ] Klaim: "Ratusan mitra hiring", "Maks. 20 peserta", "30 hari intensif", rekaman 1 tahun.
- [ ] Profil talent asli (4 kartu contoh: nama, role, gaji, project, skill, tools) lalu set `sample: false`.
- [ ] Konten Social Media Fast Track (teaser masih contoh, termasuk keuntungan daftar tunggu).
- [ ] Testimoni alumni (opsional, hanya jika asli).
