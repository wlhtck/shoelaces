/**
*
* Button
*
*/
import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import css from './css';

const A = styled.a`${css}`;

const Button = ({ children, path }) => (
  <A href={path} target="_blank">{children}</A>
);

Button.propTypes = {
  children: node,
  path: string.isRequired,
};

Button.defaultProps = {
  children: null,
};

export default Button;
