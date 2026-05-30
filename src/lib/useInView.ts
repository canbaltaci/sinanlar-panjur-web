import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setInView(true);
      },
      { root: null, threshold: 0.15, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold]);

  return { ref, inView } as const;
}

