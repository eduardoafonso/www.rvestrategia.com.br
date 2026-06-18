'use client'

import { useState, useTransition } from 'react'
import { addUsuario } from '@/app/admin/usuarios/actions'

export default function AddUserRow() {
  const [email, setEmail] = useState('')
  const [ativo, setAtivo] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleAdd() {
    if (!email.trim()) return
    startTransition(async () => {
      const result = await addUsuario({ email, ativo })
      if (result?.error) {
        setError(result.error)
      } else {
        setError(null)
        setEmail('')
        setAtivo(true)
      }
    })
  }

  return (
    <>
      <tr className="border-b-2 border-rv-lilac/40 bg-rv-bg-deep/50">
        <td className="px-4 py-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="novo@email.com"
            className="w-full rounded-lg border border-rv-lilac/30 bg-rv-bg px-3 py-1.5 text-sm text-rv-light placeholder:text-rv-light/30 focus:border-rv-lilac focus:outline-none"
          />
          {error && (
            <p className="mt-1 text-xs text-rv-salmon">{error}</p>
          )}
        </td>
        <td className="px-4 py-2.5 text-center">
          <input
            type="checkbox"
            checked={ativo}
            onChange={(e) => setAtivo(e.target.checked)}
            className="h-4 w-4 cursor-pointer accent-rv-salmon"
          />
        </td>
        <td className="px-4 py-2.5 text-center">
          <button
            type="button"
            onClick={handleAdd}
            disabled={isPending || !email.trim()}
            className="rounded-lg bg-rv-salmon px-4 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isPending ? '…' : 'Adicionar'}
          </button>
        </td>
      </tr>
    </>
  )
}
