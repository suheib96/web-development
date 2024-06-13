import React, { useEffect, useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // useEffect(() => {}, []); -> Grundgerüst von useEffect
  function fetchAllData() {
    fetch("http://localhost:3002/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Fehler beim API-Aufruf", error));
  }
  useEffect(() => {
    fetchAllData();
  }, []);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  async function addTask() {
    if (newTask !== "") {
      await fetch("http://localhost:3002/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });
      fetchAllData();
      setNewTask("")
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  async function deleteTask(index) {
    await fetch(`http://localhost:3002/tasks/${index}`,{
      method: "DELETE"
    })
    fetchAllData()
    // const updatedTasks = tasks.filter((task, i) => i !== index);
    // const updatedTasks = tasks.filter((_, i) => i !== index); // quasi das gleiche, nur anders geschrieben
    // setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <div>
        <input
          type="text"
          placeholder="enter new task"
          className="input-field"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="up-button" onClick={() => moveTaskUp(index)}>
                UP
              </button>
              <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                DOWN
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;
