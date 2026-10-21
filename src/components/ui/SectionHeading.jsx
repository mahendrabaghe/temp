export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
}) {
  const centered = align === 'center'

  return (
    <div
      className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${centered ? '' : 'eyebrow-left'} mb-4`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[clamp(1.95rem,4.4vw,3.25rem)] font-semibold leading-[1.16] text-ink ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[0.98rem] leading-relaxed text-muted md:text-[1.05rem] ${centered ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="ornament-divider mt-6" aria-hidden="true">
          <span className="inline-block h-2 w-2 rotate-45 border border-gold bg-gold/40" />
          <span className="inline-block h-1 w-1 rounded-full bg-gold" />
        </div>
      )}
    </div>
  )
}
