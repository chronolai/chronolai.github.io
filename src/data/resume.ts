// Per-locale resume selector. Content lives in resume.en.ts / resume.zh.ts;
// shared types live in types.ts. Edit those, not this file.
export * from './types'
import type { Locale, Resume } from './types'
import { resume as en } from './resume.en'
import { resume as zh } from './resume.zh'

export const resumes: Record<Locale, Resume> = { en, zh }

export const getResume = (locale: Locale): Resume => resumes[locale]
