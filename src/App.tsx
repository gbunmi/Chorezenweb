import { useEffect, type FC } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQs } from './components/FAQs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Coverage } from './components/Coverage';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CleaningServices } from './components/CleaningServices';

const Home: FC = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <Products />
      <HowItWorks />
      <Coverage />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
    <Footer />
  </>
);

const App: FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cleaning-services" element={<CleaningServices />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>
);

export default App;
