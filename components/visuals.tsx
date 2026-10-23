import { asset } from '@/lib/asset'

const tag = 'absolute rounded-[3px] border border-line bg-[#e96713] px-3 py-2 text-[10px] font-semibold tracking-[0.12em]'

// Talentiv Jobs network from the original site: two rings, the wordmark, three field nodes.
export function NetworkVisual() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[460px]" aria-hidden="true">
      <div className="ring-line absolute top-0 left-1/2 size-[290px] -translate-x-1/2 sm:size-[320px]" />
      <div className="ring-line absolute top-[45px] left-1/2 size-[200px] -translate-x-1/2 sm:top-[48px] sm:size-[224px]" />
      <div className="absolute top-[105px] left-1/2 -translate-x-1/2 text-center font-heading leading-none font-semibold tracking-[-0.05em] sm:top-[118px]">
        <span className="block text-[40px] sm:text-[46px]">talentiv</span>
        <span className="block text-left text-[22px] tracking-normal">jobs ↗</span>
      </div>
      <span className={`${tag} top-6 left-0`}>BUSINESS</span>
      <span className={`${tag} top-[130px] right-0`}>MARKETING</span>
      <span className={`${tag} top-[230px] left-2`}>CREATIVE</span>
      <div className="absolute inset-x-0 bottom-0 text-center">
        <strong className="block font-heading text-[46px] font-medium tracking-[-0.05em]">Ratusan</strong>
        <span className="text-xs">mitra hiring dalam jaringan Talentiv Jobs</span>
      </div>
    </div>
  )
}

// "your next level" orbital from The Levela Way.
export function OrbitalVisual() {
  const otag = 'absolute bg-[#dc4e0d] px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.16em]'
  return (
    <div className="relative mt-12 h-[250px] w-full max-w-[360px]" aria-hidden="true">
      <div className="ring-line absolute inset-x-7 inset-y-3 -rotate-[28deg]" />
      <div className="ring-line absolute inset-x-0 inset-y-10 rotate-[28deg]" />
      <span className="absolute top-9 left-24 font-heading text-[40px] leading-[0.95] tracking-[-0.05em]">
        your
        <br />
        <em className="font-serif text-[52px] font-normal">next</em>
        <br />
        level
      </span>
      <span className="absolute top-14 left-[13.5rem] font-heading text-7xl font-light">↗</span>
      <span className={`${otag} top-2 left-4`}>KNOWLEDGE</span>
      <span className={`${otag} top-28 right-0`}>PRACTICE</span>
      <span className={`${otag} bottom-4 left-10`}>OPPORTUNITY</span>
    </div>
  )
}

// Arched portrait with rings and a tilted cream label, as on the original hero.
export function ArchPhoto({ src, alt, label, note }: { src: string; alt: string; label: string; note: string }) {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[460px] sm:h-[560px]">
      <div className="ring-line absolute top-8 -left-6 size-[340px] sm:size-[440px]" aria-hidden="true">
        <div className="ring-line absolute inset-7" />
      </div>
      <img
        src={asset(src)}
        alt={alt}
        fetchPriority="high"
        className="relative size-full rounded-[45%_45%_3%_3%] object-cover object-[center_30%] [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
      />
      <div className="absolute bottom-24 -left-2 flex items-center gap-3 rounded-md bg-label px-5 py-4 text-ink shadow-[0_15px_30px_rgba(139,40,0,.18)] [text-shadow:none] sm:-left-10">
        <span aria-hidden="true" className="text-lg">
          ↗
        </span>
        <span className="text-sm leading-tight">
          {label}
          <small className="mt-1.5 block text-[8px] tracking-[0.16em]">{note}</small>
        </span>
      </div>
    </div>
  )
}
