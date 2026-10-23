type Props = { as?: 'div' | 'article' | 'section'; className?: string; children: React.ReactNode } & React.HTMLAttributes<HTMLElement>

export function Glass({ as: Tag = 'div', className = '', children, ...rest }: Props) {
  return (
    <Tag className={`glass ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
