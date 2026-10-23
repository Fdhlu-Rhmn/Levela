import type { FaqItem } from '@/content/types'

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden="true"
              className="ring-line grid size-9 shrink-0 place-items-center text-lg transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-6 text-sm leading-relaxed sm:text-base">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
