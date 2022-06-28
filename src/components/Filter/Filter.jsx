import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterTitle, FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <>
        <FilterLabel>
          <FilterTitle>Find contacts by name</FilterTitle>
          <FilterInput type="text" value={value} onChange={onChange} />
        </FilterLabel>
      </>
    );
  }
}
