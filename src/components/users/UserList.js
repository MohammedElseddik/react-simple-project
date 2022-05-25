import React from 'react';

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
