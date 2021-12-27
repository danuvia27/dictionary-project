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
        <footer className="App-footer">
          <small>Coded by Carolina Vallecillo</small>
        </footer>
      </div>
    </div>
  );
}
