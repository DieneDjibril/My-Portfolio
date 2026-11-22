import { cn, trackPointer } from '../../lib/utils';

/** Carte en verre bleuté avec bordure lumineuse qui suit le curseur. */
export function Card({ as: Comp = 'div', className, children, ...props }) {
  return (
    <Comp onPointerMove={trackPointer} className={cn('glass spotlight rounded-2xl', className)} {...props}>
      {children}
    </Comp>
  );
}
