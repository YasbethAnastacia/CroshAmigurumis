import { Section } from "lucide-react"
import { FondoInicio } from "../Fondos/fondo-inicio"
import {CroshDesign} from "./crosh-desing"


export const Inicio = () => {


    return (
        <section className="relative  min-h-screen overflow-x-hidden  ">
        <FondoInicio />

            

            <div className="min-h-screen grid grid-cols-[60%_40%] ">

                <div className="pl-7 flex flex-col pt-25 gap-7 ">


                    <div className="">
                        <h1 className="flex flex-col  -rotate-1 " style={{ fontFamily: "var(--title-type)" }}>
                            <div className="titulo-puntadas pl-20 text-8xl" >Puntadas ... ♡</div>

                            <div className="pl-40 text-6xl text-[var(--header-text-color)]" style={{
                            textShadow:"0 4px 10px rgba(0,0,0,.3)"
                            }}>hechas de </div>

                            <div className="pl-55 text-6xl text-[var(--header-text-color)] "style={{
                                textShadow:"0 4px 10px rgba(0,0,0,.3)"
                                }}>amor y pasión</div>
                        </h1>
                    </div>


                    
                        <h2 className=" flex justify-center items-center text-4xl" style={{fontFamily:"var(--title-type)",textShadow:"0 4px 10px rgba(0,0,0,1)"}}>
                            <CroshDesign/>
                        </h2> 
                    


                    <div className="  whitespace-pre-line z-60 px-12 text-base text-justify">
                            <div className="relative p-6 rounded-2xl shadow-[0_0_10px_var(--header-shadow-up-color)]">
                                <p >{`Hola, soy Alejandra Hernández, tengo 25 años, soy mexicana y contadora. Desde siempre me han gustado las manualidades, la creatividad y encontrar formas de expresar mis ideas a través del arte y las cosas hechas a mano.

                            Con el tiempo descubrí el mundo del crochet y poco a poco se convirtió en una de mis actividades favoritas, ya que me permite crear piezas únicas con dedicación y cariño.

                            Gracias a eso nació CROSH, un espacio donde comparto algunos de mis proyectos, ideas creativas y parte de lo que más disfruto hacer cada día.`}</p>
                            </div>

                    </div>
                </div>



                    
                <div className=" flex justify-center items-center z-60 pr-15 pt-6"> 
                    <div className="relative w-fit  rounded-4xl shadow-[-6px_0_20px_var(--header-shadow-up-color)]">
                        <div className="absolute inset-0 rounded-4xl shadow-[3px_0_20px_var(--header-shadow-color)]"/>
                        <img className="" src="./Inicio/shakti-dibujo.png" alt="shakti" />
                    </div>

                </div>

            </div>



















            <div
                className="
                
                absolute
                bottom-0
                left-0
                w-full
                h-96
                z-50
                pointer-events-none

                bg-[linear-gradient(101.9deg,#ef97bd_-13.9%,#cceff3_34.6%,#e3f1ca_54.2%,#edbbbb_88.6%)]

                opacity-100
                

                [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2),black)]
                "
            />
        </section>
    );
};


