import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-todo-list")
      .then((response) => setTodoList(response.data));
  }, []);

  const handleAddTodo = () => {
    axios
      .post("http://localhost:3001/add-todo", { item: inputText })
      .then((response) => setTodoList(response.data));
    setInputText("");
  };
  const handleCheckboxTodo = (index) => {
    axios
      .post("http://localhost:3001/checkbox-todo", { index })
      .then((response) => setTodoList(response.data));
  };
  const handleDeleteTodo = (index) => {
    axios
      .delete("http://localhost:3001/delete-todo", { index })
      .then((response) => setTodoList(response.data));
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                handleCheckboxTodo(index);
              }}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

// console.log(Country[].countries);

// let data = Country: [{
//   Countries: [{
//     India: [{
//     States: [{
//         Delhi: [
//           "old delhi",
//           "laal kila"
//         ],
//         Rajasthan: [
//           "pink city",
//           "pink city 2"
//         ]
//       }]
//     }],
//     USA: [{
//     States: [{
//         New York: [
//           "old delhi",
//           "laal kila"
//         ],
//         New York uu: [
//           "pink city",
//           "pink city 2"
//         ]
//       }]
//     }],
//   }]
// }]