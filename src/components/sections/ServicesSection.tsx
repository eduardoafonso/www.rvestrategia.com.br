import { SERVICES } from '@/lib/constants'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-16 bg-rv-light px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold text-rv-bg sm:text-4xl">
          O caminho da competência à autoridade
        </h2>
        <p className="mt-4 text-sm text-rv-body sm:text-base">
          Escolha o ponto de partida ideal para o seu momento.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  )
}
