import React from "react";
import classes from "./Comment.module.css";
const Comment = ({ comment }) => {
  const { email, name, body } = comment
  return(
  <div className={classes.comment}>
    <h3>{email}</h3>
    <p>{name}</p>
    <p>{body}</p>
  </div>
  )
};

export default Comment;
