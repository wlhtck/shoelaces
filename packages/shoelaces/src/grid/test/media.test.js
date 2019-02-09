import media from '../media';

describe('media', () => {
  it('returns the result of the predicate function at the correct breakpoints', () => {
    expect(media((width) => ({ width }), { xs: '100%', md: '50%' })).toMatchSnapshot();
  });

  it('returns the result of the function literally if the input is not an object', () => {
    expect(media((width) => ({ width }), '100%')).toMatchSnapshot();
  });
});
