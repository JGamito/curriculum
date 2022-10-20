import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <Link className={styles.links} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className={styles.links} to="/projects">
            Projects
          </Link>
        </div>
        <div>
          <Link className={styles.links} to="/technologies">
            Technologies
          </Link>
        </div>
        <div>
          <Link className={styles.links} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
