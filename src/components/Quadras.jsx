import padelImg from '../assets/padel.png';
import beachTennisImg from '../assets/beach-tennis.jpg';
import futevoleiImg from '../assets/futevolei.jpg';
import voleiImg from '../assets/volei.jpg';
import './Quadras.css';

const courts = [
  {
    tag: 'Quadra 00 · coberta',
    title: 'Padel',
    highlight: true,
    image: padelImg,
    size: '20×10m',
    players: '4 jogadores',
    price: 'R$ 120',
    delay: '',
  },
  {
    tag: 'Quadra 01',
    title: 'Beach Tennis',
    image: beachTennisImg,
    size: '16×8m',
    players: '4 jogadores',
    price: 'R$ 90',
    delay: 'reveal-delay-1',
  },
  {
    tag: 'Quadra 02',
    title: 'Futevôlei',
    image: futevoleiImg,
    size: '18×9m',
    players: '6 jogadores',
    price: 'R$ 80',
    delay: 'reveal-delay-2',
  },
  {
    tag: 'Quadra 03',
    title: 'Vôlei de Praia',
    image: voleiImg,
    size: '16×8m',
    players: '4 jogadores',
    price: 'R$ 85',
    delay: 'reveal-delay-3',
  },
];

export default function Quadras() {
  return (
    <section id="quadras">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Nossas quadras</div>
            <h2 className="reveal">Padel e areia, lado a lado.</h2>
          </div>
          <p className="reveal">
            Quatro modalidades, iluminação profissional e quadras cobertas nos dias de chuva.
          </p>
        </div>

        <div className="courts-grid">
          {courts.map((c) => (
            <div
              key={c.title}
              className={`court-card reveal ${c.delay}${c.highlight ? ' highlight' : ''}`}
            >
              <div className="court-card-img" style={{ backgroundImage: `url(${c.image})` }}></div>
              <div className="court-card-overlay"></div>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <div className="meta">
                <div>
                  Tamanho
                  <b>{c.size}</b>
                </div>
                <div>
                  Até
                  <b>{c.players}</b>
                </div>
                <div>
                  Hora
                  <b>{c.price}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
