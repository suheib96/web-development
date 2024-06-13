const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs")

app.use(cors());
app.use(express.json());

function getTasks(){
    const data =fs.readFileSync("./tasks.json")
    return JSON.parse(data)
}

function saveTasks(tasks){
    fs.writeFileSync("./tasks.json",JSON.stringify(tasks,null,2))
}

// Holt mir alle Tasks
app.get("/tasks", (req, res) => {
    let tasks = getTasks()
  res.json(tasks);
});

// Holt mir ein bestimmtes Element aus der Tasks Liste
app.get("/tasks/:index",(req,res) => {
    let tasks = getTasks()
    const index = parseInt(req.params.index)
    const task = tasks.find((t,i) => i === index)
    res.json(task)
})

app.post("/tasks", (req, res) => {
    let tasks = getTasks()
  const newTask = req.body.task;
  if (newTask) {
    tasks.push(newTask);
    res
      .status(201)
      .send({ message: "Dein Task wurde erfolgreich hinzugefügt" });
    saveTasks(tasks)
  } else {
    res.status(400).send({
      message: "Bitte einen Task in form von {'task':'neuer task'} hinzufügen",
    });
  }
});

// Move task up
app.post('/tasks/up', (req, res) => {
    const tasks = getTasks()
  const { index } = req.body;
  if (index > 0 && index < tasks.length) {
    [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
    saveTasks(tasks)
    res.json({ message: 'Task erfolgreich nach oben verschoben' });
  } else {
    res.status(400).json({ message: 'Invalider Index' });
  }
});

// Move task down
app.post('/tasks/down', (req, res) => {
   const tasks = getTasks()
  const { index } = req.body;
  if (index >= 0 && index < tasks.length - 1) {
    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    saveTasks(tasks)
    res.json({ message: 'Task erfolgreich nach unten verschoben' });
  } else {
    res.status(400).json({ message: 'Invalider Index' });
  }
});








app.delete("/tasks/:index", (req, res) => {
    let tasks = getTasks()
  // parseInt ist hier notwendig, da die params als String gespeichert werden
  const index = parseInt(req.params.index);
  if (index >= 0 && index < tasks.length) {
    tasks = tasks.filter((task, i) => i !== index);
    res.json({ message: "Task wurde erfolgreich gelöscht" });
    saveTasks(tasks)
  }else {
    res.status(400).json({message: "Bitte einen gültigen Index angeben"})
  }
});

app.listen(3002);
