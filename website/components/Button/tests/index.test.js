import React from 'react';
import Button from '../index';
import css from '../css';

describe('Button', () => {
  it('renders a <StyledLink />', () => {
    expect(shallow(<Button path="some/path" />)).toMatchSnapshot();
  });

  it('renders an <A />', () => {
    expect(
      shallow(<Button external path="http://www.google.com" />),
    ).toMatchSnapshot();
  });

  it('renders css', () => {
    expect(css).toMatchSnapshot();
  });
});
