import { whatsappUrl } from '@/lib/whatsapp'

// Phone-only bottom bar so Daftar and Konsultasi are always one tap away.
export function MobileCta({ daftarHref, consultText }: { daftarHref?: string; consultText: string }) {
  const base = 'flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg text-sm font-semibold [text-shadow:none]'
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-[#d9480b]/90 p-3 backdrop-blur-md sm:hidden">
      {daftarHref && (
        <a href={daftarHref} className={`${base} bg-cream text-ink`}>
          Daftar Sekarang <span aria-hidden="true">↗</span>
        </a>
      )}
      <a href={whatsappUrl(consultText)} target="_blank" rel="noopener" className={`${base} border border-cream/60 text-cream`}>
        Konsultasi Program <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}
