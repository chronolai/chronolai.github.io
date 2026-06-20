import { Link } from 'react-router-dom'
import type { Locale } from '../data/resume'
import { Icon } from './icons'

// Canonical path for a (locale, variant) pair. en is the site root (/, /cv);
// zh is namespaced (/zh, /zh/cv).
function pathFor(locale: Locale, variant: 'home' | 'cv'): string {
  const base = locale === 'en' ? '' : '/zh'
  const tail = variant === 'cv' ? '/cv' : ''
  return base + tail || '/'
}

// Text toggle that cycles en <-> zh, linking to the other locale's matching page.
// The label shows the language you'll switch to.
export function LanguageToggle({
  locale,
  variant,
}: {
  locale: Locale
  variant: 'home' | 'cv'
}) {
  const target: Locale = locale === 'en' ? 'zh' : 'en'
  const aria = target === 'zh' ? 'Switch to 中文' : 'Switch to English'

  return (
    <Link className="lang-toggle" to={pathFor(target, variant)} aria-label={aria} title={aria}>
      <Icon name="translate" />
    </Link>
  )
}
