/**
 * Composant Navbar
 * 
 * Barre de navigation fixe en haut de page avec :
 * - Logo avec icône
 * - Liens de navigation
 * - Menu mobile responsive
 * - Effet sticky avec blur au scroll
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';

/**
 * Navbar Component
 * Gère la navigation principale avec support responsive et sticky effect
 */
export const Navbar = () => {
    // État pour détecter si la page a été scrollée
    const [isScrolled, setIsScrolled] = useState(false);
    // État pour contrôler le menu mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Hook pour écouter les événements de scroll
    useEffect(() => {
        const handleScroll = () => {
            // Active le style de navbar scrollée après 50px de scroll
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        // Nettoyage de l'event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Liens de navigation principaux
    const navLinks = [
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Expériences', href: '#experience' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        // Navbar animée qui slide en depuis le haut
        <motion.nav
            initial={{ y: -100 }} // Commence au-dessus de l'écran
            animate={{ y: 0 }} // Glisse vers sa position
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0b]/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo avec icône */}
                <a href="#" className="flex items-center gap-2 text-2xl font-bold group">
                    {/* Icône du logo */}
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
                        <Code2 size={24} />
                    </div>
                    {/* Texte du logo avec point bleu */}
                    <span className="tracking-tighter">Djibril<span className="text-blue-500">.</span></span>
                </a>

                {/* Navigation desktop (cachée sur mobile) */}
                <div className="hidden md:flex items-center gap-10">
                    {/* Liens de navigation */}
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* Bouton CTA "Freelance" */}
                    <Button variant="secondary" className="px-6 py-2.5 rounded-lg border-white/5" onClick={() => window.location.href = '#contact'}>
                        Freelance
                    </Button>
                </div>

                {/* Bouton menu mobile (visible seulement sur petit écran) */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggler le menu mobile"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Menu mobile animé */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} // Début petit et transparent
                        animate={{ opacity: 1, scale: 1 }} // Devient visible et normal
                        exit={{ opacity: 0, scale: 0.95 }} // Disparaît au fermeture
                        className="absolute top-full left-0 right-0 md:hidden bg-[#0a0a0b]/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {/* Liens du menu mobile */}
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)} // Ferme le menu au clic
                                    className="text-xl font-semibold text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            {/* Bouton CTA du menu mobile */}
                            <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                Me Contacter
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
