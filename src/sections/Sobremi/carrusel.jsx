const activities = [

    

    {
        title: "Viajar por el mundo",
        image: "/Actividades/carrusel/paris.png",
    },

    {
        title: "Ver a mi hermano ",
        image: "/Actividades/carrusel/hermano.png",
    },

    {
        title: "Estar con mi novio",
        image: "/Actividades/carrusel/novio.png",
    },

    {
        title: "Practicar taekwondo",
        image: "/Actividades/carrusel/karate.png",
    },

    {
        title: "Tomar vuelos",
        image: "/Actividades/carrusel/aeropuerto.png",
    },

    {
        title: "Nuevas actividades",
        image: "/Actividades/carrusel/arco.png",
    },

    {
        title: "Realizar pinturas",
        image: "/Actividades/carrusel/pinturas.png",
    },

    {
        title: "Ver a mis amigos",
        image: "/Actividades/carrusel/bestamiga.png",
    },

]

export const Carrusel = ({ emblaRef }) => {

    return (

        <div className="relative px-6 py-15 rounded-3xl overflow-hidden " ref={emblaRef}>
            

            <div className="flex items-center gap-5">

                {activities.map((activity, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-lg px-[10px] py-2 flex-[0_0_220px] flex flex-col items-center shadow-[5px_5px_30px_#403434]"
                        
                    >

                        <img
                            className="w-50"
                            src={activity.image}
                            alt=""
                        />

                        <p className="text-center rounded-md">
                            {activity.title}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    )

}