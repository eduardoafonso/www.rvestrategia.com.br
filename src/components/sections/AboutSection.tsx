export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="scroll-mt-16 bg-rv-bg-alt px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:items-center">
        {/* TODO: substituir pelo retrato real da Rita via next/image */}
        <div className="aspect-square w-full rounded-2xl border border-rv-lilac/30 bg-rv-card/60" />

        <div>
          <h2 className="font-heading text-3xl font-semibold text-rv-light sm:text-4xl">
            Rita Vanin
          </h2>
          <p className="mt-6 text-base text-rv-light/85 sm:text-lg">
            Sou{' '}
            <strong className="text-rv-pink">
              enfermeira obstetra, professora universitária e estrategista
              digital especializada em posicionamento
            </strong>{' '}
            para profissionais que desejam crescer no digital sem perder sua
            essência.
          </p>
          <p className="mt-4 text-base text-rv-light/85 sm:text-lg">
            Depois de anos vivendo a rotina intensa da área da saúde,
            entendi que muitos profissionais extremamente competentes
            continuam invisíveis porque não sabem comunicar valor.
          </p>
          <p className="mt-4 text-base text-rv-light/85 sm:text-lg">
            Foi assim que nasceu a{' '}
            <strong className="text-rv-pink">RV Estratégia</strong>: para
            transformar conhecimento, experiência e autoridade em
            posicionamento, confiança e oportunidades reais. Hoje ajudo
            profissionais a construírem uma presença estratégica no
            Instagram através de clareza, posicionamento e comunicação com
            propósito.
          </p>
        </div>
      </div>
    </section>
  )
}
