import React, { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setcontacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );

  const [filter, setfilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    setfilter(e.target.value);
  };

  const addContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts. `);
      return;
    }
    setcontacts(prev => [...prev, newContact]);
  };

  const deleteContact = contactId => {
    setcontacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
