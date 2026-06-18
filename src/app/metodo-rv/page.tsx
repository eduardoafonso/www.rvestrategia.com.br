import type { Metadata } from 'next'
import Image from 'next/image'
import WaitlistForm from './WaitlistForm'

export const metadata: Metadata = {
  title: 'Método RV — Da Competência à Autoridade',
  description:
    'O método completo de Rita Vanin para transformar experiência ' +
    'profissional em autoridade reconhecida no digital.',
  robots: { index: false, follow: false },
}

export default function MetodoRV() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-rv-bg px-6 py-16">
      <Image
        src="/logo-footer.png"
        alt="RV Estratégia"
        width={200}
        height={68}
        className="object-contain"
        priority
      />

      <div className="mt-10 w-full max-w-md text-center">
        <h1 className="font-heading text-2xl font-semibold text-rv-light sm:text-3xl">
          Em breve disponível
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-rv-light/70">
          O <strong className="text-rv-pink">Método RV da Competência à Autoridade</strong> está
          sendo preparado. Entre na lista de espera e seja o primeiro a
          saber quando lançar.
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-rv-card p-6 shadow-xl sm:p-8">
        <WaitlistForm />
      </div>
    </div>
  )
}
