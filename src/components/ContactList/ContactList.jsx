import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectNameFilter);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <ul className={css.uList}>
      {/* тут було visibleContacts.map */}
      {contacts.map((contact) => (
        <li className={css.list} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
