import { supabaseAdmin } from '@/lib/supabase-admin'
import MessageModal from '@/components/admin/MessageModal'
import AdminPagination from '@/components/admin/AdminPagination'

export const revalidate = 0

const PAGE_SIZE = 5

function formatDate(iso: string) {
  const d = new Date(iso)
  const date = d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })
  const time = d.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${date} - ${time}`
}

export default async function MensagensPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1', 10))
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const { data: messages, count, error } = await supabaseAdmin
    .from('messages')
    .select('id, created_at, lead_id, subject', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  const leadIds = [
    ...new Set((messages ?? []).map((m) => m.lead_id).filter(Boolean)),
  ]

  const { data: leadsRaw } =
    leadIds.length > 0
      ? await supabaseAdmin
          .from('leads')
          .select('id, name, phone')
          .in('id', leadIds)
      : { data: [] }

  const leadMap = Object.fromEntries((leadsRaw ?? []).map((l) => [l.id, l]))

  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-xl font-semibold text-rv-bg">
          Mensagens
        </h1>
        <p className="mt-1 text-sm text-rv-bg/50">{count ?? 0} registros</p>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-rv-card p-4 text-sm text-rv-salmon">
          Erro ao carregar dados: {error.message}
        </p>
      )}

      {/* Item 6 — scroll shadow: gradient overlay hints at horizontal scroll on mobile */}
      <div className="relative">
        <div className="overflow-x-auto rounded-xl border border-rv-lilac/30 bg-rv-bg shadow-sm">
        <table className="w-full text-sm sm:table-fixed">
          <thead>
            <tr className="border-b border-rv-lilac/20 bg-rv-bg-alt text-left">
              {/* Item 7 — /70 instead of /50: text-xs at 50% opacity fails WCAG 1.4.3 on dark bg */}
              <th className="whitespace-nowrap px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-rv-light/70 sm:w-[12%]">
                Data/Hora
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-rv-light/50 sm:w-[35%]">
                Nome
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-rv-light/50 sm:w-[53%]">
                <span className="hidden sm:inline">Mensagem</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!messages?.length && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-12 text-center text-sm text-rv-light/40"
                >
                  Nenhuma mensagem ainda.
                </td>
              </tr>
            )}
            {messages?.map((msg) => {
              const lead = leadMap[msg.lead_id] as
                | { name: string; phone: string | null }
                | undefined
              return (
                <tr
                  key={msg.id}
                  className="border-b border-rv-lilac/10 transition last:border-0 odd:bg-rv-bg-alt/30 hover:bg-rv-card/50"
                >
                  <td className="whitespace-nowrap px-4 py-2 text-center text-xs text-rv-light/70">
                    {formatDate(msg.created_at)}
                  </td>
                  <td className="overflow-hidden px-4 py-2 font-medium text-rv-light">
                    <p className="truncate">{lead?.name ?? '—'}</p>
                  </td>
                  <td className="overflow-hidden px-2 py-1 sm:px-4 sm:py-2">
                    {/* Mobile: eye icon opens modal at top */}
                    <span className="sm:hidden">
                      <MessageModal message={msg.subject} />
                    </span>
                    {/* Desktop: inline text preview, 2 lines max */}
                    <p className="hidden line-clamp-2 text-left text-sm leading-5 text-rv-light/70 sm:block">
                      {msg.subject}
                    </p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-xl bg-gradient-to-l from-rv-bg/90 to-transparent sm:hidden" />
      </div>

      <AdminPagination page={page} totalPages={totalPages} />
    </div>
  )
}
