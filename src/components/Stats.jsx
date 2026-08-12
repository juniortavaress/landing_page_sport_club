import { useCountUp } from '../hooks/useCountUp';
import statsImg from '../assets/futevolei.jpg';
import './Stats.css';

const items = [
  { target: 1, label: 'Ano de história', delay: '' },
  { target: 5, label: 'Quadras (padel + areia)', delay: 'reveal-delay-1' },
  { target: 1200, label: 'Jogos por mês', delay: 'reveal-delay-2' },
  { target: 28, label: 'Aulas por semana', delay: 'reveal-delay-3' },
];

function Stat({ target, label, delay }) {
  const { ref, value } = useCountUp(target);
  return (
    <div className={`stat reveal ${delay}`}>
      <div className="num" ref={ref}>
        {value}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-parallax" style={{ backgroundImage: `url(${statsImg})` }}></div>
      <div className="stats-overlay"></div>
      <div className="wrap stats-grid">
        {items.map((it) => (
          <Stat key={it.label} {...it} />
        ))}
      </div>
    </section>
  );
}
