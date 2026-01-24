import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Expériences', href: '#experience' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0b]/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-2xl font-bold group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
                        <Code2 size={24} />
                    </div>
                    <span className="tracking-tighter">Djibril<span className="text-blue-500">.</span></span>
                </a>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-neutral-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="secondary" className="px-6 py-2.5 rounded-lg border-white/5" onClick={() => window.location.href = '#contact'}>
                        Freelance
                    </Button>
                </div>

                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 md:hidden bg-[#0a0a0b]/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl font-semibold text-neutral-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
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
