import styles from "./projects.module.css";
import ricon from "./../../../ricon.png";
import pcmarkt from "./../../../pcmarkt.png";
import pcmarktmobile from "./../../../pcmarktmobile.png";
import logo from "./../../../logo.png";

const Projects = () => {
  return (
    <div>
      <div className={styles.projects}>
        <div className={styles.title}>
          <h6 className={styles.h6title}>
            My first big Project! Created using React!
          </h6>
          <img className={styles.react} alt="react Logo" src={ricon} />
        </div>
        <div className={styles.titlepc}>
          <img className={styles.logo} alt="Logo pcmarkt" src={logo} />
          <h1 className={styles.h1}>PC-MARKT</h1>
        </div>
        <div>
          <h6 className={styles.h6}>
            PC-MARKT is the work presented at the end of the bootcamp where I
            showed my knowledge about frontend and backend, creating an
            e-commerce of computers.
          </h6>
        </div>
        <div className={styles.projectsphoto}>
          <img className={styles.pcmarktpc} alt="web demo" src={pcmarkt} />
          <img
            className={styles.pcmarktmobilev}
            alt=" web demo2"
            src={pcmarktmobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
