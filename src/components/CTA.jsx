import padelImg from '../assets/padel.png';
import './CTA.css';

export default function CTA() {
  return (
    <section id="cta">
      <img className="cta-bg" src={padelImg} alt="" aria-hidden="true" />
      <div className="cta-bg-overlay"></div>

      <div className="wrap cta-content">
        <div className="eyebrow reveal" style={{ justifyContent: 'center', color: '#FFEFC2' }}>
          Sua vaga está aqui
        </div>
        <h2 className="reveal">
          RESERVE SUA
          <br />
          QUADRA AGORA.
        </h2>
        <div className="cta-ctas reveal">
          <a
            href="https://wa.me/5548999999999?text=Ol%C3%A1!%20Quero%20reservar%20uma%20quadra%20na%20SOLO%20Arena."
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid cta-btn-main"
          >
            Reservar horário
          </a>
          <a href="#local" className="btn btn-ghost cta-btn-ghost">
            Ver localização
          </a>
        </div>
        <div className="cta-meta">
          <span>Sem taxa de cadastro</span>
          <span className="dot">·</span>
          <span>Cancelamento gratuito até 24h</span>
        </div>
      </div>
    </section>
  );
}
