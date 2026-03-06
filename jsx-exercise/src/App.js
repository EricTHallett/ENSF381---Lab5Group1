import logo from './logo.svg';
import './App.css';
import Controls from './Control.js';
import UserList from './UserList.js';
import Footer from './Footer.js';

function App() {
  let currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  
  return (
    <div>
        <h1>ENSF-381: Full Stack Web Development</h1>
        <p>React Components</p>
        <p>{currentYear}</p>
        <>
            { isLoggedIn ? <section> <Controls /> <UserList /> <Footer /> </section> : "Please log in" }
        </>
    </div>
    );
}

export default App;
