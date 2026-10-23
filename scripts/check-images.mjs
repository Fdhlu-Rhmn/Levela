// After `npm run build`: every /images/... referenced in out/**/*.html must exist in out/.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const html = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? html(p) : p.endsWith('.html') ? [p] : []
  })

const missing = new Set()
for (const file of html('out'))
  for (const [, src] of readFileSync(file, 'utf8').matchAll(/src="([^"]*\/images\/[^"]+)"/g)) {
    const path = src.slice(base.length)
    if (!existsSync(join('out', path))) missing.add(path)
  }

for (const m of missing) console.log(`missing ${m}`)
console.log(`${missing.size} missing`)
process.exit(missing.size ? 1 : 0)
