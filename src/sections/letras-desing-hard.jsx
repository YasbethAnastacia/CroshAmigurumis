export const LetrasDesignHard = ({ texto }) => {

    const colores = [
        "#FF4FA3", // hot pink suave
        "#FF66B2", // bubblegum
        "#FF85C2", // rosa algodón
        "#FF5DA2", // rosa intenso
        "#E75480", // dark pink elegante
        "#FF9ECF", // pastel fuerte
        "#D9468D", // magenta rosado
        "#FF3D81", // pink vibrante
    ];

    const letras = texto.split("").map((char, index) => ({
        char,
        color: colores[index % colores.length]
    }));

    return (
        <>
            {letras.map((letra, index) => (

                <span
                    key={index}
                    style={{
                        color: letra.color
                    }}
                >
                    {letra.char}
                </span>

            ))}
        </>
    );
};