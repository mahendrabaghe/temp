import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUp, Heart, MessageCircle, Share2 } from 'lucide-react'
import Logo from './ui/Logo'
import { templeInfo } from '../data/templeInfo'
import { useLanguage } from '../context/LanguageContext'
import { useSectionNav } from '../hooks/useSectionNav'
import { shareOnWhatsApp } from '../utils/share'
import { ui } from '../i18n'

const quickLinks = [
  { id: 'gallery', label: ui.nav.gallery },
  { id: 'location', label: ui.nav.location },
]

export default function Footer() {
  const { pick, lang } = useLanguage()
  const goToSection = useSectionNav()
  const navigate = useNavigate()
  const location = useLocation()
  const year = new Date().getFullYear()

  const handleSection = (id) => {
    if (location.pathname !== '/') navigate('/')
    window.setTimeout(() => goToSection(id), 40)
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden bg-[#1b0f0a] text-[#f4e6cf]">
      <div className="sacred-band absolute inset-x-0 top-0 h-1.5 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 15%, #d6ae5e 0, transparent 28rem), radial-gradient(circle at 85% 80%, #a64b2a 0, transparent 30rem)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full border border-[#d6ae5e]/15"
        aria-hidden="true"
      >
        <div className="absolute inset-10 rounded-full border border-[#d6ae5e]/10" />
        <div className="absolute inset-20 rounded-full border border-[#d6ae5e]/10" />
      </div>

      <div className="container-x relative pb-8 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollTop} className="flex items-center gap-3">
              <span className="text-[#d9b66b]">
                <Logo className="h-12 w-12" />
              </span>
              <span>
                <span className="block font-hindi text-[1.05rem] font-semibold leading-tight">
                  {pick(templeInfo.name)}
                </span>
                <span className="mt-1 block font-hindi text-[0.7rem] tracking-[0.16em] text-[#d9b66b]">
                  {pick(templeInfo.village)} · {pick(templeInfo.state)}
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm font-hindi text-[0.84rem] leading-relaxed text-[#f4e6cf]/70">
              {pick(templeInfo.tagline)}
            </p>
            <p className="mt-2 font-hindi text-[0.76rem] tracking-[0.08em] text-[#d9b66b]/85">
              {pick(templeInfo.mantra)}
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => shareOnWhatsApp(lang)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b66b]/30 text-[#e8d3a7] transition-colors hover:border-[#d9b66b] hover:bg-[#d9b66b]/10 hover:text-[#f7e6bf]"
                aria-label={pick(ui.shareWhatsapp)}
              >
                <MessageCircle size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: pick(templeInfo.name),
                      text: pick(ui.shareText),
                      url: window.location.href,
                    }).catch(() => {})
                  } else {
                    shareOnWhatsApp(lang)
                  }
                }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b66b]/30 text-[#e8d3a7] transition-colors hover:border-[#d9b66b] hover:bg-[#d9b66b]/10 hover:text-[#f7e6bf]"
                aria-label={pick(ui.share)}
              >
                <Share2 size={16} aria-hidden="true" />
              </button>
              <span className="ml-1 text-[0.62rem] uppercase tracking-[0.16em] text-[#f4e6cf]/45">
                {pick(ui.footer.madeWith)}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label={pick(ui.footer.quickLinks)}>
            <h3 className="font-hindi text-[0.92rem] font-semibold text-[#e4c587]">
              {pick(ui.footer.quickLinks)}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleSection(link.id)}
                    className="group inline-flex items-center gap-2 text-[0.82rem] text-[#f4e6cf]/70 transition-colors hover:text-[#f4dfb4]"
                  >
                    <span className="h-px w-2.5 bg-[#d9b66b]/40 transition-all group-hover:w-4 group-hover:bg-[#d9b66b]" aria-hidden="true" />
                    {pick(link.label)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#d9b66b]/25 to-transparent" />

        <p className="mx-auto max-w-3xl text-center text-[0.72rem] leading-relaxed text-[#f4e6cf]/50">
          {pick(templeInfo.footer.note)}
        </p>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-[0.7rem] text-[#f4e6cf]/45 sm:text-left">
            © {year} {pick(templeInfo.name)} · {pick(ui.footer.copyright)}
          </p>
          <p className="flex items-center gap-1.5 text-[0.66rem] text-[#f4e6cf]/40">
            <Heart size={11} aria-hidden="true" className="text-[#c96f4e]" />
            {pick(ui.footer.madeWith)}
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-[#e4c587] transition-colors hover:text-[#f7e6bf]"
          >
            <ArrowUp size={13} aria-hidden="true" />
            {pick(ui.backToTop)}
          </button>
        </div>
      </div>
    </footer>
  )
}
