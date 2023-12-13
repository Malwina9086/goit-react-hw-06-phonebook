import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </div>
  );
};

export { App };
