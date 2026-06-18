'use client'

import { useTransition } from 'react'
import { toggleUsuario } from '@/app/admin/usuarios/actions'

export default function ToggleAtivoButton({
  id,
  ativo,
}: {
  id: string
  ativo: boolean
}) {
  const [isPending, startTransition] = useTransition()

  return (
    <input
      type="checkbox"
      checked={ativo}
      disabled={isPending}
      onChange={() => startTransition(() => toggleUsuario(id, !ativo))}
      className="h-4 w-4 cursor-pointer accent-rv-salmon disabled:cursor-wait disabled:opacity-50"
      title={ativo ? 'Desativar usuário' : 'Ativar usuário'}
    />
  )
}
