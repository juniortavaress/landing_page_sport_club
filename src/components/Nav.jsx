import { useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useLiveClock } from '../hooks/useLiveClock';
import './Nav.css';

const links = [
  { href: '#quadras', label: 'Quadras' },
  { href: '#como', label: 'Como funciona' },
  { href: '#estrutura', label: 'Família' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#local', label: 'Localização' },
];

export default function Nav() {
  const { scrolled, progressPct } = useScrollProgress();
  const clock = useLiveClock();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div id="progress" style={{ width: `${progressPct}%` }}></div>

      <nav id="topnav" className={scrolled ? 'scrolled' : ''}>
        <div className="logo">
          SOLO<span>.</span>
        </div>
        <ul className={`navlinks${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navright">
          <span className="clock">{clock}</span>
          <a
            href="https://wa.me/5548999999999?text=Ol%C3%A1!%20Quero%20reservar%20uma%20quadra%20na%20SOLO%20Arena."
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
            style={{ padding: '10px 18px' }}
          >
            Reservar
          </a>
        </div>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          role="button"
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}
