import Image from 'next/image'
import HeroCta from './HeroCta'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-0 scroll-mt-16 overflow-hidden bg-rv-bg-deep lg:bg-rv-light"
    >
      <div className="lg:grid lg:grid-cols-[1fr_45%]">
        {/* Coluna texto */}
        <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center px-4 py-10 sm:px-8 lg:pr-16 lg:pl-[max(2rem,calc((100vw_-_72rem)_/_2_+_1.5rem))]">
          <h1 className="font-heading max-w-2xl text-4xl font-semibold leading-[1.1] text-rv-light sm:text-5xl lg:text-rv-bg">
            Transformo sua experiência profissional em{' '}
            <span className="text-rv-salmon">autoridade</span> e{' '}
            <span className="text-rv-salmon">novos clientes</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-rv-light/80 sm:text-xl lg:text-rv-body">
            Profissionais qualificados sem presença digital perdem clientes.
            Eu mudo isso — sem fórmulas genéricas.
          </p>

          <div className="mt-24 flex justify-center sm:mt-8 sm:justify-start">
            <HeroCta />
          </div>
        </div>

        {/* Coluna foto */}
        <div className="absolute inset-0 -z-10 lg:relative lg:inset-auto lg:z-auto lg:h-auto lg:bg-rv-lilac/20">
          <div className="absolute left-1/2 top-0 h-full w-full max-w-[1800px] -translate-x-1/2 lg:left-0 lg:max-w-none lg:translate-x-0">
            <Image
              src="/foto-hero.jpg"
              alt="Rita Vanin, estrategista digital"
              fill
              priority
              quality={90}
              className="object-cover object-[75%_15%]"
              sizes="(min-width: 1800px) 1800px, 100vw"
            />
          </div>
          {/* Degradê escuro — só mobile/tablet, foto como fundo do headline */}
          <div className="absolute inset-0 bg-gradient-to-r from-rv-bg-deep/95 via-rv-bg-deep/85 to-rv-bg-deep/55 lg:hidden" />
          {/* Degradê de transição — só desktop, versão original em coluna */}
          <div className="absolute inset-y-0 left-0 z-10 hidden w-56 bg-gradient-to-r from-rv-light from-0% via-rv-light/40 via-60% to-transparent lg:block" />
        </div>
      </div>
    </section>
  )
}
