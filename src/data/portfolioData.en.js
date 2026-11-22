/**
 * English version of the portfolio content.
 *
 * Same structure as portfolioData.js (French). When you change something in one file,
 * update the other one too. Links, contact details, icons and images are shared.
 */

import {
  Layout,
  Server,
  Code2,
  Database,
  ShoppingCart,
  Palette,
  Wrench,
  BarChart3,
  ShieldCheck,
  Network,
  Globe,
  Boxes,
  Headphones,
  Presentation,
  PenTool,
  Search,
} from 'lucide-react';

import {
  personalInfo as personalInfoFr,
  socials,
  marqueeTech,
  projects as projectsFr,
  contact as contactFr,
} from './portfolioData';

export { socials, marqueeTech };

// Images and links come from the French file (same order as `projects` there)
const projectBase = (title) => {
  const p = projectsFr.find((item) => item.title === title);
  return { image: p.image, link: p.link, preview: p.preview, github: p.github, category: p.category };
};

/* ------------------------------------------------------------------ */
/* Personal info                                                       */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  ...personalInfoFr,
  title: 'Fullstack Developer & IT Support',
  location: 'Dakar, Senegal',
  status: 'Available for freelance projects and full-time opportunities',
  trust: 'Sole proprietorship registered in Senegal (RCCM / NINEA)',
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  badge: 'Available',
  // Words wrapped in * are highlighted (blue gradient).
  title: 'I build *solid* web solutions, and I keep them *running*.',
  roles: ['Fullstack Developer', 'IT Support Technician', 'Cybersecurity enthusiast'],
  subtitle:
    'Freelance fullstack developer based in Dakar. I design modern websites and web applications, provide IT support to my clients, and I am gradually specializing in cybersecurity.',
  primaryCta: { label: 'See my projects', target: 'projects' },
  secondaryCta: { label: 'Download my CV (French)' },
};

/* ------------------------------------------------------------------ */
/* Key figures                                                         */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: 3, suffix: '+', label: 'years of freelance experience', detail: 'since January 2023' },
  { value: 6, suffix: '+', label: 'web projects delivered' },
  { value: 4, prefix: 'Top ', label: 'in Africa in esports', detail: 'national team · Rocket League · 2026' },
  { value: 3, label: 'languages spoken' },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  bio: [
    'I am a web developer, equally comfortable on the front end and the back end. I work directly with my clients (consulting firms, e-commerce, small businesses), from mockup to launch, with rigor and autonomy.',
    'I also work on hardware, networks and IP telephony: when something breaks, I find the cause and fix it. Today, I am moving towards cybersecurity.',
  ],
  qualities: ['Patience', 'Analytical mind', 'Autonomy & curiosity', 'Teamwork'],
  education: [
    {
      year: '2024',
      title: 'Junior Cybersecurity Analyst Certification',
      school: 'Université Numérique Cheikh Hamidou Kane',
    },
    {
      year: '2024',
      title: 'Mobile Development Certification',
      school: 'Université Numérique Cheikh Hamidou Kane',
    },
    {
      year: '2022',
      title: "Bachelor's degree in Computer Science, Software Engineering",
      school: 'Institut Polytechnique de Dakar Thomas Sankara',
      note: 'With honors · thesis graded 18/20, highest honors',
    },
    {
      year: '2021',
      title: 'Higher Technician Diploma in Software Engineering',
      school: 'Institut Polytechnique de Dakar Thomas Sankara',
    },
    {
      year: '2018',
      title: 'Baccalaureate, Science (S1)',
      school: 'Groupe Scolaire Saint-Pierre de Grand-Dakar',
    },
  ],
  languages: [
    { name: 'Wolof', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Intermediate' },
  ],
  interests: ['Basketball', 'Video games & esports', 'Movies & anime', 'Manga'],
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = [
  {
    icon: Globe,
    title: 'Websites & web apps',
    description:
      'Showcase sites, content platforms and online stores (WordPress/WooCommerce, React, HTML/CSS/JS). Responsive, animated and optimized.',
    tags: ['WordPress', 'React', 'SEO'],
  },
  {
    icon: Boxes,
    title: 'Custom development',
    description:
      'Fullstack business applications: Angular or React on the front end, Spring Boot or Laravel on the back end, REST APIs and databases.',
    tags: ['Angular', 'Spring Boot', 'Laravel'],
  },
  {
    icon: PenTool,
    title: 'Design & graphics',
    description:
      'Interface mockups and prototypes in Figma, and visual assets for my clients in Canva: posters, visuals for social media and communication.',
    tags: ['Figma', 'Canva', 'UI/UX', 'Posters'],
  },
  {
    icon: Search,
    title: 'SEO optimization',
    description:
      'Search engine optimization for showcase sites and online stores (WordPress, WooCommerce, Shopify): structure, tags, performance and long-term follow-up.',
    tags: ['SEO', 'WordPress', 'Performance'],
  },
  {
    icon: Headphones,
    title: 'IT support & infrastructure',
    description:
      'Diagnosis and repair of PCs and smartphones, Windows and Windows Server administration, network cabling, email and cPanel, IP telephony (Yeastar IPBX).',
    tags: ['Windows Server', 'Network', 'Yeastar'],
  },
  {
    icon: Presentation,
    title: 'Training',
    description: 'Creating materials and running training sessions, in IT support as well as e-commerce.',
    tags: ['IT support', 'E-commerce'],
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  { title: 'Frontend', icon: Layout, items: ['React / Vite', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Laravel', 'REST APIs'] },
  { title: 'Languages', icon: Code2, items: ['JavaScript (ES6+)', 'Java', 'PHP', 'Python'] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'CMS & e-commerce', icon: ShoppingCart, items: ['WordPress', 'WooCommerce', 'Shopify', 'SEO'] },
  { title: 'Design', icon: Palette, items: ['Figma', 'Canva', 'UI/UX', 'Wireframing', 'Prototyping', 'Posters & visuals'] },
  {
    title: 'Tools & methods',
    icon: Wrench,
    items: ['Git / GitHub', 'Netlify', 'VS Code', 'Scrum / Agile', 'UML', 'AI agents (Claude, Copilot)'],
  },
  { title: 'Data & reporting', icon: BarChart3, items: ['Python', 'Excel (dashboards, automation)'] },
  { title: 'Security', icon: ShieldCheck, items: ['Cybersecurity fundamentals', 'Vulnerability assessment'] },
  {
    title: 'IT support & network',
    icon: Network,
    items: ['Windows 10/11', 'Windows Server', 'Hardware maintenance', 'Network cabling', 'Mail servers / cPanel', 'IP telephony (Yeastar)'],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const journey = [
  {
    period: '01/2023 – present',
    role: 'Freelance Web Developer',
    place: 'Dakar, Senegal',
    note: 'Registered sole proprietorship since November 2026',
    description:
      'Design, development and maintenance of websites and web platforms for clients in Senegal and abroad: animated content sites, document platforms, e-commerce, reporting tools.',
    current: true,
  },
  {
    period: 'Ad-hoc missions',
    role: 'IT Support Technician',
    place: 'Independent · Dakar',
    description:
      'Installation and repair of PCs, printers and smartphones, software troubleshooting (Windows, etc.), network and IP telephony setup.',
  },
  {
    period: '06/2022 – 12/2022',
    role: 'Fullstack Developer Intern',
    place: 'Groupe La Poste du Sénégal · Dakar',
    description:
      'Design and development of an employee time-tracking web application: UML modeling, Angular front end, Spring Boot back end, MySQL.',
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

// Same values as the French `category` field; only the labels are translated
export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'Web', label: 'Web' },
  { id: 'Fullstack', label: 'Fullstack' },
  { id: 'Data', label: 'Data' },
];

export const projects = [
  {
    ...projectBase('Advancing Partnerships Playbook'),
    title: 'Advancing Partnerships Playbook',
    client: 'Web platform · consulting firm (Haskè Conseil)',
    description:
      'Complete redesign of an international document platform: interactive guided path, model comparison tool, case studies, online reading of the Playbook, interactive toolkit, diagrams. Delivered in one week.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UX', 'Netlify'],
  },
  {
    ...projectBase('Haskè Health'),
    title: 'Haskè Health',
    client: 'Public health reports · Haskè Conseil',
    description:
      'Bilingual (EN/FR) animated website with statistics and charts, publishing 4 reports on school health and a series of downloadable opinion pieces.',
    tags: ['HTML', 'CSS', 'JavaScript', 'i18n', 'Data viz'],
  },
  {
    ...projectBase('GSCE-Shop'),
    title: 'GSCE-Shop',
    client: 'E-commerce website',
    description: 'Full development of the online store, SEO optimization and ongoing updates.',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
  },
  {
    ...projectBase('Application de pointage'),
    title: 'Time-tracking application',
    client: 'Groupe La Poste du Sénégal',
    description: 'System modeling and development of the front-end and back-end modules for employee attendance management.',
    tags: ['Angular', 'Spring Boot', 'MySQL', 'UML'],
  },
  {
    ...projectBase('Outil de reporting automatisé'),
    title: 'Automated reporting tool',
    client: 'Commercial client',
    description: 'Complete Excel dashboard and automatic report generation in Python / HTML.',
    tags: ['Python', 'Excel', 'HTML', 'Automation'],
  },
  {
    ...projectBase('Ce portfolio'),
    title: 'This portfolio',
    client: 'Personal project',
    description: 'Complete redesign of my website: React 19, Tailwind CSS v4 and Framer Motion, smooth and accessible animations.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    githubLabel: 'My GitHub',
  },
];

/* ------------------------------------------------------------------ */
/* Beyond code                                                         */
/* ------------------------------------------------------------------ */

export const beyondCode = {
  kicker: 'Beyond code',
  title: 'Head Coach of the Senegal national Rocket League team',
  text: [
    'I built a coaching methodology from scratch: session framework, communication protocol, data-driven performance tracking. I also handled the logistics of international competitions (Casablanca, FIFAe).',
    'Result: the team went from the group stage to a top 4 finish in Africa in 2026.',
  ],
  highlight: 'Top 4 in Africa',
  highlightYear: '2026',
  takeaways: [
    { title: 'Leadership', text: 'Bringing a group together around a shared goal.' },
    { title: 'Method', text: 'Clear processes, from session framework to debrief.' },
    { title: 'Team management', text: 'Communication, logistics, international competitions.' },
    { title: 'Data analysis', text: 'Measure, compare, adjust. Just like in my projects.' },
  ],
  closing: 'I bring these same skills to my projects.',
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

const typeLabels = {
  'Site web': 'Website',
  Application: 'Application',
  'Design & graphisme': 'Design & graphics',
  SEO: 'SEO',
  'Support IT': 'IT support',
  Formation: 'Training',
  Autre: 'Other',
};

export const contact = {
  title: "Got a project? Let's talk.",
  intro: 'Website, application, IT support or training: tell me what you need, I will get back to you quickly.',
  // Values stay in French (Netlify form), only the labels are translated
  projectTypes: contactFr.projectTypes.map((t) => ({ value: t.value, label: typeLabels[t.value] ?? t.label })),
  privacy: 'Your information is only used to reply to you.',
};

/* ------------------------------------------------------------------ */
/* Interface texts                                                     */
/* ------------------------------------------------------------------ */

export const ui = {
  meta: {
    title: 'Djibril Diene, Fullstack Developer & IT Support · Dakar',
    description:
      'Djibril Diene, freelance fullstack developer and IT support technician based in Dakar. Modern websites and web apps, IT support, and a growing specialization in cybersecurity.',
  },
  skipLink: 'Skip to content',
  lang: { label: 'Site language', fr: 'Français', en: 'English' },
  nav: {
    aria: 'Main navigation',
    cta: 'Contact me',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    logoHome: ', back to top',
  },
  hero: { supportIt: 'IT support', online: 'online' },
  stats: { aria: 'Key figures' },
  sections: {
    about: { kicker: 'About', title: 'Clean code, systems that hold up.' },
    services: {
      kicker: 'Services',
      title: 'From mockup to launch, and beyond.',
      intro: 'I support you through the whole cycle: design, development, maintenance and support.',
    },
    skills: {
      kicker: 'Skills',
      title: 'A wide toolbox, from front end to network.',
      intro: 'What I use every day to design, build, deploy and maintain.',
    },
    journey: { kicker: 'Experience', title: 'My professional journey.' },
    projects: {
      kicker: 'Projects',
      title: 'Recent work.',
      intro: 'Content platforms, e-commerce, business applications and reporting tools.',
    },
    contact: { kicker: 'Contact' },
  },
  about: {
    qualities: 'Qualities',
    languages: 'Languages',
    interests: 'Interests',
    education: 'Education',
    upcoming: 'Upcoming',
  },
  journey: { current: 'Current' },
  projects: {
    filtersAria: 'Filter projects',
    technologies: 'Technologies',
    imageAlt: (title) => `Preview of the ${title} project`,
    preview: 'Live preview',
    previewOf: (title) => `Open the live preview of ${title}`,
    visit: 'Visit site',
    source: 'Source code',
    of: 'of',
    newTab: 'new tab',
  },
  preview: {
    dialog: (title) => `Live preview: ${title}`,
    screenSize: 'Screen size',
    desktop: 'Desktop',
    mobile: 'Mobile',
    open: (title) => `Open ${title} in a new tab`,
    close: 'Close preview',
    loading: (host) => `Loading ${host}…`,
    frameTitle: (title) => `${title} website`,
  },
  beyond: { region: 'Africa', groupStage: 'Group stage' },
  contactForm: {
    honeypot: 'Do not fill in:',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    type: 'Project type',
    choose: 'Choose…',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project and your timeline…',
    send: 'Send',
    sending: 'Sending…',
    error: (email) => `Sending failed. Please try again, or email me directly at ${email}.`,
    successTitle: 'Message sent!',
    successText: 'Thank you, I will get back to you as soon as possible.',
    again: 'Send another message',
    copy: 'Copy email address',
    copied: 'Email address copied',
  },
  footer: {
    quickLinks: 'Quick links',
    navigation: 'Navigation',
    socials: 'Social',
    made: 'Designed and built in Dakar.',
    backToTop: 'Back to top',
  },
};
