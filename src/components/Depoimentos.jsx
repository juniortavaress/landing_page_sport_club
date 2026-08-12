import { useEffect, useLayoutEffect, useRef } from 'react';
import './Depoimentos.css';

const testimonials = [
  {
    text: '"Reservei em 30 segundos pelo app e a quadra já estava pronta quando cheguei. Iluminação noturna é excelente."',
    initials: 'MC',
    name: 'Marina C.',
    meta: 'Beach tennis, 2x por semana',
  },
  {
    text: '"Melhor areia da cidade pra futevôlei. O bar na quadra fecha a experiência depois do jogo."',
    initials: 'RT',
    name: 'Rafael T.',
    meta: 'Futevôlei, liga de sábado',
  },
  {
    text: '"A gente joga padel e as crianças ficam no espaço kids, do outro lado da grade. É o único lugar que topamos ir toda semana em família."',
    initials: 'JL',
    name: 'Juliana L.',
    meta: 'Mãe de dois, padel aos domingos',
  },
  {
    text: '"Comecei nas aulas em grupo há três meses e já disputo torneio. O professor entende exatamente onde cada aluno está."',
    initials: 'PA',
    name: 'Pedro A.',
    meta: 'Aulas de padel, iniciante',
  },
  {
    text: '"A estrutura pra vôlei de praia é a melhor da região — areia sempre nivelada e rede na altura certa."',
    initials: 'CB',
    name: 'Camila B.',
    meta: 'Vôlei de praia, liga feminina',
  },
  {
    text: '"Levo os clientes pra jogar depois do trabalho. Estacionamento fácil e o quiosque resolve o happy hour."',
    initials: 'DS',
    name: 'Diego S.',
    meta: 'Padel corporativo, quintas-feiras',
  },
  {
    text: '"Meus filhos entram no espaço kids animados — não é aquela sala de espera qualquer, tem monitor e atividade de verdade."',
    initials: 'FL',
    name: 'Fernanda L.',
    meta: 'Mãe de três, beach tennis aos sábados',
  },
  {
    text: '"Joguei em quadras de padel em três cidades diferentes. A iluminação e o piso daqui são disparados os melhores."',
    initials: 'GH',
    name: 'Gustavo H.',
    meta: 'Padel competitivo, categoria B',
  },
];

const N = testimonials.length;
// três cópias lado a lado: [bloco anterior][bloco real][bloco seguinte]
const loopItems = [...testimonials, ...testimonials, ...testimonials];

export default function Depoimentos() {
  const trackRef = useRef(null);

  // começa o scroll no bloco do meio
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / loopItems.length;
    track.scrollLeft = cardWidth * N;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function normalize() {
      const cardWidth = track.scrollWidth / loopItems.length;
      const blockWidth = cardWidth * N;
      if (track.scrollLeft < blockWidth * 0.5) {
        track.scrollLeft += blockWidth;
      } else if (track.scrollLeft > blockWidth * 1.5) {
        track.scrollLeft -= blockWidth;
      }
    }

    track.addEventListener('scroll', normalize, { passive: true });
    return () => track.removeEventListener('scroll', normalize);
  }, []);

  function scrollByCard(dir) {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / loopItems.length;
    track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  }

  return (
    <section id="depoimentos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal" style={{ color: '#FFEFC2' }}>
              Quem já jogou
            </div>
            <h2 className="reveal">Direto de quem pisou na areia.</h2>
          </div>
        </div>
        <div className="testi-row">
          <button
            className="testi-arrow"
            aria-label="Depoimentos anteriores"
            onClick={() => scrollByCard(-1)}
          >
            ←
          </button>
          <div className="testi-track" ref={trackRef}>
            {loopItems.map((t, i) => (
              <div className="testi-card reveal" key={`${t.name}-${i}`}>
                <p>{t.text}</p>
                <div className="testi-who">
                  <div className="avatar">{t.initials}</div>
                  <b>{t.name}</b>
                </div>
              </div>
            ))}
          </div>
          <button
            className="testi-arrow"
            aria-label="Próximos depoimentos"
            onClick={() => scrollByCard(1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
