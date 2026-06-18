'use client'

import { FormEvent, useState } from 'react'
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { PRIVACY_POLICY_PATH } from '@/lib/constants'

type Status = 'idle' | 'loading' | 'error' | 'success' | 'duplicate'

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = event.currentTarget
    const email = new FormData(form).get('email')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setMessage(data.message ?? 'Não foi possível confirmar esse email.')
        return
      }

      setStatus(data.duplicate ? 'duplicate' : 'success')
      form.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setMessage('Algo deu errado. Tente novamente em instantes.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 rounded-full border border-rv-lilac/30 px-5 py-3 text-sm text-rv-pink">
        <FiCheckCircle className="h-4 w-4 shrink-0" />
        <span>Inscrição confirmada! Você vai receber novidades em breve.</span>
      </div>
    )
  }

  if (status === 'duplicate') {
    return (
      <div className="flex items-center gap-2 rounded-full border border-rv-lilac/30 px-5 py-3 text-sm text-rv-light/70">
        <FiAlertCircle className="h-4 w-4 shrink-0 text-rv-salmon" />
        <span>Email já cadastrado na nossa lista.</span>
      </div>
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
          disabled={status === 'loading'}
          className="rounded-full bg-rv-cta px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-rv-cta-hover disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando...' : 'Inscrever'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-rv-salmon">{message}</p>
      )}
      <p className="text-xs text-rv-light/50">
        Ao se inscrever, você concorda com o tratamento dos seus dados
        pessoais de acordo com a LGPD e com a nossa{' '}
        <a
          href={PRIVACY_POLICY_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition hover:text-rv-pink"
        >
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  )
}
