import { createSupabaseServer } from '@/lib/supabase-server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${origin}/login?erro=sem-codigo`)
  }

  try {
    const supabase = await createSupabaseServer()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) {
      return NextResponse.redirect(`${origin}/login?erro=callback`)
    }
  } catch {
    return NextResponse.redirect(`${origin}/login?erro=callback`)
  }

  return NextResponse.redirect(`${origin}/admin`)
}
