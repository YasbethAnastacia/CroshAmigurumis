export const DecoracionI = () => {

    return (

        <>
        {/* PEGATINA 1 - ESTAMPA */}
        <img
            className="hidden xl:flex absolute -top-10 left-27 -rotate-1 w-60 z-10"
            src="/Actividades/decoracion/estampa.png"
            alt=""
        />

        {/* PEGATINA 2 - RAMA */}
        <img 
            className="absolute -bottom-12 -left-10 w-40 z-10 -rotate-40"
            src="/Actividades/decoracion/Rama.png"
            alt=""
        />

        {/* PEGATINA 2 - RAMA */}
        <img
            style={{ transform: "scaleX(-1)" }}
            className="absolute bottom-4 -right-14 w-40 z-10 rotate-25"
            src="/Actividades/decoracion/Rama.png"
            alt=""
        />



        </>

    )

}