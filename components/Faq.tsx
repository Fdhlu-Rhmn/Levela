import type { FaqItem } from '@/content/types'

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="glass divide-y divide-line px-5 sm:px-7">
      {items.map((f) => (
        <details key={f.q} className="group py-2">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-2 text-base font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pb-4 text-sm leading-relaxed text-cream/90 sm:text-base">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
