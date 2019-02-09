import React from 'react';
import CodeExample from '../index';

describe('<CodeExample />', () => {
  it('renders a <LiveProvider />', () => {
    expect(shallow(
      <CodeExample scope={{ pi: Math.PI, e: Math.E }} code={'<p>pi</p>'} />,
    )).toMatchSnapshot();
  });
});
