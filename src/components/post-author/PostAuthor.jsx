import React, { useEffect, useState } from "react";
import classes from "./PostAuthor.module.css";
import axios from "axios";

const PostAuthor = ({ id }) => {
  const [name, setName] = useState("Name is not defined");
  useEffect(() => {
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    }).then((response) => {
      setName(response.data.name);
    });
  }, []);

  return (
    <div className={classes.info}>
      <p>Author: {name}</p>
    </div>
  );
};

export default PostAuthor;
