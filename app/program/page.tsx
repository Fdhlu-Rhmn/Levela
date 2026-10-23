import type { Metadata } from 'next'
import { programs } from '@/content/programs'
import { ProgramSearch } from '@/components/ProgramSearch'

export const metadata: Metadata = { title: 'Cari Program' }

export default function ProgramPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-8 pb-16 sm:px-8 sm:pt-12">
      <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">Temukan programmu.</h1>
      <p className="mt-3 mb-6 text-base text-cream/90 sm:text-lg">Cari berdasarkan skill, bidang, atau status program.</p>
      <ProgramSearch programs={programs} />
    </main>
  )
}
