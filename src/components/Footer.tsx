import type { FC } from 'react';

type Column = { heading: string; items: string[] };

const COLUMNS: Column[] = [
  {
    heading: 'Company',
    items: ['About', 'Work with us', 'Privacy Policy', 'Terms of Service'],
  },
  {
    heading: 'Contact',
    items: ['About', 'Work with us', 'Privacy Policy', 'Terms of Service'],
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
            <h4 className="footer__col-heading">{c.heading}</h4>
            <ul>
              {c.items.map((i) => (
                <li key={i}><a href="#">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__wordmark">
        <div className="footer__wordmark-icon">
          <span>🫧</span>
        </div>
        <span className="footer__wordmark-text">Chorezen</span>
      </div>
      <div className="footer__meta">
        <span>&copy;2026 Chorezen Ltd</span>
        <span>&middot; &middot; &middot;</span>
      </div>
    </div>
  </footer>
);

export default Footer;
