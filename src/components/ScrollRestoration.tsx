'use client'

import { useEffect } from 'react'

export default function ScrollRestoration() {
  useEffect(() => {
    window.history.scrollRestoration = 'auto'
  }, [])

  return null
}
