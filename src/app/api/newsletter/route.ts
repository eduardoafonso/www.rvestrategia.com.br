import { NextResponse } from 'next/server'
import { validateEmail } from '@/lib/validateEmail'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim() : ''

  if (!email) {
    return NextResponse.json({ message: 'Informe um email.' }, { status: 400 })
  }

  const { valid, reason } = await validateEmail(email)

  if (!valid) {
    const message =
      reason === 'format'
        ? 'Esse email não parece válido. Revise e tente novamente.'
        : 'Não conseguimos confirmar esse domínio de email. Tente outro.'
    return NextResponse.json({ message }, { status: 400 })
  }

  const { error } = await supabase
    .from('subscribers')
    .insert({ email })

  if (error && error.code !== '23505') {
    console.error('[newsletter] Supabase error', error)
    return NextResponse.json(
      { message: 'Não foi possível completar a inscrição. Tente novamente.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
