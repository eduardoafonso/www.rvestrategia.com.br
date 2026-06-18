import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function AdminPagination({
  page,
  totalPages,
}: {
  page: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-rv-bg/50">
        Página {page} de {totalPages}
      </p>
      <div className="flex gap-2">
        <Link
          href={`?page=${page - 1}`}
          aria-disabled={page <= 1}
          className={`flex h-11 w-11 items-center justify-center rounded-lg border border-rv-lilac/30 bg-rv-bg transition ${
            page <= 1
              ? 'pointer-events-none opacity-30'
              : 'text-rv-light/70 hover:bg-rv-bg-alt hover:text-rv-light'
          }`}
        >
          <FiChevronLeft className="h-4 w-4" />
        </Link>
        <Link
          href={`?page=${page + 1}`}
          aria-disabled={page >= totalPages}
          className={`flex h-11 w-11 items-center justify-center rounded-lg border border-rv-lilac/30 bg-rv-bg transition ${
            page >= totalPages
              ? 'pointer-events-none opacity-30'
              : 'text-rv-light/70 hover:bg-rv-bg-alt hover:text-rv-light'
          }`}
        >
          <FiChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
