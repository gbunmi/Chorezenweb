import { useState, type FC } from 'react';
import { useInView } from '../hooks/useInView';

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: 'How do I book a cleaning?',
    a: 'Just tap "Book now" and send us a message on WhatsApp. Tell us your location, the type of clean you need, and your preferred date. We\'ll confirm and sort the rest within minutes.',
  },
  {
    q: 'What areas do you currently serve?',
    a: 'We currently operate across Ibadan and are actively expanding. If you\'re unsure whether we cover your area, just message us and we\'ll let you know straight away.',
  },
  {
    q: 'Do I need to supply cleaning products or equipment?',
    a: 'Yes. Customers supply their own cleaning equipment. We provide a list of the minimum required supplies needed so your sparkler can get to work and get the job done properly.',
  },
  {
    q: 'How long does a session take?',
    a: 'It depends on the size of your space and the type of clean. A standard one-bedroom flat typically takes 2-3 hours. We\'ll give you a more accurate estimate once we know your details.',
  },
  {
    q: 'Are your cleaners vetted?',
    a: 'Yes. Every Chorezen sparkler goes through a thorough vetting process before joining the team. Your home is in safe, professional hands.',
  },
  {
    q: 'What if I\'m not happy with the result?',
    a: 'We want every clean to leave you genuinely happy. If something isn\'t right, message us and we\'ll make it right. No hassle, no arguments.',
  },
];

const PlusIcon: FC<{ open: boolean }> = ({ open }) => (
  <svg
    className={`faq__plus${open ? ' faq__plus--open' : ''}`}
    width="12"
    height="12"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    {/* Horizontal bar — always visible */}
    <path d="M1 8h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    {/* Vertical bar — hidden when open */}
    <path className="faq__plus-vert" d="M8 1v14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

const FAQRow: FC<FAQItem & { index: number; inView: boolean }> = ({ q, a, index, inView }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq__item reveal d${Math.min(index + 1, 6)}${inView ? ' in-view' : ''}`}>
      <button
        className={`faq__question${open ? ' faq__question--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        type="button"
      >
        <span>{q}</span>
        <PlusIcon open={open} />
      </button>
      <div
        className="faq__answer"
        aria-hidden={!open}
        style={{ '--h': open ? '1fr' : '0fr' } as React.CSSProperties}
      >
        <div className="faq__answer-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQs: FC = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="faqs section" id="faqs" ref={ref}>
      <div className="faqs__inner">
        <div className={`faqs__header reveal${inView ? ' in-view' : ''}`}>
          <h2 className="display faqs__title">Frequently Asked Questions</h2>
        </div>
        <div className="faqs__list">
          {FAQS.map((item, i) => (
            <FAQRow key={i} {...item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
