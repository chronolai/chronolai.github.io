import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function buildDate(): string {
  return new Date().toISOString().slice(0, 10).replace(/-/g, '/')
}

// Last git commit date (YYYY/MM/DD) of the resume data; falls back to the build
// date if git history is unavailable (e.g. a shallow clone without `fetch-depth: 0`).
function resumeUpdatedDate(): string {
  try {
    return (
      execSync('git log -1 --format=%cd --date=format:%Y/%m/%d -- src/data/resume.ts', {
        encoding: 'utf8',
      }).trim() || buildDate()
    )
  } catch {
    return buildDate()
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { __RESUME_UPDATED__: JSON.stringify(resumeUpdatedDate()) },
  // Emit each route as <route>/index.html (e.g. dist/cv/index.html) so the clean
  // /cv URL resolves on any static server (python http.server, GitHub Pages, …),
  // not only hosts that map /cv -> cv.html. Read by vite-react-ssg at build time;
  // it isn't part of Vite's typed config.
  // @ts-expect-error ssgOptions is consumed by vite-react-ssg, not Vite itself.
  ssgOptions: { dirStyle: 'nested' },
})
