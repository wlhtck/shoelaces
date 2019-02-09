import React from 'react';
import Header from '../index';
import css from '../css';

describe('Header', () => {
  it('renders a <H5 />', () => {
    expect(shallow(<Header type="h5" />)).toMatchSnapshot();
  });

  it('renders a <H4 />', () => {
    expect(shallow(<Header type="h4" />)).toMatchSnapshot();
  });

  it('renders a <H3 />', () => {
    expect(shallow(<Header type="h3" />)).toMatchSnapshot();
  });

  it('renders a <H2 />', () => {
    expect(shallow(<Header type="h2" />)).toMatchSnapshot();
  });

  it('renders a <H1 />', () => {
    expect(shallow(<Header type="h1" />)).toMatchSnapshot();
  });

  it('renders a <H1 />', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it('renders css', () => {
    expect(css).toMatchSnapshot();
  });
});
