'use client'

import { useEffect, useState } from 'react'

export default function StickyMobileCta() {
  const [hidden, setHidden] = useState(false)

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

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-rv-lilac/20 bg-rv-bg/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        hidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <a
        href="#diagnostico"
        className="block rounded-full bg-rv-salmon px-6 py-3 text-center font-heading text-sm font-semibold text-rv-bg transition hover:bg-rv-pink"
      >
        Quero meu diagnóstico gratuito
      </a>
    </div>
  )
}
