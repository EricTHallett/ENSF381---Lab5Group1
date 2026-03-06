import logo from './logo.svg';
import './App.css';
import Constrols from './Controls.js';
import UserList from './UserList.js';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  return (
  <div>
    <h1>ENSF-381: Full Stack Web Development</h1>
    <p>React Components</p>
    <p>{currentYear}</p>
    <p>{isLoggedIn ? "Welcome Back!" : "Please log in."}</p>
    <Constrols />
    <UserList />
  </div>

  );
}

export default App;
