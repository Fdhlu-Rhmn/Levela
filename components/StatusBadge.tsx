import type { ProgramStatus } from '@/content/types'

export function StatusBadge({ status, className = '' }: { status: ProgramStatus; className?: string }) {
  const available = status === 'available'
  return (
    <span
      className={`inline-flex h-8 items-center gap-2 rounded-full px-3 text-xs font-extrabold tracking-wide shadow-[0_4px_14px_rgba(0,0,0,.25)] ${
        available ? 'bg-white text-ink' : 'bg-ink text-soon-text'
      } ${className}`}
    >
      <i
        aria-hidden="true"
        className={`size-2 rounded-full ${available ? 'bg-ok ring-3 ring-ok/20' : 'bg-soon-dot ring-3 ring-soon-dot/25'}`}
      />
      {available ? 'Tersedia' : 'Segera Hadir'}
    </span>
  )
}
