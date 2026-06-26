import { LetrasDesign } from "../letras-desing"
import { LetrasDesignHard } from "../letras-desing-hard"
import { useState } from "react"
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const amigurumis = [
    {
        img: "/crochet/pollo-llavero.jpeg",
        titulo: "Pollo",
        tamano: "9 cm",
        tiempo: "1 día",
        dificultad: "★★☆☆☆",
        materiales: "Hilo algodón",
        colores: ["#FACC15", "#F97316", "#111827"],
        descripcion: "Un pequeño pollito tejido a mano que añade un toque divertido y cute a cualquier accesorio."
    },
    {
        img: "/crochet/ramo-violeta.jpg",
        titulo: "Ramo Tulipanes",
        tamano: "20 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Flores tejidas",
        colores: ["#258625","#A855F7", "#FDE68A",  "#F3F4F6",],
        descripcion: "Un delicado ramo tejido a mano que combina colores suaves y detalles florales llenos de calidez."
    },

    {
        img: "/crochet/bestia.jpg",
        titulo: "Bestia",
        tamano: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Estambre suave",
        colores: ["#1d6ef1", "#b58560", "#f1f441"],
        descripcion: "Inspirado en criaturas fantásticas, este amigurumi combina ternura y personalidad en cada detalle tejido a mano."
    },

    {
        img: "/crochet/cabra.jpg",
        titulo: "Chiva",
        tamano: "22 cm",
        tiempo: "3 días",
        dificultad: "★★★☆☆",
        materiales: "Hilo algodón",
        colores: ["#F3F4F6", "#db1818", "#2F2F2F"],
        descripcion: "Una cabrita suave y tierna creada puntada por puntada para transmitir una vibra cálida y acogedora."
    },

    {
        img: "/crochet/captus.jpg",
        titulo: "Cactus",
        tamano: "15 cm",
        tiempo: "1 día",
        dificultad: "★★☆☆☆",
        materiales: "Estambre verde",
        colores: ["#6BAF5E", "#A0522D", "#181716"],
        descripcion: "Un pequeño cactus tejido con estilo cute y detalles delicados, ideal para decorar cualquier espacio."
    },

    {
        img: "/crochet/deporte.jpg",
        titulo: "Basquetbolista",
        tamano: "24 cm",
        tiempo: "3 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#2563EB", "#111827", "#F59E0B"],
        descripcion: "Diseñado con una temática deportiva llena de energía y personalidad, tejido completamente a mano."
    },

    {
        img: "/crochet/doctora.jpg",
        titulo: "Enfermera",
        tamano: "26 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#4F46E5", "#F472B6", "#f1f1f0"],
        descripcion: "Una muñeca doctora tejida con dedicación y detalles cuidadosamente elaborados para darle vida y ternura."
    },

    {
        img: "/crochet/doctora-rubia.jpg",
        titulo: "Doctora ",
        tamano: "26 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#FACC15", "#F9A8D4", "#F3F4F6"],
        descripcion: "Versión especial de la doctora con una estética dulce y colores suaves que resaltan su encanto artesanal."
    },

    {
        img: "/crochet/Iron.jpg",
        titulo: "Iron Man",
        tamano: "23 cm",
        tiempo: "5 días",
        dificultad: "★★★★★",
        materiales: "Hilo algodón",
        colores: ["#DC2626", "#FACC15", "#374151"],
        descripcion: "Inspirado en un héroe icónico, este amigurumi mezcla fuerza y ternura en una pieza completamente handmade."
    },

    {
        img: "/crochet/Mini.jpg",
        titulo: "Mini Mouse",
        tamano: "18 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Estambre suave",
        colores: ["#EC4899", "#f2e5af", "#111827"],
        descripcion: "Pequeñita, adorable y llena de personalidad, creada para transmitir alegría y una vibra súper kawaii."
    },

    {
        img: "/crochet/monito.jpg",
        titulo: "Nathanael Cano",
        tamano: "20 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Hilo algodón",
        colores: ["#DC2626", "#F5E6C8", "#111827"],
        descripcion: "Un monito tejido con expresión tierna y acabados suaves que lo hacen perfecto para decorar o regalar."
    },

    {
        img: "/crochet/pajaritos.jpg",
        titulo: "Pajaritos",
        tamano: "20 cm",
        tiempo: "2 días",
        dificultad: "★★★☆☆",
        materiales: "Hilo algodón",
        colores: ["#2563EB", "#84CC16", "#F8FAFC"],
        descripcion: "Una pareja de pajaritos tejidos con colores delicados y una estética acogedora llena de ternura."
    },


    {
        img: "/crochet/princesa-cafe.jpg",
        titulo: "Princesa Bella",
        tamano: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#FACC15", "#875531", "#F5E6C8"],
        descripcion: "Inspirada en cuentos clásicos, esta princesa transmite dulzura y elegancia con cada puntada."
    },

    {
        img: "/crochet/princesa-negro.jpg",
        titulo: "Blanca nieves",
        tamano: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#111827", "#FACC15", "#DC2626"],
        descripcion: "Una princesa tejida con mucho detalle y una personalidad encantadora que resalta por su estilo único."
    },

    {
        img: "/crochet/princesa-rojo.jpg",
        titulo: "Princesa Merida",
        tamano: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#DC2626", "#0F766E", "#efe178"],
        descripcion: "Colores vibrantes, detalles delicados y una vibra mágica hacen de esta princesa una pieza especial."
    },

    {
        img: "/crochet/princesa-rubio.jpg",
        titulo: "Bella durmiente",
        tamano: "25 cm",
        tiempo: "4 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#FACC15", "#F472B6", "#F3F4F6"],
        descripcion: "Tejida cuidadosamente para reflejar una estética suave, dulce y llena de encanto artesanal."
    },

    {
        img: "/crochet/abeja-llavero.jpg",
        titulo: "Llavero abejita",
        tamano: "10 cm",
        tiempo: "1 día",
        dificultad: "★★☆☆☆",
        materiales: "Hilo algodón",
        colores: ["#F6D32D", "#FFF8E7", "#1F1F1F", "#f3a3d3"],
        descripcion: "Una pequeña abeja tejida con mucho cariño, perfecta para llevar contigo y darle un toque adorable a tus llaves o mochila."
    },

    {
        img: "/crochet/unicornio.jpg",
        titulo: "Unicornio",
        tamano: "28 cm",
        tiempo: "5 días",
        dificultad: "★★★★★",
        materiales: "Hilo multicolor",
        colores: ["#129836", "#ed65a9", "#f5f3f9"],
        descripcion: "Un unicornio mágico tejido completamente a mano, lleno de colores suaves y una esencia soñadora."
    },

    {
        img: "/crochet/policia.jpg",
        titulo: "Agente de la GN",
        tamano: "24 cm",
        tiempo: "3 días",
        dificultad: "★★★★☆",
        materiales: "Hilo algodón",
        colores: ["#edd692", "#111827", "#F3F4F6"],
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


    const info = [
        {
            icono: "/crochet/iconos/paleta.png",
            label: "Colores",

            valor: (
                <div className="flex gap-3">

                    {amigurumis[actual].colores.map((color) => (

                        <div
                            key={color}
                            className="w-5 h-5 rounded-full border border-white/40"
                            style={{ backgroundColor: color }}
                        />

                    ))}

                </div>
            )
        },

        {
            icono: "/crochet/iconos/tamaño.png",
            label: "Tamaño",
            valor: amigurumis[actual].tamano
        },

        {
            icono: "/crochet/iconos/tiempo.png",
            label: "Tiempo",
            valor: amigurumis[actual].tiempo
        },

        {
            icono: "/crochet/iconos/Dificultad.png",
            label: "Dificultad",
            valor: amigurumis[actual].dificultad
        },

        {
            icono: "/crochet/iconos/material.png",
            label: "Material",
            valor: amigurumis[actual].materiales
        }
    ]

    const gradienteStyle = {
    backgroundImage: `linear-gradient(
        135deg,
        ${amigurumis[actual].colores.join(",")}
    )`,
}
    

    return(
        <section className="w-full overflow-x-hidden flex flex-col pt-10">

            <div className="py-2 "> {/** gradiente-borde shadow-[0_0_20px_#ffffff] */}

                <div className="relative h-[500px] overflow-hidden flex items-center justify-center ">

                    {/**<video
                    className="absolute inset-0 w-full h-full object-cover object-[10%_20%] opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    >
                        <source src="/crochet/video.mp4" type="video/mp4"/>
                    </video>*/}

                    <img className="absolute inset-0 w-full h-full object-cover object-center" src="/Actividades/carrusel/amigurumis-portada.png" alt="" />
{/** 
                    <h2
                    style={{ fontFamily: "var(--title-type)" }}
                    className="z-30 text-8xl"
                    >
                        <LetrasDesign texto="PROYECTOS"/>
                    </h2>
*/}
                    

                </div>

            </div>
            {/**text-[clamp(3.5rem,13vw,5.7rem)] */}
            <div className=" flex justify-center items-center " style={gradienteStyle}>
                {/*
                <h2 className=" gradiente-borde2 recorte bg-clip-text text-transparent text-[clamp(3.0rem,12vw,7.0rem)] leading-none" style={{fontFamily: "var(--title-type)", WebkitTextStroke: "1px white",}}>PROYECTOS ♡</h2>
                <h2 className=" puntadas-negro text-[clamp(3.0rem,12vw,7.0rem)] leading-none" style={{ fontFamily: "var(--title-type)" }}>PROYECTOS ♡</h2>
                */}
                <h2 className=" puntadas-negro text-[clamp(3.0rem,12vw,7.0rem)] leading-none" style={{ fontFamily: "var(--title-type)" }}>PROYECTOS ♡</h2>
                
            </div>


            <div className=" flex flex-col xl:grid xl:grid-cols-[60%_40%]  pt-6 ">

                {/* CARRUSEL */}
                <div className=" flex justify-center ">

                    <div className="p-4 ">

                        <div className="relative  w-[850px] h-[520px] ">

                            <button
                            className="absolute right-55 md:right-10 top-1/2  rounded-full p-4 -translate-y-1/2 shadow-2xl hover:scale-120 transition duration-300  z-30 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={gradienteStyle}
                            onClick={() => setActual(
                                actual+1 >= amigurumis.length
                                ? 0
                                : actual+1
                            )}
                            >

                                <ChevronRight className="w-6 h-6 text-white  "/>

                            </button>


                            <button
                            className="absolute left-56 md:left-3 top-1/2  rounded-full p-4 -translate-y-1/2 shadow-2xl hover:scale-120 transition duration-300 z-30 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={gradienteStyle}
                            onClick={() => setActual(
                                actual-1 == -1 
                                ? amigurumis.length - 1
                                : actual-1
                            )}
                            >

                                <ChevronLeft className="w-6 h-6 text-white "/>

                            </button>

                            



                            {/* IZQUIERDA */}
                            <div className="hidden sm:flex  absolute left-[5%] top-[50%] -translate-y-1/2 z-10 p-[5px] rounded-3xl" style={gradienteStyle}>

                                <div className="bg-black rounded-[20px] shadow-[0_0_20px_var(--header-shadow-color),0_0_10px_black]">

                                    <div className="w-[350px] h-[350px] flex items-center justify-center">

                                        <img className="w-full h-full object-cover opacity-25 rounded-[20px]" src={amigurumis[izquierda].img} alt="" />

                                    </div>

                                </div>

                            </div>


                            
                            {/* DERECHA */}
                            <div
                                className="absolute hidden sm:flex left-[50%] top-[50%] -translate-y-1/2 z-10 p-[5px] rounded-3xl"
                                style={gradienteStyle}
                            >
                                <div className="bg-black rounded-[20px] shadow-[0_0_20px_var(--header-shadow-color),0_0_10px_black]">

                                    <div className="w-[350px] h-[350px] flex items-center justify-center">

                                        <img
                                            className="w-full h-full object-cover opacity-25 rounded-[20px]"
                                            src={amigurumis[derecha].img}
                                            alt=""
                                        />

                                    </div>

                                </div>
                            </div>

                            {/* CENTRO */}
                            <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-20  rounded-full md:hover:scale-120  p-3 " style={gradienteStyle}>

                                <div className="w-[320px] h-[480px] flex items-center justify-center ">

                                    <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={amigurumis[centro].img}
                                    alt=""
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>












                {/* informacion */}
                <div className="px-7 py-4">

                    <div className="relative rounded-3xl shadow-[0_0_10px_var(--header-shadow-up-color)]  w-full h-full">

                        <div className="absolute inset-0 h-full w-full bg-white opacity-30 -z-20 rounded-3xl"/>

                        <div className="flex flex-col   gap-2">

                            {/* titulo */}
                            <div className="flex py-5 justify-center text-5xl text-pink-500">
                                
                                
                                <h2 className=" text-5xl font-bold bg-clip-text text-transparent " 
                                style={{...gradienteStyle, fontFamily: "var(--title-type)", WebkitTextStroke: "1px white", }}>
                                    {amigurumis[actual].titulo} ♡
                                </h2>

                            </div>



                            {/* INFO */}
                            <div className="flex flex-col gap-4 px-7 ">

                                {info.map((dato) => (

                                    <div
                                    key={dato.label}
                                    className="flex items-center gap-12 border-b border-[var(--header-shadow-color)] "
                                    >
                                        <div className="flex items-center gap-2">
                                            {/* icono */}
                                            <div className="w-10 h-10 shrink-0">

                                                <img
                                                className="w-full h-full object-contain"
                                                src={dato.icono}
                                                alt=""
                                                />

                                            </div>


                                            {/* label */}
                                            <p className="min-w-[120px]">
                                                {dato.label}
                                            </p>
                                        </div>


                                        {/* valor */}
                                        <div>
                                            {dato.valor}
                                        </div>

                                    </div>

                                ))}

                            </div>



                            {/* descripcion */}
                            <div className="pt-4 px-5">
                                <h3 className="pl-3 pb-1 text-2xl " style={{ fontFamily: "var(--title-type)" }}>Descripción:</h3>
                                <p className="relative p-2 text-justify border border-[var(--header-shadow-color)] border-1 rounded-3xl ">
                                    
                                    {amigurumis[actual].descripcion}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="relative overflow-hidden">

    {/* LEFT FADE */}
    <div
        className="
            absolute
            left-0
            top-0
            bottom-0
            w-32

            bg-gradient-to-r
            from-background
            to-transparent

            z-10
        "
    />



    {/* RIGHT FADE */}
    <div
        className="
            absolute
            right-0
            top-0
            bottom-0
            w-32

            bg-gradient-to-l
            from-background
            to-transparent

            z-10
        "
    />



    {/* ======================================================
        MARQUEE
    ====================================================== */}

    <div className="flex animate-marquee">

        {[
            {
                name: "Bestia",
                image: "/crochet/render/bestia-render.png",
            },

            {
                name: "Captus",
                image: "/crochet/render/captus-render.png",
            },

            {
                name: "doctora",
                image: "/crochet/render/doctora-render.png",
            },

            {
                name: "flores",
                image: "/crochet/render/flores-render.png",
            },

            {
                name: "pajaros",
                image: "/crochet/render/pajaritos-render.png",
            },

            {
                name: "princesa",
                image: "/crochet/render/princesa-render.png",
            },

            {
                name: "reno",
                image: "/crochet/render/reno-render.png",
            },

            {
                name: "unicornio",
                image: "/crochet/render/unicornio-render.png",
            },

        ].concat([
            {
                name: "Bestia",
                image: "/crochet/render/bestia-render.png",
            },

            {
                name: "Captus",
                image: "/crochet/render/captus-render.png",
            },

            {
                name: "doctora",
                image: "/crochet/render/doctora-render.png",
            },

            {
                name: "flores",
                image: "/crochet/render/flores-render.png",
            },

            {
                name: "pajaros",
                image: "/crochet/render/pajaritos-render.png",
            },

            {
                name: "princesa",
                image: "/crochet/render/princesa-render.png",
            },

            {
                name: "reno",
                image: "/crochet/render/reno-render.png",
            },

            {
                name: "unicornio",
                image: "/crochet/render/unicornio-render.png",
            },
        ]).map((skill, idx) => (

            <div
                key={idx}
                className="
                    flex-shrink-0
                    px-8
                    py-4
                "
            >

                <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 object-contain"
                />

            </div>

        ))}

    </div>

</div>

        </section>
    )
}