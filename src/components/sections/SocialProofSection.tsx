'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Depoimento em breve — aguardando autorização do cliente para publicar.',
    author: 'Ana Paula',
    role: 'Enfermeira',
    avatar: '/avatars/cliente-1.jpg',
  },
  {
    id: 2,
    quote:
      'Depoimento em breve — aguardando autorização do cliente para publicar.',
    author: 'Cliente 2',
    role: 'Lojista',
    avatar: '/avatars/cliente-2.jpg',
  },
  {
    id: 3,
    quote:
      'Depoimento em breve — aguardando autorização do cliente para publicar.',
    author: 'Cliente 3',
    role: 'Médico',
    avatar: '/avatars/cliente-3.jpg',
  },
  {
    id: 4,
    quote:
      'Depoimento em breve — aguardando autorização do cliente para publicar.',
    author: 'Cliente 4',
    role: 'Médica',
    avatar: null,
  },
  {
    id: 5,
    quote:
      'Depoimento em breve — aguardando autorização do cliente para publicar.',
    author: 'Cliente 5',
    role: 'Fisioterapeuta',
    avatar: null,
  },
]

const VISIBLE = 3
const MAX_PAGE = TESTIMONIALS.length - VISIBLE // 2

type Phase = 'idle' | 'exit' | 'enter'

export default function SocialProofSection() {
  const [page, setPage] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goToPage = useCallback((i: number) => {
    if (i === page || phase !== 'idle') return
    const dir = i > page ? 1 : -1
    setDirection(dir)
    setPhase('exit')
    timerRef.current = setTimeout(() => {
      setPage(i)
      setPhase('enter')
      timerRef.current = setTimeout(() => setPhase('idle'), 16)
    }, 220)
  }, [page, phase])

  const slideClass =
    phase === 'idle'
      ? 'opacity-100 translate-x-0'
      : phase === 'exit'
        ? direction === 1
          ? 'opacity-0 -translate-x-10'
          : 'opacity-0 translate-x-10'
        : direction === 1
          ? 'opacity-0 translate-x-10'
          : 'opacity-0 -translate-x-10'

  const visible = TESTIMONIALS.slice(page, page + VISIBLE)

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-semibold text-rv-bg sm:text-4xl">
          O que dizem meus clientes
        </h2>
        <p className="mt-4 max-w-xl text-sm text-rv-body sm:text-base">
          Profissionais que transformaram sua comunicação e passaram a
          atrair oportunidades reais no digital.
        </p>

        {/* Cards — desktop: 3 visíveis; mobile: 1 */}
        <div
          className={`mt-10 grid gap-6 transition-all duration-200 sm:grid-cols-3 ${slideClass}`}
        >
          {visible.map((t) => (
            <div key={t.id} className="flex flex-col">
              {/* Balão */}
              <div className="relative rounded-2xl border border-rv-lilac/25 bg-rv-light p-6 shadow-lg">
                <p className="text-sm leading-relaxed text-rv-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Cauda do balão */}
                <span
                  aria-hidden
                  className="absolute -bottom-[10px] left-6 h-0 w-0 border-x-[10px] border-t-[10px] border-x-transparent border-t-rv-light"
                />
              </div>

              {/* Autor */}
              <div className="mt-5 flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-rv-card">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-base font-semibold text-rv-pink">
                      {t.author[0]}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-rv-body">
                    {t.author}
                  </p>
                  <p className="text-xs text-rv-body/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: MAX_PAGE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Ver grupo ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${page === i
                ? 'w-6 bg-rv-bg'
                : 'w-2.5 bg-rv-bg/25 hover:bg-rv-bg/60'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
