import { useEffect, useRef, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import chorezenLogo from '../assets/chorezen-logo-new.png';

const WA = 'https://wa.me/message/44BVXDXZRV2IB1';

export const Nav: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Keep --nav-height in sync so sticky children can use it
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () =>
      document.documentElement.style.setProperty('--nav-height', `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer when viewport reaches desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  const drawer = (
    <nav
      className={`nav__drawer${open ? ' nav__drawer--open' : ''}`}
      aria-hidden={!open}
    >
      <Link to="/cleaning-services" className="nav__drawer-link" onClick={close}>Services</Link>
      <a href="#faqs"    className="nav__drawer-link" onClick={close}>FAQs</a>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nav__drawer-link" onClick={close}>Join us</a>
      <a href="#contact" className="nav__drawer-link" onClick={close}>Contact</a>
      <div className="nav__drawer-footer">
        <Link to="/cleaning-services" className="btn btn-primary nav__drawer-cta" onClick={close}>
          Book now
        </Link>
      </div>
    </nav>
  );

  return (
    <>
      <header ref={headerRef} className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
        <div className="nav__inner">

          {/* Logo — left column */}
          <Link className="nav__logo" to="/" onClick={close}>
            <img src={chorezenLogo} alt="Chorezen" className="nav__logo-img" />
          </Link>

          {/* Centered nav links — desktop only */}
          <nav className="nav__links" aria-label="Main navigation">
            {[
              { label: 'Services', to: '/cleaning-services' },
              { label: 'FAQs',     href: '#faqs' },
              { label: 'Join us',  href: WA, target: '_blank' },
              { label: 'Contact',  href: '#contact' },
            ].map(({ label, href, to, target }) =>
              to ? (
                <Link key={label} to={to} onClick={close}>
                  <span className="nav__roll">
                    <span data-label={label}>{label}</span>
                  </span>
                </Link>
              ) : (
                <a key={label} href={href} onClick={close} target={target} rel={target ? 'noopener noreferrer' : undefined}>
                  <span className="nav__roll">
                    <span data-label={label}>{label}</span>
                  </span>
                </a>
              )
            )}
          </nav>

          {/* Right column: CTA (desktop) + hamburger (mobile) */}
          <div className="nav__right">
            <Link to="/cleaning-services" className="btn btn-primary btn-sm nav__cta-desktop">
              Book now
            </Link>

            <button
              className={`nav__hamburger${open ? ' nav__hamburger--open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              type="button"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer rendered via portal — outside nav stacking context */}
      {createPortal(drawer, document.body)}
    </>
  );
};

export default Nav;
