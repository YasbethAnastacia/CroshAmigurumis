export const LetrasDesign = ({ texto }) => {

    const colores = [
        "text-pink-200",
        "text-purple-200",
        "text-blue-200",
        "text-green-200",
        "text-yellow-200",
        "text-rose-200",
        "text-cyan-200",
    ];

    const letras = texto.split("").map((char,index)=>({

        char,

        color: colores[index % colores.length]

    }));


    return(
        <>
            {letras.map((letra,index)=>(

                <span
                    key={index}
                    className={`${letra.color} `}
                >
                    {letra.char}
                </span>

            ))}
        </>
    )

}