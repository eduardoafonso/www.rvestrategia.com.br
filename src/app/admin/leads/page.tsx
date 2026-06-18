import { LuBot, LuMailCheck } from 'react-icons/lu'
import { supabaseAdmin } from '@/lib/supabase-admin'
import AdminPagination from '@/components/admin/AdminPagination'
import PhoneModal from '@/components/admin/PhoneModal'
import Tooltip from '@/components/admin/Tooltip'

export const revalidate = 0

const PAGE_SIZE = 5

type LeadRow = {
  id: string
  name: string
  email: string
  phone: string | null
  diagnostico: boolean
  messages: { id: string }[]
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1', 10))
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const { data: leads, count, error } = await supabaseAdmin
    .from('leads')
    .select('id, name, email, phone, diagnostico, messages(id)', {
      count: 'exact',
    })
    .order('created_at', { ascending: false })
    .range(from, to)

  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-xl font-semibold text-rv-bg">
          Leads
        </h1>
        <p className="mt-1 text-sm text-rv-bg/50">{count ?? 0} registros</p>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-rv-card p-4 text-sm text-rv-salmon">
          Erro ao carregar dados: {error.message}
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-rv-lilac/30 bg-rv-bg shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-rv-lilac/20 bg-rv-bg-alt text-left">
              {/* w-12 on mobile = exactly the icon button width; sm:w-auto lets it grow for the number */}
              <th className="w-12 p-1 text-xs font-medium uppercase tracking-wide text-rv-light/50 sm:w-36 sm:px-4 sm:py-3 sm:text-center">
                <span className="hidden sm:inline">Telefone</span>
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-rv-light/50">
                Nome
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-rv-light/50">
                Email
              </th>
              <th className="w-14 px-2 py-3 text-center text-xs font-medium uppercase tracking-wide text-rv-light/50 sm:w-auto sm:px-4">
                <span className="hidden sm:inline">Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!leads?.length && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-12 text-center text-sm text-rv-light/40"
                >
                  Nenhum lead cadastrado ainda.
                </td>
              </tr>
            )}
            {(leads as LeadRow[] | null)?.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-rv-lilac/10 transition last:border-0 odd:bg-rv-bg-alt/30 hover:bg-rv-card/50"
              >
                {/* Mobile: icon button; desktop: phone number */}
                <td className="p-1 sm:px-4 sm:py-2">
                  <span className="sm:hidden">
                    {lead.phone ? (
                      <PhoneModal phone={lead.phone} />
                    ) : (
                      <span className="flex h-11 w-11 items-center justify-center text-rv-light/20">
                        —
                      </span>
                    )}
                  </span>
                  <span className="hidden whitespace-nowrap text-center text-rv-light/70 sm:block">
                    {lead.phone ?? '—'}
                  </span>
                </td>
                <td className="px-4 py-2 font-medium text-rv-light">
                  {lead.name}
                </td>
                <td className="break-all px-4 py-2 text-rv-light/70">
                  {lead.email}
                </td>
                <td className="px-2 py-2 sm:px-4">
                  <div className="flex items-center justify-center gap-2">
                    {lead.messages?.length > 0 && (
                      <Tooltip label="Lead enviou mensagem.">
                        <LuMailCheck className="h-4 w-4 text-yellow-400" />
                      </Tooltip>
                    )}
                    {lead.diagnostico && (
                      <Tooltip label="Lead fez diagnóstico do perfil.">
                        <LuBot className="h-4 w-4 text-yellow-400 transition-transform group-hover:scale-125" />
                      </Tooltip>
                    )}
                  </div>
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
