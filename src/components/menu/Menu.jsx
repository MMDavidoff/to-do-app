import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./Menu.module.css"

const Menu = () => {
  return (
    <div className={classes.menuBar}>
      <Link className={classes.link} to={"/"}>Home</Link> 
      <Link className={classes.link} to={"/todo"}>Todo</Link>
      <Link className={classes.link} to={"/users"}>Users</Link>
      <Link className={classes.link} to={"/posts"}>Posts</Link>
      
    </div>
  );
}

export default Menu;
