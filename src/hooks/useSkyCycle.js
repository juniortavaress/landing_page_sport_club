import { useEffect, useRef } from 'react';

const stops = [
  { f: 0, top: [235, 217, 174], bottom: [216, 185, 120] }, // manhã - areia clara
  { f: 0.35, top: [247, 205, 140], bottom: [201, 120, 70] }, // meio-dia quente
  { f: 0.65, top: [123, 70, 60], bottom: [35, 26, 50] }, // entardecer / dusk
  { f: 1, top: [16, 26, 46], bottom: [6, 11, 22] }, // noite
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function colorAt(f) {
  for (let i = 0; i < stops.length - 1; i++) {
    const s0 = stops[i];
    const s1 = stops[i + 1];
    if (f >= s0.f && f <= s1.f) {
      const t = (f - s0.f) / (s1.f - s0.f || 1);
      return {
        top: s0.top.map((c, idx) => Math.round(lerp(c, s1.top[idx], t))),
        bottom: s0.bottom.map((c, idx) => Math.round(lerp(c, s1.bottom[idx], t))),
      };
    }
  }
  return { top: stops[stops.length - 1].top, bottom: stops[stops.length - 1].bottom };
}

export function useSkyCycle() {
  const skyRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sky = skyRef.current;
    const sun = sunRef.current;
    const moon = moonRef.current;

    function updateSky() {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const f = h > 0 ? Math.min(Math.max(window.scrollY / h, 0), 1) : 0;
      const c = colorAt(f);
      if (sky) {
        sky.style.setProperty('--sky-top', `rgb(${c.top.join(',')})`);
        sky.style.setProperty('--sky-bottom', `rgb(${c.bottom.join(',')})`);
        sky.style.background = `linear-gradient(180deg, rgb(${c.top.join(',')}) 0%, rgb(${c.bottom.join(',')}) 100%)`;
      }

      if (!reduced && sun && moon) {
        const angle = f * Math.PI;
        const x = f * 100;
        const y = 62 - Math.sin(angle) * 48;
        sun.style.left = x + 'vw';
        sun.style.top = y + 'vh';
        moon.style.left = x + 'vw';
        moon.style.top = y + 'vh';
      }
      if (sun) sun.style.opacity = f < 0.62 ? Math.max(0, 1 - (f / 0.62) * 0.15) : Math.max(0, 1 - (f - 0.62) / 0.15);
      if (moon) moon.style.opacity = f > 0.68 ? Math.min(1, (f - 0.68) / 0.2) : 0;
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateSky();
          ticking = false;
        });
        ticking = true;
      }
    }

    document.addEventListener('scroll', onScroll, { passive: true });
    updateSky();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return { skyRef, sunRef, moonRef };
}
