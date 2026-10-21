import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'pachera-temple-language'
const LanguageContext = createContext(null)

function readSavedLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'hi' || saved === 'en') return saved
  } catch {
    /* ignore unavailable localStorage */
  }
  return 'hi'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore unavailable localStorage */
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((current) => (current === 'hi' ? 'en' : 'hi')),
      /**
       * Accepts either a localized object `{ hi, en }` or a plain string.
       * Hindi is the safe fallback whenever a translation is missing.
       */
      pick: (value) => {
        if (value === null || value === undefined) return ''
        if (typeof value === 'string') return value
        return value[lang] ?? value.hi ?? value.en ?? ''
      },
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
