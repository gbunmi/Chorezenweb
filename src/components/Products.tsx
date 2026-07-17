import type { FC } from 'react';
import { Link } from 'react-router-dom';
import standardCleaningImg from '../assets/standard-cleaning-new.png';
import moveinCleaningImg from '../assets/movein-cleaning-new.png';
import extraTasksImg from '../assets/extra-tasks-new.png';
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
  standard: standardCleaningImg,
  movein: moveinCleaningImg,
  extra: extraTasksImg,
};

const ALT: Record<Product['id'], string> = {
  standard: 'Standard cleaning illustration',
  movein: 'Move-in cleaning illustration',
  extra: 'Extra tasks illustration',
};

const ProductCard: FC<{ p: Product; delay: number; inView: boolean }> = ({ p, delay, inView }) => (
  <div
    className={`reveal-wrap reveal${inView ? ' in-view' : ''}`}
    style={{ transitionDelay: `${delay}s` }}
  >
    <article className="product-card">
      <div className="product-card__body">
        <h3 className="product-card__title">{p.title}</h3>
        <p className="product-card__desc">{p.desc}</p>
        <Link to="/cleaning-services" className="btn btn-primary btn-sm product-card__cta">
          Book now
        </Link>
      </div>
      <div className={`product-card__art-wrap product-card__art-wrap--${p.id}`}>
        <img src={ART[p.id]} alt={ALT[p.id]} className="product-card__art" />
      </div>
    </article>
  </div>
);

export const Products: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="products section" id="products" ref={ref}>
      <div className="container">
        <h2 className={`display products__title reveal${inView ? ' in-view' : ''}`}>
          Whatever the mess,{' '}
          <br className="br-mobile" />
          we&rsquo;ve got it
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
