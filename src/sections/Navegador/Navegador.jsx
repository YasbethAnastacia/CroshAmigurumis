import {
    Store,
} from "lucide-react";



import { useEffect, useState } from "react";

export const Navegador = () => {

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
                        ? "fixed top-0 py-4 z-50 gradiente-borde2 backdrop-blur-md text-[var(--font-primary-color)]"
                        : "absolute top-0 pt-5 z-20 text-[var(--header-text-color)]"
                }
            `}
        >
            <div className="grid grid-cols-3 items-center">

                {/* Logo */}
                <div className="justify-self-start">
                    <p className="font-[var(--header-type-letter)] text-2xl">
                        <Store className="h-10  w-10 " />
                    </p>
                </div>

                {/* Menú */}
                <div className="justify-self-center">
                    <div className={`relative flex items-center gap-15 rounded-full px-15 py-2 ${fijo ? "bg-white" : ""}`}>

                        <div
                            className={`absolute inset-0 rounded-full pointer-events-none ${
                                fijo ? "" : "border-b-3"
                            }`}
                        />

                        <a href="">INICIO</a>
                        <a href="">SOBRE MÍ</a>
                        <a href="">PROYECTOS</a>

                    </div>
                </div>

                {/* Botón */}
                <div className="justify-self-end">
                    <a
                        className={`block py-2 px-6 rounded-full ${
                            fijo
                                ? "bg-white"
                                : "shadow-[0_0_20px_var(--header-shadow-up-color)] bg-[var(--background)]"
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