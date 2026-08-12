import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo">
              SOLO<span>.</span>
            </div>
            <p style={{ fontSize: 14, opacity: 0.7, marginTop: 16, maxWidth: 240 }}>
              Padel e quadras de areia, espaço kids e quiosque — aberto todos os dias, de manhã
              até os holofotes acenderem.
            </p>
          </div>
          <div>
            <h5>Navegação</h5>
            <ul>
              <li>
                <a href="#quadras">Quadras</a>
              </li>
              <li>
                <a href="#como">Como funciona</a>
              </li>
              <li>
                <a href="#estrutura">Estrutura</a>
              </li>
              <li>
                <a href="#galeria">Galeria</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li>(11) 4000-0000</li>
              <li>contato@soloarena.com.br</li>
              <li>Rua da Areia, 120</li>
              <li>
                <a href="https://www.instagram.com/muv.arenacriciuma/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Fique por dentro</h5>
            <div className="newsletter">
              <input type="email" placeholder="seu e-mail" />
              <button>Enviar</button>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 SOLO Arena. Todos os direitos reservados.</span>
          <span>Feito na areia, para quem joga.</span>
        </div>
      </div>
    </footer>
  );
}
