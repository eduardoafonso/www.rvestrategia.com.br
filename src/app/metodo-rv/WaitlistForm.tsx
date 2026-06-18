'use client'

import { FormEvent, useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { validatePhone } from '@/lib/validatePhone'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'rounded-lg border border-rv-lilac/30 bg-rv-bg px-4 py-2.5 text-rv-light placeholder:text-rv-light/40 focus:border-rv-salmon focus:outline-none'

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [phone, setPhone] = useState('')

  function maskPhone(value: string) {
    const d = value.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2) return `(${d}`
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    if (d.length <= 10)
      return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = new FormData(event.currentTarget)
    const phoneValue = form.get('phone') as string

    if (!validatePhone(phoneValue)) {
      setStatus('error')
      setErrorMessage(
        'Telefone inválido. Informe DDD + número (10 ou 11 dígitos).',
      )
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          phone: phoneValue,
          subject: 'Fila - Método RV',
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(data.message ?? 'Não foi possível enviar.')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Algo deu errado. Tente novamente em instantes.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-6">
        <FiCheckCircle className="h-14 w-14 text-rv-salmon" />
        <p className="mt-4 font-heading text-lg font-semibold text-rv-light">
          Você está na lista!
        </p>
        <p className="mt-2 text-sm text-rv-light/70">
          Assim que o Método RV estiver disponível, você será o primeiro a saber.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="wl-name" className="text-sm font-medium text-rv-light">
          Nome
        </label>
        <input
          id="wl-name"
          name="name"
          type="text"
          required
          className={inputClass}
          placeholder="Seu nome completo"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="wl-email"
          className="text-sm font-medium text-rv-light"
        >
          Email
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="seuemail@exemplo.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="wl-phone"
          className="text-sm font-medium text-rv-light"
        >
          Telefone
        </label>
        <input
          id="wl-phone"
          name="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          className={inputClass}
          placeholder="(00) 00000-0000"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-rv-salmon">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 rounded-full bg-rv-cta px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-rv-cta-hover hover:shadow-lg disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === 'loading' ? 'Enviando...' : 'Quero ser avisado'}
      </button>
    </form>
  )
}
