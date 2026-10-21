import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Moon, Palette, Sun } from 'lucide-react'
import { themes } from '../data/themes'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n'

export default function ThemeSwitcher({ align = 'right', className = '' }) {
  const { themeId, setTheme } = useTheme()
  const { pick } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <button
        type="button"
        className="btn btn-outline btn-sm !min-h-10 !px-3"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={pick(ui.chooseTheme)}
        onClick={() => setOpen((value) => !value)}
      >
        <Palette size={16} aria-hidden="true" className="text-gold" />
        <span className="hidden xl:inline">{pick(ui.theme)}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={pick(ui.chooseTheme)}
          className={`absolute top-[calc(100%+0.6rem)] z-[70] w-64 rounded-2xl border border-line bg-surface/95 p-2 shadow-2xl backdrop-blur-xl ${
            align === 'left' ? 'left-0' : 'right-0'
          }`}
        >
          <p className="px-3 pb-1.5 pt-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
            {pick(ui.chooseTheme)}
          </p>
          {themes.map((theme) => {
            const active = theme.id === themeId
            return (
              <button
                key={theme.id}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setTheme(theme.id)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  active ? 'bg-primary/10' : 'hover:bg-primary/5'
                }`}
              >
                <span className="flex shrink-0 items-center -space-x-1" aria-hidden="true">
                  {theme.swatches.map((color) => (
                    <span
                      key={color}
                      className="h-4 w-4 rounded-full border border-black/10 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink">
                    {pick(theme.name)}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-[0.65rem] uppercase tracking-wider text-muted">
                    {theme.scheme === 'dark' ? <Moon size={10} /> : <Sun size={10} />}
                    {theme.scheme === 'dark' ? 'Dark' : 'Light'}
                  </span>
                </span>
                {active && <Check size={16} aria-hidden="true" className="shrink-0 text-primary" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
