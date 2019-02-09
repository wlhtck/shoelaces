import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  it('should render a <Container />', () => {
    expect(shallow(<Container />)).toMatchSnapshot();
  });
});
