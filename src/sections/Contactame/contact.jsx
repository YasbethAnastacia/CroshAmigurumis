import {
    User,
    Mail,
    MessageSquareMore,
    Tag,
    Phone,
    Send,
} from "lucide-react";

const formulario = [
    {
        id: 1,
        icono: <User />,
        texto: "Nombre completo",
        name: "nombre",
        type: "text",
    },
    {
        id: 2,
        icono: <Mail />,
        texto: "Correo electrónico",
        name: "email",
        type: "email",
    },
    {
        id: 3,
        icono: <Tag />,
        texto: "Asunto",
        name: "asunto",
        type: "text",
    },
    {
        id: 5,
        icono: <Phone />,
        texto: "Número de teléfono",
        name: "telefono",
        type: "tel",
    },
];

export const Contact = () => {
    return (
        <section className="flex flex-col items-center gap-10">

            {/**
             * <h2 className="[text-shadow:0_4px_10px_rgba(0,0,0,0.05)] border-y border-white py-2 gradiente-borde2 recorte bg-clip-text text-transparent text-[clamp(3.0rem,12vw,7.0rem)] leading-none" style={{fontFamily: "var(--title-type)", WebkitTextStroke: "1px white",}}>CONTÁCTAME ♡</h2>
             *
             * <h2 className=" border-y border-white py-2 puntadas-negro text-[clamp(3.0rem,12vw,7.0rem)] leading-none" style={{ fontFamily: "var(--title-type)" }}>CONTACTAME ♡</h2>
             */}

            <h2
                className="[text-shadow:0_4px_10px_rgba(0,0,0,0.05)] border-y border-white py-2 gradiente-borde2 recorte bg-clip-text text-transparent text-[clamp(3.0rem,12vw,7.0rem)] leading-none"
                style={{
                    fontFamily: "var(--title-type)",
                    WebkitTextStroke: "1px white",
                }}
            >
                CONTÁCTAME ♡
            </h2>

            <div className="flex flex-col w-full overflow-x-hidden lg:grid lg:grid-cols-2">

                <div className="flex flex-col items-center px-10 pb-15 gap-8">

                    <p className="text-justify lg:text-lg">
                        ¿Tienes alguna idea, propuesta o quieres colaborar conmigo? 
                        ¡Me encantaría leerte! <br/>Completa el formulario y te responderé
                        pronto.
                    </p>

                    {/** <form action="https://formsubmit.co/TU_CORREO@gmail.com" method="POST"> */}

                    <form action="https://formsubmit.co/anivazquez7@gmail.com" method="POST" className="w-full flex flex-col gap-5">
                        <input type="hidden" name="_subject" value="Nuevo mensaje desde mi portafolio 💖" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="w-full flex flex-col gap-5 rounded-2xl p-5 shadow-[0_0px_10px_var(--header-shadow-up-color)]">

                            {/**
                             * focus:outline-none focus:ring-2 focus:ring-pink-400
                             *
                             * o
                             *
                             * border border-pink-200 focus:border-pink-400 focus:outline-none
                             */}


                            {formulario.map((form) => (
                                <div
                                    className="flex flex-row gap-3 text-[var(--header-shadow-color)]"
                                    key={form.id}
                                >
                                    <div className="flex w-10 h-10 rounded-full bg-white justify-center items-center">
                                        {form.icono}
                                    </div>

                                    <input
                                        className="bg-white px-5 rounded-xl w-full border-2 border-pink-200
                                        focus:border-pink-400 focus:outline-none
                                        transition-all duration-300 bg-white
                                        "
                                        type={form.type}
                                        name={form.name}
                                        placeholder={form.texto}
                                        required
                                    />
                                </div>
                            ))}

                            <div className="flex flex-row gap-3 text-[var(--header-shadow-color)]">

                                <div className="flex w-10 h-10 rounded-full bg-white justify-center items-center">
                                    <MessageSquareMore />
                                </div>

                                <textarea
                                    name="mensaje"
                                    required
                                    className="
                                        w-full  border-2 border-pink-200
                                        focus:border-pink-400 focus:outline-none
                                        transition-all duration-300 bg-white
                                        px-5 py-3 rounded-xl h-50
                                    "
                                    placeholder="Escribe tu mensaje..."
                                ></textarea>

                            </div>

                        </div>

                        <div className="flex justify-center">

                            <button
                                type="submit"
                                className="flex gap-3 gradiente-borde2 text-white rounded-full px-20 py-2 [text-shadow:0_4px_10px_rgba(0,0,0,0.5)] hover:scale-120 items-center"
                            >
                                <p>Enviar mensaje</p>

                                <Send className="hidden sm:flex" />
                            </button>

                        </div>

                    </form>

                </div>

                <div className="hidden lg:flex w-full">
                    <img
                        className="w-full object-contain"
                        src="/Fondos/formulario.png"
                        alt=""
                    />
                </div>

            </div>

        </section>
    );
};