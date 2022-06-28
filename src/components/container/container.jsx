import PropTypes from 'prop-types';
import { Section } from './container.styled';

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};

Container.propTypes = {
  children: PropTypes.node,
};
