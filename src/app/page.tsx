import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import Hero from '@/components/sections/Hero'
import ProblemSection from '@/components/sections/ProblemSection'
import AboutSection from '@/components/sections/AboutSection'
import PhilosophyQuote from '@/components/sections/PhilosophyQuote'
import SocialProofSection from '@/components/sections/SocialProofSection'
import AnalysisToolCTA from '@/components/sections/AnalysisToolCTA'
import ServicesSection from '@/components/sections/ServicesSection'
import MarketingPhilosophySection from '@/components/sections/MarketingPhilosophySection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Rita Vanin — Estrategista Digital | Posicionamento',
  description:
    'Diagnóstico gratuito de posicionamento digital com Rita Vanin. ' +
    'Transforme experiência profissional em autoridade e clientes no ' +
    'Instagram.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <ProblemSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <PhilosophyQuote />
      </Reveal>
      <Reveal>
        <MarketingPhilosophySection />
      </Reveal>
      <Reveal>
        <SocialProofSection />
      </Reveal>
      <Reveal>
        <HowItWorksSection />
      </Reveal>
      <Reveal>
        <AnalysisToolCTA />
      </Reveal>
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </>
  )
}
