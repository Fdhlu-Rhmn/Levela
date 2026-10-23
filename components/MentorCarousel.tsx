'use client'

import { useRef } from 'react'
import type { Mentor } from '@/content/types'
import { asset } from '@/lib/asset'

type Item = Mentor & { programs: string[] }

const control =
  'grid size-11 place-items-center rounded-full border border-line text-lg transition-colors hover:bg-cream hover:text-ink [text-shadow:none]'

// Horizontal scroll-snap row; the buttons scroll by one card so it works with mouse and keyboard too.
export function MentorCarousel({ mentors }: { mentors: Item[] }) {
  const track = useRef<HTMLUListElement>(null)
  const scroll = (dir: 1 | -1) => {
    const el = track.current
    const card = el?.querySelector('li')
    if (el && card) el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 20), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mb-5 flex justify-end gap-2">
        <button type="button" aria-label="Mentor sebelumnya" onClick={() => scroll(-1)} className={control}>
          ←
        </button>
        <button type="button" aria-label="Mentor berikutnya" onClick={() => scroll(1)} className={control}>
          →
        </button>
      </div>
      <ul
        ref={track}
        role="region"
        aria-label="Daftar mentor"
        tabIndex={0}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0"
      >
        {mentors.map((m) => (
          <li
            key={m.name}
            className="glass flex w-[85%] shrink-0 snap-start flex-col overflow-hidden sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]"
          >
            {m.photo && <img src={asset(m.photo)} alt={`Foto ${m.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />}
            <div className="flex flex-1 flex-col p-5">
              <p className="font-heading text-lg tracking-[-0.02em]">{m.name}</p>
              <p className="mt-1 text-[13px] font-semibold">{m.role}</p>
              {m.experience && <p className="mt-3 text-[13px] leading-relaxed">{m.experience}</p>}
              <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-line pt-3">
                {m.programs.map((p) => (
                  <li key={p} className="rounded-full border border-cream/35 bg-cream/15 px-2.5 py-1 text-[11px] font-medium">
                    {p.replace(' Fast Track', '')}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
