'use client'

import { useState } from 'react'
import { createSupabaseBrowser } from '@/lib/supabase-browser'
import { FcGoogle } from 'react-icons/fc'
import { FiLoader } from 'react-icons/fi'

export default function LoginButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleLogin() {
    setLoading(true)
    setError(null)
    try {
      const supabase = createSupabaseBrowser()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) setError(error.message)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro ao iniciar login.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleLogin}
        disabled={loading}
        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-rv-lilac/30 bg-rv-bg-alt px-4 py-3 text-sm font-medium text-rv-light transition hover:border-rv-lilac/60 hover:bg-rv-card disabled:cursor-wait disabled:opacity-60"
      >
        {loading ? (
          <FiLoader className="h-5 w-5 animate-spin" />
        ) : (
          <FcGoogle className="h-5 w-5 shrink-0" />
        )}
        {loading ? 'Redirecionando…' : 'Entrar com Google'}
      </button>

      {error && (
        <p className="rounded-lg bg-rv-salmon/10 px-4 py-3 text-sm text-rv-salmon">
          {error}
        </p>
      )}
    </div>
  )
}
