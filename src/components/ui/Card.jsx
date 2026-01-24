/**
 * Composant Card réutilisable
 * 
 * Fournit une carte stylisée avec effet de flottaison et gradient de survol.
 * Utilise l'intersection observer via whileInView pour déclencher les animations
 * lorsque la carte entre dans la zone visible.
 */

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

/**
 * Card Component
 * 
 * @param {ReactNode} children - Contenu de la carte
 * @param {string} className - Classes CSS additionnelles
 * @param {boolean} hover - Active/désactive l'animation de survol
 * @param {object} props - Autres props
 */
export const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            // Animation d'apparition lors de l'entrée dans la vue
            initial={{ opacity: 0, y: 20 }} // État initial : invisible et décalé vers le bas
            whileInView={{ opacity: 1, y: 0 }} // État visible : opaque et position normale
            viewport={{ once: true }} // L'animation se joue une seule fois
            // Animation de survol optionnelle
            whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
            className={twMerge(
                "relative group overflow-hidden",
                "bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8",
                "hover:border-white/10 transition-all duration-500",
                className
            )}
            {...props}
        >
            {/* Gradient de survol qui apparaît au survol */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

            {/* Contenu avec z-index pour apparaître au-dessus du gradient */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
