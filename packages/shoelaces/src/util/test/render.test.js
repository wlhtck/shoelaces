import render from '../render';

describe('render', () => {
  const testComp = ({ prop1, prop2 }) => ({ prop1, prop2 });

  testComp.defaultProps = { prop2: 'prop2' };

  it('should merge default props and call comp', () => {
    expect(render(testComp)({ prop1: 'prop1' })).toMatchSnapshot();
  });

  it('should merge default props and call comp', () => {
    expect(render(testComp)({ prop1: 'prop1', prop2: false })).toMatchSnapshot();
  });

  it('should only validate when the propType is a function', () => {
    testComp.propTypes = { prop1: false };
    expect(render(testComp)({ prop1: 'prop1' })).toMatchSnapshot();
  });
});
