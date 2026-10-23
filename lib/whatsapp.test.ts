import { whatsappUrl } from './whatsapp'

test('encodes text and uses the number', () => {
  expect(whatsappUrl('Halo kak & tanya?\n#BD', '6281234')).toBe(
    'https://wa.me/6281234?text=Halo%20kak%20%26%20tanya%3F%0A%23BD',
  )
})

test('empty number falls back to wa.me without a number', () => {
  expect(whatsappUrl('Halo', '')).toBe('https://wa.me/?text=Halo')
})
