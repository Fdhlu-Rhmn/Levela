'use client'

import { useRef, useState } from 'react'
import type { Mentor } from '@/content/types'
import { asset } from '@/lib/asset'

type Item = Mentor & { programs: string[] }

const control =
  'grid size-11 place-items-center rounded-full border border-line text-lg transition-colors hover:bg-cream hover:text-ink disabled:cursor-not-allowed disabled:border-dashed disabled:hover:bg-transparent disabled:hover:text-cream [text-shadow:none]'
const pad = (n: number) => String(n).padStart(2, '0')

// Horizontal scroll-snap row; the buttons scroll by one card so it works with mouse and keyboard too.
export function MentorCarousel({ mentors }: { mentors: Item[] }) {
  const track = useRef<HTMLUListElement>(null)
  const [current, setCurrent] = useState(0)

  const cardWidth = () => {
    const card = track.current?.querySelector('li')
    return card ? card.getBoundingClientRect().width + 20 : 1
  }
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * cardWidth(), behavior: 'smooth' })
  const onScroll = () => {
    const el = track.current
    if (el) setCurrent(Math.min(mentors.length - 1, Math.round(el.scrollLeft / cardWidth())))
  }
  const progress = ((current + 1) / mentors.length) * 100

  return (
    <div>
      <div className="mb-6 flex items-center gap-5 border-y border-line py-4">
        <p className="font-heading text-sm tabular-nums tracking-[0.04em]" aria-live="polite">
          <span className="text-sun">{pad(current + 1)}</span> / {pad(mentors.length)}
        </p>
        <div aria-hidden="true" className="h-px flex-1 bg-line">
          <div className="h-px bg-cream transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex gap-2">
          <button type="button" aria-label="Mentor sebelumnya" onClick={() => scroll(-1)} disabled={current === 0} className={control}>
            ←
          </button>
          <button
            type="button"
            aria-label="Mentor berikutnya"
            onClick={() => scroll(1)}
            disabled={current === mentors.length - 1}
            className={control}
          >
            →
          </button>
        </div>
      </div>
      <ul
        ref={track}
        role="region"
        aria-label="Daftar mentor"
        tabIndex={0}
        onScroll={onScroll}
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
