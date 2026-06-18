import { NextResponse } from 'next/server'
import { validateEmail } from '@/lib/validateEmail'
import { supabase } from '@/lib/supabase'

const MOCK_INSIGHTS = [
  'Sua bio não comunica com clareza o problema que você resolve.',
  'Faltam provas sociais visíveis nos primeiros conteúdos do perfil.',
  'Seu posicionamento atual atrai curiosos, não clientes ideais.',
]

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const social = typeof body?.social === 'string' ? body.social.trim() : ''
  const phone = typeof body?.phone === 'string' ? body.phone.trim() : ''

  if (!name || !email || !social) {
    return NextResponse.json(
      { message: 'Preencha nome, email e rede social.' },
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

  const { error } = await supabase
    .from('leads')
    .upsert(
      { name, email, social, phone: phone || null, diagnostico: true },
      { onConflict: 'email', ignoreDuplicates: false },
    )

  if (error) {
    console.error('[lead] Supabase error', error)
  }

  return NextResponse.json({
    result: {
      score: 62,
      insights: MOCK_INSIGHTS,
    },
  })
}
