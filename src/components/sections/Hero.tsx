import HeroCta from './HeroCta'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden bg-gradient-to-r from-rv-light via-rv-light to-rv-lilac/40"
    >
      <div className="grid lg:grid-cols-[1fr_45%]">
        {/* Coluna texto */}
        <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-4 py-10 sm:px-8 lg:pr-16 lg:pl-[max(2rem,calc((100vw_-_72rem)_/_2_+_1.5rem))]">
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] text-rv-bg sm:text-5xl lg:text-6xl">
            Transformo sua experiência profissional em{' '}
            <span className="text-rv-salmon">autoridade</span> e{' '}
            <span className="text-rv-salmon">novos clientes</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-rv-body sm:text-xl">
            Profissionais qualificados sem presença digital perdem clientes.
            Eu mudo isso — sem fórmulas genéricas.
          </p>

          <div className="mt-8">
            <HeroCta />
          </div>
        </div>

        {/* Coluna foto */}
        <div className="relative h-64 bg-rv-lilac/20 sm:h-80 lg:h-auto">
          <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-rv-light to-transparent" />
          {/* foto-hero.jpg — enviar e salvar em /public/foto-hero.jpg */}
        </div>
      </div>
    </section>
  )
}
