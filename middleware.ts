import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas públicas dentro de /admin
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user?.email) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // Verifica se o email está na tabela usuarios com ativo = true
  // Usa service role via REST para bypassar RLS sem SDK Node
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/usuarios` +
      `?email=eq.${encodeURIComponent(user.email)}&ativo=eq.true&select=id&limit=1`,
    {
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
      },
      cache: 'no-store',
    },
  )

  const rows: unknown[] = await res.json()

  if (!Array.isArray(rows) || rows.length === 0) {
    await supabase.auth.signOut()
    return NextResponse.redirect(
      new URL('/admin/login?erro=nao-autorizado', request.url),
    )
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin/:path*'],
}
