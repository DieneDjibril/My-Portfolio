import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 overflow-hidden group";

    const variants = {
        primary: "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
        secondary: "bg-neutral-900 text-white border border-white/10 hover:border-white/30 hover:bg-neutral-800",
        ghost: "text-neutral-400 hover:text-white hover:bg-white/5",
        accent: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            </span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </motion.button>
    );
};
