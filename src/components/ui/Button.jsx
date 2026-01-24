/**
 * Composant Button réutilisable
 * 
 * Fournit un bouton stylisé et animé avec plusieurs variantes.
 * Utilise Framer Motion pour les animations et Tailwind Merge pour
 * la fusion intelligente des classes CSS.
 */

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

/**
 * Button Component
 * 
 * @param {ReactNode} children - Contenu du bouton
 * @param {string} variant - Style du bouton (primary, secondary, ghost, accent)
 * @param {string} className - Classes CSS additionnelles
 * @param {React.Component} icon - Icône optionnelle (Lucide React)
 * @param {object} props - Autres props standards du bouton
 */
export const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    // Styles de base appliqués à tous les boutons
    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 overflow-hidden group";

    // Variantes de style pour différents cas d'usage
    const variants = {
        primary: "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]", // Bouton blanc principal
        secondary: "bg-neutral-900 text-white border border-white/10 hover:border-white/30 hover:bg-neutral-800", // Bouton secondaire
        ghost: "text-neutral-400 hover:text-white hover:bg-white/5", // Bouton transparent
        accent: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]" // Bouton accent avec gradient
    };

    return (
        <motion.button
            // Animations au survol et au clic
            whileHover={{ scale: 1.02, y: -2 }} // Légèrement plus grand et vers le haut
            whileTap={{ scale: 0.98 }} // Légèrement plus petit lors du clic
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {/* Contenu du bouton avec z-index pour apparaître au-dessus des effets */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {/* Icône optionnelle avec animation au survol */}
                {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            </span>
            {/* Gradient de survol pour le bouton primaire */}
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </motion.button>
    );
};
