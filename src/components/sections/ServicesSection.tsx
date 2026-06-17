import { SERVICES } from '@/lib/constants'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-16 bg-rv-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold text-rv-light sm:text-4xl">
          O caminho da competência à autoridade
        </h2>
        <p className="mt-4 text-base text-rv-light/75 sm:text-lg">
          Escolha o ponto de partida ideal para o seu momento.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
        {SERVICES.map((service, index) => (
          <div
            key={service.slug}
            className={index % 2 === 1 ? 'sm:col-span-2' : 'sm:col-span-1'}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  )
}
