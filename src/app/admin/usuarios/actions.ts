'use server'

import { supabaseAdmin } from '@/lib/supabase-admin'
import { revalidatePath } from 'next/cache'

export async function addUsuario(data: {
  email: string
  ativo: boolean
}): Promise<{ error?: string; success?: true }> {
  const email = data.email.trim().toLowerCase()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Email inválido.' }
  }

  const { error } = await supabaseAdmin
    .from('usuarios')
    .insert({ email, ativo: data.ativo })

  if (error) {
    if (error.code === '23505') return { error: 'Email já cadastrado.' }
    return { error: 'Erro ao cadastrar usuário.' }
  }

  revalidatePath('/admin/usuarios')
  return { success: true }
}

export async function deleteUsuario(id: string): Promise<void> {
  await supabaseAdmin.from('usuarios').delete().eq('id', id)
  revalidatePath('/admin/usuarios')
}

export async function toggleUsuario(
  id: string,
  ativo: boolean,
): Promise<void> {
  await supabaseAdmin.from('usuarios').update({ ativo }).eq('id', id)
  revalidatePath('/admin/usuarios')
}
