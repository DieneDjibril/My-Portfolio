
# 📋 Documentation - My Portfolio

## 📖 Table des matières
- [Aperçu du projet](#aperçu-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation et démarrage](#installation-et-démarrage)
- [Architecture](#architecture)
- [Composants](#composants)
- [Données du portfolio](#données-du-portfolio)
- [Scripts disponibles](#scripts-disponibles)
- [Configuration](#configuration)
- [Guide de développement](#guide-de-développement)

---

## 🎯 Aperçu du projet

**My Portfolio** est une application web moderne de portfolio personnel développée avec React et Vite. Elle présente les compétences, l'expérience, les projets et les coordonnées d'un développeur web fullstack.

### Caractéristiques principales :
- ✨ Design moderne et épuré avec animations fluides
- 📱 Responsive et adapté à tous les appareils
- ⚡ Performance optimisée avec Vite
- 🎨 Styling avec Tailwind CSS et Framer Motion
- 🌙 Interface élégante avec gradient et effets visuels
- 📊 Présentation complète des compétences et expériences
- 📧 Section de contact intégrée
- 🔗 Navigation fluide entre les sections

---

## 🛠️ Technologies utilisées

### Runtime & Build
| Technologie | Version | Utilisation |
|-------------|---------|------------|
| **Vite** | ^7.2.4 | Bundler et serveur de développement |
| **React** | ^19.2.0 | Librairie UI |
| **React DOM** | ^19.2.0 | Rendu React dans le DOM |

### Styling & UI
| Technologie | Version | Utilisation |
|-------------|---------|------------|
| **Tailwind CSS** | ^4.1.18 | Framework CSS utilitaire |
| **@tailwindcss/postcss** | ^4.1.18 | Plugin PostCSS pour Tailwind |
| **@tailwindcss/vite** | ^4.1.18 | Plugin Vite pour Tailwind |
| **Framer Motion** | ^12.28.1 | Animations et transitions |
| **Lucide React** | ^0.562.0 | Bibliothèque d'icônes |

### Utilitaires
| Technologie | Version | Utilisation |
|-------------|---------|------------|
| **clsx** | ^2.1.1 | Gestion conditionnelle des classes CSS |
| **tailwind-merge** | ^3.4.0 | Fusion intelligente des classes Tailwind |

### Développement
| Technologie | Version | Utilisation |
|-------------|---------|------------|
| **ESLint** | ^9.39.1 | Linting et qualité du code |
| **@vitejs/plugin-react** | ^5.1.1 | Support React pour Vite |
| **PostCSS** | ^8.5.6 | Post-traitement CSS |
| **Autoprefixer** | ^10.4.23 | Préfixes automatiques des propriétés CSS |

---

## 📁 Structure du projet

```
My-Portfolio/
├── public/                          # Fichiers statiques
├── src/
│   ├── assets/                      # Ressources (images, etc.)
│   ├── components/
│   │   ├── sections/               # Sections principales du portfolio
│   │   │   ├── About.jsx           # Section À propos
│   │   │   ├── Contact.jsx         # Section Contact
│   │   │   ├── Experience.jsx      # Section Expérience professionnelle
│   │   │   ├── Hero.jsx            # Section d'accueil héroïque
│   │   │   ├── Navbar.jsx          # Barre de navigation
│   │   │   ├── Projects.jsx        # Section Projets
│   │   │   └── Skills.jsx          # Section Compétences
│   │   └── ui/                     # Composants UI réutilisables
│   │       ├── BackgroundAura.jsx  # Effet de fond animé
│   │       ├── Button.jsx          # Composant bouton
│   │       ├── Card.jsx            # Composant carte
│   │       └── SectionTitle.jsx    # Titre de section
│   ├── data/
│   │   └── portfolioData.js        # Données du portfolio (exp., compétences, etc.)
│   ├── App.jsx                     # Composant racine
│   ├── App.css                     # Styles de l'app
│   ├── index.css                   # Styles globaux
│   └── main.jsx                    # Point d'entrée React
├── vite.config.js                  # Configuration Vite
├── eslint.config.js                # Configuration ESLint
├── package.json                    # Dépendances et scripts
├── index.html                      # HTML principal
├── README.md                       # Readme initial (template)
└── DOCUMENTATION.md               # Cette documentation

```

---

## ⚙️ Installation et démarrage

### Prérequis
- **Node.js** >= 16.x
- **npm** >= 8.x ou **yarn** >= 1.22.x

### Installation

```bash
# 1. Cloner ou accéder au répertoire du projet
cd My-Portfolio

# 2. Installer les dépendances
npm install
# ou
yarn install
```

### Démarrage en développement

```bash
npm run dev
# ou
yarn dev
```

Le serveur de développement démarrera par défaut sur `http://localhost:5173`

### Build de production

```bash
npm run build
# ou
yarn build
```

Les fichiers seront générés dans le dossier `dist/`

### Prévisualisation de la build

```bash
npm run preview
# ou
yarn preview
```

### Vérification de la qualité du code

```bash
npm run lint
# ou
yarn lint
```

---

## 🏗️ Architecture

### Architecture générale

L'application suit une architecture modulaire avec séparation des responsabilités :

```
App (Racine)
│
├── BackgroundAura (Effet de fond)
├── Navbar (Navigation)
│
└── Main
    ├── Hero (Présentation)
    ├── About (À propos)
    ├── Skills (Compétences)
    ├── Experience (Expérience)
    ├── Projects (Projets)
    └── Contact (Contact)
```

### Flux de données

Les données circulent de haut en bas (top-down) :
1. **portfolioData.js** : Source unique de vérité pour toutes les données
2. **Composants de sections** : Récupèrent et affichent les données
3. **Composants UI** : Reçoivent les props et les affichent

---

## 🧩 Composants

### Composants de sections (src/components/sections/)

#### 1. **Navbar.jsx**
- **Rôle** : Navigation principale de l'application
- **Features** : 
  - Liens vers les différentes sections
  - Responsive sur mobile/desktop
  - Sticky ou scrollable selon l'implémentation
- **Props** : Aucune

#### 2. **Hero.jsx**
- **Rôle** : Section d'accueil (hero section)
- **Features** :
  - Présentation du développeur
  - Boutons d'action (CTA)
  - Animations de bienvenue
- **Props** : Aucune (utilise `personalInfo`)

#### 3. **About.jsx**
- **Rôle** : Section À propos du développeur
- **Features** :
  - Biographie
  - Présentation professionnelle
  - Informations personnelles
- **Props** : Aucune

#### 4. **Skills.jsx**
- **Rôle** : Affichage des compétences
- **Features** :
  - Classement par catégorie
  - Barres de progression
  - Icônes pour chaque compétence
- **Props** : Aucune (utilise `skills` from portfolioData)

#### 5. **Experience.jsx**
- **Rôle** : Historique professionnel
- **Features** :
  - Timeline ou liste des expériences
  - Détails des postes
  - Projets réalisés par expérience
- **Props** : Aucune

#### 6. **Projects.jsx**
- **Rôle** : Galerie des projets réalisés
- **Features** :
  - Affichage des projets
  - Technologies utilisées
  - Liens vers les projets
- **Props** : Aucune

#### 7. **Contact.jsx**
- **Rôle** : Formulaire et informations de contact
- **Features** :
  - Formulaire de contact
  - Informations de contact
  - Liens réseaux sociaux
- **Props** : Aucune

### Composants UI (src/components/ui/)

#### 1. **BackgroundAura.jsx**
- **Rôle** : Effet de fond animé
- **Features** :
  - Animation fluide de dégradé
  - Élément de décoration
- **Props** : Aucune

#### 2. **Button.jsx**
- **Rôle** : Bouton réutilisable
- **Props** :
  - `children` : Contenu du bouton
  - `onClick` : Fonction de clic
  - `className` : Classes CSS additionnelles
  - `variant` : Style du bouton (primary, secondary, etc.)

#### 3. **Card.jsx**
- **Rôle** : Carte réutilisable pour afficher du contenu
- **Props** :
  - `children` : Contenu de la carte
  - `className` : Classes CSS additionnelles
  - `icon` : Icône optionnelle
  - `title` : Titre de la carte

#### 4. **SectionTitle.jsx**
- **Rôle** : Titre de section stylisé
- **Props** :
  - `title` : Texte du titre
  - `subtitle` : Sous-titre optionnel
  - `align` : Alignement (left, center, right)

---

## 📊 Données du portfolio

### Fichier : src/data/portfolioData.js

Ce fichier contient toutes les données du portfolio. Structure :

#### 1. **personalInfo**
```javascript
{
  name: string,
  title: string,
  email: string,
  phone: string,
  address: string,
  bio: string,
  socials: {
    github: string,
    linkedin: string,
    twitter: string
  }
}
```

#### 2. **skills**
```javascript
Array<{
  name: string,
  icon: ReactComponent,
  level: number (0-100),
  category: string
}>
```

#### 3. **experiences**
```javascript
Array<{
  id: number,
  role: string,
  company: string,
  location: string,
  period: string,
  description: string,
  projects: Array<{
    name: string,
    url?: string,
    tech: string[],
    details: string
  }>
}>
```

#### 4. **education**
```javascript
Array<{
  id: number,
  degree: string,
  school: string,
  year: string,
  location: string
}>
```

---

## 📝 Scripts disponibles

| Script | Commande | Description |
|--------|----------|------------|
| **dev** | `npm run dev` | Démarre le serveur de développement |
| **build** | `npm run build` | Crée une version de production optimisée |
| **preview** | `npm run preview` | Prévisualise la build de production |
| **lint** | `npm run lint` | Vérifie la qualité du code avec ESLint |

---

## ⚙️ Configuration

### Vite (vite.config.js)
- Plugin React activé
- Support Hot Module Replacement (HMR)
- Optimisations de build

### ESLint (eslint.config.js)
- Règles React recommandées
- Règles React Hooks
- Règles React Refresh

### Tailwind CSS
- Configuration via `postcss.config.js` et `tailwind.config.js`
- Intégration avec Vite via @tailwindcss/vite
- Autoprefixer automatique

---

## 💻 Guide de développement

### Ajouter une nouvelle section

1. **Créer le composant** dans `src/components/sections/`
```jsx
export function NewSection() {
  return (
    <section className="py-20">
      {/* Contenu */}
    </section>
  );
}
```

2. **Importer dans App.jsx**
```jsx
import { NewSection } from './components/sections/NewSection';

function App() {
  return (
    <main className="relative z-10">
      {/* ... autres sections ... */}
      <NewSection />
    </main>
  );
}
```

### Ajouter des données

1. Modifier `src/data/portfolioData.js`
2. Les composants utilisent automatiquement les nouvelles données

### Personnaliser les styles

- **Globaux** : Modifier `src/index.css`
- **Composant** : Utiliser les classes Tailwind ou `src/App.css`
- **Variables personnalisées** : Ajouter dans la configuration Tailwind

### Ajouter des animations

Utiliser **Framer Motion** :
```jsx
import { motion } from 'framer-motion';

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Contenu
    </motion.div>
  );
}
```

### Ajouter des icônes

Utiliser **Lucide React** :
```jsx
import { Code2, Database, Globe } from 'lucide-react';

export function IconExample() {
  return (
    <>
      <Code2 size={24} />
      <Database size={24} />
      <Globe size={24} />
    </>
  );
}
```

---

## 🚀 Optimisations et bonnes pratiques

### Performance
- ✅ Lazy loading des images
- ✅ Code splitting avec Vite
- ✅ Minification CSS/JS en production
- ✅ Compression gzip

### Qualité du code
- ✅ ESLint pour la cohérence
- ✅ Composants réutilisables
- ✅ Props bien typées (via propTypes ou TypeScript)
- ✅ Noms significatifs

### UX/UI
- ✅ Responsive design
- ✅ Animations fluides
- ✅ Accessibilité (alt text, sémantique HTML)
- ✅ Navigation claire

---

## 📚 Ressources utiles

- [Documentation React](https://react.dev)
- [Documentation Vite](https://vitejs.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Framer Motion](https://www.framer.com/motion)
- [Lucide React Icons](https://lucide.dev)
- [ESLint Configuration](https://eslint.org)

---

## 🔒 Sécurité et déploiement

### Avant le déploiement
1. ✅ Exécuter `npm run lint` pour vérifier le code
2. ✅ Exécuter `npm run build` pour tester la production
3. ✅ Tester sur tous les navigateurs supportés
4. ✅ Optimiser les images
5. ✅ Configurer les headers de sécurité (CORS, CSP, etc.)

### Déploiement recommandé
- **Vercel** : Déploiement facile et automatique
- **Netlify** : Alternative populaire
- **GitHub Pages** : Pour les projets statiques
- **AWS S3 + CloudFront** : Pour la scalabilité

### Variables d'environnement
Créer un fichier `.env.local` pour les variables sensibles :
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your-email@example.com
```

---

## 📞 Support et contribution

Pour toute question ou suggestion d'amélioration, veuillez :
- 📧 Envoyer un email à : djibsondiene@gmail.com
- 🔗 GitHub : [Votre profil]
- 💼 LinkedIn : [Votre profil]

---

## 📄 Licence

Ce projet est personnel et à usage privé. Tous droits réservés © 2024-2026.

---

**Documentation générée le** : 24 janvier 2026  
**Version du projet** : 0.0.0  
**Dernière mise à jour** : 24/01/2026
