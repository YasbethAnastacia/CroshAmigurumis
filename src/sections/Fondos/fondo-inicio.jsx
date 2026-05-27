export const FondoInicio= () =>{
    return(
        <>
            <img  src="/Fondos/fondo-inicio.png" alt="fondo-inicio" className="absolute inset-0 w-full h-full  object-cover opacity-30 -z-10 " />
            <div
                className="-z-30 
                absolute inset-0
                bg-gradient-to-b
                from-[#560C70]/70
                via-[#E88ED5]/0
                to-transparent
                "
            />
            <div
                className="-z-20 
                absolute inset-0
                bg-gradient-to-b
                from-[#0f0f0f]/40
                via-[#0f0f0f]/0
                to-[#ffffff]/0
                "
            />
            


        </>
    );
};