import type { FC } from 'react';
import { Link } from 'react-router-dom';
import heroIllustration from '../assets/hero-illustration.svg';

/* ── Sparkle icon ──────────────────────────────────────────────────────── */
const SparkleWord: FC = () => (
  <span className="sparkle-word">
    sparkle
    <span className="sparkle-particle" aria-hidden="true">
      <svg className="sparkle-svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 1 L13.1 10.9 L23 12 L13.1 13.1 L12 23 L10.9 13.1 L1 12 L10.9 10.9 Z"
          fill="#f95f13"
        />
      </svg>
    </span>
  </span>
);

/* ── Hero ───────────────────────────────────────────────────────────────── */
export const Hero: FC = () => (
  <section className="hero" id="top">
    <div className="hero__content">
      <h1 className="display hero__title">
        We&rsquo;re here to{' '}
        <br className="br-mobile" />
        make your
        <br />
        space <SparkleWord />{' '}
        <br className="br-mobile" />
        and shine
      </h1>
      <p className="hero__lede">
        Life gets busy. Cleaning shouldn&rsquo;t slow you down. Chorezen connects you with
        reliable cleaners who show up on time, do the job right, and leave your space feeling
        brand new.
      </p>
      <div className="hero__ctas">
        <Link to="/cleaning-services" className="btn btn-primary btn-sm">
          Book now
        </Link>
        <a
          href="https://wa.me/message/44BVXDXZRV2IB1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
        >
          Contact us
        </a>
      </div>
    </div>

    <div className="hero__scene">
      <img src={heroIllustration} alt="Cleaner tidying a living room" className="hero__scene-art" />
    </div>
  </section>
);

export default Hero;
