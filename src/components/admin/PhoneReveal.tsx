'use client'

import { useState } from 'react'
import { FiPhone } from 'react-icons/fi'

export default function PhoneReveal({ phone }: { phone: string | null }) {
  const [revealed, setRevealed] = useState(false)

  if (!phone) return <span className="text-rv-light/30">—</span>

  return (
    <button
      onClick={() => setRevealed((v) => !v)}
      className="flex items-center gap-2 text-rv-light/60 transition hover:text-rv-light"
      title={revealed ? 'Ocultar' : 'Clique para ver o telefone'}
    >
      <FiPhone className="h-4 w-4 shrink-0" />
      {revealed && <span className="text-sm">{phone}</span>}
    </button>
  )
}
