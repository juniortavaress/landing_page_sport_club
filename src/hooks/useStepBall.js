import { useEffect, useRef } from 'react';

export function useStepBall() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sectionEl = sectionRef.current;
    const wrapEl = wrapRef.current;
    const pathEl = pathRef.current;
    const svgEl = svgRef.current;
    const ball = ballRef.current;
    if (!sectionEl || !wrapEl || !pathEl || !svgEl || !ball) return;

    const pathLen = pathEl.getTotalLength();

    function updateBall() {
      if (reduced) {
        ball.style.opacity = 0;
        return;
      }
      const sectionRect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight;
      let progressLocal = (vh - sectionRect.top) / (sectionRect.height + vh);
      progressLocal = Math.min(Math.max(progressLocal, 0), 1);
      if (sectionRect.top > vh || sectionRect.bottom < 0) {
        ball.style.opacity = 0;
        return;
      }
      ball.style.opacity = 1;
      const rect = wrapEl.getBoundingClientRect();
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

  return { sectionRef, wrapRef, pathRef, svgRef, ballRef };
}
