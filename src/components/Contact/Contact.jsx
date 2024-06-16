import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "../Contact/Contact.module.css";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.form}>
      <div className={css.sform}>
        <p className={css.paragraph}>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>

        <p className={css.paragraph}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}
