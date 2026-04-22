import { useEffect, useState, type FC } from 'react';

export const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="#top">
          <span className="nav__dot" aria-hidden="true" />
          Chorezen
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#products">Services</a>
          <a href="#how">How it works</a>
          <a href="#testimonials">Reviews</a>
        </nav>
        <button className="btn btn-primary btn-sm" type="button">
          Book now
        </button>
      </div>
    </header>
  );
};

export default Nav;
