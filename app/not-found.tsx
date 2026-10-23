import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-start justify-center px-4 py-16 sm:px-8">
      <p className="text-xs font-bold tracking-[0.2em]">404</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">Halaman tidak ditemukan.</h1>
      <p className="mt-4">Halaman yang kamu cari mungkin sudah dipindah.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" arrow>
          Ke Beranda
        </Button>
        <Button href="/program/" variant="ghost">
          Lihat Program
        </Button>
      </div>
    </main>
  )
}
