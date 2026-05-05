import type { FC } from 'react';
import ctaObjects from '../assets/cta-objects.svg';
import { useInView } from '../hooks/useInView';

export const CTA: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="cta section" ref={ref}>
      <div className={`cta__panel reveal${inView ? ' in-view' : ''}`}>
        <h2 className="display cta__title">
          Ready for<br />a cleaner space?
        </h2>
        <p className="cta__lede">
          Book a cleaning in minutes and let us handle the rest. No stress. No chasing. Just a space
          that feels good again.
        </p>
        <button className="btn btn-primary btn-sm" type="button">
          Book now
        </button>
      </div>
      <img
        src={ctaObjects}
        alt=""
        aria-hidden="true"
        className={`cta__art reveal d2${inView ? ' in-view' : ''}`}
      />
    </section>
  );
};

export default CTA;
