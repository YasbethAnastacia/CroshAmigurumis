import {
    Store,
    Menu,
    X,
} from "lucide-react";



import { useEffect, useState } from "react";

export const Navegador = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const [fijo, setFijo] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setFijo(window.scrollY >= 500);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <header
            className={`
                left-0 w-full px-5
                transition-all duration-300
                ${
                    fijo
                        ? "fixed top-0 py-2 z-70 gradiente-borde2 backdrop-blur-md text-pink-400"
                        : "absolute top-0 pt-4 z-60 text-[var(--header-text-color)]"
                }
            `}
        >
            <div className=" max-w-[1700px] flex justify-between">


                {/* Logo */}
                <div className="flex  justify-self-start  w-48 ">
                        <p className={`font-[var(--header-type-letter)] text-2xl flex items-center ${fijo ? "w-fit bg-white p-1 rounded-full " : "p-2 w-fit shadow-[0_0_10px_var(--header-shadow-up-color)] bg-[var(--background)] p-1 rounded-full" }`}>
                            <Store className={` ${fijo ? "h-7  w-7" : "h-8  w-8" }`} />
                        </p>
                </div>


            

                <button className={`flex lg:hidden  ${fijo ? " w-fit bg-white p-1 rounded-full" : "p-2 w-fit shadow-[0_0_10px_var(--header-shadow-up-color)] bg-[var(--background)] p-1 rounded-full" } `}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    {
                        menuAbierto
                        ? <X className={`w-8 h-8 ${fijo ? " w-fit bg-white p-1 rounded-full" : "p-2 w-fit shadow-[0_0_10px_var(--header-shadow-up-color)] bg-[var(--background)] p-1 rounded-full" }`} />
                        : <Menu className={`w-8 h-8 ${fijo ? " w-fit bg-white p-1 rounded-full" : "p-2 w-fit shadow-[0_0_10px_var(--header-shadow-up-color)] bg-[var(--background)] p-1 rounded-full" }`} />
                    }
                </button>

                {/* Menú */}
                <div className="justify-self-center  hidden lg:flex ">
                    <div className={`relative flex items-center text-sm lg:text-base rounded-full gap-5 lg:gap-10 px-5 lg:px-15 py-2 whitespace-nowrap ${fijo ? "bg-white" : ""}`}>

                        <div
                            className={`absolute inset-0 rounded-full pointer-events-none hover:scale-110 ${
                                fijo ? "" : "shadow-[0_0_10px_var(--header-shadow-up-color)] bg-[var(--background)] "
                            }`}
                        />

                        <a className="whitespace-nowrap z-20"href="">INICIO</a>
                        <a className="whitespace-nowrap z-20"href="">SOBRE MÍ</a>
                        <a className="whitespace-nowrap z-20"href="">PROYECTOS</a>
                        

                    </div>
                </div>

                {/* Botón shadow-[0_0_20px_var(--header-shadow-up-color)]*/}
                <div className="justify-self-end  w-48 hidden lg:flex ">
                    <a
                        className={`block flex items-center px-6 rounded-full ${
                            fijo
                                ? "bg-white " 
                                : "shadow-[0_0_10px_var(--header-shadow-up-color)] bg-[var(--background)]"
                        }`}
                        href=""
                    >
                        CONTACTAME ♡
                    </a>
                </div>

            </div>
        </header>
    );
};