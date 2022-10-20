import React from "react";
import styles from "./home.module.css";
import face1 from "../../../../src/face1.png";

const Home = () => {
  return (
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
        I love learn new technologies and develop my logic to find solutions.
      </h6>
      <h6 className={styles.h6}>
        Today I am studying Development of multiplatform applications through
        the IOC (online study).
      </h6>
    </div>
  );
};

export default Home;
