import PropTypes from 'prop-types';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ContacktsList.styled';

export const ContactsList = ({ onDeleteContact, contacts }) => {
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
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
