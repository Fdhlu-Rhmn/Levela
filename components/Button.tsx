import Link from 'next/link'

type Props = {
  href: string
  variant?: 'primary' | 'ghost'
  external?: boolean
  arrow?: boolean
  className?: string
  children: React.ReactNode
}

export const buttonBase =
  'inline-flex min-h-12 items-center justify-between gap-8 rounded-md px-5 text-sm font-semibold transition-[transform,background-color] duration-200 hover:-translate-y-0.5'
export const buttonVariants = {
  primary: 'bg-cream text-ink shadow-[0_12px_30px_rgba(139,40,0,.18)] hover:bg-white [text-shadow:none]',
  ghost: 'border border-line text-cream hover:bg-cream/10',
}

export function Button({ href, variant = 'primary', external, arrow, className = '', children }: Props) {
  const cls = `${buttonBase} ${buttonVariants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden="true" className="text-xl leading-none">
          ↗
        </span>
      )}
    </>
  )
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {content}
      </a>
    )
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
