import type { FC } from 'react';
import { useInView } from '../hooks/useInView';

type Testimonial = {
  stars: number;
  quote: string;
  name: string;
  emoji: string;
  variant: 'a' | 'b' | 'c' | 'd';
};

const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    quote:
      'The work was very detailed, the sparkler was very professional and she touched places i would have overlooked if i did it myself, im so happy with the results!, Thank you.',
    name: 'Olatunji',
    emoji: '\u{1F604}',
    variant: 'a',
  },
  {
    stars: 5,
    quote:
      'Booked on a Friday night and had someone at my door Saturday morning. The flat has never looked this good. Easily the smoothest cleaning service I’ve ever used.',
    name: 'Amaka',
    emoji: '\u{1F60A}',
    variant: 'b',
  },
  {
    stars: 5,
    quote:
      'Moved into a new place and the previous tenants left it rough. Chorezen turned it around in one afternoon. Spotless. I’m already booking them again next month.',
    name: 'Tobi',
    emoji: '\u{1F929}',
    variant: 'c',
  },
  {
    stars: 5,
    quote:
      'What I love is how reliable it is. They show up when they say they will, they listen to the details I care about, and the space actually feels lived-in afterwards. Not sterile.',
    name: 'Zainab',
    emoji: '\u{2728}',
    variant: 'd',
  },
];

const Star: FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <path
      d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9z"
      fill="#ffffff"
    />
  </svg>
);

export const Testimonials: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      <div className="container">
        <h2 className={`display testimonials__title reveal${inView ? ' in-view' : ''}`}>
          Loved by people who use us
        </h2>
        <div className="testimonials__row">
          {TESTIMONIALS.map((t, i) => (
            /* Wrapper handles reveal; tcard keeps its own rotation transform */
            <div
              key={i}
              className={`reveal-fade d${i + 1}${inView ? ' in-view' : ''}`}
            >
              <article className={`tcard tcard--${t.variant}`}>
                <div>
                  <div className="tcard__stars" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, k) => (
                      <Star key={k} />
                    ))}
                  </div>
                  <p className="tcard__quote">{t.quote}</p>
                </div>
                <div className="tcard__byline">
                  <span className="tcard__emoji" aria-hidden="true">
                    {t.emoji}
                  </span>
                  <span className="tcard__name">{t.name}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
