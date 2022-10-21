import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.full}>
      <div className={styles.card}>
        <h4 className={styles.h4}> Contact me in social media with:</h4>
        <a
          className={styles.a}
          href="https://www.linkedin.com/in/jgamitomartin/"
        >
          Linkedin
        </a>
        <br />
        <a className={styles.a} href="https://github.com/JGamito">
          GitHub
        </a>
        <br />
        <a className={styles.a} href="mailto:gamito90@hotmail.com">
          Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
