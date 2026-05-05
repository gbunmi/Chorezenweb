import type { FC } from 'react';

type Step = { n: string; title: string; desc: string };

const STEPS: Step[] = [
  {
    n: '1',
    title: 'Tap "Book Now"',
    desc: 'You\u2019ll be taken straight to our WhatsApp order channel to get started.',
  },
  {
    n: '2',
    title: 'Add what you need',
    desc: 'Choose your cleaning service and any extra tasks, then add them to your cart.',
  },
  {
    n: '3',
    title: 'We confirm and get to work',
    desc: 'Your booking is confirmed, processed, and assigned. We show up ready to clean.',
  },
];

export const HowItWorks: FC = () => (
  <section className="how section" id="how">
    <div className="container">
      <h2 className="display how__title">How it Works</h2>
      <div className="how__grid">
        {STEPS.map((s) => (
          <div key={s.n} className="step">
            <div className="step__num">{s.n}</div>
            <div>
              <div className="step__title">{s.title}</div>
              <div className="step__desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
