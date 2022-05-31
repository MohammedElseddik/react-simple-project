import { useState } from 'react';
import './App.css';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [users, setUsers] = useState([]);

  const usersDataHandler = (name, age, id = uuidv4()) => {
    console.log('I am here', name, age);
    setUsers((perviousState) => {
      return [...perviousState, { id, name, age }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={usersDataHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
