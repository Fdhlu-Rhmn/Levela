import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Levela Academy beranda"
      className="relative inline-flex items-center pb-3 font-heading text-[30px] font-extrabold tracking-[-2px]"
    >
      <span aria-hidden="true" className="mr-1 pr-2 text-[34px] leading-none tracking-[-8px]">
        ↗
      </span>
      levela
      <span className="absolute bottom-0.5 left-[38px] text-[8px] tracking-[3px]">ACADEMY</span>
    </Link>
  )
}
