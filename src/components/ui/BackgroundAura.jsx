/**
 * Composant BackgroundAura
 * 
 * Crée un effet de fond animé avec des aurores fluides.
 * Utilise deux sphères gradient (bleu et pourpre) qui se déplacent
 * et se redimensionnent en continu pour créer une ambiance vibrante.
 */

import { motion } from 'framer-motion';

/**
 * BackgroundAura Component
 * Affiche un fond animé fixe en arrière-plan de l'application
 */
export const BackgroundAura = () => {
    return (
        // Conteneur fixe occupant tout l'écran, en arrière-plan
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0a0b]">
            {/* Orbe bleu animée (haut-gauche) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1], // Pulsation de taille
                    x: [0, 100, 0], // Mouvement horizontal
                    y: [0, 50, 0], // Mouvement vertical
                }}
                transition={{
                    duration: 20, // 20 secondes pour une boucle
                    repeat: Infinity, // Animation infinie
                    ease: "linear", // Mouvement régulier
                }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"
            />
            
            {/* Orbe pourpre animée (bas-droite) */}
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2], // Pulsation inversée
                    x: [0, -100, 0], // Mouvement horizontal inverse
                    y: [0, -50, 0], // Mouvement vertical inverse
                }}
                transition={{
                    duration: 25, // 25 secondes pour une boucle légèrement différente
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]"
            />
            
            {/* Texture de bruit grain pour ajouter de la profondeur */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150" />
        </div>
    );
};
