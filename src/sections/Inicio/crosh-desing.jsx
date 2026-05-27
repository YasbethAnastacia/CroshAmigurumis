export const CroshDesign=() =>{

    const letras = [
    {char:"C",color:"text-pink-200"},
    {char:"R",color:"text-purple-200"},
    {char:"O",color:"text-blue-200"},
    {char:"S",color:"text-green-200"},
    {char:"H",color:"text-yellow-200"},
    {char:"-",color:"text-rose-200"},
    {char:"A",color:"text-cyan-200"},
    {char:"M",color:"text-pink-200"},
    {char:"I",color:"text-purple-200"},
    {char:"G",color:"text-blue-200"},
    {char:"U",color:"text-green-200"},
    {char:"R",color:"text-yellow-200"},
    {char:"U",color:"text-rose-200"},
    {char:"M",color:"text-cyan-200"},
    {char:"I",color:"text-pink-200"},
    {char:"S",color:"text-purple-200"},
    ];

    return(
        <>

            {letras.map((letra,index)=>(

                <span
                key={index}
                className={`${letra.color} animate-pulse`}
                >

                    {letra.char}

                </span>

            ))}

        </>

                )
}





