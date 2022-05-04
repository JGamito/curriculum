import React from "react";
import styles from "./navBar.module.css";
function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <a className={styles.a}>Projects </a>
        </div>
        <div>
          <a className={styles.a}>Technologies </a>
        </div>
        <div>
          <a className={styles.a}> Contact </a>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
