import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import StickyMobileCta from '@/components/sections/StickyMobileCta'
import WhatsAppFloatingButton from '@/components/sections/WhatsAppFloatingButton'
import { SITE_URL } from '@/lib/constants'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rita Vanin',
  alternateName: '@rvestrategia',
  jobTitle: 'Estrategista Digital',
  description:
    'Enfermeira obstetra, professora universitária e estrategista ' +
    'digital especializada em posicionamento.',
  url: SITE_URL,
  sameAs: ['https://instagram.com/rvestrategia'],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'RV Estratégia',
  description:
    'Consultoria, mentoria e estratégia de posicionamento digital para ' +
    'profissionais que querem transformar experiência em autoridade.',
  url: SITE_URL,
  founder: { '@type': 'Person', name: 'Rita Vanin' },
  areaServed: 'BR',
  sameAs: ['https://instagram.com/rvestrategia'],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rvestrategia.com.br'),
  title: {
    default: 'Rita Vanin | Estrategista Digital',
    template: '%s | Rita Vanin'
  },
  description: 'Transformo sua experiência profissional em autoridade e clientes. Posicionamento, branding e mentoria para profissionais do digital.',
  keywords: ['posicionamento digital', 'estrategista digital', 'mentoria instagram', 'branding pessoal', 'Rita Vanin'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rvestrategia.com.br',
    siteName: 'Rita Vanin | RV Estratégia',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Rita Vanin — Estrategista Digital' }]
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-rv-bg pb-20 sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}