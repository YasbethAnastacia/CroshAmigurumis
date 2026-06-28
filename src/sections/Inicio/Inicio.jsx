import { Section } from "lucide-react"
import { FondoInicio } from "../Fondos/fondo-inicio"
import {CroshDesign} from "./crosh-desing"
import {Corazones} from "../corazones";


export const Inicio = () => {



    return (
        <section className="relative   overflow-hidden  ">
        <Corazones/>
        <FondoInicio />


            

            <div className="min-h-screen grid  lg:grid-cols-5  ">

                <div className="lg:pl-7 flex flex-col pt-15 md:pt-12 lg:pt-25 gap-9 lg:col-span-3 ">

{/** text-[clamp(3.75rem,4.5vw,4.5rem)]*/}
                    <div className="relative grid grid-cols-5 lg:flex lg:flex-col  ">
                        
                        <h1 className=" flex flex-col  items-center xl:items-start -rotate-1 col-span-5" style={{ fontFamily: "var(--title-type)" }}>
                            <div className=" titulo-puntadas xl:pl-20 text-[clamp(3.5rem,13vw,5.7rem)] leading-none " >Puntadas ... ♡</div>

                            <div className="xl:pl-40 text-[clamp(3.0rem,4.0vw,4.5rem)] leading-none text-[var(--header-text-color)]" style={{
                            textShadow:"0 4px 10px rgba(0,0,0,.3)"
                            }}>hechas de </div>

                            <div className="xl:pl-55 text-[clamp(3.0rem,4.0vw,4.5rem)] leading-none text-[var(--header-text-color)] "style={{
                                textShadow:"0 4px 10px rgba(0,0,0,.3)"
                                }}>amor y pasión</div>
                        </h1>

                        
                    </div>


                    
                        <h2 className=" flex justify-center items-center text-4xl" style={{fontFamily:"var(--title-type)",textShadow:"0 4px 10px rgba(0,0,0,1)"}}>
                            <CroshDesign/>
                        </h2> 
                    


                    <div className="  whitespace-pre-line z-60 px-12 text-base text-justify ">
                            <div className=" relative px-6 pt-6 lg:p-6 rounded-2xl shadow-[0_0_10px_var(--header-shadow-up-color)]">
                                <p >{`Hola, soy Alejandra Hernández, tengo 25 años, soy mexicana y contadora. Desde siempre me han gustado las manualidades, la creatividad y encontrar formas de expresar mis ideas a través del arte y las cosas hechas a mano.

                            Con el tiempo descubrí el mundo del crochet y poco a poco se convirtió en una de mis actividades favoritas, ya que me permite crear piezas únicas con dedicación y cariño.

                            Gracias a eso nació CROSH, un espacio donde comparto algunos de mis proyectos, ideas creativas y parte de lo que más disfruto hacer cada día.`}</p>


                            <div className=" flex lg:hidden col-span-1 overflow-hidden items-end ">
                            <img className=" w-full h-auto max-h-40 object-contain" src="./Inicio/shakti-dibujo.png" alt="shakti" />
                            </div>
                        </div>

                    </div>
                </div>



                    
                <div className=" hidden lg:flex justify-center items-center z-60 pr-15 pt-6 col-span-2 "> 
                    <div className="relative w-fit  rounded-4xl shadow-[-6px_0_20px_var(--header-shadow-up-color)]">
                        <div className="absolute inset-0 rounded-4xl shadow-[3px_0_20px_var(--header-shadow-color)]"/>
                        <img className="" src="./Inicio/shakti-dibujo.png" alt="shakti" />
                    </div>

                </div>

            </div>



















            <div className="absolute bottom-0 left-0 w-full h-96 z-50 pointer-events-none bg-[linear-gradient(101.9deg,#ef97bd_-13.9%,#cceff3_34.6%,#e3f1ca_54.2%,#edbbbb_88.6%)] opacity-100 [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2),black)]"/>
        </section>
    );
};


