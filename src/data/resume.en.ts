// English resume content. See types.ts for the shape and resume.ts for the
// per-locale selector.
import type { Resume } from './types'

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
      description:
        'Frontend platform development for enterprise cybersecurity products, shared UI infrastructure, and internal business systems.',
      projects: [
        {
          name: 'XCockpit (MDR / IASM / EASM)',
          href: 'https://www.cycraft.com/xcockpit',
          contributions: [
            'Frontend development for enterprise cybersecurity platforms',
            'Developed and maintained React-based application modules and workflows',
            'Contributed to multiple generations of cybersecurity products',
          ],
        },
        {
          name: 'CyberTotal & ThreatWall',
          contributions: [
            'Frontend development for cybersecurity products',
            'Developed user-facing workflows and data presentation interfaces',
          ],
        },
        {
          name: 'UI Component Library',
          contributions: [
            "Contributed to two generations of the company's shared UI component library used across multiple products",
            'Developed reusable UI components and established a shared SCSS-based design system',
            'Designed a Bootstrap-based styling architecture supporting React-Bootstrap and custom React components',
            'Built a unified icon pipeline generating both React SVG components and web font assets from a single source',
          ],
        },
        {
          name: 'Official Website',
          contributions: [
            'Architected and developed the second-generation corporate website using Gatsby.js',
            'Designed a Markdown-based content workflow enabling non-technical teams to update website content independently',
            'Built GitLab CI/CD pipelines for automated build and deployment workflows',
            'Supported packaging and AWS deployment for the third-generation WordPress-based corporate website',
          ],
        },
        {
          name: 'Leave Management System',
          contributions: [
            'Replaced a legacy ProcessMaker workflow with a custom in-house leave management platform',
            'Developed a full-stack solution using Django, React, and OAuth integration',
            'Implemented approval workflows and HR-related business processes',
          ],
        },
        {
          name: 'Internal Tools',
          contributions: [
            'Developed a Mattermost-based employee attendance system integrated with HR platforms',
            'Automated attendance workflows and employee data synchronization across multiple workspaces',
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
      highlights: [{ text: 'Thesis: Static Code Analysis' }],
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
          text: 'Capstone Project: Android-based Remote Control Vehicle with Real-time Video Streaming',
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
      school:
        'Kindergarten Affiliated with the Police Machinery Repair Factory, National Police Agency, Ministry of the Interior',
      period: '1995 – 1996',
      cvOnly: true,
    },
  ],
  awards: [
    { year: '2012/04', rank: '1st Place', title: "6th Golden Hand Award, College of Electrical Engineering and Computer Science, National Taipei University of Technology" },
    { year: '2012/04', rank: '3rd Place', title: 'AY2011 Intercollegiate Network Communication Software and Creative Application Competition — Embedded Software Group' },
    { year: '2011/10', rank: 'Outstanding', title: 'NTUT CSIE Capstone Project Competition' },
    { year: '2011/07', rank: '11th Place', title: 'HITCON (Taiwan Hacker Conference) War Game', href: 'https://hitcon.org/2011/wargame/score_board.html' },
    { year: '2011', rank: '3rd Place', title: "NTUT General Education Competition — Rubik's Cube Contest" },
    { year: '2010/12', rank: '5th Place', title: "2010 NCUE Badminton Championship — Open Division, Men's Singles" },
    { year: '2010', rank: '2nd Place', title: "NTUT General Education Competition — Rubik's Cube Contest" },
    { year: '2009/12', rank: '2nd Place', title: "2009 NTUT President's Cup — Badminton Division A Individual Ranking" },
    { year: '2009', rank: '1st Place', title: "NTUT General Education Competition — Rubik's Cube Contest" },
    { year: '2008', title: "Taipei City Mayor's Award for Graduates" },
    { year: '2007/12', rank: '', title: 'AY2007 Industrial Student Skills Competition (Computer Repair) — Certificate of Participation' },
    { year: '2007/10', rank: '', title: '37th National Skills Competition (Information & Network Technology) — Qualified' },
    { year: '2007/10', rank: '2nd Place', title: '37th National Skills Competition (Information & Network Technology)' },
    { year: '2007/06', rank: '1st Place', title: '37th National Skills Competition Northern Regional Qualifier (Information & Network Technology)' },
    { year: '2007/05', rank: '2nd Place', title: 'AY2006 Semester 2 Class Website Competition' },
    { year: '2007/05', rank: '4th Place', title: "AY2006 11th-Grade Inter-Class Relay Race — Men's Group" },
    { year: '2007/04', rank: '1st Place', title: 'Songshan Agricultural & Industrial Vocational High School Puzzle Game Club — Anniversary Competition' },
    { year: '2006/12', rank: '3rd Place', title: 'AY2006 Taipei City High School Student Computer Software Design Competition — Open Division' },
    { year: '2006/10', rank: '', title: '36th National Skills Competition (Information & Network Technology) — Qualified' },
    { year: '2006/10', rank: '4th Place', title: '36th National Skills Competition (Information & Network Technology)' },
    { year: '2006/06', rank: '2nd Place', title: "AY2005 Semester 2 10th-Grade Relay Race — Men's Group" },
    { year: '2006/06', rank: '2nd Place', title: 'AY2005 Semester 2 Class Website Competition' },
    { year: '2006/06', rank: '5th Place', title: '36th National Skills Competition Northern Regional Qualifier (Information & Network Technology)' },
    { year: '2006/03', rank: '2nd Place', title: "AY2005 Semester 2 10th-Grade Inter-Class Table Tennis — Men's Group" },
    { year: '2005/12', rank: '2nd Place', title: 'AY2005 Smoke-Free Campus Web Design Competition' },
  ],
  certifications: [
    { date: '2008/06', title: 'Microcontroller Proficiency Certification — Class C' },
    { date: '2007/11', title: 'Computer Hardware Maintenance — Class B' },
    { date: '2007/07', title: 'Computer Hardware Maintenance — Class C' },
    { date: '2007/06', title: 'Taipei City Street Performer Permit (2007–2009)' },
    { date: '2007/03', title: 'Web Design — Class C' },
    { date: '2006/07', title: 'Computer Software Application — Class C' },
  ],
  talks: [
    {
      title: 'Android Car',
      venue: 'Taipei GTUG',
      date: '2012/08/15',
      href: 'https://gdg-taipei.kktix.cc/events/0aafc1',
    },
    {
      title: "How to Solve a Rubik's Cube in 20 Seconds on Fedora",
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
    { year: '2015 – 2016', name: 'HITCON ZeroDay', href: 'https://zeroday.hitcon.org/', items: [{ name: 'Backend Developer' }] },
    {
      year: '2006 – ****',
      name: 'PTT Rubiks',
      href: 'https://www.ptt.cc/bbs/rubiks/index.html',
      items: [
        { year: '2007', name: "National Rubik's Cube Championship – Judge" },
        { year: '2007', name: "Winter Rubik's Cube Championship – Judge" },
      ],
    },
  ],
  activities: [
    { period: '2013/09', role: 'Class Representative', org: "CSIE Master's Year 2" },
    { period: '2012/09', role: 'Class Representative', org: "CSIE Master's Year 1" },
    { period: '2012/02', role: 'Class Representative', org: 'CSIE Year 4' },
    { period: '2011/09', role: 'Class Representative', org: 'CSIE Year 4' },
    { period: '2011/02', role: 'Athletics Officer', org: 'CSIE Year 3' },
    { period: '2007/02', role: 'Materials Management', org: 'CS Year 2' },
    { period: '2007/02', role: 'Club President', org: 'Puzzle Game Club' },
    { period: '2006/09', role: 'Member', org: 'Chess Club' },
    { period: '2006/09', role: 'IT Staff', org: 'CS Year 2' },
    { period: '2006/09', role: 'Equipment Management', org: 'CS Year 2' },
    { period: '2006/02', role: 'Member', org: 'Table Tennis Club' },
    { period: '2006/02', role: 'Safety Management', org: 'CS Year 1' },
    { period: '2006/02', role: 'IT Officer', org: 'CS Year 1' },
    { period: '2005/09', role: 'Recreation Officer', org: 'CS Year 1' },
    { period: '2005/09', role: 'Materials Management', org: 'CS Year 1' },
    { period: '2005/09', role: 'Member', org: 'Web Design Club' },
  ],
  teams: [
    { period: '2012 – 2014', role: 'Member', org: 'Badminton Team' },
    { period: '2008 – 2012', role: 'Member', org: 'Badminton Team' },
    { period: '2005 – 2008', role: 'Competitor', org: 'Skills Competition' },
    { period: '2004 – 2005', role: 'Member', org: 'Track & Field Team' },
    { period: '2000 – 2002', role: 'Member', org: 'Shuttlecock Team' },
    { period: '1998 – 2000', role: 'Member', org: 'Badminton Team' },
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
