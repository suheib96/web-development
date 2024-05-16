const express = require("express");
const app = express();
const PORT = 3000;

const fs = require("fs");

// das hier wird benötigt um das Attribut req.body zu befüllen
//Ansonsten wäre req.body undefined
app.use(express.urlencoded({ extended: true }));

// Middleware
// app.use((req, res, next) => {
//   console.log(req.method);
//   console.log("Hallo aus der Middleware");
//   next();
// });

app.get("/", (req, res) => {
  console.log("Hallo aus der Get Funktion");
  // __dirname ist eine globale Variabel die den aktuellen Ordner als Wert beinhaltet
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  // let meineListe = []
  // meineListe.push(req.body.name)
  // meineListe.push(req.body.pet)
  // meineListe.push(req.body.street)
  //  fs.writeFile("names.txt", meineListe.join("\n"), (err) => {

  //  })

  console.log(req.body);

  res.send(201);
});

app.listen(PORT, () => {
  console.log(`Der Server wurde gestartet auf Port: ${PORT}`);
});
