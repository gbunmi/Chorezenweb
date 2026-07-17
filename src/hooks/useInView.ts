import { useEffect, useRef, useState } from 'react';

/**
 * Returns a [ref, inView] tuple.
 * Once the element enters the viewport it stays "in-view" (one-shot).
 */
export function useInView<T extends Element>(
  threshold = 0.12,
  rootMargin = '0px 0px -80px 0px',
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
}
