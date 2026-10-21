import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_THEME, themes } from '../data/themes'

const STORAGE_KEY = 'pichera-temple-theme'
const ThemeContext = createContext(null)

const themeMetaColors = {
  saffron: '#7c2d12',
  maroon: '#661722',
  white: '#7c5a17',
  midnight: '#0a0f1c',
  forest: '#1f4a34',
}

function readSavedTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (themes.some((theme) => theme.id === saved)) return saved
  } catch {
    /* localStorage may be disabled — fall back to the default theme */
  }
  return DEFAULT_THEME
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(readSavedTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = themeId
    try {
      window.localStorage.setItem(STORAGE_KEY, themeId)
    } catch {
      /* private browsing — the selected theme still works for this visit */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', themeMetaColors[themeId] || '#7c2d12')
  }, [themeId])

  const value = useMemo(() => {
    const activeTheme = themes.find((theme) => theme.id === themeId) || themes[0]
    return {
      themeId,
      activeTheme,
      setTheme: (id) => {
        if (themes.some((theme) => theme.id === id)) setThemeId(id)
      },
    }
  }, [themeId])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
