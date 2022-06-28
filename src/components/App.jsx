import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './container/container';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextConstats = this.state.contacts;
    if (nextConstats !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(nextConstats));
    }
  }

  addContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const searchContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    searchContact
      ? alert(`${data.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [
            ...contacts,
            {
              id: nanoid(5),
              name,
              number,
            },
          ],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(lowerFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Container>
        <Container>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}
