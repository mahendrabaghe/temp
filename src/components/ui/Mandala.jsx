/**
 * Decorative mandala line-art. Purely ornamental — hidden from screen readers.
 */
export default function Mandala({ className = '', strokeWidth = 1 }) {
  const petals = Array.from({ length: 16 })

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
      role="presentation"
    >
      <g stroke="currentColor" strokeWidth={strokeWidth} opacity="0.9">
        <circle cx="200" cy="200" r="196" opacity="0.35" />
        <circle cx="200" cy="200" r="166" />
        <circle cx="200" cy="200" r="120" opacity="0.7" />
        <circle cx="200" cy="200" r="52" opacity="0.7" />
        <circle cx="200" cy="200" r="30" />
        {petals.map((_, index) => {
          const angle = (360 / petals.length) * index
          return (
            <g key={angle} transform={`rotate(${angle} 200 200)`}>
              <ellipse cx="200" cy="106" rx="17" ry="48" opacity="0.62" />
              <path d="M200 54v14M200 332v14" opacity="0.35" />
              <circle cx="200" cy="34" r="2.2" fill="currentColor" stroke="none" opacity="0.7" />
            </g>
          )
        })}
        {petals.map((_, index) => {
          const angle = (360 / petals.length) * index + 11.25
          return (
            <g key={`dot-${angle}`} transform={`rotate(${angle} 200 200)`}>
              <circle cx="200" cy="150" r="3" fill="currentColor" stroke="none" opacity="0.55" />
            </g>
          )
        })}
        <path d="M200 148l52 52-52 52-52-52z" opacity="0.5" />
      </g>
    </svg>
  )
}
