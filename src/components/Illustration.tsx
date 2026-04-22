import type { FC, ReactNode } from 'react';

/**
 * Illustration slot.
 *
 * Drop your SVGs in `src/assets/` and either:
 *   1. Import them as React components (from .svg with SVGR or as .tsx) and
 *      render them where <Illustration name="hero" /> is used, OR
 *   2. Import them as URLs and pass via the `src` prop.
 *
 * The wrapper maintains the correct aspect box & positioning for each slot.
 */

type Slot =
  | 'hero'
  | 'hero-plant-left'
  | 'hero-plant-right'
  | 'product-standard'
  | 'product-movein'
  | 'product-extra'
  | 'how-showcase'
  | 'cta';

interface IllustrationProps {
  name: Slot;
  src?: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
}

const LABELS: Record<Slot, string> = {
  hero: 'Hero scene',
  'hero-plant-left': 'Plant (left)',
  'hero-plant-right': 'Plant (right)',
  'product-standard': 'Standard cleaning',
  'product-movein': 'Move-in cleaning',
  'product-extra': 'Extra tasks',
  'how-showcase': 'How it works',
  cta: 'CTA scene',
};

export const Illustration: FC<IllustrationProps> = ({ name, src, alt, children, className }) => {
  if (children) {
    return <div className={className}>{children}</div>;
  }
  if (src) {
    return <img src={src} alt={alt ?? LABELS[name]} className={className} />;
  }
  return (
    <div className={`illo-placeholder ${className ?? ''}`} data-slot={name} aria-label={LABELS[name]}>
      <span>{LABELS[name]}</span>
    </div>
  );
};

export default Illustration;
