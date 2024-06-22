import { NavLink } from "react-router-dom";
import styles from "../AuthNav/AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={styles.container}>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Register
      </NavLink>
    </div>
  );
}
