import { useState, useEffect, useCallback, useRef, type FC } from 'react';
import { createPortal } from 'react-dom';
import { Nav } from './Nav';
import { FAQs } from './FAQs';
import { Footer } from './Footer';
import { useInView } from '../hooks/useInView';
import {
  CLEANING_SERVICES,
  CATEGORY_LABELS,
  type CleaningService,
  type ServiceCategory,
  type SupplyOption,
} from '../data/cleaningServices';

const CATEGORIES: ServiceCategory[] = ['standard', 'movein', 'extra'];
const WA_BASE = 'https://wa.me/2347044415890';

const formatPrice = (price: number) =>
  `₦${price.toLocaleString('en-NG')}`;

const cardPrice = (service: CleaningService) =>
  service.supplyOptions
    ? `From ${formatPrice(service.price)}`
    : formatPrice(service.price);

// ── Drawer ──────────────────────────────────────────────────────────────────

const WhatsAppIcon: FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const CheckIcon: FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <circle cx="8" cy="8" r="7" fill="var(--orange)" opacity="0.12" />
    <path
      d="M4.5 8.5l2 2 4-4"
      stroke="var(--orange)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Drawer: FC<{ service: CleaningService | null; onClose: () => void }> = ({
  service,
  onClose,
}) => {
  const open = Boolean(service);
  const [supplyIdx, setSupplyIdx] = useState(0);
  const prevServiceId = useRef<string | null>(null);

  // Reset toggle whenever a new service is opened
  if (service && service.id !== prevServiceId.current) {
    prevServiceId.current = service.id;
    if (supplyIdx !== 0) setSupplyIdx(0);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    const lock = open ? 'hidden' : '';
    document.body.style.overflow = lock;
    document.documentElement.style.overflow = lock;
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const activeOption: SupplyOption | null =
    service?.supplyOptions?.[supplyIdx] ?? null;

  const price = activeOption?.price ?? service?.price ?? 0;
  const fullDescription = activeOption?.fullDescription ?? service?.fullDescription ?? '';
  const included = activeOption?.included ?? service?.included ?? [];
  const purchasedSupplies = activeOption?.purchasedSupplies ?? null;
  const waMessage = service
    ? `Hi Chorezen,\n\nI'd like to book:\n\n• Service: ${service.title}\n\nMy details:\n• Location: __________\n• Preferred date: __________\n• Preferred time: __________`
    : '';
  const waHref = service ? `${WA_BASE}?text=${encodeURIComponent(waMessage)}` : '#';

  return createPortal(
    <>
      <div
        className={`svc-backdrop${open ? ' svc-backdrop--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`svc-drawer${open ? ' svc-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={service?.title ?? 'Service details'}
      >
        {service && (
          <>
            {/* × close button — top left */}
            <button
              type="button"
              className="svc-drawer__x"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="svc-drawer__scroll">
              <div className="svc-drawer__img-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="svc-drawer__img"
                  loading="lazy"
                />
              </div>

              <div className="svc-drawer__content">
                <div className="svc-drawer__header">
                  <h2 className="svc-drawer__title">{service.title}</h2>
                  <span className="svc-drawer__price">
                    {formatPrice(price)}
                  </span>
                </div>

                {/* Supply toggle — only for move-in services */}
                {service.supplyOptions && (
                  <div className="svc-supply-toggle">
                    {service.supplyOptions.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`svc-supply-btn${supplyIdx === i ? ' svc-supply-btn--active' : ''}`}
                        onClick={() => setSupplyIdx(i)}
                      >
                        <span className="svc-supply-btn__label">{opt.label}</span>
                        <span className="svc-supply-btn__sub">{opt.sublabel}</span>
                      </button>
                    ))}
                  </div>
                )}

                <p className="svc-drawer__desc">{fullDescription}</p>

                <hr className="svc-drawer__divider" />

                {purchasedSupplies && (
                  <>
                    <div className="svc-drawer__section">
                      <h3 className="svc-drawer__section-title">
                        Products Included
                      </h3>
                      <div className="svc-drawer__pills">
                        {purchasedSupplies.map((item, i) => (
                          <span key={i} className="svc-drawer__pill">{item}</span>
                        ))}
                      </div>
                    </div>
                    <hr className="svc-drawer__divider" />
                  </>
                )}

                {service.recommendedSupplies && (
                  <>
                    <div className="svc-drawer__section">
                      <h3 className="svc-drawer__section-title">
                        Recommended Supplies
                      </h3>
                      <p className="svc-drawer__section-note">
                        Not mandatory. Bring whatever you already have on hand.
                      </p>
                      <div className="svc-drawer__pills">
                        {service.recommendedSupplies.map((item, i) => (
                          <span key={i} className="svc-drawer__pill">{item}</span>
                        ))}
                      </div>
                    </div>
                    <hr className="svc-drawer__divider" />
                  </>
                )}

                <div className="svc-drawer__section">
                  <h3 className="svc-drawer__section-title">
                    What&rsquo;s Included
                  </h3>
                  <ul className="svc-drawer__checklist">
                    {included.map((item, i) => (
                      <li key={i} className="svc-drawer__check-item">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.notes && (
                  <>
                    <hr className="svc-drawer__divider" />
                    <div className="svc-drawer__notes">
                      <p>{service.notes}</p>
                    </div>
                  </>
                )}

                {service.category === 'extra' && (
                  <>
                    <hr className="svc-drawer__divider" />
                    <div className="svc-drawer__warning-badge">
                      <p>Extra tasks are booked as add-ons to a standard cleaning booking. They cannot be booked as a standalone service.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="svc-drawer__footer">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary svc-drawer__book-btn"
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </>,
    document.body,
  );
};

// ── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard: FC<{
  service: CleaningService;
  onClick: (s: CleaningService) => void;
  inView: boolean;
  delay: number;
}> = ({ service, onClick, inView, delay }) => (
  <div
    className={`svc-card reveal${inView ? ' in-view' : ''}`}
    style={{ transitionDelay: `${delay}s` }}
    onClick={() => onClick(service)}
    role="button"
    tabIndex={0}
    aria-label={`View details for ${service.title}`}
    onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(service);
      }
    }}
  >
    <div className="svc-card__img-wrap">
      <img
        src={service.image}
        alt={service.title}
        className="svc-card__img"
        loading="lazy"
      />
    </div>
    <div className="svc-card__body">
      <h3 className="svc-card__title">{service.title}</h3>
      <span className="svc-card__price">{cardPrice(service)}</span>
      <p className="svc-card__desc">{service.shortDescription}</p>
    </div>
  </div>
);

// ── Service Grid ──────────────────────────────────────────────────────────────

const ServiceGrid: FC<{
  category: ServiceCategory;
  onCardClick: (s: CleaningService) => void;
}> = ({ category, onCardClick }) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const services = CLEANING_SERVICES.filter(s => s.category === category);

  return (
    <div className="svc-grid" ref={ref}>
      {services.map((service, i) => (
        <ServiceCard
          key={service.id}
          service={service}
          onClick={onCardClick}
          inView={inView}
          delay={0.06 + i * 0.07}
        />
      ))}
    </div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────

export const CleaningServices: FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('standard');
  const [selectedService, setSelectedService] =
    useState<CleaningService | null>(null);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  const handleClose = useCallback(() => setSelectedService(null), []);
  const handleCardClick = useCallback(
    (service: CleaningService) => setSelectedService(service),
    [],
  );

  return (
    <>
      <Nav />
      <main className="cleaning">
        {/* Header */}
        <div className="cleaning__header-wrap" ref={headerRef}>
          <div className="container">
            <div
              className={`cleaning__header reveal${headerInView ? ' in-view' : ''}`}
            >
              <h1 className="display cleaning__title">Book a Service</h1>
            </div>
          </div>
        </div>

        {/* Sticky tab nav */}
        <div className="svc-tabs-wrap">
          <div className="container">
            <div
              className="svc-tabs"
              role="tablist"
              aria-label="Service categories"
            >
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === cat}
                  className={`svc-tab${activeTab === cat ? ' svc-tab--active' : ''}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab panels — keyed so cards re-animate on tab switch */}
        <div className="cleaning__body">
          <div className="container">
            <div
              key={activeTab}
              role="tabpanel"
              aria-label={CATEGORY_LABELS[activeTab]}
              className="svc-tabpanel"
            >
              <ServiceGrid
                category={activeTab}
                onCardClick={handleCardClick}
              />
            </div>
          </div>
        </div>
      </main>
      <FAQs />
      <Footer />

      <Drawer service={selectedService} onClose={handleClose} />
    </>
  );
};

export default CleaningServices;
