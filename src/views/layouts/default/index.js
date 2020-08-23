import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { Wrapper } from './styles';

// unauthenticated user
export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );

}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};