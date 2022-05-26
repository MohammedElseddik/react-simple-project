import React, { useState } from 'react';
import Button from '../button/buttons';

const AddUser = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setageInput] = useState('');

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const ageInputHandler = (event) => {
    setageInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(parseInt(ageInput));
    if (
      nameInput.trim().length === 0 ||
      ageInput.trim().length === 0 ||
      parseInt(ageInput) < 1
    )
      return;
    console.log('hello', nameInput, ageInput);
    setNameInput('');
    setageInput('');
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="user-name">User Name</label>
      <input id="user-name" type="text" required onChange={nameInputHandler} />
      <label htmlFor="age">User Name</label>
      <input id="age" type="number" required onChange={ageInputHandler} />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUser;
