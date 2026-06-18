import { supabaseAdmin } from '@/lib/supabase-admin'
import AdminPagination from '@/components/admin/AdminPagination'

export const revalidate = 0

const PAGE_SIZE = 5

type SubscriberRow = {
  id: string
  created_at: string
  email: string
}

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

export default async function NewsletterPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1', 10))
  const from = (page - 1) * PAGE_SIZE
  const to = from + PAGE_SIZE - 1

  const { data: subscribers, count, error } = await supabaseAdmin
    .from('subscribers')
    .select('id, created_at, email', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-heading text-xl font-semibold text-rv-bg">
          Newsletter
        </h1>
        <p className="mt-1 text-sm text-rv-bg/50">{count ?? 0} inscritos</p>
      </div>

      {error && (
        <p className="mb-4 rounded-lg bg-rv-card p-4 text-sm text-rv-salmon">
          Erro ao carregar dados: {error.message}
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-rv-lilac/30 bg-rv-bg shadow-sm">
        <table className="w-full text-sm sm:table-fixed">
          <thead>
            <tr className="border-b border-rv-lilac/20 bg-rv-bg-alt text-left">
              <th className="whitespace-nowrap px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-rv-light/70 sm:w-[25%]">
                Data/Hora
              </th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-rv-light/50 sm:w-[75%]">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {!subscribers?.length && (
              <tr>
                <td
                  colSpan={2}
                  className="px-4 py-12 text-center text-sm text-rv-light/40"
                >
                  Nenhum inscrito ainda.
                </td>
              </tr>
            )}
            {(subscribers as SubscriberRow[] | null)?.map((sub) => (
              <tr
                key={sub.id}
                className="border-b border-rv-lilac/10 transition last:border-0 odd:bg-rv-bg-alt/30 hover:bg-rv-card/50"
              >
                <td className="whitespace-nowrap px-4 py-3 text-center text-xs text-rv-light/70">
                  {formatDate(sub.created_at)}
                </td>
                <td className="px-4 py-3 text-rv-light">{sub.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminPagination page={page} totalPages={totalPages} />
    </div>
  )
}
