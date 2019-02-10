import React from 'react';
import { shallow } from 'enzyme';
import { Col } from '..';

describe('<Col />', () => {
  it('should render a <Col />', () => {
    expect(shallow(<Col />)).toMatchSnapshot();
  });
});
