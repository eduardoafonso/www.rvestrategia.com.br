import Logo from '@/components/Logo'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-16 overflow-hidden bg-rv-bg px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rv-bg-alt/60 via-rv-bg to-rv-bg" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:text-left">
        <div className="w-full min-w-0">


          <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] text-rv-light sm:text-6xl lg:mx-0 lg:text-7xl">
            Transformo sua experiência profissional em{' '}
            <span className="text-rv-pink">autoridade e clientes</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-rv-light/80 sm:text-lg lg:mx-0">
            Estrategista Digital especializada em posicionamento para
            profissionais que desejam crescer no digital sem perder sua
            essência.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-rv-lilac lg:justify-start">
            <span>Posicionamento</span>
            <span className="text-rv-salmon">•</span>
            <span>Autoridade</span>
            <span className="text-rv-salmon">•</span>
            <span>Branding</span>
          </div>

          <div className="mt-10">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center rounded-full bg-rv-salmon px-8 py-3 font-heading text-sm font-semibold text-rv-bg transition hover:scale-[1.02] hover:bg-rv-pink hover:shadow-lg"
            >
              Quero meu diagnóstico gratuito
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          <div className="absolute h-full w-full rounded-full bg-rv-salmon/10 blur-3xl" />
          <div className="absolute h-3/4 w-3/4 rounded-full border border-rv-lilac/20" />
          <Logo size={160} />
        </div>
      </div>
    </section>
  )
}
