import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>,
    <div className="HeadTitle">
      <center>
      <h1>Matthew Morrison</h1>
      <div className="ButtonLinks">
        <a class="link-button" href="https://github.com/mattymo30">Github</a>
        <a class="link-button" href="https://www.linkedin.com/in/matthewsmorrison30/">LinkedIn</a>
        <a class="link-button" href="mailto:msm8275@rit.edu">Email</a>
      </div>
      </center>
    </div>
  );
}

export default App;
