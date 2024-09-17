import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact__wrapper}>
      <div className={css.contact__data}>
        <p>
          <span>
            <FaUser />
          </span>
          {name}
        </p>
        <p>
          <span>
            <FaPhoneAlt />
          </span>
          {number}
        </p>
      </div>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
