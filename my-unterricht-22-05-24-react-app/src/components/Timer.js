function Timer({style}){
    return(
        <>
            <div style={style}>{"Nurnoch " + Math.floor(Math.random()*1000) + " Sekunden verfügbar"}</div>
        </>
    );
}

export default Timer;