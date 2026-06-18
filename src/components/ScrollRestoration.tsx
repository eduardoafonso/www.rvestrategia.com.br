'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const KEY = 'rv_home_scroll'

export default function ScrollRestoration() {
  const pathname = usePathname()

  // Restore scroll when returning to home
  useEffect(() => {
    if (pathname === '/') {
      const saved = sessionStorage.getItem(KEY)
      if (saved) {
        const y = parseInt(saved, 10)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo(0, y)
          })
        })
        sessionStorage.removeItem(KEY)
      }
    }
  }, [pathname])

  // Save scroll before any link click that leaves home
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor?.href || window.location.pathname !== '/') return
      try {
        const url = new URL(anchor.href)
        if (url.origin === window.location.origin && url.pathname !== '/') {
          sessionStorage.setItem(KEY, String(window.scrollY))
        }
      } catch {}
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
