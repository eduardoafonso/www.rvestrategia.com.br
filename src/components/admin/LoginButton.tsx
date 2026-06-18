'use client'

import { createSupabaseBrowser } from '@/lib/supabase-browser'
import { FcGoogle } from 'react-icons/fc'

export default function LoginButton() {
  async function handleLogin() {
    const supabase = createSupabaseBrowser()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-rv-lilac/30 bg-rv-bg-alt px-4 py-3 text-sm font-medium text-rv-light transition hover:border-rv-lilac/60 hover:bg-rv-card"
    >
      <FcGoogle className="h-5 w-5 shrink-0" />
      Entrar com Google
    </button>
  )
}
