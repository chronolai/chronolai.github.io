import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Emit each route as <route>/index.html (e.g. dist/cv/index.html) so the clean
  // /cv URL resolves on any static server (python http.server, GitHub Pages, …),
  // not only hosts that map /cv -> cv.html. Read by vite-react-ssg at build time;
  // it isn't part of Vite's typed config.
  // @ts-expect-error ssgOptions is consumed by vite-react-ssg, not Vite itself.
  ssgOptions: { dirStyle: 'nested' },
})
