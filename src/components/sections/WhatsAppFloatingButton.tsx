import { SiWhatsapp } from 'react-icons/si'
import { SOCIAL_LINKS } from '@/lib/constants'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-rv-salmon text-rv-bg shadow-xl transition hover:scale-105 hover:bg-rv-pink sm:bottom-6 sm:right-6"
    >
      <SiWhatsapp className="h-6 w-6" />
    </a>
  )
}
