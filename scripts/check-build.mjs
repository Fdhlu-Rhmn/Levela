// After `npm run build`: fail if the static site in out/ has broken images, WhatsApp links or internal links.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const html = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? html(p) : p.endsWith('.html') && !f.startsWith('__') ? [p] : []
  })

const problems = new Set()
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')

for (const file of html('out')) {
  const page = file.slice(4).split('\\').join('/')
  const src = readFileSync(file, 'utf8')

  for (const [, s] of src.matchAll(/src="([^"]*\/images\/[^"]+)"/g))
    if (!existsSync(join('out', s.slice(base.length)))) problems.add(`missing image ${s} (${page})`)

  for (const [, href] of src.matchAll(/href="(https:\/\/wa\.me\/[^"]*)"/g)) {
    const text = new URL(decode(href)).searchParams.get('text') ?? ''
    if (!text.trim() || /function\s*\(|undefined|Error\(/.test(text)) problems.add(`bad WhatsApp text "${text.slice(0, 60)}" (${page})`)
  }

  for (const [, href] of src.matchAll(/href="(\/[^"#?]*)/g)) {
    const path = href.slice(base.length) || '/'
    if (path.startsWith('/_next/')) continue
    const target = join('out', path)
    const ok = (existsSync(target) && statSync(target).isFile()) || existsSync(join(target, 'index.html'))
    if (!ok) problems.add(`broken link ${href} (${page})`)
  }
}

for (const p of problems) console.log(p)
console.log(`${problems.size} problem(s)`)
process.exit(problems.size ? 1 : 0)
