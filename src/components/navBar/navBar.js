import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <Link className={styles.links} to="/">
            HOME
          </Link>
        </div>
        <div>
          <Link className={styles.links} to="/projects">
            PROJECTS
          </Link>
        </div>
        <div>
          <Link className={styles.links} to="/technologies">
            TECHNOLOGIES
          </Link>
        </div>
        <div>
          <Link className={styles.links} to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
