import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./components/Listing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div style={{ color: "red" }} />
    <Listing Name={"Christina"} Preis={"30"} />
    <Listing Name={"Holger"} Preis={"89"}></Listing>
    <Listing Name={"Jürgen"} Preis={"18"} />
    <Listing Name={"Emma"} Preis={"68"} />
  </>
);
