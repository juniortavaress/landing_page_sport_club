import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useLiveClock } from '../hooks/useLiveClock';
import { scrollToSection } from '../utils/scrollToSection';
import './Nav.css';

const links = [
  { href: '#quadras', label: 'Quadras' },
  { href: '#como', label: 'Como funciona' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#local', label: 'Localização' },
];

export default function Nav() {
  const { scrolled, progressPct } = useScrollProgress();
  const clock = useLiveClock();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onOutsideClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('pointerdown', onOutsideClick);
    return () => document.removeEventListener('pointerdown', onOutsideClick);
  }, [menuOpen]);

  function handleLinkClick(e, href) {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href.slice(1));
  }

  function goToTop(e) {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div id="progress" style={{ width: `${progressPct}%` }}></div>

      <nav id="topnav" className={scrolled ? 'scrolled' : ''} ref={navRef}>
        <a href="#" className="logo" onClick={goToTop}>
          SOLO<span>.</span>
        </a>
        <ul className={`navlinks${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleLinkClick(e, l.href)}>
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
        </div>
      </nav>
    </>
  );
}
