import { useRef, type FC } from 'react';
import extraTasksSvg from '../assets/extra-tasks.svg';
import standardCleaningSvg from '../assets/standard-cleaning.svg';
import moveinCleaningSvg from '../assets/movein-cleaning.svg';
import { useInView } from '../hooks/useInView';

type Product = {
  id: 'standard' | 'movein' | 'extra';
  title: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'standard',
    title: 'Standard Cleaning',
    desc: 'Routine cleaning to keep your space fresh and comfortable. We take care of dusting, sweeping, mopping, bathroom and kitchen cleaning so your home stays consistently clean.',
  },
  {
    id: 'movein',
    title: 'Move-in Cleaning',
    desc: 'Deep cleaning for when you move into a new place. We handle every corner so you step into a home that feels fresh, fully sanitized, and completely ready for you.',
  },
  {
    id: 'extra',
    title: 'Extra Tasks',
    desc: 'Add-ons for the jobs that pile up: windows, laundry, oven interiors, fridge resets, and everything in between. Customize your booking with exactly what you need.',
  },
];

const ART: Record<Product['id'], string> = {
  standard: standardCleaningSvg,
  movein: moveinCleaningSvg,
  extra: extraTasksSvg,
};

const ALT: Record<Product['id'], string> = {
  standard: 'Standard cleaning',
  movein: 'Move-in cleaning',
  extra: 'Extra tasks',
};

/** Individual card — needs its own ref for tilt, so lives as a component. */
const ProductCard: FC<{ p: Product; delay: number; inView: boolean }> = ({ p, delay, inView }) => {
  const cardRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 → 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    el.style.boxShadow = `${-x * 12}px ${-y * 12}px 40px rgba(42,14,0,0.12)`;
    el.style.transition = 'box-shadow 80ms linear';
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
    el.style.transition = 'transform 350ms ease, box-shadow 350ms ease';
  }

  return (
    <div
      className={`reveal-wrap reveal${inView ? ' in-view' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <article
        ref={cardRef}
        className="product-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product-card__body">
          <h3 className="product-card__title">{p.title}</h3>
          <p className="product-card__desc">{p.desc}</p>
          <button className="btn btn-primary btn-sm product-card__cta" type="button">
            Book now
          </button>
        </div>
        <div className="product-card__art-wrap">
          <img src={ART[p.id]} alt={ALT[p.id]} className="product-card__art" />
        </div>
      </article>
    </div>
  );
};

export const Products: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="products section" id="products" ref={ref}>
      <div className="container">
        <h2 className={`display products__title reveal${inView ? ' in-view' : ''}`}>
          Whatever the mess, we&rsquo;ve got it
        </h2>
        <div className="products__grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} p={p} delay={0.08 + i * 0.1} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
