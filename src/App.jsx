/*import { useEffect } from "react";*/
import {Inicio} from "./sections/Inicio/Inicio";
import {Actividades} from "./sections/Sobremi/actividades";
import { Fondos } from "./sections/Fondos/fondo"
import { Crochet } from "./sections/Crochet/crochet";
import { Contact } from "./sections/Contactame/contact";
import { Navegador } from "./sections/Navegador/Navegador";


function App() {
  /*useEffect(() => {
  const duration = 15000; // 15 segundos

  const start = window.scrollY;
  const end =
    document.documentElement.scrollHeight - window.innerHeight;

  const startTime = performance.now();

  function easeInOut(t) {
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  const timer = setTimeout(() => {
    function animate(time) {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased = easeInOut(progress);

      window.scrollTo({
        top: start + (end - start) * eased,
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, 1500);

  return () => clearTimeout(timer);
}, []);*/
  return (
    <div className="overflow-x-hidden ">
      
      <Fondos />
      

      <main className="min-h-screen overflow-x-hidden flex flex-col gap-10">
        <Inicio />
        <Actividades />
        <Crochet />
        <Contact/>
        
      </main>

    </div>
  );
}

export default App;
