import "../styles/Listing.css";
import Timer from "./Timer"

function Listing({ Name, Preis, imageURL }) {
  return (
    <div>
      
      <Timer style={{color:"red"}}/>
      <img
        src={imageURL}
        alt="alternativtext"
        style={{ width: "300px", height: "auto" }}
      />
      <h2>Name: {Name}s Haus</h2>
      <h2>Preis: ${Preis}</h2>
      <div style={{ border: "10px solid grey" }} />
      <div style={{ border: "10px solid white" }} />
    </div>
  );
}

export default Listing;
