type Props = {
  id?: string
  eyebrow?: string
  aside?: string
  title?: React.ReactNode
  intro?: string
  className?: string
  children?: React.ReactNode
}

// Editorial section: thin top rule with an eyebrow on the left and a short note on the right.
export function Section({ id, eyebrow, aside, title, intro, className = '', children }: Props) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-24 ${className}`}>
      {(eyebrow || aside) && (
        <div className="flex items-start justify-between gap-6 border-t border-line pt-4 text-[11px] font-semibold tracking-[0.16em] uppercase">
          <span>{eyebrow}</span>
          {aside && <span className="hidden text-right sm:block">{aside}</span>}
        </div>
      )}
      <div className="reveal">
        {title && (
          <h2 className="mt-10 max-w-3xl text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.1] tracking-[-0.045em]">{title}</h2>
        )}
        {intro && <p className="mt-5 max-w-xl text-base leading-relaxed">{intro}</p>}
      </div>
      {children && <div className={title || intro ? 'mt-12' : 'mt-10'}>{children}</div>}
    </section>
  )
}
