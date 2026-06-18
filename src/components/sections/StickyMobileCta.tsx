'use client'

import { useEffect, useState } from 'react'

export default function StickyMobileCta() {
  const [hidden, setHidden] = useState(false)
  const [pulsing, setPulsing] = useState(true)

  useEffect(() => {
    const target = document.getElementById('diagnostico')
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setPulsing(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 6px)' }}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-rv-lilac/20 bg-rv-bg px-4 pt-2 transition-transform duration-300 sm:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <span className="relative flex">
        {pulsing && (
          <span className="absolute inset-0 animate-pulse rounded-full ring-4 ring-rv-cta/60" />
        )}
        <a
          href="/#diagnostico"
          className="relative block w-full rounded-full bg-rv-cta px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-rv-cta-hover"
        >
          Quero meu diagnóstico gratuito
        </a>
      </span>
    </div>
  )
}
