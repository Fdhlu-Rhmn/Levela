# Audit Website Levela — 2026-10-24

Kondisi: branch `feat/nextjs-site`, build statis `out/`. Audit read-only; perbaikan menunggu persetujuan pemilik.
Status di tabel sudah diperbarui sampai commit `2f21e95`.

## Ringkasan

Situs statis Next.js 16 (App Router, `output: 'export'`), React 19, Tailwind 4, Vitest. Tanpa backend/form/auth.
Fondasi sehat: 0 kerentanan `npm audit`, 0 secret, konten SSR, 1 H1/halaman, semua `<img>` ber-alt, 0 link internal rusak,
59 test lolos, `tsc` bersih, tanpa overflow di 320/375/768/1280px.
**Belum siap live**: F01 (CTA rusak), placeholder/data contoh tampil, SEO dasar belum ada.

## Temuan

| ID | Prioritas | Status | Ringkas | Lokasi | Rekomendasi |
|---|---|---|---|---|---|
| F01 | Critical | **Terbukti, belum diperbaiki** | Tombol Konsultasi di Homepage (6 link) & Tentang (4 link) mengirim teks error ke WA: `consultText` diekspor dari modul `'use client'` lalu diimpor server component | `components/Header.tsx:15`, `app/page.tsx`, `app/tentang/page.tsx` | Pindah konstanta ke `content/site.ts`; cek pasca-build: `grep 'wa.me/?text=function' out` harus 0 |
| F02 | High | **Selesai 2026-10-24** (push) | Repo hanya lokal | — | — |
| F03 | High | Terbukti | Konten LP BD (overview, Fase 2, project) sama persis dengan talentiv.id/bizdev → duplicate content | `content/programs.ts` | Tulis ulang, atau canonical lintas domain |
| F04 | High | Sebagian | Placeholder tampil: "Mitra Hiring A–D", "[Nama Brand]", gambar placeholder, WA number kosong. (Teks TODO di kartu mentor **sudah dihapus**, dijaga test) | `content/partners.ts`, `content/talents.ts`, `content/site.ts`, `public/images/` | Isi data asli; cek build produksi gagal bila ada placeholder |
| F05 | High | Terbukti | Cache 1 tahun untuk `/images/*` yang namanya tetap → foto pengganti tidak terlihat | `public/.htaccess` | Cache panjang hanya `/_next/static/`; `/images/` pendek |
| F06 | Medium | Terbukti | Tidak ada `robots.txt` & `sitemap.xml` | — | `app/robots.ts`, `app/sitemap.ts` |
| F07 | Medium | Terbukti | Tidak ada canonical, `metadataBase`, Open Graph, Twitter card, favicon | `app/layout.tsx` | Butuh domain final |
| F08 | Medium | Terbukti | Meta description sama di `/`, `/program/`, `/tentang/` | metadata halaman | Description unik |
| F09 | Medium | Terbukti (repo) | Tanpa CSP, X-Content-Type-Options, Referrer-Policy, frame-ancestors, HSTS, redirect HTTPS, kompresi | `public/.htaccess` | Tambah header; cek bawaan Hostinger |
| F10 | Medium | Terbukti | Kontras cream di `#f58b1e` 2.30:1, `#e95308` 3.46:1 (< AA) — konsep cerah pilihan pemilik | `app/globals.css` | Teks kecil penting tetap di panel kaca |
| F11 | Medium | Potensi | ±110 elemen `backdrop-filter` per LP, pill marquee ber-blur beranimasi, `background-attachment: fixed` | `globals.css`, `PartnerMarquee.tsx` | Hapus blur di marquee, kurangi di HP, ukur di perangkat |
| F12 | Medium | Terbukti | Tanpa lint/CI/test hasil build (F01 lolos dari 55 test) | `package.json` | Perluas `scripts/check-images.mjs` jadi cek pasca-build |
| F13 | Medium | Perlu verifikasi | Klaim: "Ratusan mitra hiring", mentor BD (dari Talentiv), "Maks. 20 peserta", nama/penerbit sertifikat, angka gaji di kartu contoh; mentor DM baru nama panggilan | `content/programs.ts` | Konfirmasi atau hapus |
| F14 | Medium | Terbukti | Daftar → WA, karena `checkoutUrl` CO Edu kosong | `content/programs.ts` | Isi ID produk, uji checkout |
| F15 | Low | Sebagian | Heading lompat h1→h3 di `/program` (ProgramCard h3) | `components/ProgramCard.tsx` | Samakan level |
| F16 | Low | Potensi | `<img>` tanpa width/height (ruang sudah dipesan CSS) | semua gambar | Tambah di hero |
| F17 | Info | — | JS ±183 KB gzip, 7–8 script/halaman | `out/_next` | Pantau |
| F18 | Low | Terbukti | Tab kurikulum: panah ganti tab tapi fokus tidak pindah | `components/lp/Curriculum.tsx` | Pindahkan fokus |
| F19 | Low | Potensi | Carousel HP tanpa indikator (kecuali harga) | `.mobile-carousel` | Indikator geser |
| F20 | Low | Terbukti | `components/Glass.tsx` tidak dipakai | — | Hapus |
| F21 | Info | — | `rel="noopener"` tanpa `noreferrer` | link eksternal | Putuskan sesuai tracking |
| F22 | Info | — | `next` 16.4.2 → 16.4.3 tersedia | `package.json` | Update patch |
| F23 | Low | Terbukti | Tanpa JSON-LD (Organization, Course, FAQPage) | — | Tambah minimal |
| F24 | Info | — | Tanpa analitik | — | Keputusan pemilik |
| F25 | Low | Potensi | `ErrorDocument /404.html` abaikan basePath | `public/.htaccess:1` | Sesuaikan bila subfolder |

## Rencana

- **P0**: ~~push (F02)~~ → perbaiki **F01** + cek pasca-build (F12).
- **P1** (sebelum live): data asli (F04, F13, F14) · keputusan duplicate content (F03) · SEO dasar (F06–F08, butuh domain) · `.htaccess` (F05, F09).
- **P2**: performa (F11, lalu Lighthouse di perangkat nyata) · a11y (F10, F15, F18, F19) · hapus `Glass.tsx` (F20) · update `next` (F22).
- **P3**: JSON-LD (F23), analitik (F24), `noreferrer` (F21).

## Checklist sebelum redesign / rilis

- [ ] F01 beres, cek pasca-build aktif (WA, link internal, gambar, placeholder)
- [ ] URL & anchor tetap: `/`, `/program/`, `/program/<slug>/`, `/tentang/`; `#program #belajar #karier #talent #kurikulum #paket`
- [ ] Title/description per halaman, 1 H1, heading berurutan, alt semua gambar
- [ ] Daftar → CO Edu benar; Konsultasi → WA dengan teks benar
- [ ] Tanpa overflow 320/375/768/1280; bar bawah HP tidak menutupi konten
- [ ] `npm test` & `npm run build` lolos; data tetap di `content/`

## Keterbatasan

Lighthouse/CWV tidak diukur (tool tidak terpasang). Server Hostinger & domain belum ada. Tampilan hanya via Chrome headless
(tanpa perangkat nyata/Safari/screen reader). Link eksternal (wa.me, CO Edu) tidak dijalankan. Kontras dihitung dari token, bukan piksel.

## Konteks konten (untuk sesi berikutnya)

- BD: 9 sesi dalam 3 modul (11–25 Nov 2026, sesi 9 tanggal belum ada), harga Rp349K (coret 499K) & Rp1,9 jt (coret 2,9 jt).
- DM: 8 sesi topik bisnis & sales (11–25 Nov), mentor Aziz, Hamid, Herdi, Usamah, Sahrul; Fase 2 & project = BD.
- Social Media: teaser "Segera Hadir" di `/program/social-media/` (isi contoh).
- Daftar aset yang dibutuhkan: `docs/brand/asset-needs.md`.

## Update akhir sesi 2026-10-24

- Foto asli terpasang: hero, hero LP BD & DM, kartu BD/DM/Social Media, About group (WebP q88).
- Kurikulum: BD 9 sesi, DM 8 sesi (tanggal + mentor per sesi), tanpa label modul; tab Fase 1/2.
- Halaman Tentang didesain ulang: before/after panel, alur Talentiv Jobs, nilai editorial, mentor carousel (semua mentor otomatis via `allMentors()`), copy lebih profesional.
- Riwayat git ditulis ulang tanpa `Co-Authored-By: Claude`; jangan tambahkan trailer itu lagi.
- Brand guidelines (Design System artifact): https://claude.ai/artifact/R46WD5irpKK6yxxsDNMCFT
- **Masih terbuka:** P0 F01 (link WhatsApp rusak di Homepage & Tentang) + cek pasca-build; data & foto di `docs/brand/asset-needs.md`.
