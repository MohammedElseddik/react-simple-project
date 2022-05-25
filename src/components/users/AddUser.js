import React from 'react';

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
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
