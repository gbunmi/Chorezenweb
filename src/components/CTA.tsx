import type { FC } from 'react';
import { Link } from 'react-router-dom';
import ctaObjects from '../assets/cta-objects.svg';
import { useInView } from '../hooks/useInView';

export const CTA: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="cta section" ref={ref}>
      <div className="cta__panel">
        <h2 className={`display cta__title reveal${inView ? ' in-view' : ''}`}>
          Ready for<br />a cleaner space?
        </h2>
        <p className={`cta__lede reveal d1${inView ? ' in-view' : ''}`}>
          Book a cleaning in minutes and let us handle the rest. No stress. No chasing. Just a space
          that feels good again.
        </p>
        <Link
          to="/cleaning-services"
          className={`btn btn-primary btn-sm reveal-fade d2${inView ? ' in-view' : ''}`}
        >
          Book now
        </Link>
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
