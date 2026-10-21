import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

/**
 * Smoothly scrolls to a home-page section. If the visitor is on a deity page,
 * it first navigates home and then scrolls once the section exists.
 */
export function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return useCallback(
    (sectionId, options = {}) => {
      const { delay = 90 } = options
      const scrollToSection = () => {
        const element = document.getElementById(sectionId)
        if (!element) return
        element.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start',
        })
      }

      if (location.pathname !== '/') {
        navigate('/')
        window.setTimeout(scrollToSection, delay)
      } else {
        scrollToSection()
      }
    },
    [location.pathname, navigate],
  )
}
