/**
 * Share helpers. Uses the Web Share API when available and falls back to
 * WhatsApp or copying the link. No third-party tracking scripts.
 */
export function getShareUrl() {
  if (typeof window === 'undefined') return ''
  // Drop any in-page hash and deity route so the home page is shared.
  return `${window.location.origin}${window.location.pathname}`
}

export function getShareText(lang = 'hi') {
  return lang === 'hi'
    ? 'श्री भूमिया बाबा परित बाबा मंदिर, पचेरा ग्राम, मध्य प्रदेश'
    : 'Shri Bhumiya Baba Parit Baba Mandir, Pachera Village, Madhya Pradesh'
}

export function shareOnWhatsApp(lang = 'hi') {
  const message = `${getShareText(lang)} — ${getShareUrl()}`
  window.open(
    `https://wa.me/?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  )
}

export async function nativeShare(lang = 'hi') {
  const url = getShareUrl()
  const text = getShareText(lang)
  if (navigator.share) {
    try {
      await navigator.share({ title: text, text, url })
      return 'shared'
    } catch (error) {
      if (error?.name === 'AbortError') return 'cancelled'
    }
  }
  return 'unsupported'
}

export async function copyLink() {
  const url = getShareUrl()
  try {
    await navigator.clipboard.writeText(url)
    return true
  } catch {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = url
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(textarea)
      return ok
    } catch {
      return false
    }
  }
}
