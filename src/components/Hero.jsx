import { useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  function goToSection(e, id) {
    e.preventDefault();
    scrollToSection(id);
  }

  return (
    <section id="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>

      <div className="hero-inner">
        <div className="hero-kicker reveal">Padel · areia · um lugar pra toda a família</div>
        <h1 className="reveal">
          O JOGO
          <br />É DE <em>TODOS</em>.
        </h1>
        <p className="hero-sub reveal reveal-delay-1">
          Quadras de padel e de areia lado a lado, espaço kids, holofotes até às 23h. Os pais
          jogam, as crianças brincam por perto — todo mundo fica.
        </p>
        <div className="hero-ctas reveal reveal-delay-2">
          <a href="#quadras" onClick={(e) => goToSection(e, 'quadras')} className="btn btn-solid">
            Ver quadras disponíveis
          </a>
          <a href="#estrutura" onClick={(e) => goToSection(e, 'estrutura')} className="btn btn-ghost">
            Pensado pra família
          </a>
        </div>
      </div>

      <svg className="court-lines" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,119 L1200,119" stroke="#241A0F" strokeWidth="2" opacity="0.25" />
        <circle cx="600" cy="119" r="60" fill="none" stroke="#241A0F" strokeWidth="2" opacity="0.25" />
        <path d="M600,119 L600,59" stroke="#241A0F" strokeWidth="2" opacity="0.25" />
      </svg>

    </section>
  );
}
