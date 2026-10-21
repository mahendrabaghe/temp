/**
 * Temple monogram used in the header and footer.
 */
export default function Logo({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" role="presentation">
      <circle cx="32" cy="32" r="30.5" fill="none" stroke="currentColor" strokeOpacity="0.32" />
      <path
        d="M32 7.5l2.1 3.1 3.6 1-2.6 2.7.6 3.7L32 16.5l-3.7 1.5.6-3.7-2.6-2.7 3.6-1z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M19.5 52V32.5C19.5 23.9 25.1 17 32 17s12.5 6.9 12.5 15.5V52"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M19.5 52V32.5C19.5 23.9 25.1 17 32 17s12.5 6.9 12.5 15.5V52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M15 52.5h34" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M26.5 52V40.5a5.5 5.5 0 0 1 11 0V52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M33.8 35.8c2.7 1.5 3.4 3.7 1.8 5.3-1.2 1.1-3.3.8-4.4-.7-1.1-1.5-.4-3.4 2.6-4.6z" fill="currentColor" opacity="0.7" />
      <path d="M14 28.5c2.7.2 4.2 1.4 4.2 3.3 0 1.7-1.4 2.7-3 2.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M50 28.5c-2.7.2-4.2 1.4-4.2 3.3 0 1.7 1.4 2.7 3 2.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="32" cy="30" r="1.7" fill="currentColor" />
    </svg>
  )
}
