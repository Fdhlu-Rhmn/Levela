'use client'

import { useEffect, useState } from 'react'
import type { Package } from '@/content/types'
import { formatRupiah, isPromoActive, packageCta } from '@/lib/programs'
import { whatsappUrl } from '@/lib/whatsapp'
import { Button } from '../Button'
import { ConsultButton } from '../ConsultButton'

const longDate = (d: string) =>
  new Date(`${d}T00:00:00+07:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta' })

type Props = { pkg: Package; whatsappText: string; programTitle: string; now?: Date; highlight?: boolean }

export function PricingCard({ pkg, whatsappText, programTitle, now, highlight }: Props) {
  // The static HTML is rendered at build time; re-check the promo in the visitor's browser
  // so an expired early-bird price never stays up until the next rebuild.
  const [current, setCurrent] = useState(() => now ?? new Date())
  useEffect(() => setCurrent(new Date()), [])
  const promo = isPromoActive(pkg, current)
  const cta = packageCta(pkg)
  // Until the CO Edu checkout link is filled in, Daftar opens WhatsApp with a registration message.
  const daftarHref =
    cta.kind === 'checkout' ? cta.href : whatsappUrl(`Halo kak, saya ingin mendaftar ${programTitle} paket ${pkg.name}.`)
  return (
    <article className={`glass lift relative flex flex-col gap-6 p-7 ${highlight ? 'ring-1 ring-cream' : ''}`}>
      {highlight && (
        <span className="absolute -top-3 right-6 rounded-md bg-label px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-ink [text-shadow:none]">
          PALING LENGKAP
        </span>
      )}
      <h3 className="text-3xl tracking-[-0.03em]">{pkg.name}</h3>
      <div className="border-t border-line pt-5">
        {pkg.normalPrice === undefined ? (
          <p className="text-lg font-semibold">Harga diinformasikan saat konsultasi</p>
        ) : promo ? (
          <>
            <p className="text-sm line-through">{formatRupiah(pkg.normalPrice)}</p>
            <p className="font-heading text-[2.75rem] leading-tight tracking-[-0.05em]">{formatRupiah(pkg.promoPrice!)}</p>
            <p className="mt-2 inline-block rounded-full bg-sun px-3 py-1 text-xs font-semibold text-ink [text-shadow:none]">
              {pkg.promoUntil
                ? `Early bird hingga ${longDate(pkg.promoUntil)}`
                : `Hemat ${formatRupiah(pkg.normalPrice - pkg.promoPrice!)}`}
            </p>
          </>
        ) : (
          <p className="font-heading text-[2.75rem] leading-tight tracking-[-0.05em]">{formatRupiah(pkg.normalPrice)}</p>
        )}
      </div>
      <ul className="grid text-sm">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-3 border-b border-line py-2.5 last:border-0">
            <span aria-hidden="true">↗</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2">
        <Button href={daftarHref} external arrow>
          Daftar Sekarang
        </Button>
        <ConsultButton text={whatsappText} />
      </div>
    </article>
  )
}
