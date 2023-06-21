import React from "react";

export default function Todolist({ todos, hapusTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, data) => (
          <div className="list-data" key={data}>
            {todo}
            <button onClick={() => hapusTodo(todo)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
