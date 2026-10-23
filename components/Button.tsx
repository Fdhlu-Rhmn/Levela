import Link from 'next/link'

type Props = {
  href: string
  variant?: 'primary' | 'ghost'
  external?: boolean
  arrow?: boolean
  className?: string
  children: React.ReactNode
}

const base =
  'inline-flex min-h-11 items-center justify-center gap-3 rounded-xl px-5 text-sm font-bold transition-colors duration-200'
const variants = {
  primary: 'bg-white text-ink hover:bg-cream',
  ghost: 'border border-cream/50 text-cream hover:bg-cream/10',
}

export function Button({ href, variant = 'primary', external, arrow, className = '', children }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">↗</span>}
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
