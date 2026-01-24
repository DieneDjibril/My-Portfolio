/**
 * Composant racine de l'application
 * 
 * App est le composant principal qui structure l'ensemble du portfolio.
 * Il organise tous les éléments clés :
 * - BackgroundAura : Effect visuel de fond animé
 * - Navbar : Barre de navigation fixe
 * - Sections : Les différentes parties du portfolio (Hero, About, Skills, etc.)
 */

import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { BackgroundAura } from './components/ui/BackgroundAura';

/**
 * App Component
 * Composant principal qui orchestrate toutes les sections du portfolio
 * 
 * Styles appliqués :
 * - relative: Positionne correctement les éléments enfants
 * - min-h-screen: Remplit au minimum la hauteur de l'écran
 * - text-white: Texte blanc par défaut
 * - selection:bg-blue-500/30: Couleur de sélection personnalisée
 */
function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30">
      {/* Effet de fond animé (aurores) */}
      <BackgroundAura />
      
      {/* Barre de navigation sticky */}
      <Navbar />
      
      {/* Contenu principal avec z-index pour apparaître au-dessus du fond */}
      <main className="relative z-10">
        {/* Section d'accueil / Hero */}
        <Hero />
        
        {/* Section À propos */}
        <About />
        
        {/* Section Compétences */}
        <Skills />
        
        {/* Section Expérience professionnelle */}
        <Experience />
        
        {/* Section Projets réalisés */}
        <Projects />
        
        {/* Section Contact */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
