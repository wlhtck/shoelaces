import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Col from '../Col';

describe('<Col />', () => {
  it('should render a <Col />', () => {
    expect(shallow(<Col />)).toMatchSnapshot();
  });
});
