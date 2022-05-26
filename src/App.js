import './App.css';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList
        users={[
          { id: uuidv4(), name: 'Sami', age: '34' },
          { id: uuidv4(), name: 'Josh', age: '33' },
          { id: uuidv4(), name: 'Drake', age: '32' },
        ]}
      />
    </div>
  );
}

export default App;
