import type { Metadata } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-manrope' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: { template: '%s — Levela Academy', default: 'Levela Academy — Bangun Karier Profesionalmu' },
  description:
    'Levela Academy, sekolah bisnis dan kreatif untuk membangun karier profesionalmu. Business Development, Digital Marketing, dan Social Media.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${manrope.variable} ${dmSans.variable}`}>
      <body className="bg-levela text-cream min-h-screen">{children}</body>
    </html>
  )
}
