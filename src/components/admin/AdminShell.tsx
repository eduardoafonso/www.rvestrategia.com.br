'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FiLogOut } from 'react-icons/fi'
import AdminSidebar from './AdminSidebar'
import AdminMobileDrawer from './AdminMobileDrawer'
import { createSupabaseBrowser } from '@/lib/supabase-browser'

function LogoutModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-rv-bg-deep p-6 shadow-2xl">
        <h2 className="font-heading text-lg font-semibold text-rv-light">
          Sair do painel?
        </h2>
        <p className="mt-2 text-sm text-rv-light/60">
          Você será redirecionado para a página inicial.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg px-4 py-2 text-sm text-rv-light/60 transition hover:text-rv-light"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-rv-salmon px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}

function AdminHeader({
  onMenuClick,
  onLogout,
}: {
  onMenuClick: () => void
  onLogout: () => void
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-rv-lilac/20 bg-rv-bg-deep">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-footer.png"
            alt="RV Estratégia"
            width={32}
            height={32}
            className="shrink-0"
          />
          <span className="font-heading text-sm tracking-wide text-rv-light sm:text-base">
            RITA VANIN
          </span>
          {/* Item 3 — hidden below 360px: prevents overflow on very small phones.
               min-[360px]: is a Tailwind v4 arbitrary breakpoint, no theme config needed. */}
          <span className="hidden min-[360px]:inline text-rv-lilac/60">|</span>
          <span className="hidden min-[360px]:inline text-sm text-rv-light/70">
            Estrategista Digital
          </span>
        </div>

        <button
          onClick={onLogout}
          className="hidden items-center gap-2 rounded-lg border border-rv-lilac/40 px-3 py-1.5 text-sm text-rv-light/60 transition hover:border-rv-salmon hover:text-rv-salmon lg:flex"
        >
          <FiLogOut className="h-4 w-4" />
          Sair
        </button>

        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rv-lilac/40 text-rv-light/70 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-5 w-5"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default function AdminShell({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [logoutConfirm, setLogoutConfirm] = useState(false)

  async function handleLogoutConfirm() {
    const supabase = createSupabaseBrowser()
    await supabase.auth.signOut()
    setLogoutConfirm(false)
    router.push('/login')
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <AdminHeader
        onMenuClick={() => setDrawerOpen(true)}
        onLogout={() => setLogoutConfirm(true)}
      />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />
        {/* Item 5 — p-3 on mobile, p-6 on sm+: 24px gutter on 375px eats ~13% of the viewport */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-rv-light via-rv-light to-rv-lilac/40 p-3 sm:p-6">
          {children}
        </main>
      </div>
      <AdminMobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onLogout={() => {
          setDrawerOpen(false)
          setLogoutConfirm(true)
        }}
      />
      {logoutConfirm && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={() => setLogoutConfirm(false)}
        />
      )}
    </div>
  )
}
