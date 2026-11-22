import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const variants = {
  primary:
    'bg-signature text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.7)] hover:shadow-[0_10px_40px_-6px_rgba(56,189,248,0.6)]',
  ghost: 'glass text-text hover:border-brand-400/40 hover:bg-ink-800',
  subtle: 'text-muted hover:text-text',
};

/** Bouton ou lien (si `href`) aux styles du site. */
export const Button = forwardRef(function Button(
  { as, href, variant = 'primary', className, children, ...props },
  ref,
) {
  const Comp = as ?? (href ? 'a' : 'button');
  return (
    <Comp
      ref={ref}
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[box-shadow,background-color,border-color,color] duration-300 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
});
