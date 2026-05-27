export const Navegador = () => {

return (

    <header className="absolute top-0 left-0 w-full flex justify-between pt-5 z-20 border-2 border-red-500 items-center text-[var(--header-text-color)]">{/**el pt-10 es por mientras */}
        <p className="ml-7 font-[var(--header-type-letter)] text-2xl">SC</p>

        <div className="relative flex items-center  gap-25  rounded-full  px-25  shadow-[0_0_10px_var(--header-shadow-color)] py-2"> 
            <div className="absolute inset-0  rounded-full shadow-[0_0_10px_var(--header-shadow-up-color)] pointer-events-none"/>
            
                <a className=" " href="" >Inicio</a>
                <a className=" " href="" >Sobre mí</a>
                <a className=" " href="" >Proyectos</a>
        </div>

        <div className=" mr-7 rounded-full shadow-[0_0_25px_var(--header-shadow-color)]">

            <a className=" block py-2 px-6 rounded-full shadow-[0_0_20px_var(--header-shadow-up-color)]  bg-[var(--background)]"href="">Contactame ♡</a>

        </div>
        

    </header>

)

}