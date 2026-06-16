# chrono.tw

Personal site / online resume. Built with Vite + React + TypeScript and deployed
to GitHub Pages at <https://chrono.tw>.

## Updating the resume

All resume content lives in a single source of truth:

```
src/data/resume.ts
```

Edit that file — name, title, summary, contacts, experience, education, skills,
projects — and the page re-renders from it. No layout/markup changes needed.

## Local development

```bash
pnpm install      # first time only
pnpm dev          # start dev server at http://localhost:5173
pnpm build        # type-check + production build into dist/
pnpm preview      # preview the production build locally
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds with pnpm and deploys to
GitHub Pages.

> One-time setup: in the repo, **Settings → Pages → Build and deployment →
> Source** must be set to **"GitHub Actions"**.
