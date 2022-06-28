import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ContacktsList.styled';

export class ContactsList extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ListContacts>
        {contacts.map(({ id, name, number }) => (
          <Contacts
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          ></Contacts>
        ))}
      </ListContacts>
    );
  }
}
