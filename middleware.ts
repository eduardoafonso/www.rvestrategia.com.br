import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  try {
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

    // Verifica autorização na tabela usuarios via REST (service role, bypassa RLS)
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

    const rows: unknown = await res.json()

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.redirect(
        new URL('/admin/login?erro=nao-autorizado', request.url),
      )
    }

    return supabaseResponse
  } catch {
    // Qualquer erro (env var ausente, rede, token inválido) bloqueia o acesso
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}

export const config = {
  // '/admin' cobre o path exato; '/admin/:path*' cobre subpaths
  matcher: ['/admin', '/admin/:path*'],
}
