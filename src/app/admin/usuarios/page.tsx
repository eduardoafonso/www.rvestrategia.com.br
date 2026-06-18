import { supabaseAdmin } from '@/lib/supabase-admin'
import AddUserRow from '@/components/admin/AddUserRow'
import DeleteUserButton from '@/components/admin/DeleteUserButton'
import ToggleAtivoButton from '@/components/admin/ToggleAtivoButton'
import AdminPagination from '@/components/admin/AdminPagination'

export const dynamic = 'force-dynamic'

const PAGE_SIZE = 6

type UsuarioRow = {
  id: string
  email: string
  ativo: boolean
  created_at: string
}

export default async function UsuariosPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1', 10))
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const {
    data: usuarios,
    count,
    error,
  } = await supabaseAdmin
    .from('usuarios')
    .select('id, email, ativo, created_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-xl font-semibold text-rv-bg">
          Usuários
        </h1>
        <p className="mt-1 text-sm text-rv-bg/50">
          {count ?? 0} cadastrado{count !== 1 ? 's' : ''}
        </p>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-rv-card p-4 text-sm text-rv-salmon">
          Erro ao carregar os dados. Tente recarregar a página.
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-rv-lilac/30 bg-rv-bg shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-rv-lilac/20 bg-rv-bg-alt text-left">
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-rv-light/70">
                Email
              </th>
              <th className="w-20 px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-rv-light/70">
                Ativo
              </th>
              <th className="w-20 px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-rv-light/70">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            <AddUserRow />
            {!usuarios?.length && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-12 text-center text-sm text-rv-light/40"
                >
                  Nenhum usuário cadastrado.
                </td>
              </tr>
            )}
            {(usuarios as UsuarioRow[] | null)?.map((u) => (
              <tr
                key={u.id}
                className="border-b border-rv-lilac/10 transition last:border-0 odd:bg-rv-bg-alt/30 hover:bg-rv-card/50"
              >
                <td className="break-all px-4 py-2.5 text-rv-light">
                  {u.email}
                </td>
                <td className="px-4 py-2.5 text-center">
                  <ToggleAtivoButton id={u.id} ativo={u.ativo} />
                </td>
                <td className="px-4 py-2.5 text-center">
                  <DeleteUserButton id={u.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminPagination page={page} totalPages={totalPages} />
    </div>
  )
}
