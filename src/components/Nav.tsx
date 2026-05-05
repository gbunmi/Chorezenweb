import { useEffect, useState, type FC } from 'react';
import chorezenLogo from '../assets/chorezen-logo.png';

export const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
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
      {/* Scroll progress bar */}
      <div className="nav__progress" style={{ width: `${progress}%` }} />
    </header>
  );
};

export default Nav;
