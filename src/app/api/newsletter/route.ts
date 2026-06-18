import { NextResponse } from 'next/server'
import { validateEmail } from '@/lib/validateEmail'

export async function POST(request: Request) {
  const substackUrl = process.env.SUBSTACK_URL ?? ''
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

  const params = new URLSearchParams({ email })
  const res = await fetch(substackUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error('[newsletter] Substack error', res.status, text)
    return NextResponse.json(
      { message: 'Não foi possível completar a inscrição. Tente novamente.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
