import type { Service } from '@/lib/constants'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-xl bg-rv-card ${
        service.highlight
          ? 'border-rv-salmon'
          : 'border-rv-lilac/30'
      }`}
    >
      <h3 className="font-heading text-xl font-semibold text-rv-light">
        {service.title}
      </h3>
      <p className="text-sm text-rv-light/80">{service.description}</p>

      {service.features.length > 0 && (
        <ul className="flex flex-col gap-2 text-sm text-rv-light/85">
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-rv-pink">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {service.duration && (
        <p className="text-xs uppercase tracking-wide text-rv-lilac">
          Duração: {service.duration}
        </p>
      )}

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="font-heading text-lg font-semibold text-rv-pink">
          {service.price}
        </span>
        <a
          href="#contato"
          className="rounded-full bg-rv-cta px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.05] hover:bg-rv-cta-hover"
        >
          Quero esse
        </a>
      </div>
    </article>
  )
}
