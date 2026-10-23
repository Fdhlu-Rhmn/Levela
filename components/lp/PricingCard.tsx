'use client'

import { useEffect, useState } from 'react'
import type { Package } from '@/content/types'
import { formatRupiah, isPromoActive, packageCta } from '@/lib/programs'
import { Button } from '../Button'
import { ConsultButton } from '../ConsultButton'

const longDate = (d: string) =>
  new Date(`${d}T00:00:00+07:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Jakarta' })

type Props = { pkg: Package; whatsappText: string; now?: Date; highlight?: boolean }

export function PricingCard({ pkg, whatsappText, now, highlight }: Props) {
  // The static HTML is rendered at build time; re-check the promo in the visitor's browser
  // so an expired early-bird price never stays up until the next rebuild.
  const [current, setCurrent] = useState(() => now ?? new Date())
  useEffect(() => setCurrent(new Date()), [])
  const promo = isPromoActive(pkg, current)
  const cta = packageCta(pkg)
  return (
    <article className={`glass flex flex-col gap-5 p-6 ${highlight ? 'ring-2 ring-white/70' : ''}`}>
      <h3 className="text-2xl font-extrabold">{pkg.name}</h3>
      <div>
        {pkg.normalPrice === undefined ? (
          <p className="text-lg font-bold">Harga diinformasikan saat konsultasi</p>
        ) : promo ? (
          <>
            <p className="text-sm line-through">{formatRupiah(pkg.normalPrice)}</p>
            <p className="font-heading text-4xl font-extrabold">{formatRupiah(pkg.promoPrice!)}</p>
            <p className="mt-1 text-sm">Early bird hingga {longDate(pkg.promoUntil!)}</p>
          </>
        ) : (
          <p className="font-heading text-4xl font-extrabold">{formatRupiah(pkg.normalPrice)}</p>
        )}
      </div>
      <ul className="grid gap-2 text-sm">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-3 border-t border-line pt-2">
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 sm:flex-row">
        {cta.kind === 'checkout' && (
          <Button href={cta.href} external arrow className="flex-1">
            Daftar
          </Button>
        )}
        <ConsultButton text={whatsappText} variant={cta.kind === 'checkout' ? 'ghost' : 'primary'} className="flex-1" />
      </div>
    </article>
  )
}
