import type { FC } from 'react';
import extraTasksSvg from '../assets/extra-tasks.svg';
import standardCleaningSvg from '../assets/standard-cleaning.svg';
import moveinCleaningSvg from '../assets/movein-cleaning.svg';

type Product = {
  id: 'standard' | 'movein' | 'extra';
  title: string;
  desc: string;
  art: 'product-standard' | 'product-movein' | 'product-extra';
};

const PRODUCTS: Product[] = [
  {
    id: 'standard',
    title: 'Standard Cleaning',
    desc: 'Routine cleaning to keep your space fresh and comfortable. We take care of dusting, sweeping, mopping, bathroom and kitchen cleaning so your home stays consistently clean.',
    art: 'product-standard',
  },
  {
    id: 'movein',
    title: 'Move-in Cleaning',
    desc: 'Deep cleaning for when you move into a new place. We handle every corner so you step into a home that feels fresh, fully sanitized, and completely ready for you.',
    art: 'product-movein',
  },
  {
    id: 'extra',
    title: 'Extra Tasks',
    desc: 'Add-ons for the jobs that pile up: windows, laundry, oven interiors, fridge resets, and everything in between. Customize your booking with exactly what you need.',
    art: 'product-extra',
  },
];

export const Products: FC = () => (
  <section className="products section" id="products">
    <div className="container">
      <h2 className="display products__title">Whatever the mess, we&rsquo;ve got it</h2>
      <div className="products__grid">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="product-card">
            <div className="product-card__body">
              <h3 className="product-card__title">{p.title}</h3>
              <p className="product-card__desc">{p.desc}</p>
              <button className="btn btn-primary btn-sm product-card__cta" type="button">
                Book now
              </button>
            </div>
            <div className="product-card__art-wrap">
              {p.id === 'extra'
                ? <img src={extraTasksSvg} alt="Extra tasks" className="product-card__art" />
                : p.id === 'standard'
                ? <img src={standardCleaningSvg} alt="Standard cleaning" className="product-card__art" />
                : <img src={moveinCleaningSvg} alt="Move-in cleaning" className="product-card__art" />
              }
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
