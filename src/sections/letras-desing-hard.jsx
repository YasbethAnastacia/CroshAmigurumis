export const LetrasDesignHard = ({ texto }) => {

    const colores = [
        "text-pink-500",
        "text-purple-500",
        "text-blue-500",
        "text-green-500",
        "text-yellow-500",
        "text-rose-500",
        "text-cyan-500",
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