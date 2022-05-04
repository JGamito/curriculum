import face1 from "./face1.png";
import styles from "./App.module.css";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <div className={styles.divPhoto}>
          <img className={styles.photo} alt="My Face" src={face1} />
          <h6 className={styles.h6}>Hi, I am Jorge Gamito Martin!</h6>
          <h6 id="example" className={styles.h6}>
            When I was little I always wanted to be a programmer , today I am
            Junior Full Stack Developer.
          </h6>
          <h6 className={styles.h6}>
            I love learn new technologies and develop my logic to find
            solutions.
          </h6>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
