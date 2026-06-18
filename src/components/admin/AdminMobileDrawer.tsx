'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FiUser,
  FiUsers,
  FiMessageSquare,
  FiMail,
  FiX,
  FiLogOut,
} from 'react-icons/fi'

const NAV = [
  { href: '/admin/usuarios', label: 'Usuários', icon: FiUser },
  { href: '/admin/leads', label: 'Leads', icon: FiUsers },
  { href: '/admin/mensagens', label: 'Mensagens', icon: FiMessageSquare },
  { href: '/admin/newsletter', label: 'Newsletter', icon: FiMail },
]

export default function AdminMobileDrawer({
  open,
  onClose,
  onLogout,
}: {
  open: boolean
  onClose: () => void
  onLogout: () => void
}) {
  const pathname = usePathname()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-64 flex-col bg-rv-bg-deep transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-rv-lilac/20 px-4">
          <span className="font-heading text-sm font-semibold text-rv-light">
            Administração
          </span>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-rv-light/60 transition hover:text-rv-light"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-rv-lilac/20 px-4 py-4">
          <p className="text-xs text-rv-light/40">Usuário</p>
          <p className="text-sm font-medium text-rv-light">Admin</p>
        </div>

        <nav className="flex flex-col gap-1 p-3 pt-4">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                pathname.startsWith(href)
                  ? 'bg-rv-bg-alt text-rv-light'
                  : 'text-rv-light/60 hover:bg-rv-bg-alt/60 hover:text-rv-light'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto border-t border-rv-lilac/20 p-3">
          <button
            onClick={onLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-rv-light/60 transition hover:bg-rv-bg-alt/60 hover:text-rv-light"
          >
            <FiLogOut className="h-4 w-4 shrink-0" />
            Sair
          </button>
        </div>
      </div>
    </>
  )
}
