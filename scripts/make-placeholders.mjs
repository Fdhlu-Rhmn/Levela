// Writes placeholder WebP files for every character photo listed in docs/brand/character-prompts.md.
// Existing files are kept, so real photos are never overwritten.
import { existsSync, mkdirSync } from 'node:fs'
import sharp from 'sharp'

const images = [
  ['lp-business-development.webp', 1000, 1250],
  ['lp-digital-marketing.webp', 1000, 1250],
  ['program-business-development.webp', 1200, 750],
  ['program-digital-marketing.webp', 1200, 750],
  ['program-social-media.webp', 1200, 750],
  ['talent-bd-1.webp', 600, 600],
  ['talent-bd-2.webp', 600, 600],
  ['talent-dm-1.webp', 600, 600],
  ['talent-dm-2.webp', 600, 600],
  ['about-group.webp', 1600, 900],
  // Real assets needed — see docs/brand/asset-needs.md
  ['mentor-tri-ali-herviansyah.webp', 800, 1000],
  ['mentor-ardan-aziz-rahman.webp', 800, 1000],
  ['mentor-m-khairul-hamid.webp', 800, 1000],
  ['mentor-prita-permatadinata.webp', 800, 1000],
  ['mentor-aziz.webp', 800, 1000],
  ['mentor-hamid.webp', 800, 1000],
  ['mentor-herdi.webp', 800, 1000],
  ['mentor-usamah.webp', 800, 1000],
  ['mentor-sahrul.webp', 800, 1000],
  ['certificate-business-development.webp', 1414, 1000],
  ['certificate-digital-marketing.webp', 1414, 1000],
  ['class-live.webp', 1200, 900],
  ['class-mentoring.webp', 1200, 900],
  ['class-presentation.webp', 1200, 900],
  ['overview-level.webp', 1200, 750],
  ['overview-profile.webp', 1200, 750],
]

mkdirSync('public/images', { recursive: true })

for (const [name, w, h] of images) {
  const out = `public/images/${name}`
  if (existsSync(out)) continue
  const size = Math.round(Math.min(w, h) / 22)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f58b1e"/><stop offset="1" stop-color="#bf3508"/></linearGradient>
      <radialGradient id="l" cx=".7" cy=".3" r=".6"><stop offset="0" stop-color="#fff7e9" stop-opacity=".45"/><stop offset="1" stop-color="#fff7e9" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#l)"/>
    <text x="50%" y="92%" text-anchor="middle" font-family="sans-serif" font-size="${size}" fill="#fff7e9" fill-opacity=".85">${name}</text>
  </svg>`
  await sharp(Buffer.from(svg)).webp({ quality: 70 }).toFile(out)
  console.log(`placeholder ${out}`)
}
