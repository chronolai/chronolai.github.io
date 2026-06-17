// Single source of truth for the resume.
// Edit this file to update the site — the page renders entirely from `resume`.
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

export interface ExperienceItem {
  role: string
  company: string
  href?: string
  period: string
  location?: string
  team?: string // team / department within the company
  highlights?: Highlight[]
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
  title: string
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
  interests?: InterestGroup[]
  projects?: ProjectItem[]
}

export const resume: Resume = {
  name: 'Chrono Lai',
  title: 'Software Engineer',
  location: 'Taiwan',
  gravatarHash: 'c0ffc65eca47c9d9315d2b91fc54bf98888d98587a09957047afe3e3d672d24b',
  // Shown as icons. `label` becomes the accessible label + hover tooltip.
  // Delete any you don't use; fill in the TODO handles.
  contacts: [
    { label: 'Email', href: 'mailto:x941i6c04@gmail.com', icon: 'email' },
    { label: 'GitHub', href: 'https://github.com/chronolai', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chronolai/', icon: 'linkedin' },
    { label: 'X (Twitter)', href: 'https://x.com/x941i6c04', icon: 'x', hidden: true },
    { label: 'Instagram', href: 'https://www.instagram.com/chronolai/', icon: 'instagram', hidden: true },
    { label: 'Facebook', href: 'https://www.facebook.com/x941i6c04', icon: 'facebook', hidden: true },
    { label: 'Threads', href: 'https://www.threads.com/@chronolai', icon: 'threads', hidden: true },
    { label: 'Plurk', href: 'https://www.plurk.com/x941i6c04', icon: 'plurk', hidden: true },
    { label: 'YouTube', href: 'https://www.youtube.com/@x941i6c04', icon: 'youtube', hidden: true },
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'CyCraft Technology',
      href: 'https://cycraft.com',
      period: '2018/10 – Present',
      team: 'Frontend Team',
      highlights: [
        { text: 'XCockpit (MDR/IASM/EASM)', href: 'https://www.cycraft.com/xcockpit' },
        { text: 'CyberTotal', href: 'https://www.cycraft.com/cybertotal' },
        { text: 'ThreatWall', href: 'https://www.cycraft.com/threatwall' },
        { text: 'UI Framework 2.0 — shared component library' },
        { text: 'Internal: Official Site, Leave System, Employee Check-in Bot' },
      ],
    },
    {
      role: 'Product Developer',
      company: 'Synology Inc.',
      href: 'https://www.synology.com',
      period: '2014/10 – 2018/09',
      team: 'SD2 WAT',
      highlights: [
        {
          text: 'Synology Moments',
          href: 'https://www.synology.com/en-global/dsm/feature/moments',
        },
        {
          text: 'Video Station',
          href: 'https://www.synology.com/en-global/dsm/7.2/software_spec/video_station',
        },
        { text: 'internal: UI Request System' },
        { text: 'tools: ExtExpress, SynoWeekly' },
      ],
    },
  ],
  education: [
    {
      degree: 'M.S. in Computer Science and Information Engineering',
      school: 'National Taipei University of Technology',
      period: '2012 – 2014',
      lab: {
        name: 'Intelligent System Lab',
        href: 'https://academic.ntut.edu.tw/jykuo/main/17662/17663/normalPost',
      },
      highlights: [{ text: 'The Study of Static Code Analysis' }],
    },
    {
      degree: 'B.S. in Computer Science and Information Engineering',
      school: 'National Taipei University of Technology',
      period: '2008 – 2012',
      lab: {
        name: 'Embedded and Parallel Systems Lab',
      },
      highlights: [
        {
          text: 'A Wireless Network-based Android Remote Control Car with Real-time Camera Video Supported',
        },
      ],
    },
    {
      degree: 'Dept. of Computer Science',
      school: 'Taipei Municipal Songshan High School of Agriculture and Industry',
      period: '2005 – 2008',
      cvOnly: true,
    },
    {
      degree: 'Junior High School',
      school: 'Taipei Municipal Heping High School',
      period: '2002 – 2005',
      cvOnly: true,
    },
    {
      degree: 'Elementary School',
      school: 'Taipei Municipal Daan Elementary School',
      period: '1996 – 2002',
      cvOnly: true,
    },
    {
      degree: 'Kindergarten',
      school: '內政部警政署警察機械修理廠附設幼稚園',
      period: '1995 – 1996',
      cvOnly: true,
    },
  ],
  awards: [
    { year: '2012/04', title: '國立台北科技大學電資學院第六屆金手獎第一名' },
    { year: '2012/04', title: '100 學年度大學校院網路通訊軟體與創意應用競賽嵌入式軟體組第三名' },
    { year: '2011/10', title: '臺北科技大學資訊工程系實務專題競賽特優' },
    { year: '2011/07', title: '台灣駭客年會 War Game 第十一名', href: 'https://hitcon.org/2011/wargame/score_board.html' },
    { year: '2011', title: '臺北科技大學 通識競賽 魔術方塊大賽第三名' },
    { year: '2010', title: '臺北科技大學 通識競賽 魔術方塊大賽第二名' },
    { year: '2009', title: '臺北科技大學 通識競賽 魔術方塊大賽第一名' },
    { year: '2008', title: '臺北市畢業生市長獎' },
    { year: '2007/12', title: '96學年度工業類學生技藝競賽（電腦修護職種）：參賽證明' },
    { year: '2007/10', title: '第37屆全國技能競賽（資訊與網路技術職類）：成績評定及格' },
    { year: '2007/10', title: '第37屆全國技能競賽（資訊與網路技術職類）：第二名' },
    { year: '2007/06', title: '第37屆全國技能競賽北區初賽（資訊與網路技術職類）：第一名' },
    { year: '2007/05', title: '95學年度第 2 學期校內班級網頁競賽：第二名' },
    { year: '2007/05', title: '95學年度高二班際大隊接力比賽：男子組第四名' },
    { year: '2006/12', title: '臺北市 95 學年度高級中等學校學生電腦軟體設計競賽：開放組第 3 名' },
    { year: '2006/10', title: '第36屆全國技能競賽（資訊與網路技術職類）：成績評定及格' },
    { year: '2006/10', title: '第36屆全國技能競賽（資訊與網路技術職類）：第四名' },
    { year: '2006/06', title: '94學年度第2學期高一大隊接力比賽：男子組第2名' },
    { year: '2006/06', title: '九十四學年度第二學期校內班級網頁競賽：第二名' },
    { year: '2006/06', title: '第三十六屆全國技能競賽北區初賽（資訊與網路技術職類）：第五名' },
    { year: '2006/03', title: '94學年度第2學期高1班際桌球比賽：男子組第2名' },
    { year: '2005/12', title: '94學年度無菸校園網頁設計比賽：第二名' },
  ],
  certifications: [
    { date: '2008/06', title: '單晶片能力認證丙級' },
    { date: '2007/11', title: '乙級電腦硬體裝修' },
    { date: '2007/07', title: '丙級電腦硬體裝修' },
    { date: '2007/06', title: '96臺北市街頭藝人活動許可證' },
    { date: '2007/03', title: '丙級網頁設計' },
    { date: '2006/07', title: '丙級電腦軟體應用' },
  ],
  talks: [
    {
      title: 'Android Car',
      venue: 'Taipei GTUG',
      date: '2012/08/15',
      href: 'https://gdg-taipei.kktix.cc/events/0aafc1',
    },
    {
      title: '在 Fedora 上如何 20 秒破解魔術方塊',
      venue: 'FTUG',
      date: '2007/09/15',
      href: 'https://groups.google.com/g/ftug/c/AImrxsdIXOc?hl=zh-TW',
    },
  ],
  hackathons: [{ date: '2015', name: 'HackNTU' }],
  interests: [
    {
      category: 'Interests',
      items: [
        { label: 'Puzzle', icon: 'puzzle' },
        { label: 'Badminton', icon: 'badminton' },
        { label: 'Darts', icon: 'darts' },
      ],
    },
    {
      category: 'Favorites',
      items: [
        { label: 'Cat', icon: 'cat' },
        { label: 'Pokémon', icon: 'pokemon' },
      ],
    },
  ],
  projects: [
    {
      name: 'videojs-quality-selector',
      description: 'Video.js plugin for source/quality selection.',
      href: 'https://github.com/chronolai/videojs-qualityselector',
    },
    {
      name: 'videojs-panorama',
      description: 'Video.js plugin for 360° panorama video playback.',
      href: 'https://github.com/chronolai/videojs-panorama',
    },
    {
      name: 'DartsKeeper',
      description: 'Darts scorekeeping app.',
      href: 'https://github.com/chronolai/DartsKeeper',
    },
    {
      name: 'cocomvc',
      description: 'Lightweight PHP MVC framework.',
      href: 'https://github.com/chronolai/cocomvc',
    },
    {
      name: 'learn-jp',
      description: 'Japanese learning tool.',
      href: 'http://chronolai.github.io/learn-jp/',
    },
  ],
}
