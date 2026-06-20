// Chinese resume content. See types.ts for the shape and resume.ts for the
// per-locale selector.
import type { Resume } from './types'

export const resume: Resume = {
  name: 'Chrono Lai',
  title: 'Software Engineer',
  location: '台灣',
  gravatarHash: 'c0ffc65eca47c9d9315d2b91fc54bf98888d98587a09957047afe3e3d672d24b',
  // Shown as icons. `label` becomes the accessible label + hover tooltip.
  // Delete any you don't use; fill in the TODO handles.
  contacts: [
    { label: '電子郵件', href: 'mailto:x941i6c04[at]gmail.com', icon: 'email' },
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
      description:
        '為企業資安產品、共用 UI 基礎建設與內部商業系統進行前端平台開發。',
      projects: [
        {
          name: 'XCockpit (MDR / IASM / EASM)',
          href: 'https://www.cycraft.com/xcockpit',
          contributions: [
            '負責企業資安平台的前端開發',
            '開發與維護以 React 為基礎的應用模組與操作流程',
            '參與多個世代的資安產品開發',
          ],
        },
        {
          name: 'CyberTotal & ThreatWall',
          contributions: [
            '負責資安產品的前端開發',
            '開發面向使用者的操作流程與資料呈現介面',
          ],
        },
        {
          name: 'UI Component Library',
          contributions: [
            '參與公司兩個世代、跨多項產品使用的共用 UI 元件庫',
            '開發可重用的 UI 元件，並建立以 SCSS 為基礎的共用設計系統',
            '設計以 Bootstrap 為基礎的樣式架構，支援 React-Bootstrap 與自訂 React 元件',
            '建立統一的 icon 產製流程，從單一來源同時產出 React SVG 元件與 web font 資源',
          ],
        },
        {
          name: 'Official Website',
          contributions: [
            '使用 Gatsby.js 規劃並開發第二代公司官網',
            '設計以 Markdown 為基礎的內容流程，讓非技術團隊能自行更新網站內容',
            '建置 GitLab CI/CD pipeline，自動化建置與部署流程',
            '支援第三代以 WordPress 為基礎的公司官網之封裝與 AWS 部署',
          ],
        },
        {
          name: 'Leave Management System',
          contributions: [
            '以自建的請假管理平台取代既有的 ProcessMaker 流程',
            '使用 Django、React 與 OAuth 整合開發全端解決方案',
            '實作簽核流程與人資相關的商業流程',
          ],
        },
        {
          name: 'Internal Tools',
          contributions: [
            '開發整合人資平台、以 Mattermost 為基礎的員工出勤系統',
            '自動化出勤流程與跨多個工作區的員工資料同步',
          ],
        },
      ],
      techStack: [
        'React',
        'Redux',
        'Redux-Saga',
        'TypeScript',
        'JavaScript',
        'SCSS',
        'Styled Components',
        'React-Bootstrap',
        'Gatsby.js',
        'Django',
        'Python',
        'OAuth',
        'GitLab CI/CD',
        'AWS',
      ],
    },
    {
      role: 'Product Developer',
      company: 'Synology Inc.',
      href: 'https://www.synology.com',
      period: '2014/10 – 2018/09',
      team: 'SD2 WAT',
      description:
        '橫跨 React 前端與 C/C++ 後端服務的全端產品開發。',
      projects: [
        {
          name: 'Synology Moments',
          href: 'https://www.synology.com/en-global/dsm/feature/moments',
          contributions: [
            '使用 React、Redux 與 Redux-Saga 開發核心前端模組',
            '實作 Lightbox、基於 EXIF 的地圖檢視，以及 360° 全景檢視功能',
            '運用中繼資料與地理位置資訊打造相片瀏覽體驗',
            '以 C/C++ 開發相片管理流程的後端服務',
          ],
        },
        {
          name: 'Video Station 2.0',
          href: 'https://www.synology.com/en-global/dsm/7.2/software_spec/video_station',
          contributions: [
            '參與 Video Station 2.0 改版的關鍵功能開發',
            '將影片播放從 Flash/SWF 技術遷移至原生 HTML5 video 與 HLS 串流',
            '實作 Chromecast 整合、字幕管理與 HLS 串流流程',
            '以 C/C++ 開發影片處理與串流功能的後端服務',
          ],
        },
      ],
      techStack: ['React', 'Redux', 'Redux-Saga', 'Ext JS', 'JavaScript', 'HLS', 'Chromecast', 'C', 'C++'],
    },
  ],
  education: [
    {
      degree: '資訊工程碩士',
      school: '國立臺北科技大學',
      period: '2012 – 2014',
      lab: {
        name: '智慧型系統實驗室',
        href: 'https://academic.ntut.edu.tw/jykuo/main/17662/17663/normalPost',
      },
      highlights: [{ text: '論文：靜態程式碼分析' }],
    },
    {
      degree: '資訊工程學士',
      school: '國立臺北科技大學',
      period: '2008 – 2012',
      lab: {
        name: '嵌入式與平行系統實驗室',
      },
      highlights: [
        {
          text: '專題：基於 Android 的遠端遙控車與即時影像串流',
        },
      ],
    },
    {
      degree: '資訊科',
      school: '臺北市立松山高級工農職業學校',
      period: '2005 – 2008',
      cvOnly: true,
    },
    {
      degree: '國民中學',
      school: '臺北市立和平高級中學',
      period: '2002 – 2005',
      cvOnly: true,
    },
    {
      degree: '國民小學',
      school: '臺北市大安國民小學',
      period: '1996 – 2002',
      cvOnly: true,
    },
    {
      degree: '幼稚園',
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
