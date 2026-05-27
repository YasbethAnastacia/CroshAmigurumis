import {Navegador} from "./sections/Navegador/Navegador";
import {Inicio} from "./sections/Inicio/Inicio";
import {Actividades} from "./sections/Sobremi/actividades";
import { Fondos } from "./sections/Fondos/fondo"
import { Crochet } from "./sections/Crochet/crochet";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <Fondos />
      <Navegador />

      <main>
        <Inicio />
        <Actividades />
        <Crochet />
        
      </main>

    </div>
  );
}

export default App;
