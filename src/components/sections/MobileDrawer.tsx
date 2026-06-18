'use client'

import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

type MobileDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 sm:hidden ${
        isOpen ? '' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute right-0 top-0 flex h-full w-72 flex-col gap-8 border-l border-rv-salmon/40 bg-rv-bg-alt px-6 py-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-rv-lilac/40 text-rv-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-5 w-5"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              scroll={false}
              onClick={() => {
                onClose()
                const id = link.href.replace('#', '')
                setTimeout(() => {
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  if (link.href === '#home')
                    window.dispatchEvent(new CustomEvent('hero-bob'))
                }, 300)
              }}
              className="font-heading text-lg text-rv-light transition hover:text-rv-pink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
