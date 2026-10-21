import { Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n'

export default function LanguageToggle({ className = '' }) {
  const { lang, toggleLang, pick } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`btn btn-outline btn-sm !min-h-10 !px-3 ${className}`}
      aria-label={pick(ui.switchToEnglish)}
      title={pick(ui.switchToEnglish)}
    >
      <Languages size={16} aria-hidden="true" className="text-gold" />
      <span className="font-semibold" aria-hidden="true">
        {lang === 'hi' ? 'EN' : 'हिं'}
      </span>
    </button>
  )
}
