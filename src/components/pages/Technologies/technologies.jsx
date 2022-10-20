import React from "react";
import styles from "./technologies.module.css";
import inProgress from "../../../inProgress.gif";

const Technologies = () => {
  return (
    <div className={styles.Tech}>
      <h6 className={styles.h6}>IN PROGRESS</h6>
      <img className={styles.gif} alt="In progress" src={inProgress} />
    </div>
  );
};

export default Technologies;
