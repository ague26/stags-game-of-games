import logo from '../stag.gif';
import '../App.css';
import React, { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-cy="running-stag"/>
        <p>Stag Game of Games</p>
        <Link to="/can-you-find-it">Can You Find it?</Link>
      </header>
    </div>
  );
}

export default App;
