// Proxy/middleware movido para src/proxy.ts (Next.js 16)
// Este arquivo existe apenas para compatibilidade — matcher vazio garante que não executa.
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(_req: NextRequest) {
  return NextResponse.next()
}

export const config = { matcher: [] }
