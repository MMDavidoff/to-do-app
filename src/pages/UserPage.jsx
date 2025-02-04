import React, { useEffect, useState } from "react";
import Menu from "../components/menu/menu";
import axios from "axios";
import UserCard from "../components/user-card/UserCard";

const UserPage = () => {
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
      <Menu />
      <p>User List</p>
      {users.map((user) => (
        <UserCard key={user.id} user={user}  />
      ))}
    </div>
  );
};

export default UserPage;
