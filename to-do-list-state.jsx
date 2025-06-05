import React, { useState } from "react";

const ToDoList = () => {
  // State to store input value and list of tasks
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add task to the list
  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, task]); // Add task to array
    setTask(""); // Clear input field
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      <h2>Simple To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
