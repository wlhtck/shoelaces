import {
  merge, omitBy, isUndefined, flow, isNumber,
} from 'lodash/fp';
import flex from './flex';
import query from './media.new';

const getSize = (num) => `${num * 100}%`;

const getWidth = (size) => {
  if (!size) return {};
  if (size === 'auto') {
    return {
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%',
    };
  }

  const width = getSize(size);

  return {
    flexBasis: `${width}`,
    maxWidth: `${width}`,
  };
};

const getOffset = (num) => (isNumber(num) ? ({ marginLeft: `${getSize(num)}` }) : undefined);

const col = ({
  column = true, gutter = '0.5em', offset, size, xs, sm, md, lg, xl, xx, ...props
} = {}) => ({
  boxSizing: 'border-box',
  flex: '0 0 auto',
  padding: gutter,
  ...flex({ column, ...props }),
  ...merge(
    query(getOffset)(offset),
    query(getWidth)({
      xs, sm, md, lg, xl, xx,
    }),
  ),
});

export default flow(
  col,
  omitBy(isUndefined),
);
