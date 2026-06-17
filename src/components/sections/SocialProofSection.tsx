import { TESTIMONIAL_PLACEHOLDERS, TRUST_MARKERS } from '@/lib/constants'

export default function SocialProofSection() {
  return (
    <section className="bg-rv-light px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
        {TRUST_MARKERS.map((marker) => (
          <span
            key={marker}
            className="text-sm font-medium text-rv-bg/70 sm:text-base"
          >
            {marker}
          </span>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
        {TESTIMONIAL_PLACEHOLDERS.map((id) => (
          <div
            key={id}
            className="flex flex-col gap-4 rounded-2xl border border-dashed border-rv-bg/20 p-6"
          >
            <div className="h-10 w-10 rounded-full bg-rv-bg/10" />
            <div className="flex flex-col gap-2">
              <div className="h-2 w-full rounded bg-rv-bg/10" />
              <div className="h-2 w-4/5 rounded bg-rv-bg/10" />
              <div className="h-2 w-3/5 rounded bg-rv-bg/10" />
            </div>
            <p className="text-xs uppercase tracking-wide text-rv-bg/40">
              Depoimento em breve
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
