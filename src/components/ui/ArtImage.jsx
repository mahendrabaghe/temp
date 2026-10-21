import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Resolves a path from src/data/* against Vite's configured base URL, so the
 * same data works on GitHub Pages (/repo-name/), a custom domain, or locally.
 */
export function assetUrl(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  const cleanPath = path.replace(/^\.?\//, '')
  return encodeURI(`${base}${cleanPath}`)
}

/**
 * Lazy image with a shimmering loading state and a graceful error fallback.
 * The wrapper needs a height (for example `aspect-[4/5]`).
 */
export default function ArtImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  imgStyle,
  eager = false,
  sizes,
  onClick,
}) {
  const [status, setStatus] = useState('loading')
  const url = assetUrl(src)

  return (
    <div className={`relative overflow-hidden bg-surface2 ${className}`} onClick={onClick}>
      {status === 'loading' && <div className="image-skeleton absolute inset-0" aria-hidden="true" />}

      {status !== 'error' ? (
        <img
          src={url}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          sizes={sizes}
          style={imgStyle}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface2 px-4 text-center text-muted">
          <ImageOff size={26} aria-hidden="true" className="text-gold" />
          <span className="text-xs">चित्र उपलब्ध नहीं है · Image unavailable</span>
        </div>
      )}
    </div>
  )
}
