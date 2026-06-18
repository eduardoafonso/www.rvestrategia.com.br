'use server'

import { supabaseAdmin } from '@/lib/supabase-admin'
import { createSupabaseServer } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'

async function assertAdmin(): Promise<{ error: string } | null> {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user?.email) return { error: 'Não autenticado.' }

  const { data } = await supabaseAdmin
    .from('usuarios')
    .select('id')
    .eq('email', user.email)
    .eq('ativo', true)
    .limit(1)
    .maybeSingle()

  if (!data) return { error: 'Não autorizado.' }

  return null
}

export async function addUsuario(data: {
  email: string
  ativo: boolean
}): Promise<{ error?: string; success?: true }> {
  const authError = await assertAdmin()
  if (authError) return authError

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
  const authError = await assertAdmin()
  if (authError) return

  await supabaseAdmin.from('usuarios').delete().eq('id', id)
  revalidatePath('/admin/usuarios')
}

export async function toggleUsuario(
  id: string,
  ativo: boolean,
): Promise<void> {
  const authError = await assertAdmin()
  if (authError) return

  await supabaseAdmin.from('usuarios').update({ ativo }).eq('id', id)
  revalidatePath('/admin/usuarios')
}
