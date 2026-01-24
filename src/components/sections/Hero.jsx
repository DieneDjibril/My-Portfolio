import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Disponible pour Freelance
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
                    >
                        Concevoir des <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
                            futurs numériques
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-neutral-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <Button variant="accent" icon={ArrowRight} onClick={() => window.location.href = '#projects'}>
                            Découvrir mes projets
                        </Button>
                        <Button variant="secondary" icon={Download} onClick={() => window.open('/cv.pdf', '_blank')}>
                            Mon CV
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-20 flex justify-center items-center gap-10"
                    >
                        <a href="#" className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                            <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                            <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                            <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
