import {
  string, bool, number, oneOf, unit,
} from '../types';

describe('string', () => {
  it('validates whether "string" is a string', () => {
    expect(string('string')).toMatchSnapshot();
  });

  it('validates whether true is a string', () => {
    expect(string(true)).toMatchSnapshot();
  });

  it('validates whether 12 is a string', () => {
    expect(string(12)).toMatchSnapshot();
  });
});

describe('bool', () => {
  it('validates whether "string" is a bool', () => {
    expect(bool('string')).toMatchSnapshot();
  });

  it('validates whether true is a bool', () => {
    expect(bool(true)).toMatchSnapshot();
  });

  it('validates whether 12 is a bool', () => {
    expect(bool(12)).toMatchSnapshot();
  });
});

describe('number', () => {
  it('validates whether "string" is a number', () => {
    expect(number('string')).toMatchSnapshot();
  });

  it('validates whether true is a number', () => {
    expect(number(true)).toMatchSnapshot();
  });

  it('validates whether 12 is a number', () => {
    expect(number(12)).toMatchSnapshot();
  });
});

describe('oneOf', () => {
  it('validates whether "ham" is either "ham" or "cheese"', () => {
    expect(oneOf(['ham', 'cheese'])('ham')).toMatchSnapshot();
  });

  it('validates whether "mayo" is either "ham" or "cheese"', () => {
    expect(oneOf(['ham', 'cheese'])('mayo')).toMatchSnapshot();
  });
});

describe('unit', () => {
  it('validates whether "100px" is a unit', () => {
    expect(unit('100px')).toMatchSnapshot();
  });

  it('validates whether "auto" is a unit', () => {
    expect(unit('auto')).toMatchSnapshot();
  });

  it('validates whether 0 is a unit', () => {
    expect(unit(0)).toMatchSnapshot();
  });

  it('validates whether "0" is a unit', () => {
    expect(unit('0')).toMatchSnapshot();
  });

  it('validates whether "90" is a unit', () => {
    expect(unit('90')).toMatchSnapshot();
  });

  it('validates whether 90 is a unit', () => {
    expect(unit(90)).toMatchSnapshot();
  });
});
