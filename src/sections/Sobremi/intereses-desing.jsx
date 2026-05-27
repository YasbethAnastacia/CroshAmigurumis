export const Intereses=() =>{

    const letras = [
    {char:"M",color:"text-pink-200"},
    {char:"I",color:"text-purple-200"},
    {char:"S",color:"text-blue-200"},
    {char:"",color:"text-green-200"},
    {char:"I",color:"text-yellow-200"},
    {char:"N",color:"text-rose-200"},
    {char:"T",color:"text-cyan-200"},
    {char:"E",color:"text-pink-200"},
    {char:"R",color:"text-purple-200"},
    {char:"E",color:"text-blue-200"},
    {char:"S",color:"text-green-200"},
    {char:"E",color:"text-yellow-200"},
    {char:"S",color:"text-rose-200"},
    
    ];

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





