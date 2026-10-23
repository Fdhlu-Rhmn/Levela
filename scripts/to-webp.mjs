// Usage: node scripts/to-webp.mjs <input> <output.webp> [width=1200]
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import sharp from 'sharp'

const [input, output, width = '1200'] = process.argv.slice(2)
if (!input || !output) {
  console.error('Usage: node scripts/to-webp.mjs <input> <output.webp> [width]')
  process.exit(1)
}

mkdirSync(dirname(output), { recursive: true })
const info = await sharp(input).resize({ width: Number(width), withoutEnlargement: true }).webp({ quality: 78 }).toFile(output)
console.log(`${output}: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`)
