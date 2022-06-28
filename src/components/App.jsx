import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './container/container';

const contactsForTest = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactsForTest
  );
  const [filterContacts, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;
    const searchContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    searchContact
      ? alert(`${data.name} is already in contacts`)
      : setContacts([
          ...contacts,
          {
            id: nanoid(5),
            name,
            number,
          },
        ]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiltredContacts = () => {
    const lowerFilter = filterContacts.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowerFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Container>
      <Container>
        <h2>Contacts</h2>
        <Filter value={filterContacts} onChange={changeFilter} />
        <ContactsList
          contacts={getFiltredContacts()}
          onDeleteContact={deleteContact}
        />
      </Container>
    </>
  );
};