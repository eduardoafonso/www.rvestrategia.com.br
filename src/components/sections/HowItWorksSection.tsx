const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Analisamos seu perfil, sua comunicação atual e o que está impedindo ' +
      'você de atrair clientes. Você sai com clareza sobre onde está — e por quê.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description:
      'Construímos juntos um posicionamento feito para quem você é. ' +
      'Definimos como você vai aparecer, o que vai comunicar e para quem.',
  },
  {
    number: '03',
    title: 'Autoridade',
    description:
      'Com a estratégia no lugar, você passa a atrair as pessoas certas, ' +
      'ser reconhecida no digital e converter presença em clientes reais.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-rv-bg px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-rv-light sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-sm text-rv-light/70 sm:text-base">
            Três passos para sair da invisibilidade e passar a atrair clientes
            no digital.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-2xl border border-rv-lilac/20 bg-rv-bg-alt p-6"
            >
              <span className="font-heading text-4xl font-semibold text-rv-salmon/60">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold text-rv-light">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-rv-light/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
