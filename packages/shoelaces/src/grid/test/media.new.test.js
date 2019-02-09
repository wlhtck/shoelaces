import query from '../media.new';

describe('query', () => {
  const colSize = (num) => `${num * 100}%`;

  const colWidth = (size) => {
    if (!size) return {};
    if (size === 'auto') {
      return {
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: '100%',
      };
    }

    const width = colSize(size);

    return {
      flexBasis: `${width}`,
      maxWidth: `${width}`,
    };
  };

  const props = {
    xs: 1,
    md: 1 / 2,
    lg: 1 / 3,
  };

  it('works', () => {
    expect(query(colWidth)(props)).toMatchSnapshot();
  });
});
