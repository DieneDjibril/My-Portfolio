import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
            className={twMerge(
                "relative group overflow-hidden",
                "bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8",
                "hover:border-white/10 transition-all duration-500",
                className
            )}
            {...props}
        >

            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
