import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [userId, setUserId] = useState("");

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        setTasks(response.data.todos);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add new task
  const addTask = async () => {
    if (!newTask.trim() || !userId.trim()) return;
    const taskData = { todo: newTask, completed: false, userId: parseInt(userId) };

    try {
      const response = await axios.post("https://dummyjson.com/todos/add", taskData);
      setTasks([response.data, ...tasks]);
      setNewTask("");
      setUserId("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Toggle task completion
  const toggleTask = async (id) => {
    try {
      const updatedTask = tasks.find((task) => task.id === id);
      const response = await axios.put(`https://dummyjson.com/todos/${id}`, {
        completed: !updatedTask.completed,
      });
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/todos/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      <h2>Task Manager</h2>

      {/* Add New Task */}
      <input type="text" placeholder="Task Title" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <input type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      {/* Display Tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            {task.completed ? <s>{task.todo}</s> : task.todo} (User {task.userId})
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
