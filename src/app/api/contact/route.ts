import { NextResponse } from 'next/server'
import { validateEmail } from '@/lib/validateEmail'
import { validatePhone } from '@/lib/validatePhone'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : ''
  const subject = typeof body?.subject === 'string' ? body.subject.trim() : ''

  if (!name || !email || !phone || !subject) {
    return NextResponse.json(
      { message: 'Preencha todos os campos obrigatórios.' },
      { status: 400 },
    )
  }

  if (!validatePhone(phone)) {
    return NextResponse.json(
      { message: 'Telefone inválido. Informe DDD + número (10 ou 11 dígitos).' },
      { status: 400 },
    )
  }

  const { valid, reason } = await validateEmail(email)

  if (!valid) {
    const message =
      reason === 'format'
        ? 'Esse email não parece válido. Revise e tente novamente.'
        : 'Não conseguimos confirmar esse domínio de email. Tente outro.'
    return NextResponse.json({ message }, { status: 400 })
  }

  const { data: lead, error: leadError } = await supabase
    .from('leads')
    .upsert(
      { name, email, phone: phone || null, contato: true },
      { onConflict: 'email', ignoreDuplicates: false },
    )
    .select('id')
    .single()

  if (leadError || !lead) {
    console.error('[contact] lead upsert error', leadError)
    return NextResponse.json(
      { message: 'Não foi possível enviar sua mensagem. Tente novamente.' },
      { status: 500 },
    )
  }

  const { error: msgError } = await supabase
    .from('messages')
    .insert({ lead_id: lead.id, subject })

  if (msgError) {
    console.error('[contact] message insert error', msgError)
    return NextResponse.json(
      { message: 'Não foi possível enviar sua mensagem. Tente novamente.' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
