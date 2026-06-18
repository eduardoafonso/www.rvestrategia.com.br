import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import WhatsAppFloatingButton from '@/components/sections/WhatsAppFloatingButton'
import CookieBannerWrapper from '@/components/CookieBannerWrapper'
import StickyMobileCta from '@/components/sections/StickyMobileCta'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyMobileCta />
      <WhatsAppFloatingButton />
      <CookieBannerWrapper />
    </>
  )
}
