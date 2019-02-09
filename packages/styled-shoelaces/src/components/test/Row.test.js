import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Row from '../Row';

describe('<Row />', () => {
  it('should render a <Row />', () => {
    expect(shallow(<Row />)).toMatchSnapshot();
  });
});
