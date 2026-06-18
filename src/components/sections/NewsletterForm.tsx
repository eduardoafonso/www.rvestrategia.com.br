'use client'

import { FormEvent, useState } from 'react'
import { PRIVACY_POLICY_PATH, SOCIAL_LINKS } from '@/lib/constants'

export default function NewsletterForm() {
  const [done, setDone] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email') as string
    const url = `${SOCIAL_LINKS.substack}?email=${encodeURIComponent(email)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setDone(true)
  }

  if (done) {
    return (
      <p className="rounded-full border border-rv-lilac/30 px-5 py-3 text-sm text-rv-pink">
        Abrindo o Substack — confirme sua inscrição lá!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Digite seu email"
          className="flex-1 rounded-full border border-rv-lilac/30 bg-transparent px-5 py-3 text-sm text-rv-light placeholder:text-rv-light/40 focus:border-rv-salmon focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-rv-cta px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-rv-cta-hover"
        >
          Inscrever
        </button>
      </div>
      <p className="text-xs text-rv-light/50">
        Ao se inscrever, você concorda com o tratamento dos seus dados
        pessoais de acordo com a LGPD e com a nossa{' '}
        <a
          href={PRIVACY_POLICY_PATH}
          className="underline transition hover:text-rv-pink"
        >
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  )
}
