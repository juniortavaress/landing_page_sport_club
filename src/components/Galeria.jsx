import porDoSolImg from '../assets/por-do-sol.jpg';
import futevoleiImg from '../assets/futevolei.jpg';
import fotoGaleriaImg from '../assets/foto-galeria.jpg';
import duranteNoiteImg from '../assets/durante-a-noite.jpg';
import fotoGaleria2Img from '../assets/foto-galeria-2.jpg';
import fotoGaleria3Img from '../assets/foto-galeria-3.jpg';
import fotoGaleria4Img from '../assets/foto-galeria-4.avif';
import aulaKidsImg from '../assets/aula-kids.png';
import padelFamiliaImg from '../assets/padel-em-familia.jpg';
import imageGaleriaImg from '../assets/image-galeria.png';
import imagesGaleriaImg from '../assets/images-galeria.jpg';
import './Galeria.css';

const items = [
  { className: 'g1', image: porDoSolImg, caption: 'Pôr do sol — Quadra 03', delay: '' },
  { className: 'g2', image: futevoleiImg, caption: 'Treino de futevôlei', delay: 'reveal-delay-1' },
  { className: 'g5', image: fotoGaleria4Img, caption: 'Padel de terça', delay: 'reveal-delay-2' },
  { className: 'g2', image: aulaKidsImg, caption: 'Aula kids', delay: 'reveal-delay-2' },
  { className: 'g4', image: duranteNoiteImg, caption: 'Noite de holofotes', delay: '' },
  { className: 'g3', image: fotoGaleriaImg, caption: 'Torneio de verão', delay: 'reveal-delay-1' },
  { className: 'g5', image: padelFamiliaImg, caption: 'Esporte em família', delay: 'reveal-delay-2' },
  { className: 'g2', image: fotoGaleria3Img, caption: 'Padel de quinta', delay: 'reveal-delay-3' },
  { className: 'g3', image: fotoGaleria2Img, caption: 'Quadras', delay: 'reveal-delay-4' },
  { className: 'g4', image: imageGaleriaImg, caption: 'Aulas para adolescentes', delay: '' },
  { className: 'g2', image: imagesGaleriaImg, caption: 'Treinamento individual', delay: 'reveal-delay-1' },
];

export default function Galeria() {
  return (
    <section id="galeria">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Galeria</div>
            <h2 className="reveal">Momentos na SOLO.</h2>
          </div>
          <p className="reveal">Um retrato do que rola por aqui, de manhã ao fim da noite.</p>
        </div>
        <div className="gal-grid">
          {items.map((it, i) => (
            <div
              key={i}
              className={`gal-item ${it.className} reveal ${it.delay}`}
              style={{ backgroundImage: `url(${it.image})` }}
            >
              <span>{it.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
