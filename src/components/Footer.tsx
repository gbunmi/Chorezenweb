import type { FC } from 'react';
import footerWordmark from '../assets/footer-wordmark.png';
import { useInView } from '../hooks/useInView';

const WA = 'https://wa.me/2347044415890';

type Item = { label: string; href: string; external?: boolean };
type Column = { heading: string; items: Item[] };

const COLUMNS: Column[] = [
  {
    heading: 'Company',
    items: [
      { label: 'Become a sparkler', href: WA, external: true },
      { label: 'Privacy Policy',   href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: 'Email', href: '#' },
      { label: 'Phone', href: '#' },
    ],
  },
  {
    heading: 'Socials',
    items: [
      { label: 'Instagram',  href: '#' },
      { label: 'TikTok',     href: '#' },
      { label: 'Twitter/X',  href: '#' },
    ],
  },
];

export const Footer: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <footer className="footer" ref={ref}>
      <div className="footer__panel">
        <div className="footer__columns">
          {COLUMNS.map((c, i) => (
            <div
              key={c.heading}
              className={`footer__col reveal-fade d${i + 1}${inView ? ' in-view' : ''}`}
            >
              <h4 className="footer__col-heading">{c.heading}</h4>
              <ul>
                {c.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <img
            src={footerWordmark}
            alt="Chorezen"
            className={`footer__wordmark-img reveal${inView ? ' in-view' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          />
          <div
            className={`footer__meta reveal-fade${inView ? ' in-view' : ''}`}
            style={{ transitionDelay: '0.25s' }}
          >
            <span>Â©2026 Chorezen</span>
            <span>...</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
