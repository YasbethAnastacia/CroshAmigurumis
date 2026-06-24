export const Contact = () => {
    return (
        <section className="h-[500px] w-full overflow-x-hidden grid grid-cols-[40%_60%] ">
            <div></div>





            <div className="bg-red-500 p-5">
                <div className="bg-blue-500"> {/*contenedor del formulario */}
                    <fieldset>
                        <h2>Envíame mensaje</h2>

                        <div className="grid grid-cols-[50%_50%]">
                            <div className="flex flex-col">
                                <label htmlFor="">Nombre Completo</label>
                                <input type="text" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Correo electronico</label>
                                <input type="text" />
                            </div>
                            
                        </div>
                    </fieldset>
                </div>
            </div>



        </section>
    );
};