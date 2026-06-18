'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiUsers, FiMessageSquare, FiMail } from 'react-icons/fi'

const NAV = [
  { href: '/admin/leads', label: 'Leads', icon: FiUsers },
  { href: '/admin/mensagens', label: 'Mensagens', icon: FiMessageSquare },
  { href: '/admin/newsletter', label: 'Newsletter', icon: FiMail },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-52 flex-col border-r border-rv-lilac/20 bg-rv-bg-deep lg:flex">
      <nav className="flex flex-col gap-1 p-3 pt-4">
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
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
    </aside>
  )
}
