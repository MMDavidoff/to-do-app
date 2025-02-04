import React, { useEffect, useState } from "react";
import Menu from "../components/menu/menu";
import Todo from "../components/todo/Todo";
import axios from "axios";
import UserSelect from "../components/user-select/userSelect";

const ToDoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
    }).then((response) => {
      setTodos(response.data)
    });
  }, []);

  const setUserId = (id) => {
    setTodos([])
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
    }).then((response) => {
      setTodos(response.data)
    });
    console.log(id);
    
  }

  return (
    <div>
      <Menu />
      <UserSelect setUserId={setUserId}/>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} completed={todo.completed}/>
      ))}
      {!todos.length && <p>Loading...</p>}
    </div>
  );
};

export default ToDoPage;
