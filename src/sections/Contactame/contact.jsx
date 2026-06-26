import {
    User
} from "lucide-react";

export const Contact = () => {
    return (
        <section className="h-[500px] w-full overflow-x-hidden grid grid-cols-2 ">
            <div className="">
                <h2 className=" puntadas-negro text-[clamp(3.5rem,13vw,5.7rem)] leading-none" style={{ fontFamily: "var(--title-type)" }}>CONTÁCTAME ♡</h2>
                <p>¿Tienes alguna idea, propuesta o quieres colaborar conmigo? ¡Me encantaría leerte! Completa el formulario y te responderé pronto.</p>
                <form className="flex flex-col gap-5 border border-2 p-5 m-15 rounded-2xl">
                    <div className="flex flex-row gap-3 text-[var(--header-shadow-color)]">
                        <div className="flex w-12 h-12 rounded-full bg-white justify-center items-center">
                                <User className=" w-7 h-7"/>
                        </div>
                        <InputContacto texto="Nombre completo " />
                    </div>
                    <div className="flex flex-row gap-3 text-[var(--header-shadow-color)]">
                        <div className="flex w-12 h-12 rounded-full bg-white justify-center items-center">
                                <User className=" w-7 h-7"/>
                        </div>
                        <InputContacto texto="Nombre completo " />
                    </div>
                    <div className="flex flex-row gap-3 text-[var(--header-shadow-color)]">
                        <div className="flex w-12 h-12 rounded-full bg-white justify-center items-center">
                                <User className=" w-7 h-7"/>
                        </div>
                        <InputContacto texto="Nombre completo " />
                    </div>
                    <div className="flex flex-row gap-3 text-[var(--header-shadow-color)]">
                        <div className="flex w-12 h-12 rounded-full bg-white justify-center items-center">
                                <User className=" w-7 h-7"/>
                        </div>
                        <InputContacto texto="Nombre completo " />
                    </div>
                </form>
            </div>

            <div className="">

            </div>







        </section>
    );
};

const InputContacto = ({ texto }) => {

    return (
        <input className="bg-white px-5 rounded-xl w-full" type="text" placeholder={texto} />
    );

};