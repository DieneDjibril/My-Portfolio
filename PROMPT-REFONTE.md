# Prompt — Refonte complète du portfolio de Djibril Diene

> À coller tel quel dans Claude (agent) dans VS Code, à la racine du projet `My-Portfolio`.

---

## Rôle et objectif

Tu es un développeur front-end senior doublé d'un designer motion. Ta mission : **refaire entièrement le design et le contenu** de mon portfolio. Le résultat doit être un site **moderne, très animé mais fluide, à dominante bleue**, qui me présente comme développeur fullstack freelance, technicien support IT et profil en montée vers la cybersécurité, basé à Dakar.

Tu as carte blanche sur le design, dans le cadre ci-dessous. Le contenu, lui, doit venir **uniquement** de ce prompt : n'invente aucun projet, aucun chiffre, aucun client, aucun témoignage.

## Contexte technique (à conserver)

- React 19 + Vite 7, Tailwind CSS v4 (plugin `@tailwindcss/vite`, thème dans `src/index.css` via `@theme`), framer-motion 12, lucide-react, clsx + tailwind-merge.
- Structure actuelle : `src/App.jsx`, `src/components/sections/*` (Navbar, Hero, About, Skills, Experience, Projects, Contact), `src/components/ui/*` (BackgroundAura, Button, Card, SectionTitle), `src/data/portfolioData.js`, CV dans `src/assets/C.V Djibril Diene.pdf`.
- Déploiement : Netlify (`djibril-diene-portfolio.netlify.app`).
- Tu peux réécrire librement les composants et en créer de nouveaux. Garde l'architecture **données dans `portfolioData.js` → composants**, pour que je puisse mettre le contenu à jour sans toucher au JSX.
- Dépendances : n'en ajoute que si elles apportent vraiment quelque chose. Autorisée : `lenis` (smooth scroll). Pas de three.js, pas de GSAP : framer-motion suffit.

## Identité visuelle (déjà fournie)

J'ai déjà le logo et le favicon. **Utilise-les, ne les redessine pas.**

- `public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png`
- `src/assets/brand/logo.svg` : logo complet (monogramme + « Djibril Diene » + « FULLSTACK · IT · CYBER »), pour fond sombre
- `src/assets/brand/logo-mark.svg` : monogramme seul (un « D » qui contient une invite de terminal `>_`)

Le concept du logo, **le D qui contient le prompt `>_`**, doit servir de fil rouge visuel : curseur qui clignote, effet de frappe, petits détails « terminal ». Reste subtil, sans tomber dans le cliché du hacker.

### Palette (à mettre dans `@theme`)

| Token | Valeur | Usage |
|---|---|---|
| `--color-ink-950` | `#050B18` | fond principal |
| `--color-ink-900` | `#0B1120` | sections alternées |
| `--color-ink-800` | `#111A2E` | cartes |
| `--color-line` | `rgba(148,163,184,.12)` | bordures |
| `--color-brand-300` | `#7DD3FC` | accents clairs, curseur |
| `--color-brand-400` | `#38BDF8` | accent principal |
| `--color-brand-500` | `#2563EB` | boutons, liens |
| `--color-brand-700` | `#1E3A8A` | profondeur des dégradés |
| `--color-text` | `#F8FAFC` | texte |
| `--color-muted` | `#94A3B8` | texte secondaire |

Supprime le violet actuel (`brand-purple`) : **tout en bleu**, du cyan clair au bleu nuit. Le dégradé signature va de `#38BDF8` à `#2563EB` à `#1E3A8A`. Dark mode uniquement.

### Typographie

- Titres : **Outfit** (700/800), tracking serré.
- Texte : **Inter**.
- Détails techniques (labels, numéros, tags, curseur) : **JetBrains Mono**.
- Charge les polices avec Google Fonts dans `index.html` (`preconnect` + `display=swap`).

## Direction artistique et animations

L'esprit : du code propre, des systèmes solides. Grands titres, beaucoup d'espace, cartes en verre bleuté et lumières qui suivent le mouvement.

Les animations à implémenter :

1. **Écran d'intro** (moins de 1,2 s, une seule fois par session via `sessionStorage`) : le monogramme se dessine (stroke-dashoffset sur les paths du logo), le curseur `_` clignote, puis tout s'ouvre sur le hero.
2. **Hero** : titre révélé mot par mot (stagger), puis une ligne de rôles qui tourne en effet de frappe : « Développeur Fullstack » → « Technicien Support IT » → « Passionné de cybersécurité ». En fond, une grille fine en perspective et un halo bleu qui suit doucement la souris (spring).
3. **Smooth scroll** avec Lenis, et une barre de progression de lecture en haut de page (dégradé bleu).
4. **Révélations au scroll** : chaque section entre en fondu et léger décalage (`whileInView`, `once: true`).
5. **Cartes projets** : tilt 3D léger au survol, bordure lumineuse qui suit le curseur (radial-gradient sur une variable CSS), image qui zoome doucement.
6. **Parcours** : timeline verticale dont la ligne se remplit au scroll (`useScroll` + `scaleY`).
7. **Compétences** : remplace les pourcentages par des **groupes de badges** avec icônes, plus un **marquee infini** des technos (pause au survol).
8. **Chiffres clés** qui s'animent en compteur à l'apparition (voir plus bas).
9. **Boutons magnétiques** (CTA principaux) et curseur personnalisé discret sur desktop uniquement.
10. **Navbar** : transparente en haut de page, puis en verre flouté au scroll ; lien actif mis en évidence selon la section visible ; menu plein écran animé sur mobile.

Contraintes à respecter :

- `prefers-reduced-motion` : toutes les animations sont désactivées ou réduites à de simples fondus. **Obligatoire.**
- Aucune animation qui bloque la lecture ou dure plus de 0,8 s, en dehors de l'intro.
- Animer uniquement `transform` et `opacity`. Pas de layout shift.
- Mobile d'abord : tout doit être parfait à 375 px. Curseur personnalisé et tilt désactivés sur les écrans tactiles.

## Structure du site (une page)

1. **Navbar** : logo, liens (À propos, Services, Compétences, Parcours, Projets, Contact), bouton « Me contacter ».
2. **Hero**
3. **Chiffres clés** (bandeau)
4. **À propos** : bio, formation, langues, centres d'intérêt
5. **Services** (nouvelle section)
6. **Compétences**
7. **Parcours**
8. **Projets / Réalisations**
9. **Au-delà du code** (nouvelle section : coaching e-sport)
10. **Contact**
11. **Footer**

## Contenu (source de vérité)

Réécris entièrement `src/data/portfolioData.js` avec ce qui suit. Les éléments marqués **[À CONFIRMER]** doivent être ajoutés et laissés en commentaire `// TODO À CONFIRMER` pour que je valide.

### Infos personnelles

- Nom affiché : **Djibril Diene** (nom complet : Djibril Tambadou Diène)
- Titre : **Développeur Fullstack & Support IT**. N'écris plus « Senior ».
- Localisation : **Dakar, Sénégal**. N'affiche **pas** l'adresse précise (supprime « HLM 5 villa 1790 »).
- Email : djibsondiene@gmail.com
- Téléphone : +221 78 136 59 45, avec un bouton WhatsApp vers `https://wa.me/221781365945`
- GitHub : https://github.com/DieneDjibril
- LinkedIn : https://www.linkedin.com/in/djibril-diene-352a941bb/
- Supprime Twitter (le lien est vide).
- Statut : « Disponible pour missions freelance et opportunités en entreprise »
- Mention de confiance : « Entreprise individuelle immatriculée au Sénégal (RCCM / NINEA) ». N'affiche pas les numéros.

### Hero

- Badge : `● Disponible` + statut
- Titre proposé (tu peux l'améliorer) : « Je construis des solutions web **solides**, et je les garde **en marche**. »
- Sous-titre : « Développeur fullstack freelance basé à Dakar. Je conçois des sites et applications web modernes, j'assure le support IT de mes clients et je me spécialise progressivement en cybersécurité. »
- CTA : « Voir mes projets » (scroll vers Projets) + « Télécharger mon CV » (le PDF actuel)
- Icônes : GitHub, LinkedIn, Email, WhatsApp

### Chiffres clés (compteurs)

- `3+` ans d'expérience freelance (depuis janvier 2023)
- `6+` projets web livrés
- `Top 4` Afrique, avec l'équipe nationale e-sport (Rocket League)
- `3` langues parlées

### À propos

Bio, à réécrire de façon naturelle à la première personne, 3 ou 4 phrases maximum :
développeur web passionné, à l'aise en front-end comme en back-end, rigoureux, autonome, orienté solutions. Je travaille en direct avec des clients (cabinets de conseil, e-commerce, PME) de la maquette jusqu'à la mise en ligne. J'interviens aussi sur le matériel, le réseau et la téléphonie IP. Je m'oriente vers la cybersécurité.

Qualités : patience, sens de l'analyse, autonomie et curiosité, travail en équipe.

Formation (du plus récent au plus ancien) :

- 2024 · Certification Analyste Junior en Cybersécurité, Université Numérique Cheikh Hamidou Kane
- 2024 · Certification en Développement Mobile, Université Numérique Cheikh Hamidou Kane. **Corrige la coquille « Développment ».**
- 2022 · **Licence en Informatique, option Génie Logiciel**, mention Bien, Institut Polytechnique de Dakar Thomas Sankara. Soutenance de mémoire : 18/20, mention Très Bien.
- 2021 · Diplôme de Technicien Supérieur en Génie Logiciel, Institut Polytechnique de Dakar Thomas Sankara
- 2018 · Baccalauréat Série S1, Groupe Scolaire Saint-Pierre de Grand-Dakar
- **[À CONFIRMER]** Projet en cours : Bachelor Cybersécurité, ESGI Paris (rentrée janvier 2027)

Langues : Wolof (langue maternelle), Français (courant), Anglais (intermédiaire).

Centres d'intérêt : basketball, jeux vidéo et e-sport, films et animés, manga.

### Services (nouvelle section, 4 cartes)

1. **Sites & applications web** : sites vitrines, plateformes de contenu, e-commerce (WordPress/WooCommerce, React, HTML/CSS/JS), responsive, animés et optimisés.
2. **Développement sur mesure** : applications métier fullstack (Angular / React + Spring Boot / Laravel, API REST, bases de données).
3. **Support IT & infrastructure** : diagnostic et réparation de PC et smartphones, administration Windows et Windows Server, câblage réseau, messagerie et cPanel, téléphonie IP (IPBX Yeastar).
4. **Formation** : supports et sessions de formation (support IT, e-commerce).

### Compétences (groupes de badges)

- **Frontend** : React / Vite, Angular, HTML5, CSS3, Tailwind CSS, Flutter
- **Backend** : Spring Boot, Laravel, API REST
- **Langages** : JavaScript (ES6+), Java, PHP, Python
- **Bases de données** : MySQL, PostgreSQL, MongoDB
- **CMS & e-commerce** : WordPress, WooCommerce, Shopify, SEO
- **Design** : Figma, UI/UX, wireframing, prototypage
- **Outils & méthodes** : Git / GitHub, Netlify, VS Code, Scrum / Agile, UML, agents IA de développement (Claude, Copilot)
- **Data & reporting** : Python, Excel (tableaux de bord, automatisation)
- **Sécurité** : fondamentaux de la cybersécurité, analyse de vulnérabilités
- **Support IT & réseau** : Windows 10/11, Windows Server, maintenance matérielle, câblage réseau, serveurs mail / cPanel, téléphonie IP (Yeastar)

### Parcours (timeline)

1. **01/2023 – aujourd'hui · Développeur Web Freelance**, Dakar, Sénégal (entreprise individuelle depuis novembre 2026)
   Conception, développement et maintenance de sites et plateformes web pour des clients au Sénégal et à l'international : sites de contenu animés, plateformes documentaires, e-commerce, outils de reporting.
2. **Missions ponctuelles · Technicien Support IT**, indépendant, Dakar
   Installation et réparation de PC, imprimantes et smartphones, résolution de problèmes logiciels (Windows, etc.), configuration réseau et téléphonie IP.
3. **06/2022 – 12/2022 · Stagiaire Développeur Fullstack**, Groupe La Poste du Sénégal, Dakar
   Conception et développement d'une application web de pointage des employés : modélisation UML, front-end Angular, back-end Spring Boot, MySQL.

### Projets (cartes, avec filtres : Tous / Web / Fullstack / Data)

> Pour les captures d'écran : crée un dossier `src/assets/projects/` avec des **placeholders élégants** (dégradé bleu + nom du projet + monogramme) que je remplacerai par de vraies captures. N'utilise pas d'images externes.

1. **Advancing Partnerships Playbook**, plateforme web pour un cabinet de conseil (Haskè Conseil). **[À CONFIRMER : accord du client pour le citer]**
   Refonte complète d'une plateforme documentaire internationale : parcours d'orientation interactif, comparateur de modèles, études de cas, lecture en ligne du Playbook, toolkit interactif, diagrammes. Livrée en une semaine.
   Tags : HTML, CSS, JavaScript, UX, Netlify · Lien : https://advancingpartnershipplaybook.netlify.app **[À CONFIRMER]**
2. **Haskè Health**, site de diffusion de rapports de santé publique (Haskè Conseil). **[À CONFIRMER]**
   Site bilingue (EN/FR), animé, avec statistiques et graphiques, pour diffuser 4 rapports sur la santé scolaire et une série d'articles d'opinion téléchargeables.
   Tags : HTML, CSS, JavaScript, i18n, data viz · Lien : https://haskehealth.netlify.app **[À CONFIRMER]**
3. **GSCE-Shop**, site e-commerce
   Développement complet de la boutique en ligne, optimisation SEO et mises à jour récurrentes.
   Tags : WordPress, WooCommerce, SEO · Lien : https://gsceshop.com · GitHub : https://github.com/DieneDjibril/GSCESHOP
4. **Application de pointage**, Groupe La Poste du Sénégal
   Modélisation du système et développement des modules front-end et back-end de gestion de la présence des employés.
   Tags : Angular, Spring Boot, MySQL, UML · GitHub : https://github.com/DieneDjibril/gestion-pointage
5. **Outil de reporting automatisé**, client commercial
   Tableau de bord Excel complet et génération automatique de rapports en Python / HTML.
   Tags : Python, Excel, HTML, automatisation
6. **Ce portfolio**
   Tags : React, Vite, Tailwind, Framer Motion · GitHub **[À CONFIRMER : URL du repo]**

### Au-delà du code (nouvelle section)

**Head Coach de l'équipe nationale du Sénégal de Rocket League.** J'ai bâti une méthodologie de coaching de A à Z : cadre de sessions, protocole de communication, suivi des performances par la donnée. J'ai aussi géré la logistique des compétitions internationales (Casablanca, FIFAe). Résultat : l'équipe est passée de la phase de groupes à une place dans le **top 4 africain**.
Message à faire passer : leadership, méthode, gestion d'équipe et analyse de données, des compétences que j'apporte aussi dans mes projets.

### Contact

- Titre : « Un projet ? Parlons-en. »
- Formulaire (nom, email, type de projet en select : Site web / Application / Support IT / Formation / Autre, message) branché sur **Netlify Forms** : attribut `data-netlify="true"`, champ caché `form-name`, honeypot anti-spam, état de succès animé, sans rechargement (fetch POST encodé en `application/x-www-form-urlencoded`). Ajoute aussi la **version HTML statique cachée du formulaire dans `index.html`** pour que Netlify la détecte au build.
- Sous le formulaire, une ligne de confidentialité : « Vos informations servent uniquement à vous répondre. »
- À côté : email (bouton copier avec un toast), WhatsApp, LinkedIn, et « Dakar, Sénégal · GMT ».

### Footer

Logo, liens rapides, réseaux, « © {année courante, dynamique} Djibril Diene. Conçu et développé à Dakar. »
Supprime « DESIGNED BY TRAFFY » ainsi que les liens LAB et PRIVACY s'ils ne mènent nulle part.

## SEO, accessibilité, performance

- `index.html` : `lang="fr"`, title « Djibril Diene, Développeur Fullstack & Support IT · Dakar », meta description, Open Graph et Twitter Card complets, `theme-color` `#050B18`, liens favicon (svg, ico, apple-touch-icon) et `site.webmanifest` (à créer, avec icon-192 et icon-512). **Supprime la référence à `vite.svg`** et le fichier lui-même, ainsi que `src/assets/react.svg` s'il n'est plus utilisé.
- Crée `public/og-image.png` (1200×630) : fond `#050B18`, logo, nom, titre, dégradé bleu. Tu peux générer un SVG puis le convertir, ou me laisser un `og-image.svg` avec une note si tu ne peux pas convertir.
- Données structurées JSON-LD `Person` (nom, poste, lieu, sameAs GitHub/LinkedIn).
- `public/robots.txt` et `public/sitemap.xml`.
- Accessibilité : HTML sémantique (un seul `h1`, hiérarchie de titres correcte), focus visibles, contrastes AA, `aria-label` sur les boutons-icônes, lien « Aller au contenu ».
- Performance : images en `loading="lazy"`, pas de bundle inutile, Lighthouse ≥ 90 partout visé.
- Renomme le CV en `src/assets/CV-Djibril-Diene.pdf` (sans espaces ni points) et mets les imports à jour.

## Méthode de travail

1. **Lis d'abord** tout le projet (`src/`, `index.html`, `package.json`) et propose-moi un plan court : composants à créer, modifier ou supprimer. Attends mon « go ».
2. Crée une branche git `refonte-2026` avant de modifier quoi que ce soit.
3. Avance par étapes et commite après chacune : thème + polices + données → layout (navbar, footer, intro) → sections une par une → animations → SEO/meta → nettoyage.
4. Après chaque étape : `npm run build` et `npm run lint` doivent passer sans erreur.
5. À la fin, donne-moi :
   - la liste des **[À CONFIRMER]** restants ;
   - la liste des placeholders d'images à remplacer ;
   - les commandes pour tester (`npm run dev`) et déployer sur Netlify.

Ne supprime pas `DOCUMENTATION.md` ni `README.md`, mais mets le README à jour (stack, structure, comment modifier le contenu dans `portfolioData.js`).
