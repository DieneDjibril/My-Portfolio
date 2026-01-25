import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
    return (
        <footer id="contact" className="pt-32 pb-12 relative overflow-hidden bg-black">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Connexion"
                    subtitle="Donnons vie à vos ambitions numériques. Une collaboration d'excellence commence ici."
                />

                <div className="grid lg:grid-cols-5 gap-12 mb-32">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h3 className="text-4xl font-bold mb-8 tracking-tighter italic">Lançons-nous.</h3>
                            <p className="text-neutral-400 text-lg leading-relaxed max-w-sm mb-10">
                                Vous avez un projet innovant ou une opportunité de collaboration ? Mon expertise est à votre service.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-10">
                                <a href="https://github.com/DieneDjibril" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-500">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/djibril-diene-352a941bb/" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-500">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-500">
                                    <Twitter size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4 pt-10 border-t border-white/5">
                            <div className="flex items-center gap-4 text-neutral-300">
                                <Mail className="text-blue-500" size={20} />
                                <span className="font-medium">{personalInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-4 text-neutral-300">
                                <Phone className="text-blue-500" size={20} />
                                <span className="font-medium">{personalInfo.phone}</span>
                            </div>
                        </div>
                    </div>

                    <Card className="lg:col-span-3 border-none bg-neutral-900/60 p-12">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500">Nom Complet</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:bg-white/[0.05] outline-none transition-all duration-300 font-medium"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500">Email Business</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:bg-white/[0.05] outline-none transition-all duration-300 font-medium"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500">Votre Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-blue-500 focus:bg-white/[0.05] outline-none transition-all duration-300 font-medium resize-none"
                                    placeholder="Décrivez votre vision..."
                                />
                            </div>
                            <Button className="w-full py-5 rounded-2xl" variant="accent" icon={Send}>
                                Initier le contact
                            </Button>
                        </form>
                    </Card>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-black text-neutral-600">
                    <p>© 2024 {personalInfo.name.toUpperCase()}. DESIGNED BY TRAFFY.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-white transition-colors">Portfolio</a>
                        <a href="#" className="hover:text-white transition-colors">Lab</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
