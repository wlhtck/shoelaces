import flex from '../flex';

describe('flex', () => {
  it('renders default flex styles', () => {
    expect(flex()).toMatchSnapshot();
  });

  it('renders alignContent, alignItems, and alignSelf end', () => {
    expect(
      flex({
        alignContent: 'end',
        alignItems: 'end',
        alignSelf: 'end',
      }),
    ).toMatchSnapshot();
  });

  it('renders reverse', () => {
    expect(flex({ reverse: true })).toMatchSnapshot();
  });

  it('renders column', () => {
    expect(flex({ column: true })).toMatchSnapshot();
  });

  it('renders column reverse', () => {
    expect(flex({ column: true, reverse: true })).toMatchSnapshot();
  });

  it('renders wrap', () => {
    expect(flex({ wrap: true })).toMatchSnapshot();
  });

  it('renders justifyContent around', () => {
    expect(flex({ justifyContent: 'around' })).toMatchSnapshot();
  });

  it('renders first', () => {
    expect(flex({ first: true })).toMatchSnapshot();
  });

  it('renders first', () => {
    expect(flex({ first: true, last: true })).toMatchSnapshot();
  });

  it('renders last', () => {
    expect(flex({ last: true })).toMatchSnapshot();
  });

  it('renders inline', () => {
    expect(flex({ inline: true })).toMatchSnapshot();
  });
});
