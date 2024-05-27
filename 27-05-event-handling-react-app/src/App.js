import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  const [yourName, setYourName] = useState("Fremder")
  function handleClick() {
    console.log("geklickt");
  }

  function handleOnMouseLeave() {
    setColor("white")
  }
  function handleOnMouseOver(){
    setColor("black")
  }

  function handleOnChange(event){
   setYourName(event.target.value)

  }
  return (
    <div className="container">
      <h1>Hallo {yourName}</h1>
      <input onChange={handleOnChange} placeholder="Wie heißt du?"></input>
      
      
      <button
        style={{ backgroundColor: color }}
        onMouseOver={handleOnMouseOver}
        onMouseLeave={handleOnMouseLeave}
        onClick={handleClick}
      >
        Bestätigen
      </button>
    </div>
  );
}

export default App;
