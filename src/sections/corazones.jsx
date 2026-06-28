export const Corazones = ()=>{

    return(
        <>
        {/*animationName: "flotar",
                            animationDuration: `${Math.random() * 40 + 10}s`,
                            animationDelay: `${Math.random() * 30}s`,
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            
                            
                            fontSize: `${Math.random() * 10 + 20}px`,*/}
                    <div className="absolute inset-0 ">
                    {[...Array(30)].map((_,i) =>(
                        <p key={i} className="absolute  opacity-50 pointer-events-none z-index" 
                        style={{
                            fontSize: `${Math.random() * 40 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `flotar 4s ease-in-out infinite`,
                            animationDelay: `${(i + 1) * 100}ms`,
                        }}>
                            🤍
                        </p>
                    ))}


</div>
                    

                    

        
        </>
    )
}