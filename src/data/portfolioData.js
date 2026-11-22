/**
 * Contenu du portfolio — source de vérité unique.
 *
 * Pour mettre le site à jour, modifie uniquement ce fichier :
 * les composants lisent ces données et n'ont pas besoin d'être touchés.
 * Les icônes viennent de lucide-react (https://lucide.dev/icons).
 */

import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
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
} from 'lucide-react';

import cvFile from '../assets/CV-Djibril-Diene.pdf';
import imgPlaybook from '../assets/projects/advancing-partnerships.svg';
import imgHealth from '../assets/projects/haske-health.svg';
import imgShop from '../assets/projects/gsce-shop.svg';
import imgPointage from '../assets/projects/pointage.svg';
import imgReporting from '../assets/projects/reporting.svg';
import imgPortfolio from '../assets/projects/portfolio.svg';

/* ------------------------------------------------------------------ */
/* Infos personnelles                                                  */
/* ------------------------------------------------------------------ */

export const personalInfo = {
  name: 'Djibril Diene',
  fullName: 'Djibril Tambadou Diène',
  title: 'Développeur Fullstack & Support IT',
  location: 'Dakar, Sénégal',
  timezone: 'GMT',
  email: 'djibsondiene@gmail.com',
  phone: '+221 78 136 59 45',
  whatsapp: 'https://wa.me/221781365945',
  status: 'Disponible pour missions freelance et opportunités en entreprise',
  trust: 'Entreprise individuelle immatriculée au Sénégal (RCCM / NINEA)',
  cv: cvFile,
  siteUrl: 'https://djibril-diene-portfolio.netlify.app',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/DieneDjibril', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/djibril-diene-352a941bb/', icon: Linkedin },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: 'WhatsApp', href: personalInfo.whatsapp, icon: MessageCircle },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { id: 'about', label: 'À propos' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Compétences' },
  { id: 'journey', label: 'Parcours' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  badge: 'Disponible',
  // Les mots entourés de * sont mis en valeur (dégradé bleu).
  title: 'Je construis des solutions web *solides*, et je les garde *en marche*.',
  roles: ['Développeur Fullstack', 'Technicien Support IT', 'Passionné de cybersécurité'],
  subtitle:
    "Développeur fullstack freelance basé à Dakar. Je conçois des sites et applications web modernes, j'assure le support IT de mes clients et je me spécialise progressivement en cybersécurité.",
  primaryCta: { label: 'Voir mes projets', target: 'projects' },
  secondaryCta: { label: 'Télécharger mon CV' },
};

/* ------------------------------------------------------------------ */
/* Chiffres clés                                                       */
/* ------------------------------------------------------------------ */

// value : nombre animé · prefix / suffix : texte autour du nombre
export const stats = [
  { value: 3, suffix: '+', label: "ans d'expérience freelance", detail: 'depuis janvier 2023' },
  { value: 6, suffix: '+', label: 'projets web livrés' },
  { value: 4, prefix: 'Top ', label: 'Afrique en e-sport', detail: 'équipe nationale · Rocket League' },
  { value: 3, label: 'langues parlées' },
];

/* ------------------------------------------------------------------ */
/* À propos                                                            */
/* ------------------------------------------------------------------ */

export const about = {
  bio: [
    "Je suis développeur web, aussi à l'aise côté front-end que côté back-end. Je travaille en direct avec mes clients (cabinets de conseil, e-commerce, PME), de la maquette jusqu'à la mise en ligne, avec rigueur et autonomie.",
    "En parallèle, j'interviens sur le matériel, le réseau et la téléphonie IP : quand quelque chose tombe en panne, je cherche la cause et je règle le problème. Aujourd'hui, je m'oriente vers la cybersécurité.",
  ],
  qualities: ['Patience', "Sens de l'analyse", 'Autonomie & curiosité', "Travail en équipe"],
  education: [
    {
      year: '2024',
      title: 'Certification Analyste Junior en Cybersécurité',
      school: 'Université Numérique Cheikh Hamidou Kane',
    },
    {
      year: '2024',
      title: 'Certification en Développement Mobile',
      school: 'Université Numérique Cheikh Hamidou Kane',
    },
    {
      year: '2022',
      title: 'Licence en Informatique, option Génie Logiciel',
      school: 'Institut Polytechnique de Dakar Thomas Sankara',
      note: 'Mention Bien · mémoire soutenu 18/20, mention Très Bien',
    },
    {
      year: '2021',
      title: 'Diplôme de Technicien Supérieur en Génie Logiciel',
      school: 'Institut Polytechnique de Dakar Thomas Sankara',
    },
    {
      year: '2018',
      title: 'Baccalauréat Série S1',
      school: 'Groupe Scolaire Saint-Pierre de Grand-Dakar',
    },
  ],
  languages: [
    { name: 'Wolof', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ],
  interests: ['Basketball', 'Jeux vidéo & e-sport', 'Films & animés', 'Manga'],
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = [
  {
    icon: Globe,
    title: 'Sites & applications web',
    description:
      'Sites vitrines, plateformes de contenu et e-commerce (WordPress/WooCommerce, React, HTML/CSS/JS). Responsive, animés et optimisés.',
    tags: ['WordPress', 'React', 'SEO'],
  },
  {
    icon: Boxes,
    title: 'Développement sur mesure',
    description:
      'Applications métier fullstack : Angular ou React côté interface, Spring Boot ou Laravel côté serveur, API REST et bases de données.',
    tags: ['Angular', 'Spring Boot', 'Laravel'],
  },
  {
    icon: Headphones,
    title: 'Support IT & infrastructure',
    description:
      'Diagnostic et réparation de PC et smartphones, administration Windows et Windows Server, câblage réseau, messagerie et cPanel, téléphonie IP (IPBX Yeastar).',
    tags: ['Windows Server', 'Réseau', 'Yeastar'],
  },
  {
    icon: Presentation,
    title: 'Formation',
    description: 'Création de supports et animation de sessions de formation, en support IT comme en e-commerce.',
    tags: ['Support IT', 'E-commerce'],
  },
];

/* ------------------------------------------------------------------ */
/* Compétences                                                         */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  { title: 'Frontend', icon: Layout, items: ['React / Vite', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Laravel', 'API REST'] },
  { title: 'Langages', icon: Code2, items: ['JavaScript (ES6+)', 'Java', 'PHP', 'Python'] },
  { title: 'Bases de données', icon: Database, items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'CMS & e-commerce', icon: ShoppingCart, items: ['WordPress', 'WooCommerce', 'Shopify', 'SEO'] },
  { title: 'Design', icon: Palette, items: ['Figma', 'UI/UX', 'Wireframing', 'Prototypage'] },
  {
    title: 'Outils & méthodes',
    icon: Wrench,
    items: ['Git / GitHub', 'Netlify', 'VS Code', 'Scrum / Agile', 'UML', 'Agents IA (Claude, Copilot)'],
  },
  { title: 'Data & reporting', icon: BarChart3, items: ['Python', 'Excel (tableaux de bord, automatisation)'] },
  { title: 'Sécurité', icon: ShieldCheck, items: ['Fondamentaux de la cybersécurité', 'Analyse de vulnérabilités'] },
  {
    title: 'Support IT & réseau',
    icon: Network,
    items: ['Windows 10/11', 'Windows Server', 'Maintenance matérielle', 'Câblage réseau', 'Serveurs mail / cPanel', 'Téléphonie IP (Yeastar)'],
  },
];

// Technos qui défilent dans le bandeau infini
export const marqueeTech = [
  'React', 'Vite', 'Angular', 'Tailwind CSS', 'Spring Boot', 'Laravel', 'JavaScript', 'Java', 'PHP',
  'Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'WordPress', 'WooCommerce', 'Shopify', 'Figma',
  'Git', 'Netlify', 'Flutter', 'Windows Server', 'Yeastar',
];

/* ------------------------------------------------------------------ */
/* Parcours                                                            */
/* ------------------------------------------------------------------ */

export const journey = [
  {
    period: "01/2023 – aujourd'hui",
    role: 'Développeur Web Freelance',
    place: 'Dakar, Sénégal',
    note: 'Entreprise individuelle depuis novembre 2026',
    description:
      'Conception, développement et maintenance de sites et plateformes web pour des clients au Sénégal et à l’international : sites de contenu animés, plateformes documentaires, e-commerce, outils de reporting.',
    current: true,
  },
  {
    period: 'Missions ponctuelles',
    role: 'Technicien Support IT',
    place: 'Indépendant · Dakar',
    description:
      'Installation et réparation de PC, imprimantes et smartphones, résolution de problèmes logiciels (Windows, etc.), configuration réseau et téléphonie IP.',
  },
  {
    period: '06/2022 – 12/2022',
    role: 'Stagiaire Développeur Fullstack',
    place: 'Groupe La Poste du Sénégal · Dakar',
    description:
      "Conception et développement d'une application web de pointage des employés : modélisation UML, front-end Angular, back-end Spring Boot, MySQL.",
  },
];

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export const projectFilters = ['Tous', 'Web', 'Fullstack', 'Data'];

// Images : placeholders dans src/assets/projects/, à remplacer par de vraies captures.
export const projects = [
  {
    // URL Netlify provisoire, à remplacer par le domaine définitif
    title: 'Advancing Partnerships Playbook',
    client: 'Plateforme web · cabinet de conseil (Haskè Conseil)',
    description:
      'Refonte complète d’une plateforme documentaire internationale : parcours d’orientation interactif, comparateur de modèles, études de cas, lecture en ligne du Playbook, toolkit interactif, diagrammes. Livrée en une semaine.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UX', 'Netlify'],
    category: 'Web',
    image: imgPlaybook,
    link: 'https://advancingpartnershipplaybook.netlify.app',
  },
  {
    // URL Netlify provisoire, à remplacer par le domaine définitif
    title: 'Haskè Health',
    client: 'Rapports de santé publique · Haskè Conseil',
    description:
      'Site bilingue (EN/FR) et animé, avec statistiques et graphiques, pour diffuser 4 rapports sur la santé scolaire et une série d’articles d’opinion téléchargeables.',
    tags: ['HTML', 'CSS', 'JavaScript', 'i18n', 'Data viz'],
    category: 'Web',
    image: imgHealth,
    link: 'https://haskehealth.netlify.app',
  },
  {
    title: 'GSCE-Shop',
    client: 'Site e-commerce',
    description: 'Développement complet de la boutique en ligne, optimisation SEO et mises à jour récurrentes.',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
    category: 'Web',
    image: imgShop,
    link: 'https://gsceshop.com',
    github: 'https://github.com/DieneDjibril/GSCESHOP',
  },
  {
    title: 'Application de pointage',
    client: 'Groupe La Poste du Sénégal',
    description:
      'Modélisation du système et développement des modules front-end et back-end de gestion de la présence des employés.',
    tags: ['Angular', 'Spring Boot', 'MySQL', 'UML'],
    category: 'Fullstack',
    image: imgPointage,
    github: 'https://github.com/DieneDjibril/gestion-pointage',
  },
  {
    title: 'Outil de reporting automatisé',
    client: 'Client commercial',
    description: 'Tableau de bord Excel complet et génération automatique de rapports en Python / HTML.',
    tags: ['Python', 'Excel', 'HTML', 'Automatisation'],
    category: 'Data',
    image: imgReporting,
  },
  {
    title: 'Ce portfolio',
    client: 'Projet personnel',
    description:
      'Refonte complète de mon site : React 19, Tailwind CSS v4 et Framer Motion, animations fluides et accessibles.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    category: 'Web',
    image: imgPortfolio,
    // Lien vers le profil GitHub (pas le repo) : libellé adapté
    github: 'https://github.com/DieneDjibril',
    githubLabel: 'Mon GitHub',
  },
];

/* ------------------------------------------------------------------ */
/* Au-delà du code                                                     */
/* ------------------------------------------------------------------ */

export const beyondCode = {
  kicker: 'Au-delà du code',
  title: "Head Coach de l'équipe nationale du Sénégal de Rocket League",
  text: [
    "J'ai bâti une méthodologie de coaching de A à Z : cadre de sessions, protocole de communication, suivi des performances par la donnée. J'ai aussi géré la logistique des compétitions internationales (Casablanca, FIFAe).",
    "Résultat : l'équipe est passée de la phase de groupes à une place dans le top 4 africain.",
  ],
  highlight: 'Top 4 africain',
  takeaways: [
    { title: 'Leadership', text: 'Fédérer un groupe autour d’un objectif commun.' },
    { title: 'Méthode', text: 'Des process clairs, du cadre de session au debrief.' },
    { title: "Gestion d'équipe", text: 'Communication, logistique, compétitions internationales.' },
    { title: 'Analyse de données', text: 'Mesurer, comparer, ajuster. Comme dans mes projets.' },
  ],
  closing: 'Ces compétences, je les apporte aussi dans mes projets.',
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  title: 'Un projet ? Parlons-en.',
  intro:
    'Site web, application, support IT ou formation : décrivez-moi votre besoin, je vous réponds rapidement.',
  projectTypes: ['Site web', 'Application', 'Support IT', 'Formation', 'Autre'],
  privacy: 'Vos informations servent uniquement à vous répondre.',
};
