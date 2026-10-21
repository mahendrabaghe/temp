/**
 * Small gold ornamental rule used between content blocks.
 */
export default function Ornament({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70 md:w-20" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
      <span className="h-2 w-2 rotate-45 bg-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70 md:w-20" />
    </div>
  )
}
