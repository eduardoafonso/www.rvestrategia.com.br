'use client'

import { useTransition } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { deleteUsuario } from '@/app/admin/usuarios/actions'

export default function DeleteUserButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    if (!confirm('Remover este usuário?')) return
    startTransition(() => deleteUsuario(id))
  }

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={handleDelete}
      className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-rv-light/40 transition hover:bg-rv-salmon/10 hover:text-rv-salmon disabled:opacity-40"
      title="Remover usuário"
    >
      <FiTrash2 className="h-4 w-4" />
    </button>
  )
}
