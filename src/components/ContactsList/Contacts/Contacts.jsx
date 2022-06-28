import PropTypes from 'prop-types';
import { ItemContact, DeleteBtn } from './Contacts.styled';
export const Contacts = ({ name, number, onDeleteContact, id }) => {
  return (
    <ItemContact>
      {name}: {number}
      <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
        Delete
      </DeleteBtn>
    </ItemContact>
  );
};

Contacts.propType = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
