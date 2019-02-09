import render from '../util/render';
import { unit } from '../util/types';
import flex from './flex';
import { min, deepQuery } from './media';

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

const colOffset = (num) => (typeof num !== 'number' ? {} : { marginLeft: `${colSize(num)}` });

const col = ({
  gutter, offset, size, xs, sm, md, lg, xl, xx, ...props
}) => ({
  boxSizing: 'border-box',
  flex: '0 0 auto',
  padding: gutter,
  ...flex(props),
  ...deepQuery(min, [
    { data: offset, mixin: colOffset },
    {
      data: {
        xs, sm, md, lg, xl, xx,
      },
      mixin: colWidth,
    },
  ]),
});

col.defaultProps = {
  column: true,
  gutter: '0.5em',
  offset: {},
};

col.propTypes = {
  gutter: unit,
};

export default render(col);
