import React, { useState } from "react";
import Todolist from "./Todolist";
import InputValue from "./inputValue";
import "../src/App.css";

export default function TodoApps() {
  const [inputTodo, setInputTodo] = useState([]);

  const tambahTodo = (todo) => {
    setInputTodo([...inputTodo, todo]);
  };

  const deleteTodo = (data) => {
    const updateTodos = inputTodo.filter(
      (existingTodo) => existingTodo !== data
    );
    setInputTodo(updateTodos);
  };
  return (
    <div>
      <InputValue addTodo={tambahTodo} />
      <Todolist todos={inputTodo} hapusTodo={deleteTodo} />
    </div>
  );
}
