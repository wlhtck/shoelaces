/**
*
* Header
*
*/

import React from 'react';
import { oneOf, node } from 'prop-types';
import styled from 'styled-components';
import css from './css';

const H1 = styled.h1`${css.h1}`;
const H2 = styled.h2`${css.h2}`;
const H3 = styled.h3`${css.h3}`;
const H4 = styled.h4`${css.h4}`;
const H5 = styled.h5`${css.h5}`;

const Header = ({ type, children }) => {
  switch (type) {
    case 'h5':
      return <H5>{children}</H5>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h2':
      return <H2>{children}</H2>;
    default:
      return <H1>{children}</H1>;
  }
};

Header.propTypes = {
  type: oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  children: node,
};

Header.defaultProps = {
  type: 'h1',
};

export default Header;
