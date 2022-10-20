import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.full}>
      <div className={styles.card}>
        <h4 className={styles.h4}> Contact me in my social media:</h4>
        <a href="https://www.linkedin.com/in/jgamitomartin/">Linkedin</a>
        <br />
        <a href="https://github.com/JGamito">GitHub</a>
        <br />
        <a href="mailto:gamito90@hotmail.com">Correo electronico</a>
      </div>
    </div>
  );
};

export default Contact;
