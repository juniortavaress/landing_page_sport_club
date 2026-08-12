import { useSkyCycle } from '../hooks/useSkyCycle';
import './SkyLayer.css';

export default function SkyLayer() {
  const { skyRef, sunRef, moonRef } = useSkyCycle();

  return (
    <>
      <div id="skylayer" ref={skyRef}></div>
      <div id="grain"></div>
      <div className="sun-orb" ref={sunRef}></div>
      <div className="moon-orb" ref={moonRef}></div>
    </>
  );
}
