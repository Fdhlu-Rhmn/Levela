import type { Metadata } from 'next'
import { programs } from '@/content/programs'
import { ProgramSearch } from '@/components/ProgramSearch'

export const metadata: Metadata = { title: 'Cari Program' }

export default function ProgramPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-8 pb-16 sm:px-8 sm:pt-12">
      <h1 className="text-[clamp(2.8rem,6vw,4.6rem)] leading-[1.02] tracking-[-0.06em]">Temukan programmu.</h1>
      <p className="mt-3 mb-6 text-base sm:text-lg">Cari berdasarkan skill, bidang, atau status program.</p>
      <ProgramSearch programs={programs} />
    </main>
  )
}
