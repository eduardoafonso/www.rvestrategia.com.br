import Image from 'next/image'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'
import NewsletterForm from './NewsletterForm'

const FOOTER_SOCIAL_LINKS = [
  { href: SOCIAL_LINKS.instagram, label: 'Instagram', Icon: SiInstagram },
  { href: SOCIAL_LINKS.tiktok, label: 'TikTok', Icon: SiTiktok },
  { href: SOCIAL_LINKS.youtube, label: 'YouTube', Icon: SiYoutube },
  { href: '#newsletter', label: 'Newsletter', Icon: FiMail },
]

export default function Footer() {
  return (
    <footer className="bg-rv-bg-deep px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_auto_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo-footer.png"
              alt="RV Estratégia"
              width={32}
              height={32}
              className="shrink-0"
            />
            <span className="font-heading text-sm tracking-wide text-rv-light">
              RITA VANIN
            </span>
            <span className="text-rv-lilac/60">|</span>
            <span className="text-sm text-rv-light/70">Estrategista Digital</span>
          </div>

          <div className="mt-6 flex gap-3">
            {FOOTER_SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('#') ? undefined : '_blank'}
                rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-rv-lilac/30 text-rv-light transition hover:border-rv-salmon hover:text-rv-salmon"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="text-sm text-rv-light/80 transition hover:text-rv-pink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div id="newsletter" className="scroll-mt-16">
          <h2 className="font-heading text-lg font-semibold text-rv-light">
            Fique por dentro! Receba novidades e ofertas.
          </h2>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1">
        <p className="text-xs text-rv-light/40">
          © {new Date().getFullYear()} RV Estratégia. Todos os direitos
          reservados.

          <Link
            href="/politica-de-privacidade"
            className="text-xs text-rv-light/40 transition hover:text-rv-pink"
          > Política de Privacidade
          </Link>
        </p>
      </div>
    </footer>
  )
}
