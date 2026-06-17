'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroCta() {
  const [bobbing, setBobbing] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)
  const pendingRef = useRef(false)
  const visibleRef = useRef(false)

  const trigger = () => {
    setBobbing(false)
    requestAnimationFrame(() => requestAnimationFrame(() => setBobbing(true)))
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting && pendingRef.current) {
          pendingRef.current = false
          trigger()
        }
      },
      { threshold: 0.8 },
    )
    observer.observe(el)

    // dispara na abertura da página quando o botão entrar na tela
    pendingRef.current = true

    const onBob = () => {
      if (visibleRef.current) {
        trigger()
      } else {
        pendingRef.current = true
      }
    }

    window.addEventListener('hero-bob', onBob)
    return () => {
      observer.disconnect()
      window.removeEventListener('hero-bob', onBob)
    }
  }, [])

  return (
    <span
      onAnimationEnd={() => setBobbing(false)}
      className={`relative inline-flex${bobbing ? ' animate-bob' : ''}`}
    >
      <span className="absolute inset-0 animate-pulse rounded-full ring-4 ring-rv-cta/60" />
      <a
        ref={ref}
        href="#diagnostico"
        className="relative inline-flex items-center justify-center rounded-full bg-rv-cta px-8 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-rv-cta-hover hover:shadow-lg"
      >
        Quero meu diagnóstico gratuito
      </a>
    </span>
  )
}
