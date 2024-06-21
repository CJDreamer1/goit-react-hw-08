import { NavLink } from "react-router-dom";
import styles from "../AuthNav/AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={styles.container}>
      <NavLink
        to="/login"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Register
      </NavLink>
    </div>
  );
}
