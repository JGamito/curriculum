import NavBar from "./components/navBar/navBar";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./routes/routes";
import * as ReactDOM from "react-dom/client";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.father}>
      <BrowserRouter>
        <NavBar />
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
