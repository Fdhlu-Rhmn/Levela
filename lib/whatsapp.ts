import { site } from '@/content/site'

let warned = false

export function whatsappUrl(text: string, number: string = site.whatsappNumber): string {
  if (!number && !warned) {
    warned = true
    console.warn('[levela] site.whatsappNumber kosong')
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}
