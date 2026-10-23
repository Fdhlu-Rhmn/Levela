import { whatsappUrl } from '@/lib/whatsapp'

type Props = { text: string; variant?: 'primary' | 'ghost'; floating?: boolean; className?: string }

export function ConsultButton({ text, variant = 'ghost', floating, className = '' }: Props) {
  const look = floating
    ? 'fixed inset-x-4 bottom-4 z-40 min-h-13 rounded-2xl bg-white text-ink shadow-[0_10px_30px_rgba(0,0,0,.3)] sm:hidden'
    : variant === 'primary'
      ? 'min-h-11 rounded-xl bg-white text-ink hover:bg-cream'
      : 'min-h-11 rounded-xl border border-cream/50 text-cream hover:bg-cream/10'
  return (
    <a
      href={whatsappUrl(text)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-3 px-5 text-sm font-bold transition-colors duration-200 ${look} ${className}`}
    >
      Konsultasi Program ↗
    </a>
  )
}
