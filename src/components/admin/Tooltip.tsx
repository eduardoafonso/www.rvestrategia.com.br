export default function Tooltip({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <span className="group relative cursor-pointer">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-rv-bg-deep px-3 py-1.5 text-xs text-rv-light opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </span>
  )
}
