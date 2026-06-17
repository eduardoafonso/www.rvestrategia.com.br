'use client'

import { FormEvent, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function FinalCTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [phone, setPhone] = useState('')

  function maskPhone(value: string) {
    const d = value.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2) return `(${d}`
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    const form = new FormData(event.currentTarget)
    // TODO: conectar ao backend/CRM
    console.log('Contato recebido:', {
      name: form.get('name'),
      phone: form.get('phone'),
      subject: form.get('subject'),
    })

    await new Promise((r) => setTimeout(r, 600))
    setStatus('success')
  }

  const inputClass =
    'rounded-lg border border-rv-lilac/30 bg-rv-bg px-4 py-2.5 text-rv-light placeholder:text-rv-light/40 focus:border-rv-salmon focus:outline-none'

  return (
    <section
      id="contato"
      className="scroll-mt-16 bg-rv-bg-alt px-4 py-8 text-center sm:px-6 sm:py-12"
    >
      <h2 className="font-heading text-3xl font-semibold text-rv-light sm:text-5xl">
        Vamos transformar a sua{' '}
        <span className="text-rv-salmon">marca</span>?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-sm text-rv-light/80 sm:text-base">
        Deixe seu contato e te retorno em breve.
      </p>

      <div className="mx-auto mt-10 max-w-md rounded-2xl bg-rv-card p-6 text-left shadow-xl sm:p-8">
        {status === 'success' ? (
          <div className="py-6 text-center">
            <p className="font-heading text-lg font-semibold text-rv-light">
              Mensagem recebida!
            </p>
            <p className="mt-2 text-sm text-rv-light/70">
              Em breve entro em contato com você.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-name" className="text-sm font-medium text-rv-light">
                Nome
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Seu nome completo"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-phone" className="text-sm font-medium text-rv-light">
                Telefone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                className={inputClass}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-subject" className="text-sm font-medium text-rv-light">
                Assunto
              </label>
              <textarea
                id="contact-subject"
                name="subject"
                required
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Como posso te ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 rounded-full bg-rv-cta px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-rv-cta-hover hover:shadow-lg disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
