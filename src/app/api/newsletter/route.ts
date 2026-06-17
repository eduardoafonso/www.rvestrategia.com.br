import { NextResponse } from 'next/server'
import { validateEmail } from '@/lib/validateEmail'

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

  // TODO: adicionar a uma lista real de newsletter (provedor de email marketing).
  console.log('Nova inscrição na newsletter:', { email })

  return NextResponse.json({ ok: true })
}
