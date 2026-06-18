import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import AdminShell from '@/components/admin/AdminShell'
import { createSupabaseServer } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Admin — RV Estratégia',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user?.email) {
    redirect('/login')
  }

  const { data } = await supabaseAdmin
    .from('usuarios')
    .select('id')
    .eq('email', user.email)
    .eq('ativo', true)
    .limit(1)
    .maybeSingle()

  if (!data) {
    redirect('/login?erro=nao-autorizado')
  }

  return <AdminShell>{children}</AdminShell>
}
