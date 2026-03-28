/**
 * Edit this file to customize your portfolio — names, copy, links, and images.
 *
 * Project screenshots: add `.jpg`, `.jpeg`, `.png`, or `.webp` files under `public/projects/`
 * and set `imageUrl` to `/projects/your-file.jpg` (path is from the site root, case-sensitive on some hosts).
 */

import portrait from '../assets/photo_2025-04-18_17-55-38.jpg'

export const profile = {
  name: 'Hawltu Yenealem',
  /** Short logo in the header */
  initials: 'HY',
  role: 'Software Engineer',
  headline: 'Mobile apps & full-stack web developer',
  summary:
    '4+ years building native and cross-platform mobile experiences and scalable web products. I care about performance, accessibility, and code that teams enjoy maintaining.',
  email: 'yenealemhawltu@gmail.com',
  location: 'Addis Ababa, Ethiopia',
  /** Hero portrait — file in `src/assets/` (imported so Vite resolves the URL in dev & build) */
  portraitUrl: portrait,
  resumeUrl:
    'https://docs.google.com/document/d/1Sz7lKHNGBNUM93bze162vV4vT-mMSCNY/edit?usp=sharing&ouid=106971947702437787249&rtpof=true&sd=true',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/hawltuyenealem' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hawltu-yenealem12' },
] as const

export const skillGroups = [
  {
    title: 'Mobile',
    items: ['Flutter', 'Kotlin', 'React Native'],
  },
  {
    title: 'Web & backend',
    items: ['TypeScript', 'Angular', 'Laravel', 'React', 'Node.js', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Practices',
    items: ['CI/CD', 'Testing', 'System design', 'Mentoring', 'Agile'],
  },
] as const

/** Local files in `public/projects/` — swap files or paths anytime */
export const projects = [
  {
    title: 'BrainBite',
    description:
      'Mobile app developed during my time with BrainBite (Netherlands). I contributed to the product while leading internship teams.',
    tags: ['Mobile', 'Team lead', 'Internships'],
    imageUrl: '/projects/brainbite.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.brainbite.app&pcampaignid=web_share',
  },
  {
    title: 'University & attendance apps',
    description:
      'Mobile apps for universities and attendance tracking built at Farka ICT Solution, alongside other education-focused work.',
    tags: ['Flutter', 'Mobile'],
    imageUrl: '/projects/university_app.jpg',
    link: '#',
  },
  {
    title: 'Dating app',
    description:
      'Mobile dating product: profiles, matching, and chat — built with a focus on smooth UX and reliable real-time updates.',
    tags: ['Flutter', 'Mobile', 'Social'],
    imageUrl: '/projects/dating_app.jpg',
    link: '#',
  },
  {
    title: 'Teacher & school management',
    description:
      'Teacher management system as a web application, plus participation in a broader school management system at Farka ICT Solution.',
    tags: ['Laravel', 'Web', 'Full-stack'],
    imageUrl: '/projects/school-web.png',
    link: 'https://tmis.oeb.gov.et',
  },
  {
    title: 'Freelance — payment, travel & commerce',
    description:
      'Independent work: payment app, touring guide app, and e-commerce app as a mobile and full-stack developer.',
    tags: ['Mobile', 'E-commerce', 'Freelance'],
    imageUrl: '/projects/travel.jpg',
    link: '#',
  },
] as const

export const experience = [
  {
    company: 'BrainBite',
    location: 'Netherlands',
    role: 'Mobile developer & internship team lead',
    period: 'Apr 2024 — Mar 2026',
    bullets: [
      'Led internship teams.',
      'Participated in mobile app development for BrainBite.',
    ],
  },
  {
    company: 'Farka ICT Solution',
    location: 'Addis Ababa, Ethiopia',
    role: 'Mobile & full-stack developer',
    period: 'Feb 2024 — Present',
    bullets: [
      'Led internship teams.',
      'Developed mobile apps including university and attendance apps.',
      'Developed a teacher management system web application.',
      'Participated in the school management system.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Addis Ababa, Ethiopia',
    role: 'Mobile & full-stack developer',
    period: 'Jan 2023 — Present',
    bullets: [
      'Worked as a mobile app developer and full-stack web developer.',
      'Developed mobile apps including payment, touring guide, and e-commerce apps.',
    ],
  },
  {
    company: 'Igado+',
    location: 'Addis Ababa, Ethiopia',
    role: 'Fraud & payment analyst',
    period: 'Jan 2023 — Feb 2024',
    bullets: [
      'Fraud and payment analysis.',
      'Trained customer representatives on the Zendesk platform.',
    ],
  },
  {
    company: '2f Capital Ltd',
    location: 'Addis Ababa, Ethiopia',
    role: 'Project manager & mobile developer',
    period: 'Jun 2022 — Jan 2023',
    bullets: [
      'Project management using agile methodology.',
      'Developed mobile apps including delivery, e-commerce, and CNCM projects.',
    ],
  },
] as const
