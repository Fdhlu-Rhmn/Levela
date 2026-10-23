import { partners } from '@/content/partners'

// Three rows of partner names, alternating direction and speed.
export function PartnerMarquee() {
  const rows = [
    { cls: 'marquee', dur: '42s' },
    { cls: 'marquee marquee-reverse', dur: '50s' },
    { cls: 'marquee', dur: '46s' },
  ]
  return (
    <div aria-label="Mitra hiring" className="grid gap-3 overflow-hidden border-y border-line bg-[#ffb43b]/10 py-6">
      {rows.map((r, row) => (
        <ul
          key={row}
          aria-hidden={row > 0}
          style={{ animationDuration: r.dur }}
          className={`${r.cls} flex w-max gap-4 pr-4`}
        >
          {Array.from({ length: 6 }, () => partners)
            .flat()
            .map((pt, i) => (
              <li
                key={i}
                aria-hidden={row === 0 && i >= partners.length}
                className="glass rounded-full! px-6 py-2.5 text-sm font-semibold tracking-[0.06em] whitespace-nowrap uppercase"
              >
                {pt.name}
              </li>
            ))}
        </ul>
      ))}
    </div>
  )
}
