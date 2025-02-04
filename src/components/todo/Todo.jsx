import React from "react";
import classes from "./Todo.module.css";

const Todo = ({ title, completed }) => {
  return (
    <div style={{
      backgroundColor :  completed? "green" : ""
    }} className={classes.todo}>
      <p>{title}  </p>
    </div>
  );
};

export default Todo;
