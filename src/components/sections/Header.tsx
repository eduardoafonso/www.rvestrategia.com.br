'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { NAV_LINKS } from '@/lib/constants'
import MobileDrawer from './MobileDrawer'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-rv-lilac/20 bg-rv-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#hero" className="flex items-center gap-2">
          <Logo size={36} />
          <span className="font-heading text-sm tracking-wide text-rv-light sm:text-base">
            RITA VANIN
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-rv-light/90 transition hover:text-rv-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-rv-lilac/40 text-rv-light sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}
