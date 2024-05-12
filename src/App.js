import { useEffect } from 'react';
import './App.css';

function App() {
  return (
    useEffect(() => {
      document.title = "Matthew Morrison - Home"
    }, []),
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
