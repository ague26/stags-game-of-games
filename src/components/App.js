import logo from '../logo.svg';
import '../App.css';
import {Link} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Stag Game of Games
          </p>
          <Link to="/can-you-find-it">Can You Find it?</Link>
        </header>
      </div>
  );
}

export default App;