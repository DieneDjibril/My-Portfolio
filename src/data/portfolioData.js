import {
    Code2,
    Layout,
    Database,
    Server,
    Smartphone,
    Globe,
    Cpu,
    PenTool
} from 'lucide-react';

export const personalInfo = {
    name: "Djibril Tambadou DIENE",
    title: "Développeur Web Fullstack Senior",
    email: "djibsondiene@gmail.com",
    phone: "78 136 59 45",
    address: "HLM 5 villa 1790 Dakar, Sénégal",
    bio: "Développeur Web passionné et Freelance spécialisé dans la création d'applications web modernes. Maîtrise des technologies Front-end et Back-end. Rigoureux, autonome et orienté solutions, je m'adapte rapidement pour livrer des projets robustes et évolutifs.",
    socials: {
        github: "#",
        linkedin: "#",
        twitter: "#"
    }
};

export const skills = [
    { name: "React / Vite", icon: Code2, level: 90, category: "Frontend" },
    { name: "Tailwind CSS", icon: Layout, level: 95, category: "Frontend" },
    { name: "JavaScript (ES6+)", icon: Code2, level: 85, category: "Languages" },
    { name: "Angular", icon: Globe, level: 80, category: "Frontend" },
    { name: "Spring Boot", icon: Server, level: 75, category: "Backend" },
    { name: "Java", icon: Code2, level: 75, category: "Languages" },
    { name: "WordPress / WooCommerce", icon: Globe, level: 85, category: "CMS" },
    { name: "Git / GitHub", icon: Database, level: 80, category: "Tools" },
    { name: "SEO Optimization", icon: Globe, level: 70, category: "Marketing" },
    { name: "Windows Server / Admin", icon: Cpu, level: 70, category: "IT Support" },
];

export const experiences = [
    {
        id: 1,
        role: "Développeur Web Freelance",
        company: "Freelance",
        location: "Dakar, Sénégal",
        period: "01/2023 – Présent",
        description: "Création et maintenance de sites web et applications e-commerce.",
        projects: [
            {
                name: "GSC E-Shop",
                url: "gsceshop.com",
                tech: ["WordPress", "WooCommerce", "SEO"],
                details: "Développement complet du site E-commerce, optimisation SEO et mises à jour récurrentes."
            }
        ]
    },
    {
        id: 2,
        role: "Technicien Support IT",
        company: "Indépendant",
        location: "Dakar, Sénégal",
        period: "Missions ponctuelles",
        description: "Installation et réparation de matériel informatique, résolution de problèmes logiciels."
    },
    {
        id: 3,
        role: "Stagiaire Développeur FullStack",
        company: "Groupe La Poste",
        location: "Dakar, Sénégal",
        period: "06/2022 - 12/2022",
        description: "Conception et développement d'une application de pointage des employés.",
        projects: [
            {
                name: "App de Pointage",
                tech: ["Angular", "Spring Boot", "MySQL", "UML"],
                details: "Modélisation du système, développement des modules Front-end (Angular) et Back-end (Spring Boot)."
            }
        ]
    }
];

export const education = [
    {
        id: 1,
        degree: "Licence en Informatique Option Génie Logiciel",
        school: "Université Numérique Cheikh Hamidou Kane",
        year: "2024",
        location: "Dakar, Sénégal"
    },
    {
        id: 2,
        degree: "Certification Analyste Junior en Cybersécurité",
        school: "Institut Polytechnique de Dakar Thomas Sankara",
        year: "2024",
        location: "Dakar, Sénégal"
    },
    {
        id: 3,
        degree: "Certification en Développement Mobile",
        school: "Université Numérique Cheikh Hamidou Kane",
        year: "2022",
        location: "Dakar, Sénégal"
    },
    {
        id: 4,
        degree: "Baccalauréat Série S1",
        school: "Groupe Scolaire Saint-Pierre de Grand-Dakar",
        year: "2018",
        location: "Dakar, Sénégal"
    }
];

export const interests = [
    "Basketball",
    "Jeux vidéo",
    "Films & Animés",
    "Lecture de manga"
];

export const languages = [
    { language: "Français", level: "Niveau Courant" },
    { language: "Anglais", level: "Niveau Intermédiaire" },
    { language: "Wolof", level: "Langue Maternelle" }
];
