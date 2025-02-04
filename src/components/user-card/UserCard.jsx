import React, { useState } from "react";
import classes from "./UserCard.module.css";

const UserCard = ({ user }) => {
  const { name, phone, email } = user;
  const [showAddress, setShowAddress] = useState(false);
  const toggleAddress = () => {
    setShowAddress(!showAddress);
  };
  return (
    <div className={classes.userCard}>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
      <button className={classes.addressBtn} onClick={toggleAddress}>
        {showAddress ? "Hide address" : "Show address"}
      </button>
      {showAddress && (
        <div>
          <p>address</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
