import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./components/Listing";
import houses from "./houses"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="container" style={{ color: "red" }} >

    {/* key muss vergeben, wiel wir sonst eine Fehlermeldung bekommen,
    da die Listings für React nicht eindeutig identifizierbar sind */}
    {houses.map((house, index) => 
      <Listing key={index} Name={house.Name} Preis={house.Preis} imageURL={house.img}></Listing>
    )}
    
    </div>
  </>
);
