import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <span className={styles.username}>Welcome, {user.name}!</span>
      <button className={styles.button} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}
