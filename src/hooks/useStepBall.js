import { useEffect, useRef } from 'react';

export function useStepBall() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const pathMobileRef = useRef(null);
  const svgRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sectionEl = sectionRef.current;
    const wrapEl = wrapRef.current;
    const svgEl = svgRef.current;
    const ball = ballRef.current;
    if (!sectionEl || !wrapEl || !svgEl || !ball) return;

    function getActivePath() {
      const mobile = window.matchMedia('(max-width:900px)').matches;
      const el = mobile && pathMobileRef.current ? pathMobileRef.current : pathRef.current;
      return el;
    }

    function updateBall() {
      if (reduced) {
        ball.style.opacity = 0;
        return;
      }
      const pathEl = getActivePath();
      if (!pathEl) return;
      const pathLen = pathEl.getTotalLength();
      const rect = wrapEl.getBoundingClientRect();
      const vh = window.innerHeight;
      let progressLocal = (vh - rect.top) / (rect.height + vh);
      progressLocal = Math.min(Math.max(progressLocal, 0), 1);
      if (rect.top > vh || rect.bottom < 0) {
        ball.style.opacity = 0;
        return;
      }
      ball.style.opacity = 1;
      const pt = pathEl.getPointAtLength(progressLocal * pathLen);
      const vb = svgEl.viewBox.baseVal;
      const scaleX = rect.width / vb.width;
      const scaleY = rect.height / vb.height;
      ball.style.transform = `translate(${pt.x * scaleX - 8}px,${pt.y * scaleY - 8}px)`;
    }

    document.addEventListener('scroll', updateBall, { passive: true });
    window.addEventListener('resize', updateBall);
    updateBall();
    return () => {
      document.removeEventListener('scroll', updateBall);
      window.removeEventListener('resize', updateBall);
    };
  }, []);

  return { sectionRef, wrapRef, pathRef, pathMobileRef, svgRef, ballRef };
}
