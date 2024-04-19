import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "./mockdata";

const TaskAdd = ({ onAdd }) => {
  const [inputData, setInputData] = useState("");

  const addItem = () => {
    if (inputData.trim() !== "") {
      onAdd(inputData);
      setInputData("");
    }
  };

  return (
    <div className="row">
      <input
        type="text"
        id="input-box"
        placeholder="✍️ Add your text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button className="btn-add" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

const TaskShow = ({ items, onDelete }) => {
  return (
    <div className="showItems">
      {items.map((elem, index) => (
        <div className="eachItem" key={index}>
          <h3 className="task">{elem}</h3>
          <button className="delete" onClick={() => onDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List <img src={LOGO_URL} alt="logo" />
        </h2>
        <TaskAdd onAdd={handleAddItem} />
        <TaskShow items={items} onDelete={handleDeleteItem} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
