// Shared resume content types. The actual content lives in resume.en.ts /
// resume.zh.ts; resume.ts selects the right one per locale.
import type { IconName } from '../components/icons'

export interface ContactLink {
  label: string // used as accessible label / tooltip; the UI shows the icon only
  href: string
  icon: IconName
  hidden?: boolean // keep the data but don't render the icon
}

// A bullet under an experience/education entry (shown on the CV only); optional link.
export interface Highlight {
  text: string
  href?: string
}

// A product breakdown under an experience entry: name + contribution bullets.
export interface ExperienceProject {
  name: string
  href?: string
  contributions: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  href?: string
  period: string
  location?: string
  team?: string // team / department within the company
  description?: string // one-line summary shown above the project breakdown
  highlights?: Highlight[]
  projects?: ExperienceProject[] // product breakdown; replaces highlights when present
  techStack?: string[] // combined tech-stack chips shown below the projects
}

export interface EducationItem {
  degree: string
  school: string
  period?: string
  lab?: { name: string; href?: string } // research lab / advisor group
  highlights?: Highlight[] // thesis / research topics
  cvOnly?: boolean // hide on the concise home page; show only on /cv
}

export interface ProjectItem {
  name: string
  description: string
  href?: string
}

export interface AwardItem {
  year: string
  title: string // award name (rank removed)
  rank?: string // placement / result, shown before the name
  href?: string
}

export interface CertificationItem {
  date: string // YYYY/MM
  title: string
}

export interface TalkItem {
  title: string
  venue: string
  date?: string // YYYY/MM/DD
  href?: string
}

export interface HackathonItem {
  name: string
  date: string
  href?: string
}

export interface ConferenceItem {
  year: string
  names: string[] // conferences attended that year
}

export interface CommunityItem {
  name: string
  href?: string
  year?: string
  items?: CommunityItem[] // nested sub-activities
}

export interface ActivityItem {
  period: string // e.g. '2006 – 2007'
  role: string // e.g. '班長', '社長', '隊員'
  org: string // class / club / team
}

export interface InterestItem {
  label: string
  icon: IconName
}

export interface InterestGroup {
  category: string
  items: InterestItem[]
}

export interface Resume {
  name: string
  title: string
  location?: string
  gravatarHash?: string // SHA-256 (or MD5) hash of your email, from gravatar.com
  contacts: ContactLink[]
  experience: ExperienceItem[]
  education: EducationItem[]
  awards?: AwardItem[]
  certifications?: CertificationItem[]
  talks?: TalkItem[]
  hackathons?: HackathonItem[]
  conferences?: ConferenceItem[]
  community?: CommunityItem[]
  activities?: ActivityItem[]
  teams?: ActivityItem[] // school / competition teams (reuses ActivityItem)
  interests?: InterestGroup[]
  projects?: ProjectItem[]
}

export type Locale = 'en' | 'zh'
