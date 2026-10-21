import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import ArtImage from './ui/ArtImage'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n'

/**
 * Accessible image lightbox with keyboard navigation and focus management.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const { pick } = useLanguage()
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const previousFocus = useRef(null)
  const item = items[index]

  const goPrevious = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  useEffect(() => {
    previousFocus.current = document.activeElement
    document.body.classList.add('no-scroll')
    const timer = window.setTimeout(() => closeRef.current?.focus(), 30)

    return () => {
      document.body.classList.remove('no-scroll')
      window.clearTimeout(timer)
      if (previousFocus.current instanceof HTMLElement) previousFocus.current.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      } else if (event.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrevious, onClose])

  if (!item) return null

  return createPortal(
    <div
      className="lightbox-backdrop fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={pick(ui.gallery.title)}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b0906] shadow-2xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5 text-[#f6ecd8]">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/60">
            {index + 1} / {items.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#e7c36b] hover:text-[#e7c36b]"
            aria-label={pick(ui.gallery.close)}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/40 p-2 sm:p-6">
          <ArtImage
            key={item.id}
            src={item.src}
            alt={pick(item.alt)}
            eager
            className="max-h-[62vh] w-full !bg-transparent sm:max-h-[66vh]"
            imgClassName="object-contain"
            sizes="90vw"
          />

          <button
            type="button"
            onClick={goPrevious}
            aria-label={pick(ui.gallery.prev)}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/85 backdrop-blur-sm transition-all hover:border-[#e7c36b] hover:text-[#e7c36b] sm:left-4"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={pick(ui.gallery.next)}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/85 backdrop-blur-sm transition-all hover:border-[#e7c36b] hover:text-[#e7c36b] sm:right-4"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="border-t border-white/10 px-4 py-3 sm:px-6">
          <p key={item.id} className="animate-enter font-hindi text-[0.95rem] text-[#f3e4c7]" aria-live="polite">
            {pick(item.caption)}
          </p>
          <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/40">
            {pick(ui.gallery.placeholderNote)} · ← → / Esc
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
