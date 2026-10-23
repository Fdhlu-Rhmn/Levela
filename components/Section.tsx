type Props = {
  id?: string
  eyebrow?: string
  title?: React.ReactNode
  intro?: string
  className?: string
  children?: React.ReactNode
}

export function Section({ id, eyebrow, title, intro, className = '', children }: Props) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-20 ${className}`}>
      {eyebrow && <p className="mb-4 text-xs font-bold tracking-[0.2em] text-cream/80 uppercase">{eyebrow}</p>}
      {title && <h2 className="max-w-3xl text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">{title}</h2>}
      {intro && <p className="mt-4 max-w-2xl text-base text-cream/90 sm:text-lg">{intro}</p>}
      {children && <div className={title || intro ? 'mt-10' : ''}>{children}</div>}
    </section>
  )
}
