/**
 * Fichier centralisant toutes les données du portfolio
 * 
 * Ce fichier contient :
 * - personalInfo : Informations personnelles et bio
 * - skills : Liste des compétences techniques
 * - experiences : Historique des emplois et projets
 * - education : Formation académique
 * 
 * Toutes les données sont exportées et utilisées par les composants React
 */

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

/**
 * Informations personnelles du développeur
 * Utilisé dans Hero et About sections
 */
export const personalInfo = {
    name: "Djibril DIENE", // Nom complet
    title: "Développeur Web Fullstack Senior", // Titre professionnel
    email: "djibsondiene@gmail.com", // Email de contact
    phone: "78 136 59 45", // Téléphone
    address: "HLM 5 villa 1790 Dakar, Sénégal", // Adresse
    bio: "Développeur Web passionné et Freelance spécialisé dans la création d'applications web modernes. Maîtrise des technologies Front-end et Back-end. Rigoureux, autonome et orienté solutions, je m'adapte rapidement pour livrer des projets robustes et évolutifs.", // Biographie
    socials: {
        github: "https://github.com/DieneDjibril", // Lien GitHub
        linkedin: "https://www.linkedin.com/in/djibril-diene-352a941bb/", // Lien LinkedIn
        twitter: "#" // Lien Twitter
    }
};

/**
 * Liste des compétences techniques
 * Utilisé dans la section Skills
 * Groupées par catégorie (Frontend, Backend, Languages, Tools, CMS, IT Support)
 */
export const skills = [
    // Frontend
    { name: "React / Vite", icon: Code2, level: 90, category: "Frontend" },
    { name: "Angular", icon: Globe, level: 80, category: "Frontend" },
    { name: "HTML", icon: Code2, level: 90, category: "Frontend" },
    { name: "CSS", icon: Layout, level: 90, category: "Frontend" },
    { name: "Flutter", icon: Smartphone, level: 70, category: "Frontend" },
    
    // Langages de programmation
    { name: "JavaScript (ES6+)", icon: Code2, level: 85, category: "Languages" },
    { name: "Java", icon: Code2, level: 75, category: "Languages" },
    { name: "PHP", icon: Code2, level: 70, category: "Languages" },
    { name: "Python", icon: Code2, level: 65, category: "Languages" },
    
    // Backend
    { name: "Spring Boot", icon: Server, level: 75, category: "Backend" },
    { name: "RESTful API", icon: Server, level: 80, category: "Backend" },
    
    // Bases de données
    { name: "MySQL", icon: Database, level: 80, category: "Database" },
    { name: "MongoDB", icon: Database, level: 75, category: "Database" },
    { name: "PostgreSQL", icon: Database, level: 70, category: "Database" },
    
    // CMS
    { name: "WordPress / WooCommerce", icon: Globe, level: 85, category: "CMS" },
    
    // Outils
    { name: "Git / GitHub", icon: Database, level: 80, category: "Tools" },
    { name: "Scrum / Agile", icon: PenTool, level: 75, category: "Tools" },
    { name: "VS Code", icon: Code2, level: 90, category: "Tools" },
    { name: "UML", icon: PenTool, level: 75, category: "Tools" },
    
    // Design
    { name: "Figma", icon: PenTool, level: 75, category: "Design" },
    { name: "UI/UX Design", icon: PenTool, level: 70, category: "Design" },
    { name: "Wireframing", icon: PenTool, level: 70, category: "Design" },
    { name: "Prototyping", icon: PenTool, level: 65, category: "Design" },
    
    // Marketing
    { name: "SEO Optimization", icon: Globe, level: 70, category: "Marketing" },
    
    // Sécurité & Cybersécurité
    { name: "Cybersécurité", icon: Cpu, level: 65, category: "Security" },
    { name: "Analyse de vulnérabilités", icon: Cpu, level: 60, category: "Security" },
    
    // Support IT & Réseau
    { name: "Windows Server / Admin", icon: Cpu, level: 75, category: "IT Support" },
    { name: "Windows 10/11 Admin", icon: Cpu, level: 80, category: "IT Support" },
    { name: "Maintenance Ordinateur", icon: Cpu, level: 85, category: "IT Support" },
    { name: "Cablage Réseau", icon: Database, level: 70, category: "IT Support" },
];

/**
 * Liste des expériences professionnelles
 * Utilisé dans la section Experience
 * Chaque expérience peut avoir des projets associés
 */
export const experiences = [
    // Expérience 1 : Freelance actuel
    {
        id: 1,
        role: "Développeur Web Freelance", // Poste
        company: "Freelance", // Entreprise
        location: "Dakar, Sénégal", // Localisation
        period: "01/2023 – Présent", // Durée
        description: "Création et maintenance de sites web et applications e-commerce.", // Descriion
        projects: [ // Projets réalisés
            {
                name: "GSCE-Shop", // Nom du projet
                url: "gsceshop.com", // URL du projet
                tech: ["WordPress", "WooCommerce", "SEO"], // Technologies utilisées
                details: "Développement complet du site E-commerce, optimisation SEO et mises à jour récurrentes.", // Détails du projet
                github: "https://github.com/DieneDjibril/GSCESHOP" // Lien GitHub (optionnel)
            }
        ]
    },
    
    // Expérience 2 : Support IT
    {
        id: 2,
        role: "Technicien Support IT",
        company: "Indépendant",
        location: "Dakar, Sénégal",
        period: "Missions ponctuelles",
        description: "Installation et réparation de matériel informatique, résolution de problèmes logiciels."
    },
    
    // Expérience 3 : Stage Groupe La Poste
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
                details: "Modélisation du système, développement des modules Front-end (Angular) et Back-end (Spring Boot).",
                github: "https://github.com/DieneDjibril/gestion-pointage" // Lien GitHub (optionnel)
            }
        ]
    }
];

/**
 * Formation académique
 * Utilisé dans la section About
 */
export const education = [
    {
        id: 1,
        degree: "Certification en Développment Mobile",
        school: "Université Numérique Cheikh Hamidou Kane",
        year: "2024",
        location: "Dakar, Sénégal"
    },
    {
        id: 2,
        degree: "Certification Analyste Junior en Cybersécurité",
        school: "Université Numérique Cheikh Hamidou Kane",
        year: "2024",
        location: "Dakar, Sénégal"
    },
    {
        id: 3,
        degree: "Licence en Informatique Fondamentale",
        school: "Institut Polytechnique de Dakar Thomas Sankara",
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
