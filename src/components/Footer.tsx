import type { FC } from 'react';

type Column = { heading: string; items: string[] };

const COLUMNS: Column[] = [
  {
    heading: 'Company',
    items: ['About', 'Work with us', 'Privacy Policy', 'Terms of Service'],
  },
  {
    heading: 'Contact',
    items: ['Support', 'Partnerships', 'Press', 'Careers'],
  },
  {
    heading: 'Socials',
    items: ['Instagram', 'TikTok', 'Linkedin', 'Twitter/X'],
  },
];

export const Footer: FC = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__columns">
        {COLUMNS.map((c) => (
          <div key={c.heading} className="footer__col">
            <h4>{c.heading}</h4>
            <ul>
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer__col" aria-hidden="true" />
      </div>
      <div className="footer__banner">
        <h2>Chorezen</h2>
      </div>
      <div className="footer__meta">
        <span>&copy;2026 Chorezen Ltd</span>
        <span>&middot; &middot; &middot;</span>
      </div>
    </div>
  </footer>
);

export default Footer;
