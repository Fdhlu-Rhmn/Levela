import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

// Reads the real tokens from globals.css. The bright gradient is the owner's brand choice, so
// light orange areas sit below AA for small text; these checks guard what we can keep readable.
const css = readFileSync(join(__dirname, 'globals.css'), 'utf8')
const token = (name: string) => css.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, 'i'))![1]

const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16))
const lum = (c: number[]) => {
  const [r, g, b] = c.map((v) => v / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a: number[], b: number[]) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}

const cream = rgb(token('color-cream'))
const ink = rgb(token('color-ink'))

test('cream text passes AA on the darkest stop and large-text AA on the middle stop', () => {
  expect(ratio(cream, rgb(token('color-bg-from')))).toBeGreaterThanOrEqual(4.5)
  expect(ratio(cream, rgb(token('color-bg-via')))).toBeGreaterThanOrEqual(3)
})

test('ink text on buttons and labels passes AA', () => {
  expect(ratio(ink, [255, 255, 255])).toBeGreaterThanOrEqual(4.5)
  expect(ratio(ink, rgb(token('color-label')))).toBeGreaterThanOrEqual(4.5)
})

test('no translucent text: cream text and links stay fully opaque', () => {
  const files = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f)
      return statSync(p).isDirectory() ? files(p) : p.endsWith('.tsx') ? [p] : []
    })
  const offenders = [...files('app'), ...files('components')].filter((f) =>
    /text-cream\/\d+|\bopacity-[1-9]\d\b/.test(readFileSync(f, 'utf8')),
  )
  expect(offenders).toEqual([])
})
