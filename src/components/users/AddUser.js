import React from 'react';
import Button from '../button/buttons';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="user-name">User Name</label>
      <input id="user-name" type="text" required />
      <label htmlFor="age">User Name</label>
      <input id="age" type="text" required />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
