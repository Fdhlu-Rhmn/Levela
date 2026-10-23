# Levela Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the static Levela landing page as a multi-page Next.js static site (Homepage, program search, program landing pages, About Us), plus brand guidelines and character photo prompts.

**Architecture:** Next.js App Router with `output: 'export'`, so the build is plain HTML/CSS/JS uploaded to Hostinger. All content lives in typed TypeScript files under `content/`. Small pure helpers in `lib/` hold all logic (search, WhatsApp links, CTA fallback, promo dates, badge text). Components are hand-written with Tailwind 4 and one glass utility.

**Tech Stack:** Next.js 16 (App Router, TypeScript), Tailwind CSS 4, `next/font/google` (Manrope, DM Sans), Vitest + jsdom + @testing-library/react, sharp (image conversion script only).

**Spec:** `docs/superpowers/specs/2026-10-23-levela-website-design.md`. Read it together with this plan. Content for the BD page is in its **Lampiran A**.

## Global Constraints

- Static export only: `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`, `basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? ''`. No API routes, no server actions, no forms, no login.
- No UI component library. No icon library. **No emoji anywhere in the UI.** The only decorative motif is the arrow `↗`, used on primary buttons and the logo.
- Site copy is Indonesian and addresses the reader as "kamu".
- Never show "bagian dari Talentiv" or "anak perusahaan". Only the partnership with Talentiv Jobs is shown.
- The CTA label for WhatsApp is always **"Konsultasi Program"**. WhatsApp links are `https://wa.me/<number>?text=<encodeURIComponent(text)>`.
- "Daftar" links go to the package `checkoutUrl` (CO Edu, `edu.talentiv.id`). If it is missing, show "Konsultasi Program" instead.
- Sample talent profiles (`sample: true`) never show "Verified by Talentiv". They show "Profil lulusan" plus a small "Contoh profil" label.
- No HR content on program pages. These words must not appear in BD/DM program content: `HR`, `HRD`, `HRIS`, `Mekari`, `Human Resource`, `recruiter`.
- Tokens (from the current `style.css`): background `linear-gradient(110deg, #bf3508 0%, #e95308 43%, #f58b1e 100%)`, cream `#fff7e9`, ink `#311a10`, orange `#ee5b0b`, line `rgba(255,246,227,.32)`. Fonts: Manrope for headings (600–800), DM Sans for body (400–700).
- Glass: background `rgba(255,247,233,.13)`, `backdrop-filter: blur(18px)`, border `1px solid rgba(255,247,233,.28)`, radius 22px, soft shadow plus inset top highlight. Provide an `@supports not (backdrop-filter: blur(1px))` fallback with background `rgba(90,35,10,.55)`.
- Breakpoints: phone < 640px, tablet 640–1023px, desktop ≥ 1024px. No horizontal page scroll at 320px or wider.
- Touch targets are at least 44px tall. Body text is 15–16px on phones. Text contrast meets WCAG AA. Keyboard focus is visible. Honor `prefers-reduced-motion`. Every image has `alt`.
- Status badge: "Tersedia" is a white background with ink text and a green dot `#1f9d55`. "Segera Hadir" is an ink background with `#ffd9b3` text and an orange dot `#ffb066`. Both are solid with a shadow, and the text label is always present.

## Review Focus

1. **Messy search input.** Whitespace, mixed case, or a partial word (`"  ADS "`, `"negosiasi"`) should still match the right programs. Pinned in Task 3 (`filterPrograms` tests).
2. **WhatsApp text with special characters.** `&`, `?`, `#` and newlines must reach WhatsApp intact, not truncated. Pinned in Task 1 (`whatsappUrl` test).
3. **Promo ended.** After `promoUntil`, the page must not keep showing an expired early-bird price as current. Pinned in Task 3 (`isPromoActive` test), applied at build time in Task 6.
4. **Narrow phones (320px) and long words.** "Development" in headings must not cause horizontal scroll. Fixed by `overflow-wrap: anywhere` on headings in Task 4, checked in Task 10.
5. **Incomplete program data.** An `available` program with no `lp`, or a package with no `checkoutUrl`, must never produce a dead link or a 404 page. Pinned in Task 2 (content validation) and Task 6 (`PricingCard` test).

---

### Task 1: Project scaffold, tokens, WhatsApp helper

**Files:**
- Move: `index.html`, `style.css`, `app.js` → `legacy/` (with `git mv`)
- Move: `assets/hero.png` → `legacy/assets/hero.png` (converted to WebP in Task 9)
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `vitest.config.ts`, `vitest.setup.ts`
- Create: `app/layout.tsx`, `app/page.tsx` (placeholder "Levela"), `app/globals.css`
- Create: `content/site.ts`, `lib/whatsapp.ts`, `lib/whatsapp.test.ts`
- Create: `public/.htaccess`
- Modify: `.gitignore`, `CLAUDE.md`

**Interfaces:**
- Produces: `site` from `content/site.ts`:
  `{ name: 'Levela Academy'; tagline: 'Sekolah bisnis dan kreatif untuk membangun karier profesionalmu.'; whatsappNumber: string; email: string; instagram: string; linkedin: string; address: string; coEduBase: 'https://edu.talentiv.id' }`. `whatsappNumber` is `''` for now (a placeholder).
- Produces: `whatsappUrl(text: string, number?: string): string` from `lib/whatsapp.ts`. `number` defaults to `site.whatsappNumber`.
- Produces: Tailwind theme tokens in `app/globals.css` under `@theme`: `--color-cream`, `--color-ink`, `--color-orange`, `--color-line`, `--color-ok`, `--color-soon-text`, `--color-soon-dot`, `--font-heading`, `--font-body`, `--radius-glass`. Utility class `.glass` and `.bg-levela` (the gradient).

- [ ] **Step 1: Scaffold the project**

In the existing repo root, move the legacy files with `git mv`. Then create the Next.js app without the interactive wizard: add `next@16`, `react@19`, `react-dom@19`, `tailwindcss@4`, `@tailwindcss/postcss`, and dev dependencies `typescript`, `@types/react`, `@types/node`, `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitejs/plugin-react`, `sharp`. Scripts: `"dev": "next dev"`, `"build": "next build"`, `"test": "vitest run"`.

`next.config.ts` uses exactly the values in Global Constraints. `public/.htaccess` contains `ErrorDocument 404 /404.html` plus `Cache-Control: max-age=31536000` for `\.(webp|png|jpg|svg|css|js|woff2)$` (mod_headers, wrapped in `<IfModule>`). Add `node_modules/`, `.next/`, `out/` to `.gitignore`.

Rewrite `CLAUDE.md`: stack (Next 16 static export, Tailwind 4, content in `content/`), commands (`npm run dev`, `npm test`, `npm run build` produces `out/` to upload to Hostinger `public_html`), the remote, and the scope rule (unchanged).

- [ ] **Step 2: Write the failing test** in `lib/whatsapp.test.ts`

```ts
import { whatsappUrl } from './whatsapp'
test('encodes text and uses the number', () => {
  expect(whatsappUrl('Halo kak & tanya?\n#BD', '6281234')).toBe(
    'https://wa.me/6281234?text=Halo%20kak%20%26%20tanya%3F%0A%23BD')
})
test('empty number falls back to wa.me without a number', () => {
  expect(whatsappUrl('Halo', '')).toBe('https://wa.me/?text=Halo')
})
```

- [ ] **Step 3: Run it.** Run `npm test`. Expected: FAIL, because the module is not found.

- [ ] **Step 4: Implement `whatsappUrl`, `app/globals.css`, and `app/layout.tsx`.**
  - `whatsappUrl`: when the number is empty, return `https://wa.me/?text=…` and call `console.warn('[levela] site.whatsappNumber kosong')` once.
  - `layout.tsx`: loads Manrope and DM Sans with `next/font/google` as CSS variables, sets `<html lang="id">`, and puts `bg-levela text-cream` on `body`.
  - Metadata: title template `'%s — Levela Academy'`, default title `'Levela Academy — Bangun Karier Profesionalmu'`, plus the description from the legacy `index.html`.
  - `globals.css`: under `@media (prefers-reduced-motion: reduce)`, set all animation and transition durations to `0.01ms`.

- [ ] **Step 5: Verify.** Run `npm test` and `npm run build`. Expected: tests PASS, and `out/index.html` exists.

- [ ] **Step 6: Commit** with message `chore: scaffold Next.js static site with Levela tokens`.

### Task 2: Content types and data

**Files:**
- Create: `content/types.ts`, `content/programs.ts`, `content/talents.ts`, `content/partners.ts`, `content/faq.ts`, `content/content.test.ts`

**Interfaces:**
- Produces (in `content/types.ts`):

```ts
export type Category = 'Business' | 'Marketing' | 'Creative'
export type ProgramStatus = 'available' | 'coming-soon'
export type Package = { name: string; normalPrice?: number; promoPrice?: number; promoUntil?: string /* YYYY-MM-DD */; checkoutUrl?: string; features: string[] }
export type Session = { code: string; date: string; title: string }
export type Mentor = { name: string; role: string; photo?: string }
export type FaqItem = { q: string; a: string }
export type Partner = { id: string; name: string; logo?: string; roles: string[] }
export type Talent = { id: string; sample: boolean; name: string; role: string; photo: string; salaryFrom?: number
  education: { org: string; program: string; date: string; summary: string }
  experience: { org: string; role: string; date: string; summary: string }
  skills: string[]; tools: string[]; partnerIds: string[] }
export type ProgramLp = { heroSubtitle: string; skills: { title: string; desc: string }[]; overview: string[]
  stats: { value: string; label: string }[]; careers: string[]; audience: { title: string; desc: string }[]
  tools: string[]; phase1: { title: string; time: string; sessions: Session[] }; phase2: { title: string; modules: string[] }
  projects: string[]; mentors: Mentor[]; talentIds: string[]; certificate: string; reasons: string[]; faq: FaqItem[] }
export type Program = { slug: string; title: string; category: Category; status: ProgramStatus; summary: string
  keywords: string[]; image: string; imageAlt: string; duration?: string; level?: string; format?: string
  batchStart?: string; whatsappText: string; packages?: Package[]; lp?: ProgramLp }
```

- Produces: `programs: Program[]`, `talents: Talent[]`, `partners: Partner[]`, `homeFaq: FaqItem[]`. Helpers `getProgram(slug: string): Program | undefined` and `getTalents(ids: string[]): Talent[]`, both in `content/programs.ts`.

- [ ] **Step 1: Write the failing test** in `content/content.test.ts`. Assertions:
  - The slugs are unique and exactly `['business-development', 'digital-marketing', 'social-media']`.
  - Every `available` program has `lp` and at least one package. `social-media` is `coming-soon` and has no `lp`.
  - `JSON.stringify(p.lp)` for BD and DM does **not** match `/\b(HR|HRD|HRIS|Mekari|Human Resource|recruiter)\b/i`.
  - Every `lp.talentIds` and every `talent.partnerIds` entry resolves to an existing talent or partner.
  - Every talent has `sample: true`, since all profiles are samples for now.
  - BD `phase1.sessions.length === 11`. The first session is `{ code: 'S1', date: '2026-11-10', title: 'Onboarding Program' }`.
  - Every `checkoutUrl` that is present starts with `https://edu.talentiv.id/`.
  - Every program's `whatsappText` contains its `title`.

- [ ] **Step 2: Run it.** Expected: FAIL, because the modules are missing.

- [ ] **Step 3: Write the data.**
  - **BD** comes from spec Lampiran A, verbatim. Title is "Business Development Fast Track". The audience is rewritten as fresh graduate, junior/entry-level, and karier stuck. Packages use the Lampiran prices with `promoUntil: '2026-11-02'`. Leave `checkoutUrl` undefined and add the comment `// TODO: ID produk CO Edu Levela`.
  - **DM** copies the BD structure. Retitle it to digital marketing topics and mark the whole object with the comment `// CONTOH: ganti dengan isi asli`.
  - **Social Media** has the summary "Strategi konten & pengelolaan akun" and status `coming-soon`.
  - **Talents**: 4 samples in total, 2 per program, in the shape of the Eduwork example. Partners: 4 placeholder companies, each with roles.
  - **whatsappText** format: `Halo kak, saya ingin bertanya mengenai program <title>.`
  - **Keywords** must be exactly these, because the Task 3 search tests depend on them:
    - BD: `['negosiasi', 'sales', 'pitching', 'lead generation', 'closing', 'partnership', 'b2b']`
    - DM: `['ads', 'meta ads', 'google ads', 'seo', 'campaign', 'analytics', 'copywriting']`
    - Social Media: `['konten', 'instagram', 'tiktok', 'caption']`

    BD's `title` and `summary` must not contain the substring `ads`. Note that "leads" contains it.
  - **Image paths**: `/images/program-<slug>.webp`. Talent photos: `/images/talent-<id>.webp`.

- [ ] **Step 4: Run it.** Run `npm test`. Expected: PASS.

- [ ] **Step 5: Commit** with message `feat: add typed program, talent and partner content`.

### Task 3: Logic helpers (search, CTA, promo, badge)

**Files:**
- Create: `lib/programs.ts`, `lib/programs.test.ts`

**Interfaces:**
- Consumes: types from Task 2.
- Produces:
  - `filterPrograms(list: Program[], f: { query: string; category: Category | 'all'; status: ProgramStatus | 'all' }): Program[]`
  - `packageCta(pkg: Package): { kind: 'checkout'; href: string } | { kind: 'consult' }`
  - `isPromoActive(pkg: Package, now: Date): boolean`
  - `formatRupiah(n: number): string`
  - `talentBadge(t: Talent): 'Verified by Talentiv' | 'Profil lulusan'`

- [ ] **Step 1: Write the failing tests:**
  - `filterPrograms(programs, { query: '  ADS ', category: 'all', status: 'all' })` returns only `digital-marketing`, via its keywords.
  - The query `'negosiasi'` returns `business-development`.
  - The query `''` with category `'Creative'` returns `['social-media']`.
  - Status `'available'` with category `'Creative'` returns `[]`.
  - The original order is preserved.
  - `packageCta({ name: 'x', features: [] })` returns `{ kind: 'consult' }`. With `checkoutUrl: 'https://edu.talentiv.id/checkout/?add-to-cart=1'`, it returns `kind: 'checkout'` with that href.
  - `isPromoActive({…, promoPrice: 1, promoUntil: '2026-11-02'}, new Date('2026-11-02T23:00:00+07:00'))` is `true`. On `'2026-11-03T00:00:00+07:00'` it is `false`. Without `promoPrice` it is `false`.
  - `formatRupiah(3500000)` returns `'Rp3.500.000'`.
  - `talentBadge({ ...t, sample: true })` returns `'Profil lulusan'`. With `sample: false` it returns `'Verified by Talentiv'`.

- [ ] **Step 2: Run it.** Expected: FAIL.

- [ ] **Step 3: Implement.**
  - `filterPrograms` lowercases and trims the query, then matches it as a substring of `title`, `summary`, or `keywords.join(' ')`.
  - `isPromoActive` treats `promoUntil` as the end of that day in Asia/Jakarta (`new Date(promoUntil + 'T23:59:59+07:00')`).
  - `formatRupiah` returns `'Rp' + n.toLocaleString('id-ID')`.

- [ ] **Step 4: Run it.** Expected: PASS.

- [ ] **Step 5: Commit** with message `feat: add search, CTA, promo and badge helpers`.

### Task 4: UI primitives, header, footer

**Files:**
- Create: `components/Glass.tsx`, `components/Button.tsx`, `components/StatusBadge.tsx`, `components/ConsultButton.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `components/Section.tsx`, `components/ui.test.tsx`
- Modify: `app/layout.tsx` (render `Header` and `Footer`), `app/globals.css`

**Interfaces:**
- Consumes: `whatsappUrl`, `site`.
- Produces:
  - `<Glass as?: 'div' | 'article' | 'section' className?>`
  - `<Button href variant: 'primary' | 'ghost' external?: boolean arrow?: boolean>`. Primary is a white background with ink text. Ghost is a line border. Minimum height is 44px. External links get `target="_blank" rel="noopener"`.
  - `<StatusBadge status: ProgramStatus>`
  - `<ConsultButton text: string variant? floating?: boolean>`. It always renders "Konsultasi Program ↗". `floating` makes it a fixed bottom bar on phones only (`sm:hidden`, `bottom-4 inset-x-4`).
  - `<Section id? eyebrow? title? children>`. The eyebrow follows the "01 / LABEL" pattern of the legacy site.

- [ ] **Step 1: Write the failing tests** in `components/ui.test.tsx`:
  - `StatusBadge` with `available` renders the text `Tersedia`, and with `coming-soon` renders `Segera Hadir`.
  - `ConsultButton` with `text='Halo & tes'` renders a link named `Konsultasi Program ↗` whose `href` contains `text=Halo%20%26%20tes`.
  - In `Header`, clicking the button named `Buka navigasi` sets `aria-expanded="true"` and the label changes to `Tutup navigasi`.
  - The `Footer` contains `Sekolah bisnis dan kreatif untuk membangun karier profesionalmu.` and the current year, and does not contain `bagian dari`.

- [ ] **Step 2: Run it.** Expected: FAIL.

- [ ] **Step 3: Implement.**
  - **Header** matches the legacy `index.html` header: logo `↗levela` with "ACADEMY"; nav Program (`/program/`), Cara Belajar (`/#belajar`), Karier (`/#karier`), Tentang Kami (`/tentang/`); and a ghost button "Konsultasi Program ↗" opening WhatsApp with the text `Halo kak, saya ingin konsultasi program Levela.`. On screens below `lg`, the nav collapses into a 44×44 menu button that opens a glass panel. Header is a client component.
  - **Footer** keeps the legacy footer content (logo, tagline, links Program · Koneksi Karier · Tentang Levela, `© <year> Levela Academy.`). Lay it out as a glass bar: desktop has 3 columns, phones stack.
  - **globals.css**: add `h1,h2,h3{overflow-wrap:anywhere;text-wrap:balance}` and visible `:focus-visible` outlines (`3px solid #fff`, offset 4px).

- [ ] **Step 4: Run it.** Expected: PASS.

- [ ] **Step 5: Commit** with message `feat: add glass UI primitives, header and footer`.

### Task 5: Program search page

**Files:**
- Create: `app/program/page.tsx`, `components/ProgramCard.tsx`, `components/ProgramSearch.tsx` (client), `components/ProgramSearch.test.tsx`

**Interfaces:**
- Consumes: `programs`, `filterPrograms`, `packageCta`, `StatusBadge`, `Button`, `ConsultButton`, `Glass`.
- Produces: `<ProgramCard program: Program>`, which Task 7 reuses on the Homepage.

- [ ] **Step 1: Write the failing tests:**
  - On initial render, the text `3 program ditemukan` is shown.
  - Typing `ads` into the textbox labelled `Cari program` shows `1 program ditemukan` and the heading `Digital Marketing Fast Track`.
  - Clicking the pill `Creative` and then `Tersedia` shows `Belum ketemu program yang cocok? Ceritakan kebutuhanmu.`.
  - The Social Media card has a `Konsultasi Program ↗` link and no `Lihat Program` link.
  - Each pill uses `aria-pressed` to show its state.

- [ ] **Step 2: Run it.** Expected: FAIL.

- [ ] **Step 3: Implement** following the mockup `.superpowers/brainstorm/2986-1792755358/content/search-v3-responsive.html`.
  - The page renders `h1` "Temukan programmu." and the subtitle "Cari berdasarkan skill, bidang, atau status program.".
  - **ProgramCard** shows the image on top (`<img>` with `alt`, `object-cover`, 180px tall) with `StatusBadge` overlaid at the top-left, then the category eyebrow (`01 / BUSINESS`), title, `duration · format · level`, and "Batch mulai <batchStart>".
  - Buttons on available programs: "Lihat Program" (primary, `/program/<slug>/`) and "Daftar ↗" (ghost). "Daftar" uses `packageCta(packages[0])`. If that returns `consult`, it becomes `ConsultButton`. Coming-soon programs get `ConsultButton` only.
  - Grid: 1 column on phones, 2 on tablets, 3 on desktop.
  - On phones, the search bar and pills are `sticky top-0`, the pills scroll horizontally, and a `ConsultButton floating` is shown.
  - The search runs client-side over the statically rendered list, so all cards are present without JS.

- [ ] **Step 4: Run it.** Run `npm test` and `npm run build`. Expected: PASS, and `out/program/index.html` exists.

- [ ] **Step 5: Commit** with message `feat: add program search page`.

### Task 6: Program landing page

**Files:**
- Create: `app/program/[slug]/page.tsx`, `components/lp/Hero.tsx`, `components/lp/Curriculum.tsx`, `components/lp/TalentCard.tsx`, `components/lp/PartnerMatch.tsx`, `components/lp/PricingCard.tsx`, `components/Faq.tsx`, `components/lp/lp.test.tsx`

**Interfaces:**
- Consumes: `getProgram`, `getTalents`, `partners`, `packageCta`, `isPromoActive`, `formatRupiah`, `talentBadge`, the primitives.
- Produces:
  - `<TalentCard talent: Talent>`, reused on the Homepage
  - `<Faq items: FaqItem[]>`, which uses native `<details>`/`<summary>` and is reused on the Homepage
  - `generateStaticParams()`, which returns only programs with `status === 'available' && lp`
  - `generateMetadata`, whose title is the program title

- [ ] **Step 1: Write the failing tests:**
  - A `TalentCard` with `sample: true` shows `Profil lulusan` and `Contoh profil`, and does **not** show `Verified by Talentiv`. With `sample: false` it shows `Verified by Talentiv`.
  - A `PricingCard` without `checkoutUrl` shows `Konsultasi Program ↗`, has no `Daftar` link, and shows `Harga diinformasikan saat konsultasi` when `normalPrice` is missing.
  - A `PricingCard` with `promoPrice` and `promoUntil: '2026-11-02'`, rendered with `now = new Date('2026-11-03')`, shows only the normal price `Rp3.500.000`.
  - `generateStaticParams()` returns `[{ slug: 'business-development' }, { slug: 'digital-marketing' }]`.

- [ ] **Step 2: Run it.** Expected: FAIL.

- [ ] **Step 3: Implement** the 15 sections in spec §6.4 order, following mockup `lp-bizdev-structure.html`:
  - The "Daftar Sekarang" button in the hero links to `#paket`.
  - The Talent Verified section has id `talent`. Talent cards scroll horizontally with snap on phones. `PartnerMatch` lists partner name or logo plus roles from `partnerIds`.
  - The kurikulum accordion uses `<details>`.
  - `PricingCard` takes an optional `now` prop that defaults to `new Date()` at build time. When the promo is active it shows the normal price struck through, the promo price, and "Early bird hingga <tanggal>".
  - Each section is a `Section` with an eyebrow. No emoji.

- [ ] **Step 4: Run it.** Run `npm test` and `npm run build`. Expected: PASS. `out/program/business-development/index.html` and `out/program/digital-marketing/index.html` exist, and `out/program/social-media/` does not.

- [ ] **Step 5: Commit** with message `feat: add program landing pages`.

### Task 7: Homepage

**Files:**
- Modify: `app/page.tsx`
- Create: `app/page.test.tsx`

**Interfaces:**
- Consumes: `ProgramCard`, `TalentCard`, `Faq`, `homeFaq`, `Section`, `ConsultButton`, `programs`, `talents`.

- [ ] **Step 1: Write the failing test.** Rendering `Home` shows:
  - the `h1` text `Bangun karier profesionalmu`,
  - the three program titles,
  - elements with ids `belajar` and `karier`,
  - a link to `/tentang/`,
  - no `form` element.

- [ ] **Step 2: Run it.** Expected: FAIL.

- [ ] **Step 3: Implement** the 9 sections in spec §6.2, porting copy from `legacy/index.html`.
  - "The Levela Way" gets `id="belajar"`.
  - The cuplikan Talent Verified and Koneksi Talentiv Jobs sections sit inside one `<section id="karier">`.
  - The hero uses `/images/hero.webp`.

- [ ] **Step 4: Run it.** Expected: PASS.

- [ ] **Step 5: Commit** with message `feat: rebuild homepage`.

### Task 8: About Us and 404

**Files:**
- Create: `app/tentang/page.tsx`, `app/not-found.tsx`, `app/tentang/page.test.tsx`

- [ ] **Step 1: Write the failing test.** `Tentang` renders the `h1` text `Tempat memulai langkah profesionalmu.`, contains `Talentiv Jobs`, and does not match `/bagian dari|anak perusahaan/i`.

- [ ] **Step 2: Run it.** Expected: FAIL.

- [ ] **Step 3: Implement** the sections in spec §6.5 with sample copy.
  - The values are Ilmu, Integritas, and Kualitas kerja.
  - The group photo is `/images/about-group.webp`.
  - `not-found.tsx` shows "Halaman tidak ditemukan." with buttons to `/` and `/program/`. The static export writes it to `out/404.html`.

- [ ] **Step 4: Run it.** Run `npm test` and `npm run build`. Expected: PASS, and `out/404.html` exists.

- [ ] **Step 5: Commit** with message `feat: add About Us and 404 pages`.

### Task 9: Images and character prompts

**Files:**
- Create: `scripts/to-webp.mjs`, `scripts/check-images.mjs`, `public/images/*.webp`, `docs/brand/character-prompts.md`

- [ ] **Step 1: Write `scripts/to-webp.mjs <input> <output> [width]`.**
  - It uses sharp to resize to `width` (default 1200) and writes WebP at quality 78.
  - Run it on `legacy/assets/hero.png` to produce `public/images/hero.webp`. Expected: a file under 250 KB.
  - For every other image path referenced in `content/` and pages, generate a neutral placeholder WebP: an orange gradient with the label text rendered by sharp's SVG input, so the build has no broken images.

- [ ] **Step 2: Write `docs/brand/character-prompts.md`.** It contains one base-style paragraph matching `hero.png`: young Southeast Asian professionals, plain orange studio background, soft studio light, smart-casual cream or dark clothing, confident expression, realistic editorial photo. Then one prompt per image path from Step 1, each with aspect ratio, target pixel size, file name, and a background note.

- [ ] **Step 3: Verify.** Run `npm run build`, then `node scripts/check-images.mjs`. This small script collects every `src="/images/…"` in `out/**/*.html` and prints any path missing under `out/`. Expected: it prints `0 missing` and exits with code 0. Create the script in this step.

- [ ] **Step 4: Commit** with message `feat: add optimized images, placeholders and character prompts`.

### Task 10: Brand guidelines and final verification

**Files:**
- Create: `docs/brand/levela-brand-guidelines.md`
- Delete: `legacy/` (after the checks below pass)

- [ ] **Step 1: Write the brand guidelines** with the sections in spec §8. The token table names must match `app/globals.css` `@theme` exactly. List contrast pairs with their measured ratio (cream on the darkest gradient stop `#bf3508`, ink on white, `#ffd9b3` on ink).

- [ ] **Step 2: Run the full check.** Run `npm test && npm run build`. Expected: all tests PASS, and the build succeeds.

- [ ] **Step 3: Run the content scans.**
  - `grep -rniE "\b(HR|HRD|HRIS|Mekari|Human Resource|recruiter)\b" out/program/` should print nothing.
  - `grep -rni "bagian dari talentiv" out/` should print nothing.
  - `grep -rnP "[\x{1F300}-\x{1FAFF}]" out/ --include=*.html` should print no emoji.

- [ ] **Step 4: Check the viewports.** Serve `out/` (`npx serve out`) and open `/`, `/program/`, `/program/business-development/`, and `/tentang/` at 320, 375, 768, and 1280px. Expected:
  - `document.documentElement.scrollWidth <= innerWidth` on every page,
  - status badges are readable over images,
  - the floating Konsultasi Program button is visible on phones only.

- [ ] **Step 5: Delete `legacy/` and commit** with message `docs: add brand guidelines; remove legacy static site`.
