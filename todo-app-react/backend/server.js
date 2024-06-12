const express = require("express");
const app = express();
const cors = require("cors");

let tasks = ["eat", "sleep", "code", "repeat"];

app.use(cors());
app.use(express.json());

// Holt mir alle Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body.task;
  if (newTask) {
    tasks.push(newTask);
    res.status(201).send({ message: "Dein Task wurde erfolgreich hinzugefügt" });
  } else {
    res.status(400).send({message:"Bitte einen Task in form von {'task':'neuer task'} hinzufügen",});
  }
});

app;

app.listen(3002);
