import "./App.css";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <div className="header">
          <h1>Dictionary</h1>
          <span className="icon">
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
          </span>
        </div>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="footer">
          This project was coded by Carolina Vallecillo and is {""}
          <a
            className="link"
            href="https://github.com/danuvia27/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            className="link"
            href="https://quizzical-johnson-bb7e3a.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
