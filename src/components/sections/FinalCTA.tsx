import { SOCIAL_LINKS } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="scroll-mt-16 bg-rv-bg-alt px-4 py-20 text-center sm:px-6 sm:py-28"
    >
      <h2 className="font-heading text-3xl font-semibold text-rv-light sm:text-5xl">
        Vamos transformar a sua{' '}
        <span className="bg-rv-salmon px-2 text-rv-bg">marca</span>?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base text-rv-light/80 sm:text-lg">
        Meu objetivo é transformar a forma como a sua comunicação é
        percebida no digital.
      </p>

      <div className="mx-auto mt-10 flex max-w-xs flex-col gap-3">
        <a
          href="#diagnostico"
          className="rounded-full bg-rv-pink px-6 py-3 font-heading text-sm font-semibold text-rv-bg transition hover:scale-[1.02] hover:bg-rv-salmon hover:shadow-lg"
        >
          Site — Diagnóstico Gratuito
        </a>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-rv-pink px-6 py-3 font-heading text-sm font-semibold text-rv-bg transition hover:scale-[1.02] hover:bg-rv-salmon hover:shadow-lg"
        >
          Instagram
        </a>
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-rv-pink px-6 py-3 font-heading text-sm font-semibold text-rv-bg transition hover:scale-[1.02] hover:bg-rv-salmon hover:shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
