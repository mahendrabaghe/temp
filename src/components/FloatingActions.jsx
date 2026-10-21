import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { shareOnWhatsApp } from '../utils/share'
import { ui } from '../i18n'

export default function FloatingActions() {
  const { pick, lang } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-2.5 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => shareOnWhatsApp(lang)}
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#d9b66b]/40 bg-[#1b0f0a] text-[#ecd6a9] shadow-[0_14px_30px_-14px_rgba(0,0,0,0.75)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b66b] hover:text-[#ffe9be]"
        aria-label={pick(ui.shareWhatsapp)}
        title={pick(ui.shareWhatsapp)}
      >
        <MessageCircle size={19} aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-surface text-primary shadow-[0_14px_30px_-16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-primary hover:text-onprimary ${
          visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label={pick(ui.backToTop)}
        title={pick(ui.backToTop)}
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUp size={19} aria-hidden="true" />
      </button>
    </div>
  )
}
