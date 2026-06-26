import { Carrusel } from "./carrusel";
import { DecoracionI } from "./decoracionI";
import { DecoracionD } from "./decoracionD";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { LetrasDesign } from "../letras-desing"

export const Actividades = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    
    return (
        

        <section className="w-full max-w-[1700px] mx-auto px-3 lg:px-6 xl:px-16"> 
        
        <div className="relative flex flex-col lg:px-10 pt-10  border-2 border-[var(--header-text-color)] rounded-[25px] ">

        {/* <img className="absolute inset-0 rounded-[25px] object-cover w-full h-full overflow opacity-40 "src="./Fondos/fondo-todo.png" alt="" />*/}

            <div className="flex lg:grid lg:grid-cols-5 lg:items-center xl:grid xl:grid-cols-7 justify-center gap-10 xl:gap-15   "> 

            <div className="lg:col-span-2  xl:col-span-3 hidden lg:flex lg:flex-col justify-end items-center relative  pt-5 "> 

                <DecoracionI />

                <div className=" gradiente-borde px-6 pt-4 pb-2 -rotate-8 rounded-2xl shadow-[15px_15px_60px_#544444] ">

                <img
                    className="w-100"
                    src="/Actividades/carrusel/foto-principal.png"
                    alt=""
                />

                <p className="text-center pt-2 "> 
                    ¡Esta soy yo!
                </p>

                </div>

            </div>

            <div className="relative lg:col-span-3   xl:col-span-4 flex items-center justify-center px-5 lg:px-10 "> 

                <DecoracionD />

                <div className="flex flex-col  py-5 px-4 rounded-[2rem]  shadow-[0_0px_10px_#ffffff]"> {/* bg-[#F6D6DC] shadow-[0_10px_20px_#826876]*/}
                    {/*<h2 className="text-4xl mb-6 text-center "> 
                    ¡Mis intereses!
                    </h2>*/}
                    <h2 className="text-center relative px-6 py-2  text-5xl font-bold " style={{fontFamily:"var(--title-type)",WebkitTextStroke: "1px black"}}>
                    <LetrasDesign texto={`Mis intereses`}/>
                    </h2>
                    <div className=" border-l border-r border-white rounded-[2rem] px-3 py-4 text-center md:text-justify">  {/**border-2  border-dashed border-pink-500  */}

                    

                    <p className=" leading-snug whitespace-pre-line w-full "> 
                    {`El crochet es una de mis formas favoritas de expresar creatividad. Me encanta crear amigurumis y piezas hechas a mano llenas de color, ternura y personalidad.

                    También disfruto pintar, dibujar y convertir ideas en pequeños proyectos creativos que transmitan alegría y calidez.

                    Fuera del mundo handmade, me gusta practicar karate, viajar, aprender cosas nuevas y pasar tiempo con las personas que quiero.

                    Actualmente continúo desarrollando mis proyectos creativos mientras sigo aprendiendo y creciendo cada día.`}
                    </p>

                </div>

                
                </div>

            
            </div>

            </div>

            
            <div className="flex py-6 lg:px-15 xl:px-30 "> 

            <button onClick={() => emblaApi?.scrollPrev()}>
                <ChevronLeft />
            </button>

            <Carrusel emblaRef={emblaRef} />

            <button onClick={() => emblaApi?.scrollNext()}>
                <ChevronRight />
            </button>

            
            </div>

        
        </div>

        
        </section>

    );
};