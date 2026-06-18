import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Método RV — Da Competência à Autoridade',
  description:
    'O método completo de Rita Vanin para transformar experiência ' +
    'profissional em autoridade reconhecida no digital.',
  robots: { index: false, follow: false },
}

export default function MetodoRV() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-rv-bg px-6">
      <Image
        src="/logo-footer.png"
        alt="RV Estratégia"
        width={240}
        height={80}
        className="object-contain"
        priority
      />
    </div>
  )
}
