import face1 from "./face1.png";
import styles from "./App.module.css";
import NavBar from "./components/navBar/navBar";
import ricon from "./ricon.png";
import pcmarkt from "./pcmarkt.png";
import pcmarktmobile from "./pcmarktmobile.png";
function App() {
  return (
    <div className={styles.all}>
      <header>
        <NavBar />
      </header>
      <body>
        <div className={styles.divPhoto}>
          <img className={styles.photo} alt="My Face" src={face1} />
          <h6 className={styles.h6}>
            Hi, I am Jorge Gamito Martin!
            <p className={styles.saludo}> 👋</p>
          </h6>
          <h6 id="example" className={styles.h6}>
            When I was a child I always wanted to be a programmer , today I am
            Junior Full Stack Developer.
          </h6>
          <h6 className={styles.h6}>
            I love learn new technologies and develop my logic to find
            solutions.
          </h6>
          <br />
          <br />
          <div className={styles.projects}>
            <h6 className={styles.h6}>
              My first big Project! Created using React!
            </h6>
            <img className={styles.react} alt="react Logo" src={ricon} />
          </div>
          <div className={styles.projectsphoto}>
            <img
              className={styles.pcmarkt}
              alt="image web demo"
              src={pcmarkt}
            />
            <img
              className={styles.pcmarktmobile}
              alt="image web demo2"
              src={pcmarktmobile}
            />
          </div>
        </div>
      </body>

      <div></div>
    </div>
  );
}

export default App;
