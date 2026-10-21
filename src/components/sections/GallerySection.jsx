import { useMemo, useState } from 'react'
import { Expand } from 'lucide-react'
import ArtImage from '../ui/ArtImage'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Lightbox from '../Lightbox'
import { galleryCategories, galleryItems } from '../../data/gallery'
import { useLanguage } from '../../context/LanguageContext'
import { ui } from '../../i18n'

export default function GallerySection() {
  const { pick } = useLanguage()
  const [category, setCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(
    () =>
      category === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === category),
    [category],
  )

  const changeCategory = (id) => {
    setCategory(id)
    setLightboxIndex(null)
  }

  return (
    <section id="gallery" className="relative overflow-hidden border-y border-line/70 bg-bgdeep/55">
      <div className="container-x section-pad relative">
        <Reveal>
          <SectionHeading
            eyebrow={pick(ui.gallery.eyebrow)}
            title={pick(ui.gallery.title)}
            subtitle={pick(ui.gallery.subtitle)}
          />
        </Reveal>

        <Reveal delay={80} className="mt-8 flex justify-center">
          <div
            className="hide-scrollbar flex max-w-full gap-2 overflow-x-auto rounded-full border border-line bg-surface/80 p-1.5"
            role="group"
            aria-label={pick(ui.gallery.title)}
          >
            {galleryCategories.map((item) => {
              const active = category === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => changeCategory(item.id)}
                  aria-pressed={active}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[0.78rem] font-medium transition-all ${
                    active
                      ? 'bg-primary text-onprimary shadow-md'
                      : 'text-muted hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  {pick(item.label)}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 45, 250)} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_18px_50px_-36px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_26px_60px_-34px_rgba(0,0,0,0.55)]"
                aria-label={`${pick(ui.gallery.view)}: ${pick(item.caption)}`}
              >
                <ArtImage
                  src={item.src}
                  alt={pick(item.alt)}
                  className={index % 5 === 0 ? 'aspect-[4/5]' : index % 3 === 0 ? 'aspect-[5/4]' : 'aspect-[4/3]'}
                  imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1005]/85 via-[#1c1005]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/85 backdrop-blur-sm transition-all duration-300 group-hover:border-[#e7c36b] group-hover:text-[#e7c36b]">
                  <Expand size={14} aria-hidden="true" />
                </span>

                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-1 block text-[0.55rem] uppercase tracking-[0.2em] text-[#e7c36b]">
                    {pick(galleryCategories.find((entry) => entry.id === item.category)?.label)}
                  </span>
                  <span className="block font-hindi text-[0.92rem] leading-snug text-[#fff8ec]">
                    {pick(item.caption)}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
