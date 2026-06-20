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

export const resume: Resume = {
  name: 'Chrono Lai',
  title: 'Software Engineer',
  location: 'Taiwan',
  gravatarHash: 'c0ffc65eca47c9d9315d2b91fc54bf98888d98587a09957047afe3e3d672d24b',
  // Shown as icons. `label` becomes the accessible label + hover tooltip.
  // Delete any you don't use; fill in the TODO handles.
  contacts: [
    { label: 'Email', href: 'mailto:x941i6c04[at]gmail.com', icon: 'email' },
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
      role: 'Senior Software Development Engineer',
      company: 'CyCraft Technology',
      href: 'https://cycraft.com',
      period: '2018/10 – Present',
      team: 'Frontend Development Dept.',
      highlights: [
        { text: 'XCockpit (MDR / IASM / EASM)', href: 'https://www.cycraft.com/xcockpit' },
        { text: 'CyberTotal', href: 'https://www.cycraft.com/cybertotal' },
        { text: 'ThreatWall', href: 'https://www.cycraft.com/threatwall' },
        { text: 'UI Component Library' },
        { text: 'Internal: Official Site, Leave System, Employee Check-in Bot' },
      ],
    },
    {
      role: 'Product Developer',
      company: 'Synology Inc.',
      href: 'https://www.synology.com',
      period: '2014/10 – 2018/09',
      team: 'SD2 WAT',
      description:
        'Full-stack product development across React frontend and C/C++ backend services.',
      projects: [
        {
          name: 'Synology Moments',
          href: 'https://www.synology.com/en-global/dsm/feature/moments',
          contributions: [
            'Developed core frontend modules using React, Redux, and Redux-Saga',
            'Implemented Lightbox, EXIF-based Map View, and 360° Panorama Viewer features',
            'Built photo browsing experiences leveraging metadata and geolocation information',
            'Developed backend services in C/C++ for photo management workflows',
          ],
        },
        {
          name: 'Video Station 2.0',
          href: 'https://www.synology.com/en-global/dsm/7.2/software_spec/video_station',
          contributions: [
            'Developed key features for the Video Station 2.0 redesign',
            'Migrated video playback from Flash/SWF technology to native HTML5 video and HLS streaming',
            'Implemented Chromecast integration, subtitle management, and HLS streaming workflows',
            'Developed backend services in C/C++ for video processing and streaming features',
          ],
        },
      ],
      techStack: ['React', 'Redux', 'Redux-Saga', 'Ext JS', 'JavaScript', 'HLS', 'Chromecast', 'C', 'C++'],
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
    { year: '2012/04', rank: '第一名', title: '國立台北科技大學電資學院第六屆金手獎' },
    { year: '2012/04', rank: '第三名', title: '100 學年度大學校院網路通訊軟體與創意應用競賽嵌入式軟體組' },
    { year: '2011/10', rank: '特優', title: '臺北科技大學資訊工程系實務專題競賽' },
    { year: '2011/07', rank: '第十一名', title: '台灣駭客年會 War Game', href: 'https://hitcon.org/2011/wargame/score_board.html' },
    { year: '2011', rank: '第三名', title: '臺北科技大學 通識競賽 魔術方塊大賽' },
    { year: '2010/12', rank: '第五名', title: '2010 彰化師大羽球錦標賽 公開組 男子單打' },
    { year: '2010', rank: '第二名', title: '臺北科技大學 通識競賽 魔術方塊大賽' },
    { year: '2009/12', rank: '第二名', title: '臺北科技大學九十八年校長盃 羽球甲組個人排名賽' },
    { year: '2009', rank: '第一名', title: '臺北科技大學 通識競賽 魔術方塊大賽' },
    { year: '2008', title: '臺北市畢業生市長獎' },
    { year: '2007/12', rank: '', title: '96學年度工業類學生技藝競賽（電腦修護職種）參賽證明' },
    { year: '2007/10', rank: '', title: '第37屆全國技能競賽（資訊與網路技術職類）成績評定及格' },
    { year: '2007/10', rank: '第二名', title: '第37屆全國技能競賽（資訊與網路技術職類）' },
    { year: '2007/06', rank: '第一名', title: '第37屆全國技能競賽北區初賽（資訊與網路技術職類）' },
    { year: '2007/05', rank: '第二名', title: '95學年度第 2 學期校內班級網頁競賽' },
    { year: '2007/05', rank: '第四名', title: '95學年度高二班際大隊接力比賽 男子組' },
    { year: '2007/04', rank: '第一名', title: '松山工農 益智遊戲社 校慶比賽' },
    { year: '2006/12', rank: '第三名', title: '臺北市 95 學年度高級中等學校學生電腦軟體設計競賽 開放組' },
    { year: '2006/10', rank: '', title: '第36屆全國技能競賽（資訊與網路技術職類）成績評定及格' },
    { year: '2006/10', rank: '第四名', title: '第36屆全國技能競賽（資訊與網路技術職類）' },
    { year: '2006/06', rank: '第二名', title: '94學年度第2學期高一大隊接力比賽 男子組' },
    { year: '2006/06', rank: '第二名', title: '九十四學年度第二學期校內班級網頁競賽' },
    { year: '2006/06', rank: '第五名', title: '第三十六屆全國技能競賽北區初賽（資訊與網路技術職類）' },
    { year: '2006/03', rank: '第二名', title: '94學年度第2學期高1班際桌球比賽 男子組' },
    { year: '2005/12', rank: '第二名', title: '94學年度無菸校園網頁設計比賽' },
  ],
  certifications: [
    { date: '2008/06', title: '單晶片能力認證丙級' },
    { date: '2007/11', title: '乙級電腦硬體裝修' },
    { date: '2007/07', title: '丙級電腦硬體裝修' },
    { date: '2007/06', title: '96-98臺北市街頭藝人活動許可證' },
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
  conferences: [
    { year: '2026', names: ['DEVCORE CONFERENCE'] },
    { year: '2025', names: ['CYBERSEC'] },
    { year: '2023', names: ['HITCON'] },
    { year: '2020', names: ['Synology Taipei'] },
    { year: '2019', names: ['HITCON'] },
    { year: '2018', names: ['HITCON', 'Modern Web', 'GDG DevFest Taipei', 'Synology Taipei'] },
    { year: '2017', names: ['HITCON'] },
    { year: '2016', names: ['HITCON', 'COSCUP'] },
    { year: '2015', names: ['HITCON', 'COSCUP', 'JSDC'] },
    { year: '2014', names: ['HITCON', 'COSCUP', 'OSDC'] },
    { year: '2013', names: ['HITCON', 'COSCUP', 'JSDC', 'WebConf Taiwan', 'PyConf Taiwan', 'PHPConf'] },
    { year: '2012', names: ['HITCON', 'COSCUP', 'OSDC'] },
    { year: '2011', names: ['HITCON', 'COSCUP', 'OSDC'] },
  ],
  community: [
    { year: '2015 – 2016', name: 'HITCON ZeroDay', href: 'https://zeroday.hitcon.org/', items:[{name: '後端開發人員'}] },
    {
      year: '2006 – ****',
      name: 'PTT Rubiks',
      href: 'https://www.ptt.cc/bbs/rubiks/index.html',
      items: [
        { year: '96', name: '全國魔術方塊大賽 – 裁判' },
        { year: '96', name: '冬季魔術方塊大賽 – 裁判' },
      ],
    },
  ],
  activities: [
    { period: '2013/09', role: '班代', org: '資工碩二' },
    { period: '2012/09', role: '班代', org: '資工碩一' },
    { period: '2012/02', role: '班代', org: '四資四' },
    { period: '2011/09', role: '班代', org: '四資四' },
    { period: '2011/02', role: '體育', org: '四資三' },
    { period: '2007/02', role: '材料管理組', org: '資二仁' },
    { period: '2007/02', role: '社長', org: '益智遊戲社' },
    { period: '2006/09', role: '社員', org: '象棋社' },
    { period: '2006/09', role: '資訊幹事', org: '資二仁' },
    { period: '2006/09', role: '設備管理組', org: '資二仁' },
    { period: '2006/02', role: '社員', org: '桌球社' },
    { period: '2006/02', role: '安全管理組', org: '資一仁' },
    { period: '2006/02', role: '資訊股長', org: '資一仁' },
    { period: '2005/09', role: '康樂股長', org: '資一仁' },
    { period: '2005/09', role: '材料管理組', org: '資一仁' },
    { period: '2005/09', role: '社員', org: '網頁製作社' },
  ],
  teams: [
    { period: '2012 – 2014', role: '隊員', org: '羽球隊' },
    { period: '2008 – 2012', role: '隊員', org: '羽球隊' },
    { period: '2005 – 2008', role: '選手', org: '技能競賽' },
    { period: '2004 – 2005', role: '隊員', org: '田徑隊' },
    { period: '2000 – 2002', role: '隊員', org: '毽子隊' },
    { period: '1998 – 2000', role: '隊員', org: '羽球隊' },
  ],
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
  ],
}
