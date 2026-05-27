import { LetrasDesign } from "../letras-desing"
import { useState } from "react"
import { ChevronRight } from "lucide-react";

const amigurumis = [
    {
        img: "/crochet/abeja-llavero.jpg",
        titulo: "Abeja Llavero",
        tamaño: "10 cm",
        tiempo: "1 día",
        dificultad: "★★☆☆☆",
        materiales: "Hilo algodón",
        descripcion: "Una pequeña abeja tejida con mucho cariño, perfecta para llevar contigo y darle un toque adorable a tus llaves o mochila."
    },

    {
        img: "/crochet/bestia.jpg",
        titulo: "Bestia",
        tamaño: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Estambre suave",
        descripcion: "Inspirado en criaturas fantásticas, este amigurumi combina ternura y personalidad en cada detalle tejido a mano."
    },

    {
        img: "/crochet/cabra.jpg",
        titulo: "Cabra",
        tamaño: "22 cm",
        tiempo: "3 días",
        dificultad: "★★★☆☆",
        materiales: "Hilo algodón",
        descripcion: "Una cabrita suave y tierna creada puntada por puntada para transmitir una vibra cálida y acogedora."
    },

    {
        img: "/crochet/captus.jpg",
        titulo: "Captus",
        tamaño: "15 cm",
        tiempo: "1 día",
        dificultad: "★★☆☆☆",
        materiales: "Estambre verde",
        descripcion: "Un pequeño cactus tejido con estilo cute y detalles delicados, ideal para decorar cualquier espacio."
    },

    {
        img: "/crochet/deporte.jpg",
        titulo: "Deportista",
        tamaño: "24 cm",
        tiempo: "3 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Diseñado con una temática deportiva llena de energía y personalidad, tejido completamente a mano."
    },

    {
        img: "/crochet/doctora.jpg",
        titulo: "Doctora",
        tamaño: "26 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Una muñeca doctora tejida con dedicación y detalles cuidadosamente elaborados para darle vida y ternura."
    },

    {
        img: "/crochet/doctora-rubia.jpg",
        titulo: "Doctora Rubia",
        tamaño: "26 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Versión especial de la doctora con una estética dulce y colores suaves que resaltan su encanto artesanal."
    },

    {
        img: "/crochet/Iron.jpg",
        titulo: "Iron",
        tamaño: "23 cm",
        tiempo: "5 días",
        dificultad: "★★★★★",
        materiales: "Hilo algodón",
        descripcion: "Inspirado en un héroe icónico, este amigurumi mezcla fuerza y ternura en una pieza completamente handmade."
    },

    {
        img: "/crochet/Mini.jpg",
        titulo: "Mini",
        tamaño: "18 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Estambre suave",
        descripcion: "Pequeñita, adorable y llena de personalidad, creada para transmitir alegría y una vibra súper kawaii."
    },

    {
        img: "/crochet/monito.jpg",
        titulo: "Monito",
        tamaño: "20 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Hilo algodón",
        descripcion: "Un monito tejido con expresión tierna y acabados suaves que lo hacen perfecto para decorar o regalar."
    },

    {
        img: "/crochet/pajaritos.jpg",
        titulo: "Pajaritos",
        tamaño: "20 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Hilo algodón",
        descripcion: "Una pareja de pajaritos tejidos con colores delicados y una estética acogedora llena de ternura."
    },

    {
        img: "/crochet/pollo-llavero.jpg",
        titulo: "Pollo Llavero",
        tamaño: "9 cm",
        tiempo: "1 día",
        dificultad: "★★☆☆☆",
        materiales: "Hilo algodón",
        descripcion: "Un pequeño pollito tejido a mano que añade un toque divertido y cute a cualquier accesorio."
    },

    {
        img: "/crochet/princesa-cafe.jpg",
        titulo: "Princesa Café",
        tamaño: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Inspirada en cuentos clásicos, esta princesa transmite dulzura y elegancia con cada puntada."
    },

    {
        img: "/crochet/princesa-negro.jpg",
        titulo: "Princesa Negro",
        tamaño: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Una princesa tejida con mucho detalle y una personalidad encantadora que resalta por su estilo único."
    },

    {
        img: "/crochet/princesa-rojo.jpg",
        titulo: "Princesa Roja",
        tamaño: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Colores vibrantes, detalles delicados y una vibra mágica hacen de esta princesa una pieza especial."
    },

    {
        img: "/crochet/princesa-rubio.jpg",
        titulo: "Princesa Rubia",
        tamaño: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Tejida cuidadosamente para reflejar una estética suave, dulce y llena de encanto artesanal."
    },

    {
        img: "/crochet/ramo-violeta.jpg",
        titulo: "Ramo Violeta",
        tamaño: "20 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Flores tejidas",
        descripcion: "Un delicado ramo tejido a mano que combina colores suaves y detalles florales llenos de calidez."
    },

    {
        img: "/crochet/unicornio.jpg",
        titulo: "Unicornio",
        tamaño: "28 cm",
        tiempo: "5 días",
        dificultad: "★★★★★",
        materiales: "Hilo multicolor",
        descripcion: "Un unicornio mágico tejido completamente a mano, lleno de colores suaves y una esencia soñadora."
    },

    {
        img: "/crochet/policia.jpg",
        titulo: "Policía",
        tamaño: "24 cm",
        tiempo: "3 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        descripcion: "Un personaje tejido con mucha personalidad y detalles únicos que resaltan su estilo divertido y adorable."
    }
]

export const Crochet = () => {

    const [actual,setActual] = useState(0)

    const izquierda = actual-1 === -1
    ? amigurumis.length-1
    : actual-1

    const centro = actual

    const derecha = actual+1 >= amigurumis.length
    ? 0
    : actual+1

    return(
        <section className="w-full overflow-x-hidden flex flex-col pt-5">

            <div className="py-2 gradiente-borde shadow-[0_0_20px_#ffffff]">

                <div className="relative h-[400px] overflow-hidden flex items-center justify-center bg-black shadow-[0_0_20px_#ffffff]">

                    <video
                    className="absolute inset-0 w-full h-full object-cover object-[10%_20%] opacity-60"
                    autoPlay
                    muted
                    loop
                    playsInline
                    >
                        <source src="/crochet/video.mp4" type="video/mp4"/>
                    </video>

                    <h2
                    style={{ fontFamily: "var(--title-type)" }}
                    className="z-30 text-8xl"
                    >
                        <LetrasDesign texto="PROYECTOS"/>
                    </h2>

                    <div className="absolute bottom-0 left-0 w-full h-[100px] bg-white/30 blur-3xl"/>

                </div>

            </div>



            <div className="bg-purple-500 grid grid-cols-[60%_40%]">

                {/* CARRUSEL */}
                <div className="bg-red-500 flex justify-center">

                    <div className="bg-pink-500 p-4">

                        <div className="relative bg-green-500 w-[850px] h-[520px] ">
                            
                            <button className="absolute right-10 top-1/2 bg-white/70 rounded-full  p-4 -translate-y-1/2 shadow-2xl hover:scale-110 transition duration-300 hover:bg-pink-100  hover:text-white " onClick={() => setActual(
                            actual+1 >= amigurumis.length
                            ? 0
                            : actual+1 )} > <ChevronRight className="w-6 h-6 text-pink-500 translate-x-1.5" />
                            </button>

                            
                            

                        
                        <div className="absolute left-[5%] top-[50%] -translate-y-1/2 z-10 bg-black ">

                            <div className=" w-[350px] h-[350px] flex items-center justify-center">
                                <img className="w-full h-full object-cover opacity-25" src={amigurumis[izquierda].img} alt=""/>
                            </div>

                        </div>


                        
                        <div className=" absolute  left-1/2  top-[50%] -translate-x-1/2 -translate-y-1/2  z-20  bg-blue-500">

                            <div className=" w-[320px] h-[480px] flex items-center justify-center">

                                <img className="w-full h-full object-cover " src={amigurumis[centro].img} alt=""/>
                            </div>

                        </div>


                        {/* DERECHA */}
                        <div className="absolute left-[50%] top-[50%] -translate-y-1/2 z-10 bg-black">

                            <div className=" w-[350px] h-[350px] flex items-center justify-center">
                                <img className="w-full h-full object-cover  opacity-25" src={amigurumis[derecha].img} alt=""/>
                            </div>

                        </div>
                        

                </div>

            </div>

        </div>



                {/* TEXTO */}
                <div className="bg-pink-300 px-10 py-7 ">

                    <div className="relative bg-blue-500 w-full h-full ">

                        <div className="flex flex-col">

                            {/* titulo */}
                            <div className="flex py-5  justify-center bg-red-500 text-5xl text-[var(--header-text-color)]">
                                <p>{amigurumis[actual].titulo} ♡</p>
                            </div>

                            {/* grid */}
                            <div className="grid grid-cols-2">

                                {/* labels */}
                                <div className="flex flex-col">
                                    <p>Colores</p>
                                    <p>tamaño</p>
                                    <p>tiempo</p>
                                    <p>dificultad</p>
                                    <p>materiales</p>
                                </div>

                                {/* valores */}
                                <div className="flex flex-col ">
                                    <div className="flex flex-row gap-6">
                                        <div className="w-4 h-4 bg-pink-500"/>
                                        <div className="w-4 h-4 bg-pink-500"/>
                                        <div className="w-4 h-4 bg-pink-500"/>
                                    </div>
                                    <p>{amigurumis[actual].tamaño}</p>
                                    <p>{amigurumis[actual].tiempo}</p>
                                    <p>{amigurumis[actual].dificultad}</p>
                                    <p>{amigurumis[actual].materiales}</p>
                                </div>

                            </div>

                            {/* descripcion */}
                            <div className="">
                                <p>{amigurumis[actual].descripcion}</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>















            <div className="bg-blue-500">

                <p>l</p>

            </div>

        </section>
    )
}