import type { RouteRecord } from 'vite-react-ssg'
import App from './App'

// Each route is prerendered to a static HTML file at build time.
export const routes: RouteRecord[] = [
  { path: '/', element: <App variant="home" /> },
  { path: '/cv', element: <App variant="cv" /> },
]
