import logo from './logo.svg';
import './App.css';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  
  return (
    <div>
        <h1>ENSF-381: Full Stack Web Development</h1>
        <p>React Components</p>
        <p>{currentYear}</p>
        <>
            { isLoggedIn ? "Welcome back!" : "Please log in" }
        </>
    </div>
    );
}

export default App;
