# Prompt Foto Karakter Levela

Prompt untuk membuat foto karakter realistis di Gemini, ChatGPT (gambar), atau Midjourney. Semua foto harus terlihat berasal dari **satu sesi pemotretan** yang sama dengan `hero.png` sekarang.

Prompt ditulis dalam bahasa Inggris karena model gambar lebih akurat dengan bahasa Inggris. Catatan untukmu ditulis dalam bahasa Indonesia.

## Cara pakai

1. Tempel **Gaya Dasar** lebih dulu, lalu prompt karakternya, dalam satu pesan.
2. Kalau tool-nya mendukung gambar referensi, unggah `hero.png` sebagai referensi gaya.
3. Tempel **Negative prompt** di kolom negative prompt. Kalau tool-nya tidak punya kolom itu, tambahkan di akhir sebagai "Avoid: ...".
4. Simpan hasil dengan **nama file persis** seperti tertulis, lalu konversi ke WebP:
   ```
   node scripts/to-webp.mjs input.png public/images/<nama-file>.webp <lebar>
   ```
   File itu otomatis menggantikan placeholder di website.
5. Supaya wajah konsisten di beberapa foto (misalnya karakter yang sama di hero dan kartu program), pakai fitur "character reference" atau seed yang sama.

## Gaya Dasar (tempel di setiap prompt)

```
Photorealistic editorial studio portrait of young Southeast Asian (Indonesian) professionals in their early-to-mid twenties. Plain seamless warm orange backdrop (#e95308 to #f58b1e), soft diffused key light from the front-left, gentle rim light, subtle natural shadows. Smart-casual outfits in cream, beige, black, or dark brown; clean, modern, well-fitted. Natural skin texture, confident and approachable expression, relaxed posture. Shot on a full-frame camera, 85mm lens, f/2.8, sharp focus on the eyes, high dynamic range, minimal color grading with warm tones. Clean composition with negative space for text. No text, no logos.
```

## Negative prompt

```
cartoon, illustration, 3D render, anime, plastic skin, over-smoothed face, extra fingers, distorted hands, deformed eyes, cluttered background, busy office, text, watermark, logo, brand names, harsh flash, oversaturated, neon, heavy makeup, sunglasses
```

## Daftar foto

| # | Nama file | Dipakai di | Rasio | Ukuran target |
|---|---|---|---|---|
| 1 | `hero.webp` | Hero Homepage | 4:5 | 1122×1402 (sudah ada, cukup dikompres) |
| 2 | `lp-business-development.webp` | Hero LP Business Development | 4:5 | 1000×1250 |
| 3 | `lp-digital-marketing.webp` | Hero LP Digital Marketing | 4:5 | 1000×1250 |
| 4 | `program-business-development.webp` | Kartu program BD (pencarian & Homepage) | 16:10 | 1200×750 |
| 5 | `program-digital-marketing.webp` | Kartu program DM | 16:10 | 1200×750 |
| 6 | `program-social-media.webp` | Kartu program Social Media | 16:10 | 1200×750 |
| 7 | `talent-bd-1.webp` | Avatar kartu talent | 1:1 | 600×600 |
| 8 | `talent-bd-2.webp` | Avatar kartu talent | 1:1 | 600×600 |
| 9 | `talent-dm-1.webp` | Avatar kartu talent | 1:1 | 600×600 |
| 10 | `talent-dm-2.webp` | Avatar kartu talent | 1:1 | 600×600 |
| 11 | `about-group.webp` | Hero About Us | 16:9 | 1600×900 |

Semua file disimpan di `public/images/`.

## Prompt per foto

### 2. `lp-business-development.webp` — Hero LP BD
```
One young Indonesian man, around 24, standing three-quarter view, wearing a dark brown linen shirt with sleeves rolled up and black tailored trousers, holding a slim black notebook and a pen, slight confident smile as if about to pitch to a client. Upper body to mid-thigh framing, subject placed on the right third, empty orange space on the left for headline text. Aspect ratio 4:5.
```
Catatan: subjek di sisi kanan, supaya judul di kiri tidak menutupi wajah.

### 3. `lp-digital-marketing.webp` — Hero LP DM
```
One young Indonesian woman, around 23, wearing a cream oversized blazer over a black top, holding an open silver laptop on one forearm, glancing at the camera with a warm, focused smile. Upper body framing, subject on the right third, empty orange space on the left for headline text. Aspect ratio 4:5.
```

### 4. `program-business-development.webp` — Kartu program BD
```
Two young Indonesian professionals, a man and a woman, shaking hands across a small minimalist cream table, as if closing a deal, both smiling. Medium shot from the waist up, centered composition, generous orange background around them. Aspect ratio 16:10.
```
Catatan: badge "Tersedia" ada di pojok kiri atas kartu. Jangan taruh wajah di area itu.

### 5. `program-digital-marketing.webp` — Kartu program DM
```
One young Indonesian woman with shoulder-length hair, wearing a beige knit top, sitting and working on a silver laptop, a simple analytics chart glowing softly on the screen (no readable text), thoughtful expression. Medium shot, subject centered-right. Aspect ratio 16:10.
```

### 6. `program-social-media.webp` — Kartu program Social Media
```
One young Indonesian man with wavy hair, wearing a black t-shirt under an open cream overshirt, holding a smartphone vertically as if recording short-form content, playful confident expression. Medium shot, subject centered-right. Aspect ratio 16:10.
```

### 7–10. Avatar talent (close-up)
Pakai template ini, lalu ganti bagian dalam kurung:
```
Close-up head-and-shoulders portrait of [DESKRIPSI], looking directly at the camera with a friendly professional smile, centered, plain orange backdrop, soft even light. Aspect ratio 1:1.
```
- `talent-bd-1.webp`: `a young Indonesian man, about 23, short neat black hair, wearing a black polo shirt`
- `talent-bd-2.webp`: `a young Indonesian man, about 25, slightly wavy hair swept back, wearing a cream blazer over a white t-shirt`
- `talent-dm-1.webp`: `a young Indonesian man, about 22, short textured fringe haircut, wearing a dark brown overshirt`
- `talent-dm-2.webp`: `a young Indonesian man, about 24, glasses with thin frames, wearing a beige crew-neck sweater`

Catatan: keempat avatar laki-laki dan tanpa hijab. Supaya tidak terlihat seperti orang yang sama, bedakan gaya rambut, kacamata, dan warna pakaian, lalu buat setiap avatar di sesi atau seed yang berbeda.

### 11. `about-group.webp` — Foto grup About Us
```
A group of five young Indonesian professionals (mixed men and women, no hijab) standing together in a relaxed, natural arrangement, some arms crossed, some hands in pockets, all smiling, coordinated outfits in cream, beige, black, and dark brown. Full-body to knee framing, centered, wide orange backdrop with space above their heads. Aspect ratio 16:9.
```

## Cek sebelum dipakai

- Tangan dan jari wajar (5 jari, tidak menyatu).
- Tidak ada teks, logo, atau watermark yang tidak sengaja muncul.
- Warna latar mendekati oranye website. Kalau terlalu merah atau kuning, minta "match the orange of the reference image".
- Wajah tidak berada di pojok kiri atas foto kartu program, karena tertutup badge status.
- Ukuran WebP akhir di bawah 250 KB.
