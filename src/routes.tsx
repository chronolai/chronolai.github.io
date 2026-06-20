import type { RouteRecord } from 'vite-react-ssg'
import App from './App'

// Each route is prerendered to a static HTML file at build time.
// en is the site root (/, /cv) with /en, /en/cv as aliases; zh is namespaced.
export const routes: RouteRecord[] = [
  { path: '/', element: <App variant="home" locale="en" /> },
  { path: '/cv', element: <App variant="cv" locale="en" /> },
  { path: '/en', element: <App variant="home" locale="en" /> },
  { path: '/en/cv', element: <App variant="cv" locale="en" /> },
  { path: '/zh', element: <App variant="home" locale="zh" /> },
  { path: '/zh/cv', element: <App variant="cv" locale="zh" /> },
]
