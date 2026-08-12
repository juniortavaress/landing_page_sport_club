import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false);
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      setProgressPct(p);
    }
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return { scrolled, progressPct };
}
