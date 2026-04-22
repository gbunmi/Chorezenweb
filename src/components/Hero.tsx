import type { FC } from 'react';
import heroIllustration from '../assets/hero-illustration.svg';

export const Hero: FC = () => (
  <section className="hero" id="top">
    <div className="hero__content">
      <h1 className="display hero__title">
        We&rsquo;re here to make your
        <br />
        space sparkle and shine
      </h1>
      <p className="hero__lede">
        Life gets busy. Cleaning shouldn&rsquo;t slow you down. Chorezen connects you with
        reliable cleaners who show up on time, do the job right, and leave your space feeling
        brand new.
      </p>
      <div className="hero__ctas">
        <button className="btn btn-primary btn-sm" type="button">
          Book now
        </button>
        <button className="btn btn-ghost btn-sm" type="button">
          Contact us
        </button>
      </div>
    </div>

    <div className="hero__scene">
      <img src={heroIllustration} alt="Cleaner tidying a living room" className="hero__scene-art" />
    </div>
  </section>
);

export default Hero;
