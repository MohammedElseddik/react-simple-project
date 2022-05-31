import React, { useState } from 'react';
import Button from '../button/buttons';
import ErrorModule from '../error modal/ErrorModule';

const AddUser = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setageInput] = useState('');
  const [error, setError] = useState(null);

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
    ) {
      setError({ message: 'you have entered an invalid email or age' });
      return;
    }
    console.log('hello', nameInput, ageInput);
    props.onAddUser(nameInput, ageInput);
    setNameInput('');
    setageInput('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModule errorMessage={error.message} />}
      <form onSubmit={addUserHandler}>
        <label htmlFor="user-name">User Name</label>
        <input
          id="user-name"
          type="text"
          value={nameInput}
          required
          onChange={nameInputHandler}
        />
        <label htmlFor="age">User Name</label>
        <input
          id="age"
          type="number"
          value={ageInput}
          required
          onChange={ageInputHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default AddUser;
