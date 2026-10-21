import { ChevronDown, MapPin, Sparkles } from 'lucide-react'
import { assetUrl } from '../ui/ArtImage'
import Mandala from '../ui/Mandala'
import { templeInfo } from '../../data/templeInfo'
import { deities } from '../../data/deities'
import { resolveImage } from '../../data/gallery'
import { useLanguage } from '../../context/LanguageContext'
import { useSectionNav } from '../../hooks/useSectionNav'
import { ui } from '../../i18n'

const diyas = [
  { left: '7%', top: '24%', size: 54, delay: '0s', duration: '8s' },
  { left: '15%', top: '68%', size: 34, delay: '1.2s', duration: '10s' },
  { left: '26%', top: '40%', size: 22, delay: '2.1s', duration: '7s' },
  { left: '42%', top: '80%', size: 26, delay: '0.6s', duration: '9s' },
  { left: '63%', top: '19%', size: 30, delay: '1.8s', duration: '11s' },
  { left: '78%', top: '58%', size: 46, delay: '0.3s', duration: '8.5s' },
  { left: '90%', top: '35%', size: 22, delay: '2.6s', duration: '7.5s' },
  { left: '54%', top: '30%', size: 16, delay: '3.3s', duration: '9.5s' },
]

export default function Hero() {
  const { pick, lang } = useLanguage()
  const goToSection = useSectionNav()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-7rem)] items-center overflow-hidden"
      aria-label={pick(templeInfo.name)}
    >
      {/* Background illustration */}
      <div className="absolute inset-0 -z-20">
        <img
          src={assetUrl(resolveImage('temple-exterior', 'images/temple-exterior.webp'))}
          alt={
            lang === 'hi'
              ? 'सूर्योदय के प्रकाश में मंदिर का चित्रण'
              : 'Illustration of the temple in sunrise light'
          }
          className="h-full w-full scale-[1.02] object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Readability overlays */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,9,4,0.42) 0%, rgba(15,9,4,0.38) 36%, rgba(15,9,4,0.7) 82%, rgba(15,9,4,0.86) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-bg to-transparent" aria-hidden="true" />

      {/* Ornamental mandalas */}
      <Mandala className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 text-[#f3d9a4]/15 spin-slow" />
      <Mandala className="pointer-events-none absolute -right-48 top-1/3 -z-10 h-[38rem] w-[38rem] text-[#f3d9a4]/10 spin-slow" />

      {/* Floating diyas / particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {diyas.map((diya, index) => (
          <span
            key={index}
            className="float-slow absolute"
            style={{
              left: diya.left,
              top: diya.top,
              width: diya.size,
              height: diya.size,
              animationDelay: diya.delay,
              animationDuration: diya.duration,
            }}
          >
            <span className="diya-glow inset-0 block" />
            <span
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe2a3] shadow-[0_0_14px_4px_rgba(255,183,77,0.8)]"
              style={{ opacity: 0.9 }}
            />
          </span>
        ))}
      </div>

      <div className="container-x relative z-10 flex flex-col items-center py-20 text-center text-[#fff8ec] sm:py-24">
        <p className="animate-enter mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[#f6dfb2] backdrop-blur-sm">
          <Sparkles size={13} aria-hidden="true" className="text-[#ecc981]" />
          {pick(templeInfo.heroKicker)}
        </p>

        <div className="relative">
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,183,77,0.2), transparent 65%)' }}
            aria-hidden="true"
          />
          <h1 className="hero-title animate-enter animate-enter-delay-1 max-w-5xl text-balance">
            {pick(templeInfo.name)}
          </h1>
        </div>

        <p className="animate-enter animate-enter-delay-2 mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-hindi text-[1rem] tracking-[0.16em] text-[#f2dcae] sm:text-[1.12rem]">
          <MapPin size={15} aria-hidden="true" className="opacity-85" />
          {pick(templeInfo.village)}<span className="opacity-50" aria-hidden="true">·</span>{pick(templeInfo.state)}
        </p>

        <div className="animate-enter animate-enter-delay-3 mt-8 max-w-2xl">
          <p className="font-hindi text-[1.05rem] leading-relaxed text-white/85 sm:text-[1.15rem]">
            {pick(templeInfo.tagline)}
          </p>
          <p className="mt-3 font-hindi text-[0.86rem] tracking-[0.1em] text-[#e9cb8d] sm:text-[0.95rem]">
            {pick(templeInfo.mantra)}
          </p>
        </div>

        <div className="animate-enter animate-enter-delay-4 mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <button type="button" onClick={() => goToSection('gallery')} className="btn btn-gold min-w-[13rem]">
            {pick(ui.nav.gallery)}
          </button>
          <button
            type="button"
            onClick={() => goToSection('location')}
            className="btn min-w-[13rem] border border-white/40 bg-white/5 text-[#fff8ec] backdrop-blur-sm hover:border-[#ecc981] hover:bg-white/12"
          >
            <MapPin size={16} aria-hidden="true" />
            {pick(ui.hero.reach)}
          </button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/65 sm:gap-x-4">
          {deities.map((deity, index) => (
            <span key={deity.slug} className="flex items-center gap-3">
              {index > 0 && <span className="h-1 w-1 rounded-full bg-[#ecc981]/60" aria-hidden="true" />}
              <span className="font-hindi normal-case tracking-[0.08em] text-white/80">
                {pick(deity.name)}
              </span>
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSection('gallery')}
          className="mt-10 flex flex-col items-center gap-1 text-[0.6rem] uppercase tracking-[0.24em] text-white/55 transition-colors hover:text-[#ecc981]"
          aria-label={pick(ui.hero.scroll)}
        >
          {pick(ui.hero.scroll)}
          <ChevronDown size={18} aria-hidden="true" className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}
