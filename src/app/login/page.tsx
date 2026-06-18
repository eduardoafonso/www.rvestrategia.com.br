import type { Metadata } from 'next'
import Image from 'next/image'
import LoginButton from '@/components/admin/LoginButton'

export const metadata: Metadata = {
  title: 'Acesso — RV Estratégia',
  description: 'Área restrita.',
  robots: { index: false, follow: false },
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>
}) {
  const { erro } = await searchParams

  return (
    <div className="flex min-h-screen items-center justify-center bg-rv-bg-deep px-4">
      <div className="w-full max-w-sm rounded-2xl border border-rv-lilac/20 bg-rv-bg p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image
            src="/logo-footer.png"
            alt="RV Estratégia"
            width={48}
            height={48}
          />
          <h1 className="font-heading text-xl font-semibold text-rv-light">
            Área Restrita
          </h1>
          <p className="text-center text-sm text-rv-light/50">
            Acesso somente para usuários autorizados.
          </p>
        </div>

        {erro === 'nao-autorizado' && (
          <p className="mb-5 rounded-lg bg-rv-salmon/10 px-4 py-3 text-sm text-rv-salmon">
            Acesso não autorizado. Fale com o administrador.
          </p>
        )}

        <LoginButton />
      </div>
    </div>
  )
}
