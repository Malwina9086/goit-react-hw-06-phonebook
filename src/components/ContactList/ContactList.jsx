import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './ContactList.module.css';
import { selectFilter, selectContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return filteredContacts.length > 0 ? (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contactDetails}>
            <span className={css.dot}>•</span>
            <span className={css.contactName}>{name}:</span>
          </div>
          <span className={css.contactNumber}>{number}</span>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;
