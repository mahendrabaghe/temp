import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import Mandala from '../components/ui/Mandala'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n'

export default function NotFoundPage() {
  const { pick } = useLanguage()

  useEffect(() => {
    document.title = `${pick(ui.common.notFound)} | ${pick({ hi: 'पचेरा मंदिर', en: 'Pachera Mandir' })}`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden py-24">
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 text-gold/[0.12] spin-slow" />
      <div className="container-x relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/35 bg-gold/[0.08] font-hindi text-2xl text-gold">
          ॐ
        </span>
        <p className="mt-6 font-display text-[clamp(3.5rem,10vw,6rem)] font-semibold leading-none text-gold/60">
          404
        </p>
        <h1 className="mt-2 font-hindi text-[clamp(1.6rem,4vw,2.4rem)] font-semibold text-ink">
          {pick(ui.common.notFound)}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-[0.92rem] text-muted">
          {pick(ui.common.notFoundText)}
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            <Home size={16} aria-hidden="true" />
            {pick(ui.common.goHome)}
          </Link>
          <button type="button" onClick={() => window.history.back()} className="btn btn-outline">
            <ArrowLeft size={16} aria-hidden="true" />
            {pick({ hi: 'पिछले पृष्ठ पर जाएँ', en: 'Go back' })}
          </button>
        </div>
      </div>
    </section>
  )
}
