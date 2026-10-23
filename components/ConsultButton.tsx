import { whatsappUrl } from '@/lib/whatsapp'
import { buttonBase, buttonVariants } from './Button'

type Props = { text: string; variant?: 'primary' | 'ghost'; floating?: boolean; className?: string }

export function ConsultButton({ text, variant = 'ghost', floating, className = '' }: Props) {
  const look = floating
    ? 'fixed inset-x-4 bottom-4 z-40 flex min-h-13 items-center justify-center gap-2 rounded-xl bg-cream text-sm font-bold text-ink shadow-[0_14px_34px_rgba(80,20,0,.35)] [text-shadow:none] sm:hidden'
    : `${buttonBase} ${buttonVariants[variant]}`
  return (
    <a href={whatsappUrl(text)} target="_blank" rel="noopener" className={`${look} ${className}`}>
      <span>Konsultasi Program</span>{' '}
      <span className={floating ? '' : 'text-xl leading-none'}>
        ↗
      </span>
    </a>
  )
}
