import React from "react";

const todoItems = [
  { id: 1, title: "Finish report", description: "Monthly financial report", category: "Work", completed: true },
  { id: 2, title: "Team meeting", description: "Sync with dev team", category: "Work", completed: false },
  { id: 3, title: "Buy groceries", description: "Milk, eggs, and bread", category: "Personal", completed: false },
  { id: 4, title: "Gym", description: "Leg day workout", category: "Personal", completed: true },
  { id: 5, title: "Read book", description: "Finish 'Atomic Habits'", category: "Hobby", completed: false },
  { id: 6, title: "Painting session", description: "Try new watercolor technique", category: "Hobby", completed: true }
];

// Extract unique categories
const categories = [...new Set(todoItems.map(item => item.category))];

const ToDoList = () => {
  return (
    <div>
      <h2>Grouped To-Do List</h2>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {todoItems
            .filter(item => item.category === category)
            .map(item => (
              <p key={item.id}>
                {item.completed ? "✅" : "❌"} <strong>{item.title}</strong>
                <br />
                <em>{item.description}</em>
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;