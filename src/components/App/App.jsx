import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcher from "../LangSwitcher";
import { selectLang } from "../../redux/localeSlice";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../contacts.json";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const lang = useSelector(selectLang);
  const getContacts = () => {
    const savedContacts = localStorage.getItem("my-contacts");
    return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
  };

  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>State management with Redux</h1>
      <Balance />
      <LangSwitcher />
      <p>Current language:{lang}</p>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
