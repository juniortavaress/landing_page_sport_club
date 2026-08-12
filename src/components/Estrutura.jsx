import './Estrutura.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
    title: 'Iluminação de LED',
    text: 'Quadras iluminadas para jogos até as 23h, todos os dias da semana.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="13" rx="1" />
        <path d="M8 7V4h8v3" />
      </svg>
    ),
    title: 'Vestiários e chuveiros',
    text: 'Armários, chuveiro quente e toalha disponível no balcão.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M4 10h16l-1.5 9a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 10Z" />
        <path d="M9 10V6a3 3 0 0 1 6 0v4" />
      </svg>
    ),
    title: 'Bar & quiosque na areia',
    text: 'Água de coco, cerveja gelada e petiscos direto no pé da quadra.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="3" y="9" width="18" height="9" rx="1" />
        <path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: 'Estacionamento gratuito',
    text: 'Vagas cobertas para quem chega de carro, sem custo extra.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Aluguel de equipamento',
    text: 'Raquetes, bolas e redes prontas — não precisa levar nada.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="19" cy="6" r="2" />
      </svg>
    ),
    title: 'Espaço kids monitorado',
    text: 'Área de recreação com monitores enquanto os adultos jogam.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
      </svg>
    ),
    title: 'Aulas em família',
    text: 'Turmas de padel e beach tennis pra pais e filhos, juntos ou separados por nível.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M6 21h12M8 21v-6a4 4 0 1 1 8 0v6" />
        <path d="M9 15c-1-1.5-1-3 .5-5C10 8 9.5 6.5 9 6c1.8 0 3 1 3.2 2.5C12.6 7 13.8 6 15 6c-.6 1-1 2.2-.3 3.5C15.5 11 15 13 14 15" />
      </svg>
    ),
    title: 'Área de churrasqueiras',
    text: 'Espaço com churrasqueiras e mesas pra reunir o grupo depois do jogo ou em confraternizações.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
    title: 'Área coberta de convivência',
    text: 'Mesas à sombra pra quem espera, assiste ou só acompanha o jogo.',
  },
];

export default function Estrutura() {
  return (
    <section id="estrutura">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Estrutura</div>
            <h2 className="reveal">Pensado pra família inteira.</h2>
          </div>
          <p className="reveal">
            Enquanto os pais jogam, as crianças têm espaço garantido, tudo dentro do mesmo
            complexo.
          </p>
        </div>

        <div className="feat-grid">
          {features.map((f) => (
            <div className="feat" key={f.title}>
              {f.icon}
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
