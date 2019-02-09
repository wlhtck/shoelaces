import { isUndefined, omitBy, flow } from 'lodash/fp';
import flex from './flex';

const row = ({ gutter = '0.5em', wrap = true, ...props } = {}) => ({
  boxSizing: 'border-box',
  flex: '0 1 auto',
  ...flex({ wrap, ...props }),
  marginLeft: `-${gutter}`,
  marginRight: `-${gutter}`,
});

export default flow(
  row,
  omitBy(isUndefined),
);
