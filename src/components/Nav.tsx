import { useEffect, useState, type FC } from 'react';
import chorezenLogo from '../assets/chorezen-logo.png';

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
          <img src={chorezenLogo} alt="Chorezen" className="nav__logo-img" />
        </a>
        <button className="btn btn-primary btn-sm" type="button">
          Book now
        </button>
      </div>
    </header>
  );
};

export default Nav;
