import React, { useEffect, useState } from "react";
import classes from "./UserSelect.module.css";
import axios from "axios";

const UserSelect = ({ setUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <select className={classes.select} onChange={(e) => setUserId(e.target.value)} name="users">
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
