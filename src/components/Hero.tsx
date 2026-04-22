import type { FC } from 'react';
import { Illustration } from './Illustration';

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
        <button className="btn btn-primary" type="button">
          Book now
        </button>
        <button className="btn btn-ghost" type="button">
          Contact us
        </button>
      </div>
    </div>

    <div className="hero__scene">
      <Illustration name="hero-plant-left" className="hero__plants hero__plants--left" />
      <Illustration name="hero-plant-right" className="hero__plants hero__plants--right" />
      <Illustration name="hero" className="hero__scene-art" />
    </div>
  </section>
);

export default Hero;
