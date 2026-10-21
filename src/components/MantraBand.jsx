import { assetUrl } from './ui/ArtImage'
import Mandala from './ui/Mandala'
import { useLanguage } from '../context/LanguageContext'
import { templeInfo } from '../data/templeInfo'

export default function MantraBand() {
  const { pick } = useLanguage()

  return (
    <section className="relative overflow-hidden" aria-label={pick(templeInfo.mantra)}>
      <div className="absolute inset-0">
        <img
          src={assetUrl('images/aarti-thali.webp')}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, rgba(20,10,4,0.9), rgba(38,18,6,0.68) 52%, rgba(20,10,4,0.88))',
          }}
          aria-hidden="true"
        />
      </div>

      <Mandala className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 text-[#e2c188]/20 spin-slow" />
      <Mandala className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 text-[#e2c188]/15 spin-slow" />

      <div className="container-x relative flex flex-col items-center py-16 text-center text-[#fdf3df] sm:py-20">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e2c188]/40 bg-white/5 font-hindi text-2xl text-[#e9cc94] backdrop-blur-sm">
          ॐ
        </span>
        <p className="mt-6 font-hindi text-[clamp(1.35rem,3.8vw,2.4rem)] leading-snug tracking-[0.04em] text-[#f7e5c2]">
          ॐ नमः शिवाय
        </p>
        <span className="my-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d9b66b]/70 to-transparent" aria-hidden="true" />
        <p className="font-hindi text-[clamp(1rem,2.7vw,1.5rem)] tracking-[0.12em] text-[#e8d0a4]">
          श्री राम जय राम जय जय राम
        </p>
        <p className="mt-5 max-w-lg text-[0.72rem] uppercase tracking-[0.22em] text-white/45">
          {pick(templeInfo.heroKicker)}
        </p>
      </div>
    </section>
  )
}
