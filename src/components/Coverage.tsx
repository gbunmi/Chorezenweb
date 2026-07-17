import type { FC } from 'react';
import { useInView } from '../hooks/useInView';
import coverageMap from '../assets/coverage-map.svg';
import handLeft from '../assets/coverage-hand-left.svg';
import handRight from '../assets/coverage-hand-right.svg';

export const Coverage: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="coverage section" ref={ref}>
      <div className="container">
        <h2 className={`display coverage__title reveal${inView ? ' in-view' : ''}`}>
          Built in Ibadan<span className="coverage__title-comma">, </span><br className="br-mobile" />Expanding fast
        </h2>
        <p className={`coverage__body reveal d1${inView ? ' in-view' : ''}`}>
          We currently serve Ibadan and are actively expanding to bring
          reliable, professional cleaning to more homes across Nigeria.
        </p>
      </div>

      {/* Visual area — full-width, aspect-ratio locked to Figma frame */}
      <div className={`coverage__visual reveal d2${inView ? ' in-view' : ''}`}>
        <img
          src={coverageMap}
          alt="Map showing Chorezen coverage across Ibadan and surrounding cities"
          className="coverage__map"
        />
        <img src={handLeft}  alt="" aria-hidden="true" className="coverage__hand coverage__hand--left" />
        <img src={handRight} alt="" aria-hidden="true" className="coverage__hand coverage__hand--right" />
      </div>
    </section>
  );
};

export default Coverage;
