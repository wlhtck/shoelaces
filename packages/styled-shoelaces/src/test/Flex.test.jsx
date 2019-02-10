import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { Flex } from '../..';

describe('<Flex />', () => {
  it('should render a <Flex />', () => {
    expect(shallow(<Flex />)).toMatchSnapshot();
  });
});
