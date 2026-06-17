import Image from 'next/image'

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="scroll-mt-16 bg-rv-light px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:items-start">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-rv-lilac/40">
          <Image
            src="/about-02.jpg"
            alt="Rita Vanin, estrategista digital"
            fill
            className="object-cover object-top"
          />
        </div>

        <div>
          <h2 className="font-heading text-3xl font-semibold text-rv-bg sm:text-4xl">
            Rita Vanin
          </h2>

          <p className="mt-6 text-sm text-rv-body">
            Eu conheço esse lugar. Ser extremamente qualificada e sentir que
            o digital não reflete isso.
          </p>

          <p className="mt-4 text-sm text-rv-body">
            Sou enfermeira obstetra, pós-graduada pelo Hospital Israelita
            Albert Einstein e professora universitária. Passei anos acumulando
            competência — e pouco tempo comunicando isso para quem precisava
            saber.
          </p>

          <p className="mt-4 text-sm text-rv-body">
            Foi ao perceber que esse padrão se repetia em toda a minha rede —
            profissionais excelentes, invisíveis no digital — que criei a{' '}
            <strong className="text-rv-salmon">RV Estratégia</strong>. Não
            como mais uma consultoria de marketing, mas como um método para
            transformar quem você já é em presença que atrai e converte.
          </p>

          <p className="mt-4 text-sm text-rv-body">
            Trabalho de forma personalizada — sem receitas prontas, sem
            fórmulas copiadas. Cada estratégia é construída a partir de quem
            você é e de onde quer chegar.
          </p>

          <p className="mt-12 flex items-center justify-center gap-3 text-sm font-semibold text-rv-cta">
            <span>Posicionamento</span>
            <span className="h-1.5 w-1.5 rounded-full bg-rv-cta" />
            <span>Autoridade</span>
            <span className="h-1.5 w-1.5 rounded-full bg-rv-cta" />
            <span>Branding</span>
          </p>

        </div>
      </div>
    </section>
  )
}
