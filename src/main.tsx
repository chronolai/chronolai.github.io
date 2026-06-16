import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

// Mounts (in the browser) and prerenders each route (at build time).
export const createRoot = ViteReactSSG({ routes })
