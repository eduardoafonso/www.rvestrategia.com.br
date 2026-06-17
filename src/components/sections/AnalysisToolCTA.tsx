'use client'

import { FormEvent, useState } from 'react'

type LeadResult = {
  score: number
  insights: string[]
}

type Status = 'idle' | 'loading' | 'error' | 'success'

export default function AnalysisToolCTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [result, setResult] = useState<LeadResult | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = new FormData(event.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(data.message ?? 'Não foi possível validar seu email.')
        return
      }

      setResult(data.result)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Algo deu errado. Tente novamente em instantes.')
    }
  }

  return (
    <section
      id="diagnostico"
      className="scroll-mt-16 bg-rv-light px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold text-rv-bg sm:text-4xl">
          Quais as competências e estratégias podemos estruturar no seu
          negócio?
        </h2>
        <p className="mt-4 text-rv-bg/70">
          Receba gratuitamente uma análise inicial do seu perfil e descubra
          os primeiros passos para transformar experiência em autoridade.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-md rounded-2xl bg-rv-bg p-6 shadow-xl sm:p-8">
        {status === 'success' && result ? (
          <div className="text-center">
            <p className="font-heading text-sm uppercase tracking-wide text-rv-pink">
              Resultado liberado
            </p>
            <p className="mt-2 font-heading text-4xl font-semibold text-rv-light">
              {result.score}/100
            </p>
            <ul className="mt-4 space-y-2 text-left text-sm text-rv-light/85">
              {result.insights.map((insight) => (
                <li key={insight} className="flex gap-2">
                  <span className="text-rv-salmon">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-rv-card/60 p-3 text-xs text-rv-light/80">
              Essa é a análise gratuita. A versão completa, com diagnóstico
              detalhado e plano de ação, chega no seu email em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-rv-light"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border border-rv-lilac/30 bg-rv-bg-alt px-4 py-2 text-rv-light placeholder:text-rv-light/40 focus:border-rv-salmon focus:outline-none"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-rv-light"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-rv-lilac/30 bg-rv-bg-alt px-4 py-2 text-rv-light placeholder:text-rv-light/40 focus:border-rv-salmon focus:outline-none"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-rv-light"
              >
                WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="[0-9()+\-\s]{8,}"
                className="rounded-lg border border-rv-lilac/30 bg-rv-bg-alt px-4 py-2 text-rv-light placeholder:text-rv-light/40 focus:border-rv-salmon focus:outline-none"
                placeholder="(00) 00000-0000"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-rv-salmon">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 rounded-full bg-rv-salmon px-6 py-3 font-heading text-sm font-semibold text-rv-bg transition hover:scale-[1.02] hover:bg-rv-pink hover:shadow-lg disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'loading'
                ? 'Analisando...'
                : 'Quero minha análise gratuita'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
