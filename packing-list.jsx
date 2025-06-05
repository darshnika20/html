import React, { useState } from "react";

const PackingList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Toothbrush", isPacked: false }
  ]);
  const [newItem, setNewItem] = useState("");

  // Add new item to list
  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { id: Date.now(), name: newItem, isPacked: false }]);
    setNewItem("");
  };

  // Toggle packed/unpacked status
  const togglePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  // Delete item from list
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      <h2>Packing List</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add an item..."
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isPacked ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => togglePacked(item.id)}
            >
              {item.isPacked ? "✔️" : "☐"} {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
