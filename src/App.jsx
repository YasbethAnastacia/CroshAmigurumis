
import {Inicio} from "./sections/Inicio/Inicio";
import {Actividades} from "./sections/Sobremi/actividades";
import { Fondos } from "./sections/Fondos/fondo"
import { Crochet } from "./sections/Crochet/crochet";
import { Contact } from "./sections/Contactame/contact";


function App() {
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
