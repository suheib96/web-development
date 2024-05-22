import "../styles/Listing.css";
import Timer from "./Timer"

function Listing({ Name, Preis }) {
  return (
    <div>
      <Timer style={{color:"red"}}/>
      <img
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
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
