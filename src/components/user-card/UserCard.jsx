import React, { useState } from "react";
import classes from "./UserCard.module.css";

const UserCard = ({ user }) => {
  const { name, phone, email, address } = user;
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
        <div className={classes.address}>
          <p>.::Address::.</p>
          <p> City: {address.city}</p>
          <p> Street: {address.street}</p>
          <p> Suite: {address.suite}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
