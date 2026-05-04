import type { FC } from 'react';
import footerWordmark from '../assets/footer-wordmark.png';

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
    <div className="footer__panel">
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
      <div className="footer__bottom">
        <img src={footerWordmark} alt="Chorezen" className="footer__wordmark-img" />
        <div className="footer__meta">
          <span>©2026 Chorezen Ltd</span>
          <span>...</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
