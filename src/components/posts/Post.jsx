import React from 'react';
import classes from "./Post.module.css"
import { Link } from 'react-router-dom';

const Post = ({ title, body , id}) => {
  return (
    <Link className={classes.link}  to={`/post/${id}`}>
    <div className={classes.post}>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.body}>{body}</p>
    </div>
    </Link>
      


      

  );
}

export default Post;
