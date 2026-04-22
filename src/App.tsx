import type { FC } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: FC = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Products />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </>
);

export default App;
