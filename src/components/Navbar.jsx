import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MapPin, Menu, Sparkles, X } from 'lucide-react'
import Logo from './ui/Logo'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'
import { useSectionNav } from '../hooks/useSectionNav'
import { templeInfo } from '../data/templeInfo'
import { ui } from '../i18n'

const sectionLinks = [
  { id: 'gallery', label: ui.nav.gallery },
  { id: 'location', label: ui.nav.location },
]

export default function Navbar() {
  const { pick, lang } = useLanguage()
  const goToSection = useSectionNav()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return undefined
    }

    const sections = sectionLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-38% 0px -48% 0px', threshold: [0, 0.25, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleSectionClick = (id) => {
    setMenuOpen(false)
    goToSection(id)
  }

  const handleBrandClick = () => {
    setMenuOpen(false)
    if (location.pathname !== '/') navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navbarLinks = sectionLinks

  return (
    <>
      {/* Thin devotional strip — not sticky, scrolls away naturally */}
      <div className="bg-primary text-onprimary">
        <div className="container-x flex items-center justify-between gap-4 py-1.5 text-[0.66rem] tracking-[0.08em] sm:text-[0.7rem]">
          <p className="flex items-center gap-1.5 truncate">
            <Sparkles size={12} aria-hidden="true" className="shrink-0 opacity-80" />
            <span className="truncate font-hindi">{pick(templeInfo.mantra)}</span>
          </p>
          <p className="hidden shrink-0 items-center gap-1.5 opacity-90 sm:flex">
            <MapPin size={12} aria-hidden="true" />
            <span className="font-hindi">
              {pick(templeInfo.village)} · {pick(templeInfo.state)}
            </span>
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-line/80 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]' : ''
        }`}
        style={{ backgroundColor: 'var(--c-glass)', backdropFilter: 'blur(18px) saturate(140%)' }}
      >
        <div className="container-x flex h-[4.6rem] items-center justify-between gap-4">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${pick(templeInfo.name)} — ${pick(ui.nav.home)}`}
          >
            <span className="shrink-0 text-gold transition-transform duration-500 group-hover:scale-105">
              <Logo className="h-11 w-11" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-hindi text-[0.98rem] font-semibold leading-tight text-ink sm:text-[1.08rem]">
                <span className="sm:hidden">{pick(templeInfo.shortName)}</span>
                <span className="hidden sm:inline">{pick(templeInfo.name)}</span>
              </span>
              <span className="mt-0.5 block truncate text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-gold sm:text-[0.62rem]">
                {lang === 'hi' ? 'पचेरा ग्राम · मध्य प्रदेश' : 'Pachera Village · Madhya Pradesh'}
              </span>
            </span>
          </Link>

          <nav aria-label={pick(ui.menu)} className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navbarLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSectionClick(link.id)}
                className={`nav-link ${
                  location.pathname === '/' && activeSection === link.id ? 'is-active' : ''
                }`}
                aria-current={
                  location.pathname === '/' && activeSection === link.id ? 'true' : undefined
                }
              >
                {pick(link.label)}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle className="hidden md:inline-flex" />
            <ThemeSwitcher />
            <button
              type="button"
              onClick={() => handleSectionClick('location')}
              className="btn btn-primary btn-sm hidden xl:inline-flex"
            >
              <MapPin size={15} aria-hidden="true" />
              {pick(ui.nav.location)}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="icon-button lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? pick(ui.closeMenu) : pick(ui.openMenu)}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-line bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x py-4">
              <nav aria-label={pick(ui.menu)} className="grid gap-0.5">
                {navbarLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleSectionClick(link.id)}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-[0.95rem] font-medium text-ink transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    {pick(link.label)}
                    <span className="text-gold" aria-hidden="true">·</span>
                  </button>
                ))}
              </nav>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <LanguageToggle />
                <ThemeSwitcher align="right" />
                <button
                  type="button"
                  onClick={() => handleSectionClick('location')}
                  className="btn btn-primary btn-sm w-full sm:w-auto"
                >
                  <MapPin size={15} aria-hidden="true" />
                  {pick(ui.nav.location)}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
