import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { Container } from '../..';

describe('<Container />', () => {
  it('should render a <Container />', () => {
    expect(shallow(<Container />)).toMatchSnapshot();
  });
});
