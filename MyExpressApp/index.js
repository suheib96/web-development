const express = require("express");
const app = express();

// CRUD
// C = CREATE -> Erstellen   ->> POST
// R = READ -> Lesen   ->> GET
// U = UPDATE -> Daten updaten ->> PUT
// D = DELETE -> Löschen ->> DELETE

app.get("/", (req, res) => {
  res.send(200);
});

app.post("/user", (req, res) => {
  res.send(201);
});

app.listen(3000);
