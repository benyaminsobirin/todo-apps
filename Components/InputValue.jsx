import React, { useState } from "react";
import "../src/App.css";

export default function InputValue({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const tambahTodo = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <h1>Tugas Day27 Mas Dito</h1>
      <input
        className="input-box"
        type="text"
        value={inputValue}
        onChange={inputChange}
      />
      <button className="save-button" onClick={tambahTodo}>
        Simpan
      </button>
    </div>
  );
}
