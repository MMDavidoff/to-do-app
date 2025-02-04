import React from 'react';
import classes from  "./UserCard.module.css"

const UserCard = ({user}) => {
  const {name , phone , email} = user 
  return (
    <div className={classes.userCard}>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
