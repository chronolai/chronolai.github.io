import { useCallback, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function currentTheme(): Theme {
  if (typeof document !== 'undefined') {
    const t = document.documentElement.dataset.theme
    if (t === 'light' || t === 'dark') return t
  }
  return 'light'
}

/**
 * Theme state synced with the `data-theme` attribute on <html> (set pre-paint by
 * the inline script in index.html) and persisted to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // ignore (e.g. storage disabled)
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
