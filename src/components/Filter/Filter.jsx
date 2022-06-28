import PropTypes from 'prop-types';
import { FilterTitle, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterLabel>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLabel>
    </>
  );
};

Filter.prototypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
