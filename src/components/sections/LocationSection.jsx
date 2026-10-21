import {
  Compass,
  ExternalLink,
  Landmark,
  MapPin,
  MapPinned,
  Navigation,
  Route,
} from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { location } from '../../data/location'
import { useLanguage } from '../../context/LanguageContext'
import { ui } from '../../i18n'

const iconMap = {
  'map-pin': MapPin,
  landmark: Landmark,
  compass: Compass,
  route: Route,
}

export default function LocationSection() {
  const { pick } = useLanguage()

  const hasCoordinates =
    typeof location.coordinates.lat === 'number' && typeof location.coordinates.lng === 'number'
  const mapQuery = hasCoordinates
    ? `${location.coordinates.lat},${location.coordinates.lng}`
    : location.searchQuery
  const directionsUrl =
    location.directionsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

  return (
    <section id="location" className="relative overflow-hidden border-y border-line/70 bg-bgdeep/55">
      <div className="pattern-dots absolute inset-0 opacity-[0.22]" aria-hidden="true" />
      <div className="container-x section-pad relative">
        <Reveal>
          <SectionHeading
            eyebrow={pick(ui.location.eyebrow)}
            title={pick(ui.location.title)}
            subtitle={pick(ui.location.subtitle)}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Details */}
          <Reveal className="order-2 lg:order-1">
            <div className="surface-card h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold">
                  <MapPinned size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-hindi text-xl font-semibold text-ink">
                    {pick(location.village)}, {location.district?.hi ? `${pick(location.district)}, ` : ''}{pick(location.state)}
                  </h3>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                    {pick(location.country)}
                  </p>
                </div>
              </div>

              <dl className="mt-6 divide-y divide-line/80">
                {location.approach.map((row) => {
                  const Icon = iconMap[row.icon] || MapPin
                  return (
                    <div key={pick(row.title)} className="flex items-start gap-3 py-3.5">
                      <Icon size={16} aria-hidden="true" className="mt-1 shrink-0 text-gold" />
                      <div className="min-w-0">
                        <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          {pick(row.title)}
                        </dt>
                        <dd className="mt-0.5 text-[0.88rem] text-ink">{pick(row.value)}</dd>
                      </div>
                    </div>
                  )
                })}
              </dl>

              <div className="mt-4 rounded-2xl border border-dashed border-gold/40 bg-surface2/60 p-4">
                <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  <MapPin size={13} aria-hidden="true" />
                  {pick({ hi: 'सटीक मंदिर पता', en: 'Exact Temple Address' })}
                </p>
                <p className="mt-1.5 font-hindi text-[0.88rem] font-medium text-ink">
                  {location.address.hi
                    ? pick(location.address)
                    : pick({
                        hi: 'मंदिर का सटीक पता अभी उपलब्ध नहीं है। पुष्टि होने पर यहाँ जोड़ा जाएगा।',
                        en: 'The exact temple address is not yet available. It will be added here once confirmed.',
                      })}
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1"
                >
                  <Navigation size={16} aria-hidden="true" />
                  {pick(ui.location.directions)}
                  <ExternalLink size={13} aria-hidden="true" className="opacity-70" />
                </a>
              </div>

              <p className="mt-4 text-[0.72rem] leading-relaxed text-muted/85">
                {pick(location.note)}
              </p>
            </div>
          </Reveal>

          {/* Map / placeholder */}
          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[1.7rem] border border-line bg-surface shadow-[0_28px_70px_-45px_rgba(0,0,0,0.55)]">
              {location.mapEmbedUrl ? (
                <div className="relative h-full min-h-[24rem] w-full">
                  <iframe
                    title={pick({ hi: 'मंदिर का मानचित्र', en: 'Temple map' })}
                    src={location.mapEmbedUrl}
                    className="h-full min-h-[24rem] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute bottom-4 right-4 z-10 flex">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto btn btn-primary btn-sm shadow-xl"
                    >
                      <Navigation size={14} aria-hidden="true" />
                      {pick(ui.location.openMaps)}
                      <ExternalLink size={12} aria-hidden="true" className="opacity-70" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center overflow-hidden p-6 text-center">
                  {/* Stylised abstract map */}
                  <div
                    className="absolute inset-0 opacity-[0.55]"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        'linear-gradient(var(--c-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-line) 1px, transparent 1px)',
                      backgroundSize: '44px 44px',
                    }}
                  />
                  <svg
                    viewBox="0 0 600 400"
                    className="absolute inset-0 h-full w-full text-gold/[0.22]"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <path d="M-20 300C90 250 150 320 240 270s150-30 210 10 120 10 190-20" stroke="currentColor" strokeWidth="26" strokeLinecap="round" />
                    <path d="M110 -20c20 90 80 100 70 180s-30 120 20 260" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                    <path d="M480 -10c-30 80-90 90-80 170s50 120 10 250" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="300" cy="205" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" />
                    <circle cx="300" cy="205" r="78" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" />
                    <path d="M0 150h600M0 350h600M160 0v400M440 0v400" stroke="currentColor" strokeWidth="1" opacity="0.45" />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center">
                    <span className="relative mb-5 flex h-20 w-20 items-center justify-center">
                      <span className="absolute inset-0 animate-ping rounded-full bg-gold/15" aria-hidden="true" />
                      <span className="absolute inset-2 rounded-full border border-gold/40 bg-surface/90 shadow-lg backdrop-blur-sm" />
                      <MapPin size={30} aria-hidden="true" className="relative text-primary" />
                    </span>
                    <p className="font-hindi text-lg font-semibold text-ink">
                      {pick(location.mapPlaceholder)}
                    </p>
                    <p className="mt-2 max-w-sm text-[0.8rem] leading-relaxed text-muted">
                      {pick({
                        hi: 'सही Google Maps पिन मिलने पर यहाँ सटीक मानचित्र प्रदर्शित होगा। नीचे दिए बटन से पचेरा, मध्य प्रदेश को Google Maps पर खोलें।',
                        en: 'The exact map will appear here once the correct Google Maps pin is available. Use the button below to open Pachera, Madhya Pradesh in Google Maps.',
                      })}
                    </p>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm mt-5"
                    >
                      <ExternalLink size={13} aria-hidden="true" />
                      {pick(ui.location.openMaps)}
                    </a>

                    <div className="mt-5 flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                      <Compass size={12} aria-hidden="true" className="text-gold" />
                      {pick(location.village)} · {pick(location.state)}
                    </div>
                  </div>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 sacred-band opacity-80" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
