import logo from './logo.svg';
import './App.css';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
