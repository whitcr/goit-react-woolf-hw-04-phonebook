import ContactItem from 'components/ContactItem/ContactItem';
import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
