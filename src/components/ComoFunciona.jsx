import { useStepBall } from '../hooks/useStepBall';
import './ComoFunciona.css';

const steps = [
  {
    num: '01 — Escolha',
    title: 'Quadra e horário',
    text: 'Veja a disponibilidade em tempo real e escolha a modalidade, o dia e o horário.',
    delay: '',
  },
  {
    num: '02 — Confirme',
    title: 'Reserve pelo WhatsApp',
    text: 'Chama no WhatsApp, combine o pagamento e sua vaga fica garantida na hora.',
    delay: 'reveal-delay-1',
  },
  {
    num: '03 — Jogue',
    title: 'Chegue e aproveite',
    text: 'Vestiário, bola e rede prontos. Depois do jogo, o quiosque te espera.',
    delay: 'reveal-delay-2',
  },
];

export default function ComoFunciona() {
  const { sectionRef, wrapRef, pathRef, pathMobileRef, svgRef, ballRef } = useStepBall();

  return (
    <section id="como" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal" style={{ color: '#FFEFC2' }}>
              Reserva simples
            </div>
            <h2 className="reveal">Três passos até a bola rolar.</h2>
          </div>
          <p className="reveal">Sem ligação, sem fila. Tudo pelo WhatsApp, em menos de um minuto.</p>
        </div>

        <div className="steps-wrap" ref={wrapRef}>
          <svg
            className="steps-svg"
            ref={svgRef}
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              className="steps-path-desktop"
              d="M60,40 C 260,180 400,-60 500,60 C 600,180 740,-60 940,40"
            />
            <path ref={pathMobileRef} className="steps-path-mobile" d="M500,0 L500,200" />
          </svg>
          <div className="ball" ref={ballRef}></div>
          <div className="steps">
            {steps.map((s) => (
              <div className={`step reveal ${s.delay}`} key={s.num}>
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
