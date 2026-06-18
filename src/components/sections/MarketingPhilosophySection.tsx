import Image from 'next/image'

export default function MarketingPhilosophySection() {
  return (
    <section className="bg-rv-light px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-2">
        <div>
          <p className="font-heading text-2xl font-medium leading-snug text-rv-bg sm:text-3xl">
            O marketing mudou. Algoritmos, Inteligência Artificial e tendências passageiras não
            constroem autoridade —{' '}
            <span className="text-rv-salmon">conexão genuína constrói.</span>
          </p>

          <p className="mt-6 text-sm leading-relaxed text-rv-body sm:text-base">
            A tecnologia chegou para ampliar quem você já é, não para
            substituir sua essência por uma persona fabricada. Profissionais
            que entendem isso saem na frente — porque enquanto todo mundo
            corre atrás de viralizar, eles constroem presença real.
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-2xl border border-rv-lilac/30"
          style={{ aspectRatio: '4 / 3.25' }}
        >
          <Image
            src="/about-01.jpg"
            alt="Rita Vanin"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
