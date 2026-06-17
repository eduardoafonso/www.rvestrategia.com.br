'use client'

import { useSyncExternalStore } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''
const STORAGE_KEY = 'rv-cookie-consent'

type Consent = 'accepted' | 'declined' | null

function getConsent(): Consent {
  return localStorage.getItem(STORAGE_KEY) as Consent
}

function subscribe(cb: () => void) {
  window.addEventListener('storage', cb)
  return () => window.removeEventListener('storage', cb)
}

export default function CookieBanner() {
  const consent = useSyncExternalStore<Consent>(
    subscribe,
    getConsent,
    () => null,
  )

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    window.dispatchEvent(new Event('storage'))
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    window.dispatchEvent(new Event('storage'))
  }

  if (consent === 'accepted') {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </>
    )
  }

  if (consent !== null) return null

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" />

      <div className="fixed inset-x-4 bottom-6 z-[70] mx-auto max-w-2xl rounded-2xl border border-rv-lilac/30 bg-rv-bg p-6 shadow-2xl sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:px-8">
        <p className="font-heading text-base font-semibold text-rv-light">
          Este site usa cookies
        </p>
        <p className="mt-2 text-sm leading-relaxed text-rv-light/70">
          Utilizamos cookies do Google Analytics para entender como você navega
          pelo site e melhorar sua experiência. Nenhum dado é compartilhado com
          terceiros para fins publicitários.{' '}
          <a
            href="/politica-de-privacidade"
            className="underline transition hover:text-rv-salmon"
          >
            Política de Privacidade
          </a>
          .
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={decline}
            className="cursor-pointer rounded-full border border-rv-lilac/40 px-6 py-2.5 text-sm text-rv-light/70 transition hover:border-rv-lilac hover:text-rv-light"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="cursor-pointer rounded-full bg-rv-cta px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-rv-cta-hover"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </>
  )
}
