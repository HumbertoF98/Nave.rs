import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, label, ...rest }, ref) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  label: null,
  style: {},
};

export default forwardRef(Input);