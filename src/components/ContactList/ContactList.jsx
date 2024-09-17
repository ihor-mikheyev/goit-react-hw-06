import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  // const contacts = useSelector((state) => state.contacts.items);

  const contacts = useSelector(selectContacts);
  const filteredPhonebook = useSelector(selectNameFilter);

  const visibleContact = contacts.filter((item) =>
    item.name.toLowerCase().includes(filteredPhonebook.toLowerCase())
  );

  return (
    <ul className={css.ul}>
      {visibleContact.map((item) => {
        return (
          <li key={item.id}>
            <Contact contact={item}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
