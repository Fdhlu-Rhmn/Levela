export type Category = 'Business' | 'Marketing' | 'Creative'
export type ProgramStatus = 'available' | 'coming-soon'

export type Package = {
  name: string
  normalPrice?: number
  promoPrice?: number
  promoUntil?: string // YYYY-MM-DD
  checkoutUrl?: string
  features: string[]
}

export type Session = { code: string; date: string; title: string }
export type Mentor = { name: string; role: string; photo?: string; experience?: string }
export type Tool = { name: string; use: string }
export type GalleryItem = { src: string; alt: string; caption: string }
export type FaqItem = { q: string; a: string }
export type Partner = { id: string; name: string; logo?: string; roles: string[] }

export type Talent = {
  id: string
  sample: boolean
  name: string
  role: string
  photo: string
  salaryFrom?: number
  education: { org: string; program: string; date: string; summary: string }
  experience: { org: string; role: string; date: string; summary: string }
  skills: string[]
  tools: string[]
  partnerIds: string[]
}

export type ProgramLp = {
  heroSubtitle: string
  skills: { title: string; desc: string }[]
  overview: string[]
  stats: { value: string; label: string }[]
  careers: string[]
  audience: { title: string; desc: string }[]
  situations: string[]
  tools: Tool[]
  phase1: { title: string; time: string; sessions: Session[] }
  phase2: { title: string; modules: string[] }
  projects: string[]
  mentors: Mentor[]
  talentIds: string[]
  certificate: string
  certificateImage: string
  gallery: GalleryItem[]
  reasons: string[]
  faq: FaqItem[]
}

export type Program = {
  slug: string
  title: string
  category: Category
  status: ProgramStatus
  summary: string
  keywords: string[]
  image: string
  imageAlt: string
  duration?: string
  level?: string
  format?: string
  batchStart?: string
  whatsappText: string
  packages?: Package[]
  lp?: ProgramLp
}
