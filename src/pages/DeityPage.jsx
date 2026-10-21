import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Info,
  MapPin,
  Sparkles,
} from 'lucide-react'
import ArtImage, { assetUrl } from '../components/ui/ArtImage'
import Mandala from '../components/ui/Mandala'
import Reveal from '../components/ui/Reveal'
import Ornament from '../components/ui/Ornament'
import NotFoundPage from './NotFoundPage'
import { deities, getDeity } from '../data/deities'
import { useLanguage } from '../context/LanguageContext'
import { useSectionNav } from '../hooks/useSectionNav'
import { ui } from '../i18n'

export default function DeityPage() {
  const { slug } = useParams()
  const { pick, lang } = useLanguage()
  const goToSection = useSectionNav()
  const deity = getDeity(slug)

  useEffect(() => {
    if (!deity) return
    document.title = `${pick(deity.name)} | ${pick({ hi: 'श्री भूमिया बाबा परित बाबा मंदिर', en: 'Shri Bhumiya Baba Parit Baba Mandir' })}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', pick(deity.short))
    return () => {
      document.title = 'श्री भूमिया बाबा परित बाबा मंदिर | पचेरा ग्राम, मध्य प्रदेश'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deity, lang])

  if (!deity) return <NotFoundPage />

  const currentIndex = deities.findIndex((item) => item.slug === deity.slug)
  const previousDeity = deities[(currentIndex - 1 + deities.length) % deities.length]
  const nextDeity = deities[(currentIndex + 1) % deities.length]

  return (
    <>
      <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden pb-24 pt-24 sm:min-h-[66svh] sm:pb-28">
        <div className="absolute inset-0 -z-20">
          <img
            src={assetUrl(deity.image)}
            alt={
              lang === 'hi'
                ? `${pick(deity.name)} का प्रतीकात्मक चित्रण`
                : `Symbolic illustration for ${pick(deity.name)}`
            }
            className="h-full w-full object-cover object-center"
            style={{ objectPosition: deity.imagePosition || '50% 55%' }}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,8,3,0.48) 0%, rgba(14,8,3,0.38) 38%, rgba(14,8,3,0.82) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-bg to-transparent" aria-hidden="true" />
        <Mandala className="pointer-events-none absolute -right-40 top-10 -z-10 h-[30rem] w-[30rem] text-[#e7c98e]/15 spin-slow" />

        <div className="container-x relative w-full text-[#fff8ec]">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[0.7rem] text-white/65">
            <Link to="/" className="transition-colors hover:text-[#ecc981]">
              {pick(ui.nav.home)}
            </Link>
            <ChevronRight size={12} aria-hidden="true" className="opacity-60" />
            <button
              type="button"
              onClick={() => goToSection('deities')}
              className="transition-colors hover:text-[#ecc981]"
            >
              {pick(ui.nav.deities)}
            </button>
            <ChevronRight size={12} aria-hidden="true" className="opacity-60" />
            <span className="text-[#ecc981]">{pick(deity.name)}</span>
          </nav>

          <div className="flex flex-wrap gap-1.5">
            {deity.tags.map((tag) => (
              <span
                key={pick(tag)}
                className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[#f3dfb7] backdrop-blur-sm"
              >
                {pick(tag)}
              </span>
            ))}
          </div>

          <h1 className="mt-4 max-w-3xl font-hindi text-[clamp(2.2rem,6vw,4.4rem)] font-normal leading-[1.15] text-balance">
            {pick(deity.name)}
          </h1>
          <p className="mt-2 font-hindi text-[0.92rem] tracking-[0.08em] text-[#e7c98e] sm:text-[1rem]">
            {pick(deity.title)}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[0.7rem] text-white/55">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} aria-hidden="true" />
              {pick({ hi: 'पचेरा ग्राम, मध्य प्रदेश', en: 'Pachera Village, Madhya Pradesh' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={12} aria-hidden="true" />
              {pick({ hi: 'प्रतीकात्मक चित्रण', en: 'Symbolic illustration' })}
            </span>
          </div>
        </div>
      </section>

      <div className="container-x relative z-10 -mt-16 pb-16 sm:-mt-20 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal>
            <article className="surface-card p-6 sm:p-9">
              <button
                type="button"
                onClick={() => goToSection('deities')}
                className="mb-6 inline-flex items-center gap-1.5 text-[0.76rem] font-medium text-muted transition-colors hover:text-primary"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                {pick(ui.deities.detailBack)}
              </button>

              <span className="eyebrow eyebrow-left text-[0.66rem]">{pick(ui.deities.aboutTitle)}</span>
              <h2 className="mt-3 font-hindi text-[clamp(1.6rem,3.4vw,2.3rem)] font-semibold text-ink">
                {pick(deity.name)}
              </h2>
              <Ornament className="mt-4 !justify-start" />
              <p className="mt-5 font-hindi text-[1.02rem] leading-[1.9] text-ink sm:text-[1.08rem]">
                {pick(deity.description)}
              </p>
              <p className="mt-4 text-[0.94rem] leading-[1.9] text-muted">
                {pick(deity.details)}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {deity.tags.map((tag) => (
                  <span
                    key={pick(tag)}
                    className="rounded-full border border-gold/30 bg-gold/[0.07] px-3 py-1 text-[0.7rem] font-medium text-gold"
                  >
                    {pick(tag)}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-2.5 rounded-2xl border border-dashed border-gold/40 bg-bgdeep/60 p-4">
                <Info size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                <p className="text-[0.78rem] leading-relaxed text-muted">{pick(ui.deities.disclaimer)}</p>
              </div>
            </article>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={80}>
              <div className="surface-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] text-gold">
                    <Sparkles size={17} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-gold/30 bg-gold/[0.07] px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-gold">
                    {pick({ hi: 'संपादन योग्य', en: 'Editable' })}
                  </span>
                </div>
                <h3 className="mt-4 font-hindi text-[1.05rem] font-semibold text-ink">
                  {pick(deity.tradition.title)}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-muted">
                  {pick(deity.tradition.body)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={130}>
              <div className="surface-card p-6">
                <div className="flex items-center gap-2.5">
                  <CalendarDays size={17} aria-hidden="true" className="text-gold" />
                  <h3 className="font-hindi text-[1.05rem] font-semibold text-ink">
                    {pick(deity.festival.name)}
                  </h3>
                </div>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-muted">
                  {pick(deity.festival.body)}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-gold">
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                  {pick({ hi: 'तिथि की पुष्टि शेष', en: 'Date to be confirmed' })}
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <button
                type="button"
                onClick={() => goToSection('location')}
                className="group flex w-full items-center gap-3 rounded-2xl bg-primary p-5 text-left text-onprimary shadow-lg transition-transform hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-onprimary/25 bg-onprimary/10">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-hindi text-[0.95rem] font-semibold">
                    {pick(ui.nav.location)}
                  </span>
                  <span className="mt-0.5 block text-[0.65rem] uppercase tracking-[0.12em] text-onprimary/70">
                    {pick(ui.hero.reach)}
                  </span>
                </span>
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>
        </div>

        {/* Previous / next deity */}
        <Reveal delay={100} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { deity: previousDeity, direction: 'previous', icon: ArrowLeft, label: ui.deities.prev },
              { deity: nextDeity, direction: 'next', icon: ArrowRight, label: ui.deities.next },
            ].map(({ deity: item, direction, icon: Icon, label }) => (
              <Link
                key={direction}
                to={`/deity/${item.slug}`}
                className={`group flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 transition-all hover:border-gold/55 hover:shadow-lg ${
                  direction === 'next' ? 'sm:flex-row-reverse sm:text-right' : ''
                }`}
              >
                <ArtImage
                  src={item.image}
                  alt=""
                  className="h-16 w-16 shrink-0 rounded-xl"
                  sizes="64px"
                />
                <span className={`min-w-0 flex-1 ${direction === 'next' ? 'sm:items-end' : ''} flex flex-col`}>
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {pick(label)}
                  </span>
                  <span className="mt-0.5 truncate font-hindi text-[0.9rem] font-semibold text-ink group-hover:text-primary">
                    {pick(item.name)}
                  </span>
                </span>
                <Icon size={16} aria-hidden="true" className="shrink-0 text-gold" />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  )
}
