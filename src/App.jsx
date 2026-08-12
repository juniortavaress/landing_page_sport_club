import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import SkyLayer from './components/SkyLayer';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Quadras from './components/Quadras';
import ComoFunciona from './components/ComoFunciona';
import Estrutura from './components/Estrutura';
import Stats from './components/Stats';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import Localizacao from './components/Localizacao';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useRevealOnScroll();

  return (
    <>
      <SkyLayer />
      <Nav />
      <Hero />
      <Quadras />
      <ComoFunciona />
      <Estrutura />
      <Stats />
      <Galeria />
      <Depoimentos />
      <Localizacao />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
